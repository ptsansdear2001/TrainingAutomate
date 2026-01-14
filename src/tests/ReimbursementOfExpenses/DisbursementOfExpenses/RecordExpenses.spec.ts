import { test, expect } from '@playwright/test';
import { LoginPage as Login } from '../../../page/Login/Login.ts';
import { RecordExpensesPage as RecordExpenses } from '../../../page/ReimbursementOfExpenses/DisbursementOfExpenses/RecordExpenses.ts';

test.describe.serial('Reimbursement of Expenses - Disbursement of Expenses', () => {
    
    // 1. ประกาศตัวแปร loginPage ไว้ในระดับ describe
    let loginPage: Login;
    let RecordExpensesPage: RecordExpenses;

    test.beforeEach(async ({ page }) => { // 2. run ก่อนแต่ละ test case
        // 2.1. สร้าง instance ของ LoginPage ในทุกๆ test case
        loginPage = new Login(page);
        RecordExpensesPage = new RecordExpenses(page);
    });

    test('PN-HRM-000001 : Review, fill in expense claim information, and cancel file attachment.', async () => {
        // 3. เรียกใช้งาน login method
        await loginPage.login();
        await RecordExpensesPage.openReimbursementOfExpensesModule();
        await RecordExpensesPage.recordNewExpense();
    }); 
});