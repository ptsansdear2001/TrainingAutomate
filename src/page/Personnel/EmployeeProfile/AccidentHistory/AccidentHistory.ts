import { Page, expect } from '@playwright/test';
import { url } from '../../../../selecter/Login/login.selecter';
import { SelAcc } from '../../../../selecter/Personnel/AccidentHistoryModify/AccidentHistory.selecter';

export class AccidentHistoryPage {
  constructor(private page: Page) {}
  // เปิดหน้าเว็บ
  async openWebPage() {
    await this.page.goto(url.UrlTiger);
    await expect(this.page).toHaveURL(url.UrlTiger);
  }
  // เปิดโมดูลบุคคล
  async openPersonnelModule() {
    await this.page.locator(SelAcc.EmployeeInformation).hover();
    await this.page.locator(SelAcc.EmployeeInformation1).click();
    await this.page.waitForLoadState('networkidle');
  }
  // เปิดส่วนประวัติการเกิดอุบัติเหตุ
  async openAccidentHistorySection() {
    console.log('=== เปิดส่วนประวัติการเกิดอุบัติเหตุ ===');
    await this.page.locator(SelAcc.EmpDropdown).click();
    await this.page.locator(SelAcc.AccidentHistoryMenuSpan).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  // เพิ่มประวัติการเกิดอุบัติเหตุ
  async addAccidentHistory(data: any) {
    console.log('=== เพิ่มประวัติการเกิดอุบัติเหตุ ===');

    // ---------- กดปุ่มเพิ่ม ----------
    await this.page.locator(SelAcc.plusbutton).click();
    await this.page.waitForSelector(SelAcc.EmployeeNumber);
    // ---------- กรอกข้อมูล ----------
    await this.page.fill(SelAcc.EmployeeNumber, data.employeeNumber);
    await this.page.locator(SelAcc.EmployeeNumber).press('Enter');
    // ---------- เลือกประเภทอุบัติเหตุ ----------
    await this.page.locator(SelAcc.AccidentTypeDropdownList).click();
    await this.page.getByText(data.accidentType, { exact: true }).click();
    // ----------กรอกวันที่------------
    await this.page.fill(SelAcc.AccidentDate, data.accidentDate);
    await this.page.locator(SelAcc.AccidentDate).press('Enter');
    // ----------กรอกเวลา------------
    await this.page.fill(SelAcc.AccidentTime, data.accidentTime);
    await this.page.locator(SelAcc.AccidentTime).press('Enter');
    //---------- กรอกสถานที่  ความเสียหายทรัพย์สิน  ความเสียหายบุคคล ----------
    await this.page.fill(SelAcc.AccidentPlace, data.accidentPlace);
    await this.page.fill(SelAcc.AccidentAssetDamage, data.accidentAssetDamage);
    await this.page.fill(SelAcc.AccidentPersonDamage, data.accidentPersonDamage);
    // ----------กรอกวันที่บันทึก------------
    await this.page.fill(SelAcc.AccidentRecordDate, data.accidentRecordDate);
    await this.page.locator(SelAcc.AccidentRecordDate).press('Tab');
    // ---------- เพิ่มส่วนที่ได้รับบาดเจ็บ ----------
   console.log('กำลังกดปุ่มเพิ่มส่วนที่ได้รับบาดเจ็บ (+)');
    await this.page.locator (SelAcc.AddInjuredPartButton).click();
    await this.page.locator (SelAcc.AccidentPartGrid).first().click();
    await this.page.locator (SelAcc.InjuredPartTextbox).fill('ขาหัก');
    //เพิ่มรายละเอียดของส่วนที่ได้รับบาดเจ็บ
    await this.page.locator(SelAcc.child2).click();
    await this.page.locator(SelAcc.InjuredPartDetailTextbox).fill('กระดูกขาหักเนื่องจากอุบัติเหตุครั้งนี้');
    await this.page.locator(SelAcc.InjuredPartDetailTextbox).press('Enter');
    // ---------- กรอกจำนวนวันลาทั้งหมด   ----------
    await this.page.locator(SelAcc.TotalLeaveDays).click();
    await this.page.locator(SelAcc.TotalLeaveDays).fill('7');
    // ---------- กรอกมูลค่าความเสียหาย ----------
    await this.page.locator(SelAcc.AccidentDamageValue).click();
    await this.page.locator(SelAcc.AccidentDamageValue).fill('15000');
    // --------- กรอกรายละเอียดอุบัติเหตุ ----------
    await this.page.locator(SelAcc.AccidentDetail).click();
    await this.page.fill(SelAcc.AccidentDetail, data.accidentDetail);
    // ---------- กรอกหมายเหตุ ----------
    await this.page.locator(SelAcc.AccidentRemark).click();
    await this.page.fill(SelAcc.AccidentRemark, data.accidentRemark);

    // ---------- กดปุ่มบันทึก ----------
    console.log('กำลังกดปุ่มบันทึก...');
    const saveBtn = this.page.locator(SelAcc.SaveButton);
    await saveBtn.scrollIntoViewIfNeeded(); // เลื่อนขึ้นไปหาปุ่ม
    await saveBtn.click();
    
    console.log('=== บันทึกข้อมูลเรียบร้อย ===');
    await this.page.waitForTimeout(3000); // รอผลลัพธ์

  

  }
}
