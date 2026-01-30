import { Page, expect, Locator } from '@playwright/test';
import { selectors_TimeAttendance as S } from '../../../../selecter/TimeAttendance/RegulaOT/IndividualSpecialOvertimeRequest/TimeAttendance.selecter';
import type { OTKey } from '../../../../testData/TimeAttendance/RegulaOT/IndividualSpecialOvertimeRequest/IndividualSpecialOvertimeRequest.testdata';

export class TimeAttendancePage {
  constructor(private page: Page) {}

  async openTimeAttendanceModule() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.page.waitForTimeout(300);

    // ===== 1) เปิด sidebar ก่อน =====
    const toggler = S.sidebarToggler(this.page);
    await expect(toggler).toBeVisible({ timeout: 15_000 });
    await toggler.click({ force: true });
    await this.page.waitForTimeout(300);

    // ===== 2) เข้าเมนู Time Attendance =====
    const time = S.timeAttendanceMenu(this.page);
    await expect(time).toBeVisible({ timeout: 15_000 });
    await time.scrollIntoViewIfNeeded();
    await time.click({ force: true });

    const regular = S.regularOTMenu(this.page);
    await expect(regular).toBeVisible({ timeout: 15_000 });
    await regular.scrollIntoViewIfNeeded();
    await regular.click({ force: true });

    // กันหน้าโหลด/รีเฟรชหลังคลิกเมนู
    await this.page.waitForLoadState('domcontentloaded').catch(() => {});
    await this.page.waitForTimeout(200);

    const dd = S.otRequestDropdown(this.page);
    await expect(dd).toBeVisible({ timeout: 15_000 });
    await dd.scrollIntoViewIfNeeded();
    await dd.click({ force: true });

    const opt = S.otRequestOptionIndividualSpecial(this.page);
    await expect(opt).toBeVisible({ timeout: 15_000 });
    await opt.scrollIntoViewIfNeeded();
    await opt.click({ force: true });

