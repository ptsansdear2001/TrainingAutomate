import { Page } from '@playwright/test';
import { SpecialOTRequestSelector as S } from '../../../../selecter/TimeSystemInformation/OTRequestRecordModify/SpecialOTRequest/SpecialOTRequest.selecter';
import * as data from '../../../../testData/time system information/OTRequestrecord/Special OT Request/Ot Time Testdata';

export class Special_OT_Request {
  constructor(private page: Page) {}

  private getDay(startDate: string) {
    return startDate.split('/')[0];
  }

  private async clickAndPick(dropdownXpath: string, optionXpath: string) {
    const dd = this.page.locator(dropdownXpath);
    await dd.scrollIntoViewIfNeeded();
    await dd.click();
    await this.page.locator(optionXpath).click();
  }

  async openPage() {
    await this.page.locator(S.menuTimeSystem).hover();
    await this.page.locator(S.menuOTRequestRecord).click();

    await this.page.waitForTimeout(1000);
    await this.page.locator(S.dropdownOTType).click();
    await this.page.locator(S.optionSpecialOT).click();

    await this.page.locator(S.scopeAllRadio).click();
  }

  async selectScope(scope: any) {
    if (!scope || !scope.type) return;

    if (scope.type === 'ทั้งหมด') {
      await this.page.locator(S.scopeAllRadio).click();
      return;
    }

    if (scope.type === 'รหัสพนักงาน') {
      await this.page.locator(S.scopeEmpCodeRadio).click();

      await this.clickAndPick(
        S.empFromDropdown,
        S.empFromOption(scope.from),
      );

      await this.clickAndPick(
        S.empToDropdown,
        S.empToOption(scope.to),
      );
      return;
    }

    if (scope.type === 'เลือกกลุ่มข้อมูล') {
      await this.page.locator(S.scopeGroupRadio).click();

      await this.clickAndPick(
        S.dropdownGroup,
        S.groupOption(scope.groupName),
      );
      return;
    }

    if (scope.type === 'เลือกข้อมูล') {

      await this.clickAndPick(
        S.dataFromDropdown,
        S.dataFromOption(scope.from),
      );
      return;
    }
  }

  async addademy() { 
    await this.page.waitForTimeout(1000);
    await this.page.locator(S.adademy).click();
  
  }

  async pickDate(startDate: string) {
    await this.page.locator(S.openCalendarBtn).click(); 
    await this.page.locator(S.openCalendarBtn).fill(data.SpecialOTTestCases[0].form.startDate);
  }

  async fillForm(tc: any) {
    const form = tc.form;

    await this.pickDate(form.startot);

    if (form.ot1) await this.page.locator(S.ot1).fill(form.ot1);
    if (form.ot15) await this.page.locator(S.ot15).fill(form.ot15);
    if (form.ot2) await this.page.locator(S.ot2).fill(form.ot2);
    if (form.ot25) await this.page.locator(S.ot25).fill(form.ot25);
    if (form.ot3) await this.page.locator(S.ot3).fill(form.ot3);
    if (form.ot6) await this.page.locator(S.ot6).fill(form.ot6);

    if (form.otAmount) await this.page.locator(S.otAmount).fill(form.otAmount);
    if (form.otFood) await this.page.locator(S.otFood).fill(form.otFood);
    if (form.specialMoney) await this.page.locator(S.specialMoney).fill(form.specialMoney);
    if (form.remark) await this.page.locator(S.remark).fill(form.remark);
  }

async selectEmployee(employee: string) {
  // หา tr ที่มีข้อความ employee อยู่ในแถวเดียวกัน (รหัส + ชื่อ)
  const row = this.page.locator(
    '//*[@id="ctl00_MainContent_gexPerson_ctl00"]/tbody/tr',
    { hasText: employee },
  );

  await row.first().scrollIntoViewIfNeeded();
  await row.first().click();

  await this.page.locator(S.arrowRight).click();
}

  async save() {
    await this.page.locator(S.save).click();
  }

  async runCase(tc: any) {
    await this.openPage();
    await this.selectScope(tc.scope);
    await this.fillForm(tc);
    await this.selectEmployee(tc.employee);
    await this.save();
  }
}
