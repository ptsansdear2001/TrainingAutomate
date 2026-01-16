import { test, expect } from "@playwright/test";
import { ResignationNote } from "../../page/Personnel/ResignationNote/ResignationNote";
import { LoginPage as Login } from "../../page/Login/Login";
import { resignData } from "../../testData/Personnel/ResignationNote.ts/ResignationNote";

test.describe.serial("Module ResignationNote", () => {
  let ResignPage!: ResignationNote;
  let loginPage!: Login;

  test.beforeEach(async ({ page }) => {
    ResignPage = new ResignationNote(page);
    loginPage = new Login(page);
  });

  test("TC-001: ทดลอง เพิ่มพนักงานลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.addResign();
  });

  test("TC-002: ทดลอง ยกเลิกการเพิ่มพนักงานลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.cancelResign();
  });

  test("TC-003: ทดลอง แก้ไขพนักงานลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.editResign();
  });

  test("TC-004: ทดลอง ลบพนักงานลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.deleteResign();
    await ResignPage.addResign();
  });

  test("TC-005: ตรวจสอบ ปุ่ม Cancel ใน Modal การลบพนักงานลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.cancleDeleteResign();
  });

  test("TC-006: ทดลอง เพิ่มพนักงานลาออก ด้วยรหัสที่มีการลาออกอยู่แล้ว", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.addSameEmployeeCode();
    await ResignPage.addSameEmployeeCode();
  });

  test("TC-007: ทดลอง เพิ่มพนักงานลาออก ด้วยรหัสพนักงานที่ผิด", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.addWrongEmployeeCode();
  });

  test("TC-008: ทดลอง เพิ่มพนักงานลาออก แบบไม่เลือกประเภทและสาเหตุการลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.addResignWithoutResignCauseAndType();
  });

  test("TC-009: ทดลอง กรอกช่องประเภทและสาเหตุการลาออกที่ไม่มีใน Master", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.enterInvalidResignCauseAndType();
  });

  test("TC-010: ทดลอง ไม่กดบันทึกการเพิ่มพนักงานลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.addResignNoSave();
  });

  test("TC-011: ตรวจสอบ ปุ่มแสดงเฉพาะลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.ShowOnlyResign();
  });

  test("TC-012: ทดลอง เพิ่ม พนักงานลาออก ในแสดงเฉพาะลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.addResignInResignOnly();
  });

  test("TC-013: ทดลอง แก้ไข พนักงานลาออก ในแสดงเฉพาะลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.editResignInResignOnly();
  });

  test("TC-014: ทดลอง ลบ พนักงานลาออก ในแสดงเฉพาะลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.deleteResignInResignOnly();
  });

  test("เพิ่มพนักงานลาออกใหม่", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.addResign();
  });

  test("TC-015: ทดลอง ค้นหา พนักงานลาออก ในแสดงเฉพาะลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.searchResignInResignOnly();
  });

  test("TC-016: ตรวจสอบปุ่ม ค้นหาพนักงานลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.searchResignEmp();
  });

  test("TC-017: ตรวจสอบ Dropdown ค้นหาพนักงาน ในค้นหาพนักงานลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.searchResignEmpDropdown();
  });

  test("TC-018: ตรวจสอบปุ่ม ค้นหา ใน ค้นหาพนักงานลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.searchResignEmpButton();
  });

  test("TC-019: เลือก พนักงานที่ลาออก ในค้นหาพนักงานลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.selectResignEmp();
  });

  test("TC-020: ตรวจสอบปุ่ม ค้นหาพนักงาน ในเพิ่มพนักงานลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.searchEmp();
  });

  test("TC-021: ตรวจสอบ  Dropdown ค้นหาพนักงาน ในเพิ่มพนักงานลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.searchEmpDropdown();
  });

  test("TC-022: ตรวจสอบปุ่ม ค้นหา ใน ค้นหาพนักงาน ในเพิ่มพนักงานลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.searchEmpButton();
  });

  test("TC-023: ทดลอง เลือก รหัสพนักงาน ในค้นหาพนักงาน ใน เพิ่มพนักงานลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.selectEmployeeCode();
  });

  test("TC-024: ทดลอง ปิด Modal ใน เพิ่มพนักงานลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.closeSearchModal();
  });

  test("TC-025: ทดลอง เพิ่มประเภทการลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.addResignType();
  });

  test("TC-026: ทดลอง ยกเลิกการเพิ่มประเภทการลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.cancelResignType();
  });

  test("TC-027: ทดลอง แก้ไขประเภทการลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.editResignType();
  });

  test("TC-029: ทดลอง ยกเลิกการลบประเภทการลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.cancelDeleteResignType();
  });

  test("TC-028: ทดลอง ลบประเภทการลาออก", async () => {
    await loginPage.login();
    await ResignPage.openResignModule();
    await ResignPage.deleteResignType();
  });
});
