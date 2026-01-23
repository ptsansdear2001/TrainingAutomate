import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page/Login/Login";
import { TransferEmpInternallySpecialPage } from "../../page/Personnel/TransferModify/TransferEmpInternallySpecial";
import { TestData } from "../../testData/Personnel/TransferEmpInternallySpecial.data";
import { TransferEmpIntenallySpecial } from "../../selecter/Personnel/TransferModify/TransferEmpInternallySpecial.selecter";

test.describe("เปิดหน้าโอนประวัติพนักงานภายในแบบพิเศษ", () => {
  let loginPage!: LoginPage;
  let transferPage!: TransferEmpInternallySpecialPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);  
    transferPage = new TransferEmpInternallySpecialPage(page);
    test.setTimeout(60000);
  });

  const openTransferForm = async () => {
    await loginPage.login();
    await transferPage.openTransferEmpIntSpecialModule();
    await transferPage.clickAddButton();
  };

  test("TC-EMP-001: โอนย้ายปรับเปลี่ยนพนักงาน", async ({
    page,
  }) => {
    await openTransferForm()
    await transferPage.fillPersonCode(TestData.PersonCode);
    await transferPage.fillAllRequiredFields(TestData);
    await transferPage.SaveTransaction();
    await transferPage.expectSaveSuccess();

  });
  
  test("TC-EMP-002: เลือกพนักงาน แล้วแสดงข้อมูลพนักงานถูกต้อง", async ({
    page,
  }) => {
    await openTransferForm()
    await transferPage.fillPersonCode(TestData.PersonCode);
    await transferPage.ExpectPersonDetail('พิชยะ หุตะจูฑะ','ส่วนงานโครงสร้างพื้นฐานคอมพิวเตอร์อควอนตัม','ผู้จัดการกลยุทธ์ควอนตัม','Direct','รายเดือน');

  });
  
  test("TC-EMP-003: โอนย้ายเฉพาะฝ่าย สำเร็จ", async ({
    page,
  }) => {
    await openTransferForm()
    await transferPage.fillPersonCode(TestData.PersonCode);
    await transferPage.fillSectionCmb1(TestData.Combo1);
    await transferPage.SaveTransaction();
    await transferPage.expectSaveSuccess();

  });

  test("TC-EMP-004: โอนย้ายเฉพาะส่วน สำเร็จ", async ({
    page,
  }) => {
    await openTransferForm()
    await transferPage.fillPersonCode(TestData.PersonCode);
    await transferPage.fillDepartmentCmb2(TestData.Combo2);
    await transferPage.SaveTransaction();
    await transferPage.expectSaveSuccess();

  });

  test("TC-EMP-005: โอนย้ายเฉพาะแผนก สำเร็จ", async ({
    page,
  }) => {
    await openTransferForm()
    await transferPage.fillPersonCode(TestData.PersonCode);
    await transferPage.fillDivisionCmb3(TestData.Combo3);
    await transferPage.SaveTransaction();
    await transferPage.expectSaveSuccess();

  });

  test("TC-EMP-006: โอนย้ายเฉพาะระดับพนักงาน สำเร็จ", async ({
    page,
  }) => {
    await openTransferForm()
    await transferPage.fillPersonCode(TestData.PersonCode);
    await transferPage.fillLevelCmb4(TestData.Combo4);
    await transferPage.SaveTransaction();
    await transferPage.expectSaveSuccess();

  });

  test("TC-EMP-007: โอนย้ายเฉพาะสถานที่ทำงาน สำเร็จ", async ({
    page,
  }) => {
    await openTransferForm()
    await transferPage.fillPersonCode(TestData.PersonCode);
    await transferPage.fillWorkLocationCmb5(TestData.Combo5);
    await transferPage.SaveTransaction();
    await transferPage.expectSaveSuccess();

  });

  test("TC-EMP-008: โอนย้ายเฉพาะขอบเขตการทำงาน สำเร็จ", async ({
    page,
  }) => {
    await openTransferForm()
    await transferPage.fillPersonCode(TestData.PersonCode);
    await transferPage.fillScopeOfWorkCmb6(TestData.Combo6);
    await transferPage.SaveTransaction();
    await transferPage.expectSaveSuccess();

  });

  test("TC-EMP-009: โอนย้ายเฉพาะตำแหน่ง สำเร็จ", async ({
    page,
  }) => {
    await openTransferForm()
    await transferPage.fillPersonCode(TestData.PersonCode);
    await transferPage.fillPosition(TestData.Position);
    await transferPage.SaveTransaction();
    await transferPage.expectSaveSuccess();

  });

  test("TC-EMP-010: โอนย้ายเฉพาะระดับพนักงาน สำเร็จ", async ({
    page,
  }) => {
    await openTransferForm()
    await transferPage.fillPersonCode(TestData.PersonCode);
    await transferPage.fillLevel(TestData.Level);
    await transferPage.SaveTransaction();
    await transferPage.expectSaveSuccess();

  });

  test("TC-EMP-011: โอนย้ายเฉพาะประเภทสัญญาจ้าง สำเร็จ", async ({
    page,
  }) => {
    await openTransferForm()
    await transferPage.fillPersonCode(TestData.PersonCode);
    await transferPage.fillContractType(TestData.ContractType);
    await transferPage.SaveTransaction();
    await transferPage.expectSaveSuccess();

  });
  
  test("TC-EMP-012: ปรับเปลี่ยนเป็นข้อมูลเดิม ระบบไม่อนุญาติให้ปรับเปลี่ยน", async ({
    page,
  }) => {
    await openTransferForm()
    await transferPage.fillPersonCode(TestData.PersonCode);
    await transferPage.ExpectPersonDetail('พิชยะ หุตะจูฑะ','ส่วนงานโครงสร้างพื้นฐานคอมพิวเตอร์อควอนตัม','ผู้จัดการกลยุทธ์ควอนตัม','Direct','รายเดือน');
    await transferPage.fillNotes('Test ปรับเปลี่ยนเป็นข้อมูลเดิม ระบบไม่อนุญาติให้ปรับเปลี่ยน');
    await transferPage.fillDivisionCmb3(TestData.Combo3);
    await transferPage.fillPosition(TestData.Position);
    await transferPage.fillLevel(TestData.Level);
    await transferPage.fillContractType(TestData.ContractType);
    await transferPage.SaveTransaction();
    await page.waitForTimeout(1000);
    await expect(page.getByText("บันทึกสำเร็จ")).not.toBeVisible({ timeout: 10000 });
    
  });
  test("TC-EMP-013: ทุก Input Field และ Dropdown สามารถเลือกและ Clear ค่าได้", async ({
    page,
  }) => {
    await openTransferForm()
    await transferPage.fillPersonCode(TestData.PersonCode);
    await transferPage.fillAllRequiredFields(TestData);
    await transferPage.clearAllField()
    await transferPage.ExpectAllFieldClear()
  });
  
  test("TC-EMP-014: เปิด popup ปฏิทิน วันที่ปรับ ได้ปกติ", async ({
    page,
  }) => {
    await openTransferForm()
    await page.click(TransferEmpIntenallySpecial.AdjustDatePicker);
    await expect(page.locator(TransferEmpIntenallySpecial.AdjustDatePicker)).toBeVisible();
    await page.locator('#ui-datepicker-div a.ui-state-default', { hasText: '30' }).click();
  });

  test("TC-EMP-015: เปิด popup ปฏิทิน วันที่มีผลได้ปกติ", async ({
    page,
  }) => {
    await openTransferForm()
    await page.click(TransferEmpIntenallySpecial.EffectiveDatePicker);
    await expect(page.locator(TransferEmpIntenallySpecial.EffectiveDatePicker)).toBeVisible();
    await page.locator('#ui-datepicker-div a.ui-state-default', { hasText: '30' }).click();

  });

  test("TC-EMP-016: บันทึกข้อมูลโดยไม่มีหมายเหตุ ระบบบันทึกได้", async ({
    page,
  }) => {
    await openTransferForm()
    await transferPage.fillPersonCode(TestData.PersonCode);
    // await transferPage.fillNotes(TestData.Notes);
    await transferPage.fillSectionCmb1(TestData.Combo1);
    await transferPage.fillDepartmentCmb2(TestData.Combo2);
    await transferPage.fillDivisionCmb3(TestData.Combo3);
    await transferPage.fillLevelCmb4(TestData.Combo4);
    await transferPage.fillWorkLocationCmb5(TestData.Combo5);
    await transferPage.fillScopeOfWorkCmb6(TestData.Combo6);
    await transferPage.fillPosition(TestData.Position);
    await transferPage.fillLevel(TestData.Level);
    await transferPage.fillContractType(TestData.ContractType);
    await transferPage.fillCurrentSalary(TestData.CurrentSalary);
    await transferPage.fillEmpType(TestData.EmpType);
    await transferPage.fillTypeProcess(TestData.TypeProcess);
    await transferPage.fillTransferSalary(TestData.TransferSalary);
    await transferPage.SaveTransaction();
    await transferPage.expectSaveSuccess();

  });

  test("TC-EMP-017: ไม่สามารถเขียนหมายเหตุยาวตามที่กำหนดได้", async ({
    page,
  }) => {
    await openTransferForm()
    await transferPage.fillPersonCode(TestData.PersonCode);
    await transferPage.fillSectionCmb1(TestData.Combo1);
    await transferPage.fillNotes(TestData.LongNotes);
    await transferPage.SaveTransaction();
    await page.waitForTimeout(1000);
    const modal = page.locator(TransferEmpIntenallySpecial.ErrorPopup).filter({ hasText: `String or binary data would be truncated.The statement has been terminated.`});

  });

  test("TC-EMP-018: หลังบันทึก ระบบ refresh หน้าจอและแสดงข้อมูลล่าสุด", async ({
    page,
  }) => {
    await openTransferForm()
    await transferPage.fillPersonCode(TestData.PersonCode);
    await transferPage.fillAllRequiredFields(TestData);
    await transferPage.SaveTransaction();
    await transferPage.expectSaveSuccess();
    await transferPage.ExpectAllFieldClear()

  });
  test(`TC-EMP-019: สามารถโอนย้ายพนักงานพร้อม กรอกหมายเหตุที่มีหลายบรรทัด โดยที่ความยาวไม่เกินกำหนด`, async ({
    page,
  }) => {
    await openTransferForm()
    await transferPage.fillPersonCode(TestData.PersonCode);
    await transferPage.fillNotes(TestData.MultipleLineNotes);
    await transferPage.fillSectionCmb1(TestData.Combo1);
    await transferPage.SaveTransaction();
    await transferPage.expectSaveSuccess();
    
  });
  test(`TC-EMP-020: เปิด popup ค้นหาพนักงานได้`, async ({
    page,
  }) => {
    await openTransferForm()
    await page.waitForTimeout(1000);
    await page.locator(TransferEmpIntenallySpecial.PersonCodeSearch).click()
    await page.waitForTimeout(2000);
    const searchEmpPopup = page.locator(TransferEmpIntenallySpecial.SearchEmpPopup).filter({ hasText: `ค้นหาพนักงาน`});;
    await expect(searchEmpPopup).toBeVisible();

  });

  test(`TC-EMP-021: ค้นหาด้วย รหัสพนักงานแบบตัวเลขทั้งหมด`, async ({
    page,
  }) => {
    await openTransferForm()
    await page.waitForTimeout(500);
    await page.locator(TransferEmpIntenallySpecial.PersonCodeSearch).click()
    await page.waitForTimeout(1000);
    const modal = page.frameLocator('iframe[name="Report1"]');
    await modal.locator(TransferEmpIntenallySpecial.SearchPersonCodeInput).fill(TestData.PersonCode);
    await modal.locator(TransferEmpIntenallySpecial.SearchPersonCodeButton).click();
    await expect(modal.locator('tr').filter({ hasText: TestData.PersonCode })).toContainText(TestData.FirstName);

  });

  test("TC-EMP-030: ไม่กรอกข้อมูลทั้งหมดในหน้าโอนย้ายปรับเปลี่ยนพนักงาน", async ({
    page,
  }) => {
    await openTransferForm()
    await page.waitForTimeout(1000)
    await page.locator(TransferEmpIntenallySpecial.SaveButton).click();
    await page.waitForTimeout(3000)
    await expect(page.getByText("พบความผิดพลาด")).toBeVisible({ timeout: 10000 });

  });

});
