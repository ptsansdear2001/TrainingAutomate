import { Page, expect } from '@playwright/test';
import { selectors_RecordExpenses as selectors } from '../../../selecter/ReimbursementOfExpenses/DisbursementOfExpenses/RecordExpenses.ts';
import { expenseData as Data } from '../../../testData/ReimbursementOfExpenses/DisbursementOfExpenses/RecordExpenses.ts';

export class RecordExpensesPage {
    constructor(private page: Page) { }

    async openReimbursementOfExpensesModule() {
        await this.page.locator(selectors.Icon_Reimbursement_of_expenses).hover();
        await this.page.locator(selectors.ExpenseLink).click();
    }

    async recordNewExpense() {
        // กำหนดค่าการหน่วงเวลามาตรฐาน (เช่น 500ms) เพื่อความเสถียร
        const standardDelay = 500;

        const Delay = 2000;

        // 1. นำทาง
        await this.page.locator(selectors.addExpenseButton).click();
        await this.page.waitForTimeout(standardDelay);

        // 2. กรอกรหัสพนักงานและวันที่
        // ใช้ pressSequentially พร้อม delay จะทำให้เหมือนคนพิมพ์จริงๆ (หัวใจสำคัญของการหน่วงเวลาขณะกรอก)
        await this.page.locator(selectors.textbox_employeeId).pressSequentially(Data.employeeId, { delay: 100 });
        await this.page.waitForTimeout(standardDelay);

        const dateField = this.page.locator(selectors.date_expenseDate);
        await dateField.fill(Data.usageDate);
        await dateField.press('Tab');
        await this.page.waitForTimeout(standardDelay);

        // จัดการ Dropdown
        const dropdown = this.page.locator(selectors.dropdownType);
        await dropdown.click();
        await dropdown.pressSequentially(Data.expenseType, { delay: 100 });
        await this.page.waitForTimeout(standardDelay);
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(standardDelay);

        // กรอกข้อมูลที่เหลือ

        // กรอกจำนวนเงิน
        await this.page.locator(selectors.number_input).fill(Data.amount.toString());
        await this.page.waitForTimeout(standardDelay);

        // กรอกวันที่บันทึก
        await this.page.locator(selectors.date_recordedDate).fill(Data.recordedDate);
        await this.page.waitForTimeout(standardDelay);

        // กรอกชื่อผู้จ่าย
        await this.page.locator(selectors.payer_id).fill(Data.payerId);
        await this.page.waitForTimeout(standardDelay);

        // 5. บันทึกและรอ Toast
        await this.page.locator(selectors.saveButton).click();

        // รอให้ Toast ปรากฏและตรวจสอบ
        // await this.page.waitForTimeout(Delay);
        // const toast = this.page.locator('#customToast');

        // // ✅ วิธีที่ 1: ตรวจสอบข้อความโดยตรง (เสถียรที่สุดและ Auto-retry จนกว่าข้อความจะขึ้น)
        // await expect(toast).toContainText('บันทึกสำเร็จ', { timeout: 10000 });

        // // ✅ วิธีที่ 2: หากต้องการใช้ Aria Snapshot ต้องรอให้ภาพ/ข้อความปรากฏก่อน
        // await expect(toast.getByText('บันทึกสำเร็จ')).toBeVisible(); // รอจนกว่าตัวหนังสือจะเรนเดอร์
        // await expect(toast).toMatchAriaSnapshot(`
        //     - img "Success"
        //     - text: บันทึกสำเร็จ
        // `);
    }

    // async openReimbursementOfExpensesModule() {

    //     await this.page.locator(selectors.Icon_Reimbursement_of_expenses).hover();
    //     await this.page.locator(selectors.ExpenseLink).click();
    //     await this.page.locator(selectors.addExpenseButton).click();
    //     await this.page.locator(selectors.textbox_employeeId).fill(Data.employeeId);
    //     await this.page.locator(selectors.date_expenseDate).fill(Data.usageDate);
    //     await this.page.locator(selectors.dropdownType).click();
    //     await this.page.waitForTimeout(2000);
    //     await this.page.locator(selectors.dropdownType).fill(Data.expenseType);
    //     await this.page.waitForTimeout(2000);
    //     await this.page.locator(selectors.number_input).fill(Data.amount.toString());
    //     await this.page.locator(selectors.date_recordedDate).fill(Data.recordedDate);
    //     await this.page.locator(selectors.payer_id).fill(Data.payerId);
    //     await this.page.locator(selectors.saveButton).click();
    //     await this.page.waitForTimeout(2000);
    //     await expect(this.page.locator('#customToast')).toMatchAriaSnapshot(`
    //         - img "Success"
    //         - text: บันทึกสำเร็จ
    //     `);

    // }
}