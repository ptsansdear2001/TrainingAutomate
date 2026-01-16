import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../page/Login/Login';
import { RecordExpensesPage } from '../../../page/ReimbursementOfExpenses/DisbursementOfExpenses/RecordExpenses';
import { expenseData } from '../../../testData/ReimbursementOfExpenses/DisbursementOfExpenses/RecordExpenses';

test.describe.serial('Reimbursement of Expenses - Disbursement of Expenses', () => {

    let loginPage: LoginPage;
    let recordExpensesPage: RecordExpensesPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        recordExpensesPage = new RecordExpensesPage(page);

        // Refactor 1: ย้าย Logic ที่ทำซ้ำทุกข้อมาไว้ตรงนี้
        await loginPage.login();
        await recordExpensesPage.openReimbursementOfExpensesModule();
    });

    test('PN-HRM-000001 : Review, fill in expense claim information, and cancel.', async () => {
        // Refactor 2: ใช้ Method กลาง method เดียว (Logic: Open -> Fill -> Save/Cancel)
        await recordExpensesPage.recordExpenseWorkflow({
            ...expenseData,
            option_Medicine: "",
            option_Travel: expenseData.option_Travel,
            attachment_jpg: "",
            attachment_pdf: "",
            description : "",
        }, true, { isSuccess: true });
    });

    test.skip('PN-HRM-000002 : Fill full data with JPG', async () => {
        await recordExpensesPage.recordExpenseWorkflow({
            ...expenseData,
            attachment_jpg: "images.jpg" // Override แค่ค่าที่ต้องการเจาะจง
            // หมายเหตุ: เช็คชื่อ key 'attachmen_jpg' ใน Interface ดีๆ ว่ามี 't' ไหม (attachment)
        }, true, { isSuccess: true });
    });

    test.skip('PN-HRM-000003 : Please check and fill... change the PDF file.', async () => {
        await recordExpensesPage.recordExpenseWorkflow({
            ...expenseData,
            attachment_pdf: "Mobile Flutter.pdf"
        }, true, { isSuccess: true });
    });

    test('PN-HRM-000004 : Record the amount as a decimal.', async () => {
        await recordExpensesPage.recordExpenseWorkflow({
            amount: expenseData.Decimal,
        }, true, { isSuccess: true });
    });

    test('PN-HRM-000005 : Record the full quota details.', async () => {
        await recordExpensesPage.recordExpenseWorkflow({
            description: expenseData.descriptionFullQuota,
        }, true, { isSuccess: true });
    });

    test('PN-HRM-000006 : Item 2 (within the same day).', async () => {
        // รอบที่ 1: บันทึก
        await recordExpensesPage.recordExpenseWorkflow({}, true, { isSuccess: true });
        
        // รอบที่ 2: บันทึกซ้ำ (Method เรามี clickAddExpenseButton ในตัวอยู่แล้ว เรียกซ้ำได้เลย)
        await recordExpensesPage.recordExpenseWorkflow({}, true, { isSuccess: true });
    });

    test('PN-HRM-000007 : Check past withdrawals.', async () => {
        await recordExpensesPage.recordExpenseWorkflow({
            recordedDate: expenseData.oldrecordedDate,
        }, true, { isSuccess: true });
    });

    test('PN-HRM-000008 : Check the results when a pre-selected date is selected.', async () => {
        await recordExpensesPage.recordExpenseWorkflow({
            usageDate: expenseData.futureusageDate,
        }, true, { isSuccess: true });
    });

    test('PN-HRM-000009 : Verify the recording by specifying the minimum amount.', async () => {
        await recordExpensesPage.recordExpenseWorkflow({
            amount: expenseData.minimum_amount,
        }, true, { isSuccess: true });
    });

    test('PN-HRM-0000010 : Verification of the recording cancellation test.', async () => {
        // isSave = false คือการกด Cancel
        await recordExpensesPage.recordExpenseWorkflow({
            ...expenseData,
        }, false , { isSuccess : true });
    });

    test('PN-HRM-0000011 : Expenses of different categories will not overlap.', async () => {
        await recordExpensesPage.recordExpenseWorkflow({
            option_Medicine: expenseData.option_Medicine,
            option_Travel: "",
        }, false, { isSuccess: true });
    });

    test('PN-HRM-0000012 : Expense type verification and testing.', async () => {
        // ข้อนี้ทดสอบแค่ Dropdown ไม่ได้ Submit จึงเรียก Method ย่อยตรงๆ ดีกว่า
        await recordExpensesPage.clickAddExpenseButton();
        await recordExpensesPage.selectExpenseType({ option_Travel: expenseData.option_Travel });
    });

    test('PN-HRM-0000013 : Verify and test data corrections before saving.', async () => {
        // ส่งแค่ amount ที่เหลือใช้ค่า default หรือค่าว่างตาม logic
        await recordExpensesPage.recordExpenseWorkflow({
            employeeId: "",
            usageDate: "",
            recordedDate: "",
            option_Travel: "",
            option_Medicine: "",
            payerId: "",
            description: "",
            attachment_jpg: "",
            attachment_pdf: "",
            amount: expenseData.amount
        }, true, { isSuccess: false });
    });

    test('PN-HRM-0000014 : Testing the entry of amounts without decimal places.', async () => {
        await recordExpensesPage.recordExpenseWorkflow({
            amount: '1500'
        }, true, { isSuccess: true });
    });

    test('PN-HRM-0000015 : Test to find the payer.', async () => {
        await recordExpensesPage.clickAddExpenseButton();
        await recordExpensesPage.clickSearchEmployeeOrPayer();
    })

    test('PN-HRM-0000017 : Test employee search.', async () => {
        await recordExpensesPage.clickAddExpenseButton();
        await recordExpensesPage.clickSearchEmployeeOrPayer(false);
    })

    test('PN-HRM-0000018 : Testing the "Date Recorded" setting for different years.', async () => {
        await recordExpensesPage.clickAddExpenseButton();
        await recordExpensesPage.recordExpenseWorkflow({
            attachment_jpg : "",
            attachment_pdf: "",
            option_Medicine : "",
            recordedDate : expenseData.lastyearrecordedDate
        }, true, { isSuccess: true })
    })

    test('PN-HRM-0000019 : Test the "Record Date" setting for different years and different expense categories.', async () => {
        await recordExpensesPage.clickAddExpenseButton();
        await recordExpensesPage.recordExpenseWorkflow({
            attachment_jpg : "",
            attachment_pdf: "",
            option_Travel : "",
            recordedDate : expenseData.lastyearrecordedDate,
        }, true, { isSuccess: true })
    })

    test('PN-HRM-0000026 : Check if the amount is entered as an emoji.', async () => {
        await recordExpensesPage.clickAddExpenseButton();
        await recordExpensesPage.recordExpenseWorkflow({
            attachment_jpg : "",
            attachment_pdf: "",
            option_Travel : "",
            amount : expenseData.amount_emoji
        }, true, { isSuccess: false })
    })
    
    test('PN-HRM-0000027 : Check for negative amounts entered.', async () => {
        await recordExpensesPage.clickAddExpenseButton();
        await recordExpensesPage.recordExpenseWorkflow({
            attachment_jpg : "",
            attachment_pdf: "",
            option_Travel : "",
            amount : expenseData.negative_mounts
        }, true, { isSuccess: false })
    })

    test('PN-HRM-0000028 : Test the "Record Date" setting for different years and different expense categories.', async () => {
        await recordExpensesPage.clickAddExpenseButton();
        await recordExpensesPage.recordExpenseWorkflow({
            employeeId: "999999999",
            usageDate: "",
            recordedDate: "",
            option_Travel: "",
            option_Medicine: "",
            payerId: "",
            description: "",
            attachment_jpg: "",
            attachment_pdf: "",
            amount: ""
        }, false, { isSuccess: false });
        await recordExpensesPage.NotFoundPopup("ไม่พบพนักงาน!!!")
    })

    test('PN-HRM-0000031 : Investigate a massive overflow of funds.', async () => {
        await recordExpensesPage.clickAddExpenseButton();
        await recordExpensesPage.recordExpenseWorkflow({
            option_Travel: "",
            description: "",
            attachment_jpg: "",
            attachment_pdf: "",
            amount: "9999999999999999999"
        }, true, { isSuccess: true });
    })

    test('PN-HRM-0000032 : Check the recording dates going back 80 years.', async () => {
        await recordExpensesPage.clickAddExpenseButton();
        await recordExpensesPage.recordExpenseWorkflow({
            option_Travel: "",
            description: "",
            attachment_jpg: "",
            attachment_pdf: "",
            recordedDate : "13/01/2489"
        }, true, { isSuccess: true });
    })

    test('PN-HRM-0000033 : Check if an expense category is selected.', async () => {
        await recordExpensesPage.clickAddExpenseButton();
        await recordExpensesPage.recordExpenseWorkflow({
            option_Travel: "",
            option_Medicine: "",
            description: "",
            attachment_jpg: "",
            attachment_pdf: "",
        }, true, { isSuccess: true });
    })

    test('PN-HRM-0000034 : Please check that the amount entered is 0.', async () => {
        await recordExpensesPage.clickAddExpenseButton();
        await recordExpensesPage.recordExpenseWorkflow({
            option_Travel: "",
            amount : "0",
            description: "",
            attachment_jpg: "",
            attachment_pdf: "",
        }, true, { isSuccess: false , message: "พบความผิดพลาด" });
    })

    test.fixme('PN-HRM-0000035 : Check if an expense category is selected.', async () => {
        await recordExpensesPage.clickAddExpenseButton();
        await recordExpensesPage.recordExpenseWorkflow({
            payerId : "",
            description: "",
            attachment_jpg: "",
            attachment_pdf: "",
        }, true, { isSuccess: false , message: "พบความผิดพลาด" });
    })

    test('PN-HRM-0000036 : Check for entries exceeding the quota amount.', async () => {
        await recordExpensesPage.clickAddExpenseButton();
        await recordExpensesPage.recordExpenseWorkflow({
            amount: "200.555",
            description: "",
            attachment_jpg: "",
            attachment_pdf: "",
        }, true, { isSuccess: true });
    })

    test('PN-HRM-0000037 : Check for empty fields in the "Number of times" box.', async () => {
        await recordExpensesPage.clickAddExpenseButton();
        await recordExpensesPage.recordExpenseWorkflow({
            description: "",
            attachment_jpg: "",
            attachment_pdf: "",
            occurrence : " ",
        }, true, { isSuccess: false });
        await recordExpensesPage.NotFoundPopup("Failed to convert parameter value from a String to a Int32")
    })
}); 