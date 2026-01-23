import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page/Login/Login.ts';
import { TransferEmpInternallyPage } from '../../page/Personnel/TransferEmp/TransferEmpInternally.ts';
import { testData } from '../../testData/Personnel/TransferEmpInternally/TransferEmpInternally.ts';

test.describe.serial('TransferEmpInternallyPage', () => {
  let transferPage!: TransferEmpInternallyPage;
  let loginPage!: LoginPage;

  test.beforeEach(async ({ page }) => {
    transferPage = new TransferEmpInternallyPage(page);
    loginPage = new LoginPage(page);
    test.setTimeout(70000);
  });

  test('TC-EDEMP-001: ทดสอบเปิดหน้าการโอนย้ายและปรับเปลี่ยน', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
  });

  test('TC-EDEMP-002: ทดสอบเพิ่มการโอนย้ายพนักงาน', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.addTransferEmpInternally(testData);
  });

  test('TC-EDEMP-003: ทดสอบแก้ไขการโอนย้ายพนักงาน', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.editTransferEmpInternally(testData);
  });

  test('TC-EDEMP-004: ทดสอบลบการโอนย้ายพนักงาน', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.deleteTransferEmpInternally(testData);
  });

  test('TC-EDEMP-005: ทดสอบค้นหาพนักงานตามเลขรหัสพนักงาน', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.serarchemployeeid(testData);
  });

  test('TC-EDEMP-006: ทดสอบค้นหาพนักงานตามชื่อไทย', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.serarchemployeethainame(testData);
  });

  test('TC-EDEMP-007: ทดสอบค้นหาพนักงานตามนามสกุลไทย', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.serarchemployeethailastname(testData);
  });

  test('TC-EDEMP-008: ทดสอบค้นหาพนักงานตามชื่ออังกฤษ', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.serarchemployeengname(testData);
  });

  test('TC-EDEMP-009: ทดสอบค้นหาพนักงานตามนามสกุลอังกฤษ', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.serarchemployeenglastname(testData);
  });

  test('TC-EDEMP-010: ทดสอบค้นหาพนักงานตามรหัสบัตรประชาชน', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.serarchemployeecode(testData);
  });

  test('TC-EDEMP-011: ทดสอบค้นหาด้วยชื่อภาษาอังกฤษแบบ ตัวพิมพ์เล็ก/ใหญ่ผสมกัน', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.testletter(testData);
  });

  test('TC-EDEMP-012: ทดสอบค้นหาพนักงานไม่พบ', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.testletter(testData);
  });

  test('TC-EDEMP-013: ทดสอบกดปุ่มสีแดง "ค้นหา" ด้วยเมาส์', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.clcikserch(testData);
  });

  test('TC-EDEMP-014: การนำข้อมูลไปใช้ (Click) ที่เลขรหัสพนักงาน', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.clicknumber(testData);
  });

  test('TC-EDEMP-015: ตรวจสอบสถานะ Checkbox "ไม่มีผลกับการปรับโอนย้าย" ', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.togglecheckbox(testData);
  });

  test('TC-EDEMP-016: เลือก "หัวข้อการปรับ" ', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.targetoption(testData);
  });

  test('TC-EDEMP-017: เลือก "วันที่ปรับ" (ล่วงหน้า) *เลือกวันที่ในอนาคต', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.selectFutureDate(testData);
  });

  test('TC-EDEMP-018: เลือก "วันที่มีผล"', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.selectEffectiveDate(testData);
  });

  test('TC-EDEMP-019: เปลี่ยนค่า "ปรับเป็น"', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.changeTargetPosition(testData);
  });

  test('TC-EDEMP-020: กรอกหมายเหตุ (ไทย)', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.fillRemarkThai(testData);
  });

  test('TC-EDEMP-021: กรอกหมายเหตุ (อังกฤษ/ตัวเลข)', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.fillRemarkEngNum(testData);
  });

  test('TC-EDEMP-022: คลิกแว่นขยาย จะแสดงหน้าค้นหาพนักงาน', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.openEmployeeSearchModal();
  });

  test('TC-EDEMP-023: ค้นหาใน dropdown', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.searchInDropdown(testData);
  });


  test('TC-EDEMP-025: การเลือกวันที่ด้วยคีย์บอร์ด โดยการพิมพ์ ที่วันที่มีผล', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.typeEffectiveDate(testData);
  });

  test('TC-EDEMP-026: คลิกเลือกพนักงาน ในประวัติพนักงาน และ กดแก้ไข', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.selectAndEditFromHistory();
  });

  // test('TC-EDEMP-027: คลิกเลือกพนักงาน ในประวัติพนักงาน และ กดลบ', async () => {
  //   await loginPage.login();
  //   await transferPage.openPersonnelModule();
  //   await transferPage.selectAndDeleteFromHistory();
  // });

  test('TC-EDEMP-028: (Negative) ตรวจสอบการปรับข้อมูลพนักงาน แบบไม่ใส่ข้อมูล เลือกแค่ พนักงาน', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.checkAdjustmentNoData(testData);
  });

  test('TC-EDEMP-029: (Negative) บันทึกข้อมูลโดยไม่ระบุ "หัวข้อการปรับ"', async () => {
    await loginPage.login();
    await transferPage.openPersonnelModule();
    await transferPage.saveNoAdjustmentTopic(testData);
  });

});
