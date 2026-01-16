// BasePage.ts
import { Page, Locator, expect, selectors } from '@playwright/test';

export class BasePage {
    readonly page: Page; // class แม่ 

    constructor(page: Page) {
        this.page = page;
    }

    // --- Global Actions ---

    /** คลิกแบบปลอดภัย รอให้เจอและกดได้ก่อนเสมอ */
    async smartClick(selector: string | Locator) {
        const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
        await element.waitFor({ state: 'visible', timeout: 10000 });
        await element.click();
    }

    /** กรอกข้อมูลแบบปลอดภัย (Clear ก่อนเสมอ) */
    async smartFill(selector: string, value: string) {
        const element = this.page.locator(selector);
        await element.waitFor({ state: 'visible' });
        await element.clear(); // ล้างค่าเก่า
        await element.fill(value); // ใช้ fill ปกติ (เร็วกว่า pressSequentially ถ้าไม่จำเป็นต้องจำลองการกดทีละปุ่ม)
    }

    /** กรอกวันที่แล้วกด Tab (สำหรับ Datepicker ที่ต้อง Trigger validation) */
    async smartDateFill(selector: string, value: string) {
        const element = this.page.locator(selector);
        await element.click();
        await this.page.waitForTimeout(1000);
        await element.clear();
        await element.pressSequentially(value, { delay: 100 });
        await element.press('Tab');
    }

    /** เลือก Dropdown (คลิกเปิด -> คลิกเลือก) */
    async smartSelectDropdown(triggerSelector: string, optionSelector: string) {
        await this.smartClick(triggerSelector);
        await this.smartClick(optionSelector);
    }

    /** อัปโหลดไฟล์ */
    async smartUpload(selector: string, filePath: string) {
        const element = this.page.locator(selector);
        await element.setInputFiles(filePath);
    }

    /** รอ Animation หรือ Toast หายไป (ลดการใช้ waitForTimeout แบบ Hardcode) */
    async waitForToast(message: string) {
        const toast = this.page.locator('#customToast'); // แก้ selector ตามจริง
        await expect(toast).toContainText(message);
        await expect(toast).toBeVisible();
    }

    async verifyAlertPopup(message: string, selector: string) {
        const alert = this.page.getByText(message);
        const btn = this.page.locator(selector)

        await expect(alert).toBeVisible();
        await btn.click();
        await expect(alert).toBeHidden();
    }
}