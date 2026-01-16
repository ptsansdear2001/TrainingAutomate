import { Page } from '@playwright/test';
import { BasePage } from '../../Modules/BasePage.ts'; // Import ไฟล์กลางมา
import { selectors_RecordExpenses as selectors } from '../../../selecter/ReimbursementOfExpenses/DisbursementOfExpenses/RecordExpenses.ts';
import { expenseData as DefaultData, IExpenseType as SafeData } from '../../../testData/ReimbursementOfExpenses/DisbursementOfExpenses/RecordExpenses.ts';
import path from 'path';

// สืบทอด BasePage
export class RecordExpensesPage extends BasePage {

    constructor(page: Page) {
        super(page); // ส่ง page ให้แม่จัดการ
    }

    // --- 1. Basic Navigation ---
    async openReimbursementOfExpensesModule() {
        await this.page.locator(selectors.icon_Reimbursement).hover();
        await this.smartClick(selectors.btn_Add);
    }

    async clickAddExpenseButton() {
        await this.smartClick(selectors.btn_AddExpense);
        // ไม่ต้อง waitForTimeout ถ้าเรามั่นใจว่า smartClick รอ element ถัดไปให้แล้ว
        // หรือถ้าต้องรอ Animation จริงๆ ใช้ await this.page.waitForLoadState('networkidle'); จะดีกว่า
    }

    async clickSearchEmployeeOrPayer(choice: boolean = true) {
        if (choice) {
            await this.smartClick(selectors.search_Employee);
        } else {
            await this.smartClick(selectors.search_Payer)
        }
    }

    async clickTapExpense(tab: boolean = true) {
        if (tab) {
            await this.smartClick(selectors.tab_Record_Expenses);
        } else {
            await this.smartClick(selectors.tab_Expenses_History);
        }
    }

    async selectExpenseType(data: Partial<SafeData>) {
        // ถ้าไม่มีข้อมูลส่วนนี้ส่งมา ก็ return ออกไปเลย ไม่ทำอะไร
        if (!data.option_Travel && !data.option_Medicine) return;

        let optionSelector = '';

        // Logic เลือก Selector
        if (data.option_Travel) {
            optionSelector = selectors.option_Travel;
        } else if (data.option_Medicine) {
            optionSelector = selectors.option_Medicine;
        } 

        // สั่งคลิก (เรียก BasePage)
        if (optionSelector) {
            await this.smartSelectDropdown(selectors.ddl_SelectSpan, optionSelector);
        }
    }

    async NotFoundPopup(msg : string) {
        await this.verifyAlertPopup(msg, selectors.btn_ok)
    }

    // --- 2. Form Filling ---


    async fillExpenseForm(data: Partial<SafeData>) {
        // 1. Employee ID
        if (data.employeeId) {
            // ใช้ smartFill แทน Code ยาวๆ 4-5 บรรทัดเดิม
            await this.smartFill(selectors.txt_EmployeeCode, data.employeeId);
        }

        // 2. Usage Date (Logic เฉพาะเจาะจง ใช้ method แยกใน BasePage ได้)
        if (data.usageDate) {
            await this.smartDateFill(selectors.date_DateUse, data.usageDate);
        }

        // 3. Option (Expense Type)
        let targetSelector = '';

        // ถ้ามีการส่ง Medicine มา ให้เลือก Medicine ก่อน
        if (data.option_Medicine) {
            targetSelector = selectors.option_Medicine;
        }
        // ถ้าไม่มี Medicine แต่มี Travel ให้เลือก Travel
        else if (data.option_Travel) {
            targetSelector = selectors.option_Travel;
        }

        if (targetSelector) {
            await this.smartSelectDropdown(selectors.ddl_SelectSpan, targetSelector);
        } 

        // 4. Amount
        if (data.amount) {
            await this.smartFill(selectors.txt_Value, data.amount);
        }

        // 5. Num
        if (data.occurrence) {
            await this.smartFill(selectors.txt_Num, data.occurrence);
        }

        // 6. Recorded Date
        if (data.recordedDate) {
            await this.smartDateFill(selectors.date_SaveDate, data.recordedDate);
        }

        // 7. Payer ID (Custom Logic - เก็บคงเดิมไว้เพราะมี Enter)
        if (data.payerId) {
            const payerField = this.page.locator(selectors.txt_Payer);
            await payerField.clear();
            await payerField.pressSequentially(data.payerId, { delay: 100 });
            await payerField.press('Enter');
        }

        // 8. Attachments (รวม Logic pdf/jpg ไว้ที่เดียว)
        const fileName = data.attachment_jpg || data.attachment_pdf;

        if (fileName) {
            // อ้างอิงโฟลเดอร์ uploads จากตำแหน่งไฟล์ปัจจุบัน
            const filePath = path.join(__dirname, 'uploads', fileName);

            console.log(`กำลังอัปโหลดไฟล์จาก: ${filePath}`); // ใส่ไว้ดูเพื่อ Debug Path

            // เรียกใช้ smartUpload ตัวใหม่ที่แก้ด้านบน
            await this.smartUpload(selectors.Attach_file, filePath);
        }

        // 9. Description
        if (data.description) {
            await this.smartFill(selectors.description, data.description);
        }
    }

    // --- 3. Actions ---

    async clickFormButton(isSave: boolean, expectSuccess: boolean = true) {
        const selector = isSave ? selectors.btn_Save : selectors.btn_Cancel;

        // ใช้ smartClick จัดการเรื่อง wait visible/enabled ให้
        await this.smartClick(selector);

        // if (isSave && expectSuccess) {
        //     // รอ Toast แทนการ waitForTimeout 1000 เฉยๆ
        //    // await this.waitForToast('บันทึกสำเร็จ'); // ถ้ามี Toast ให้รอตรงนี้
        // }
    }

    // --- 4. Main Workflow (รวมเหลือ Method เดียว) ---

    /** * รวม recordNewExpense และ recordFullNewExpens เป็นฟังก์ชันเดียว 
     * เพราะ Logic เหมือนกัน 100% ต่างกันแค่ Data ที่ส่งเข้ามา
     */
    async recordExpenseWorkflow(
        overrideData: Partial<SafeData> = {},
        isSave: boolean = true,
        expectedResult: { isSuccess: boolean; message?: string } = { isSuccess: true } // Default คือสำเร็จ
    ) {
        // 1. Merge Data
        const finalData = { ...DefaultData, ...overrideData };

        // 2. Action
        await this.clickAddExpenseButton();
        await this.fillExpenseForm(finalData);

        // ส่ง flag isSuccess ไปด้วย เพื่อบอกให้ clickFormButton รู้ว่าต้องรอปุ่มหายไหม
        // (ถ้า Error ปุ่ม Save มักจะยังค้างอยู่ ไม่หายไปไหน)
        await this.clickFormButton(isSave, expectedResult.isSuccess);
        
        // 3. Verify Message (Check Toast / Alert)
        if (isSave && expectedResult.message) {
            // ไม่ว่าจะสำเร็จหรือพัง ถ้าส่ง message มา เราจะรอตรวจ message นั้น
            await this.waitForToast(expectedResult.message);
        } else if (isSave && expectedResult.isSuccess) {
            // ถ้าไม่ส่ง message มา แต่บอกว่า isSuccess = true ให้ใช้ค่า Default
            await this.waitForToast('บันทึกสำเร็จ');
        }
    }
}