    await this.page.waitForLoadState('domcontentloaded').catch(() => {});
    await this.page.waitForTimeout(200);
  }

  /**
   * ✅ แก้จากโค้ดเดิม: รองรับทั้ง popup/new page, modal หน้าเดิม, และ iframe
   * และใช้ selector ใหม่: employeeCodeLinkByCode / employeeCodeLinkFixed
   */
  async selectEmployeeByCode(code: number | string) {
    const codeStr = String(code);

    const icon = S.employeeSearchIcon(this.page);
    await expect(icon).toBeVisible({ timeout: 15_000 });

    // รอ popup ถ้ามี (บางระบบเปิด popup/new page)
    const popupPromise = this.page.context().waitForEvent('page', { timeout: 3_000 }).catch(() => null);

    await icon.click({ force: true });

    const maybePopup = await popupPromise;
    const targetPage = maybePopup ?? this.page;

    if (maybePopup) {
      await maybePopup.waitForLoadState('domcontentloaded').catch(() => {});
      await maybePopup.bringToFront().catch(() => {});
    } else {
      // กรณีเป็น modal ในหน้าเดิม
      await this.page.waitForTimeout(200);
    }

    // 1) พยายามคลิกด้วย dynamic selector (แนะนำ)
    let link = S.employeeCodeLinkByCode(targetPage, codeStr);

    // ถ้า dynamic ไม่เจอ ให้ fallback เป็น fixed xpath
    const dynamicVisible = await link.isVisible().catch(() => false);
    if (!dynamicVisible) {
      link = S.employeeCodeLinkFixed(targetPage);
    }

    // 2) ถ้าใน popup เป็น iframe ให้ลองหาใน frame ด้วย
    if (!(await link.isVisible().catch(() => false))) {
      const frames = targetPage.frames();
      for (const f of frames) {
        const inFrame = f
          .locator(`xpath=//a[normalize-space(text())="${codeStr}"]`)
          .first();
        if (await inFrame.isVisible().catch(() => false)) {
          link = inFrame;
          break;
        }
      }
    }

    await expect(link).toBeVisible({ timeout: 15_000 });
    await link.scrollIntoViewIfNeeded().catch(() => {});

    // 3) คลิกแบบทนสุด ๆ (click -> dblclick -> dispatchEvent)
    try {
      await link.click({ force: true, timeout: 5_000 });
    } catch {
      try {
        await link.dblclick({ force: true, timeout: 5_000 });
      } catch {
        await link.dispatchEvent('click');
      }
    }

    // 4) ปิด popup ถ้ามี แล้วกลับมาหน้าหลัก
    if (maybePopup) {
      await maybePopup.waitForTimeout(300).catch(() => {});
      await maybePopup.close().catch(() => {});
      await this.page.bringToFront().catch(() => {});
    }

    await this.page.waitForTimeout(200);
  }

  // -----------------------------
  // Dates
  // -----------------------------
  async selectStartDate(ddmmyyyy: string) {
    await this.fillDate(S.startDateInput(this.page), ddmmyyyy);
  }

  async selectEndDate(ddmmyyyy: string) {
    await this.fillDate(S.endDateInput(this.page), ddmmyyyy);
  }

  // -----------------------------
  // OT (manual)
  // -----------------------------
  async fillOT1(v: string) { await this.fillText(S.ot1Input(this.page), this.normalizeOT(v)); }
  async fillOT15(v: string) { await this.fillText(S.ot15Input(this.page), this.normalizeOT(v)); }
  async fillOT2(v: string) { await this.fillText(S.ot2Input(this.page), this.normalizeOT(v)); }
  async fillOT25(v: string) { await this.fillText(S.ot25Input(this.page), this.normalizeOT(v)); }
  async fillOT3(v: string) { await this.fillText(S.ot3Input(this.page), this.normalizeOT(v)); }
  async fillOT6(v: string) { await this.fillText(S.ot6Input(this.page), this.normalizeOT(v)); }

  /**
   * ✅ กรอก OT ทุกช่องจาก testdata (otHours)
   * ตัวอย่าง: { ot15: "01.30", ot25: "08.00" }
   */
  async fillOTHours(otHours?: Partial<Record<OTKey, string>>) {
    if (!otHours) return;

    const map: Record<OTKey, (v: string) => Promise<void>> = {
      ot1: (v) => this.fillOT1(v),
      ot15: (v) => this.fillOT15(v),
      ot2: (v) => this.fillOT2(v),
      ot25: (v) => this.fillOT25(v),
      ot3: (v) => this.fillOT3(v),
      ot6: (v) => this.fillOT6(v),
    };

    const order: OTKey[] = ['ot1', 'ot15', 'ot2', 'ot25', 'ot3', 'ot6'];

    for (const key of order) {
      const value = otHours[key];
      if (value !== undefined && value !== '') {
        await map[key](value);
      }
    }
  }

  // -----------------------------
  // Amounts + Remark
  // -----------------------------
  async fillShiftOT(v: string) { await this.fillText(S.shiftOTInput(this.page), v); }
  async fillFoodOT(v: string) { await this.fillText(S.foodOTInput(this.page), v); }
  async fillSpecialMoney(v: string) { await this.fillText(S.specialMoneyInput(this.page), v); }
  async fillRemark(v: string) { await this.fillText(S.remarkInput(this.page), v); }

  async save() {
    const btn = S.saveButton(this.page);
    await expect(btn).toBeVisible({ timeout: 15_000 });
    await btn.scrollIntoViewIfNeeded();
    await btn.click({ force: true });

    await this.page.waitForLoadState('domcontentloaded', { timeout: 10_000 }).catch(() => {});
    await this.page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  }

  // -----------------------------
  // Helpers
  // -----------------------------
  private async fillText(locator: Locator, value: string) {
    await expect(locator).toBeVisible({ timeout: 15_000 });
    await locator.scrollIntoViewIfNeeded();

    await locator.click({ force: true }).catch(() => {});
    await locator.press('Control+A').catch(() => {});
    await locator.press('Backspace').catch(() => {});

    // masked input บางตัว fill ไม่เข้า ใช้ type fallback
    try {
      await locator.fill(value);
    } catch {
      await locator.type(value, { delay: 20 });
    }
  }

  private async fillDate(locator: Locator, ddmmyyyy: string) {
    await expect(locator).toBeVisible({ timeout: 15_000 });
    await locator.scrollIntoViewIfNeeded();

    await locator.click({ force: true }).catch(() => {});
    await locator.press('Control+A').catch(() => {});
    await locator.press('Backspace').catch(() => {});

    try {
      await locator.type(ddmmyyyy, { delay: 10 });
    } catch {
      await locator.fill(ddmmyyyy);
    }

    await locator.press('Enter').catch(() => {});
  }

  /**
   * ✅ รองรับทั้ง "03.00" และ "03:00"
   * - "HH:MM" -> "HH.MM"
   * - string อื่น ๆ ส่งคืนตามเดิม
   */
  private normalizeOT(v: string) {
    const s = String(v).trim();
    const hhmm = /^(\d{1,2}):(\d{2})$/;
    const m = s.match(hhmm);
    if (m) return `${m[1].padStart(2, '0')}.${m[2]}`;
    return s;
  }
}
