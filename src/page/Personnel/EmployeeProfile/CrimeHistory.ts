import { Page, expect } from '@playwright/test';
import { url } from '../../../selecter/Login/login.selecter';
import { Crime } from '/TrainingAutomate/src/selecter/Personnel/EmployeeProfile/CrimeHistory.selecter.ts';
import { PersonalData, singlePersonalData} from '/TrainingAutomate/src/testData/Personnel/CrimeHis.Data.ts';


export class CrimeHistoryPage {
  constructor(private page: Page) { }

  // เปิดโมดูลบุคคล
  async openPersonnelModule() {
    await this.page.locator(Crime.EmployeeInformation).hover();
    await this.page.locator(Crime.EmployeeInformation1).click();
    await this.page.waitForTimeout(2000);
    await this.page.locator(Crime.EmpDropdown).click();
    await this.page.locator(Crime.CrimeHistoryMenuSpan).click();
  }
  // เปิดส่วนประวัติการเกิดอาชญากรรม
  async openCrimeHistorySection() {
    console.log('=== เปิดส่วนประวัติการเกิดอาชญากรรม ===');
    await this.page.locator(Crime.selecttype1).click();
    await this.page.locator(Crime.CrimeHistoryMenuSpan).click();
    await this.page.waitForLoadState('domcontentloaded');
  }


  // เพิ่มประวัติอาชญากรรม
  async addCrimeHistory(data: PersonalData = singlePersonalData) {
    console.log('=== เพิ่มประวัติอาชญากรรม ===');
    // ---------- กดปุ่มเพิ่ม ----------
    await this.page.locator(Crime.plusbutton).click();
    // ---------- กรอกรหัสพนักงาน ----------
    await this.page.fill(Crime.EmployeeNumber, data.PersonCode);
    await this.page.locator(Crime.EmployeeNumber).press('Enter');
    // ---------- เลือกประเภทความผิด ----------
    console.log('กำลังไปที่ Dropdown ประเภทความผิด...');
    await this.page.waitForTimeout(2000);
    await this.page.locator(Crime.selectcrimetype).click();
    // รอให้ตัวเลือกแสดงขึ้นมาแล้วค่อยคลิกเลือก type1
    // await this.page.locator(Crime.selecttype1).waitFor({ state: 'visible' });
    await this.page.locator(Crime.selecttype1).click();
    // ----------กรอกวันที่------------
    await this.page.fill(Crime.filldate, data.SaveDate);
    await this.page.locator(Crime.filldate).press('Enter');
    // ---------- กดปุ่มบันทึก ----------
    console.log('กำลังกดปุ่มบันทึก...');
    await this.page.locator(Crime.savebutton).click();
    console.log('=== บันทึกข้อมูลเรียบร้อย ===');
    await this.page.waitForTimeout(2000); // รอผลลัพธ์
  }


  // // case 2 ไม่ใส่ประวัติอาชญากรรม
  // async addCrimeHistoryTwo(data: PersonalData = singlePersonalData) {
  //   console.log('=== เพิ่มประวัติอาชญากรรม ===');
  //   // ---------- กดปุ่มเพิ่ม ----------
  //   await this.page.locator(Crime.plusbutton).click();
  //   // ---------- กรอกรหัสพนักงาน ----------
  //   await this.page.fill(Crime.EmployeeNumber, data.PersonCode);
  //   await this.page.locator(Crime.EmployeeNumber).press('Enter');
  //   await this.page.waitForTimeout(2000);
  //   // ----------กรอกวันที่------------
  //   await this.page.fill(Crime.filldate, data.SaveDate);
  //   await this.page.locator(Crime.filldate).press('Enter');
  //   // ---------- กดปุ่มบันทึก ----------
  //   console.log('กำลังกดปุ่มบันทึก...');
  //   await this.page.locator(Crime.savebutton).click();
  //   console.log('=== บันทึกข้อมูลเรียบร้อย ===');
  //   await this.page.waitForTimeout(3000); // รอผลลัพธ์
  // }


  // // case 3 ไม่ใส่รหัสพนักงาน
  // async addCrimeHistoryThree(data: PersonalData = singlePersonalData) {
  //   console.log('=== เพิ่มประวัติอาชญากรรม ===');
  //   // ---------- กดปุ่มเพิ่ม ----------
  //   await this.page.locator(Crime.plusbutton).click();
  //   await this.page.waitForTimeout(2000);
  //   // ----------กรอกวันที่------------
  //   await this.page.fill(Crime.filldate, data.SaveDate);
  //   await this.page.locator(Crime.filldate).press('Enter');
  //   console.log('กำลังเลื่อนไปที่ Dropdown ประเภทความผิด...');
  //   await this.page.locator(Crime.selectcrimetype).click();
  //   // รอให้ตัวเลือกแสดงขึ้นมาแล้วค่อยคลิกเลือก type1
  //   await this.page.locator(Crime.selecttype1).waitFor({ state: 'visible' });
  //   await this.page.locator(Crime.selecttype1).click();
  //   // ---------- กดปุ่มบันทึก ----------
  //   console.log('กำลังกดปุ่มบันทึก...');
  //   await this.page.locator(Crime.savebutton).click();
  //   console.log('=== บันทึกข้อมูลเรียบร้อย ===');
  //   await this.page.waitForTimeout(3000); // รอผลลัพธ์
  // }


  // // case 4 ใส่เป็นรหัสพนักงานที่ไม่มีจริง
  // async addCrimeHistoryFour(data: PersonalData = singlePersonalData) {
  //   console.log('=== เพิ่มประวัติอาชญากรรม ===');
  //   // ---------- กดปุ่มเพิ่ม ----------
  //   await this.page.locator(Crime.plusbutton).click();
  //   // ---------- กรอกรหัสพนักงาน ----------
  //   await this.page.fill(Crime.EmployeeNumber, data.noname);
  //   await this.page.locator(Crime.EmployeeNumber).press('Enter');
  //   await this.page.waitForTimeout(2000);
  //   // ---------- เลือกประเภทความผิด ----------
  //   console.log('กำลังเลื่อนไปที่ Dropdown ประเภทความผิด...');
  //   await this.page.locator(Crime.selectcrimetype).click();
  //   // รอให้ตัวเลือกแสดงขึ้นมาแล้วค่อยคลิกเลือก type1
  //   await this.page.locator(Crime.selecttype1).waitFor({ state: 'visible' });
  //   await this.page.locator(Crime.selecttype1).click();
  //   // ----------กรอกวันที่------------
  //   await this.page.fill(Crime.filldate, data.SaveDate);
  //   await this.page.locator(Crime.filldate).press('Enter');
  //   // ---------- กดปุ่มบันทึก ----------
  //   console.log('กำลังกดปุ่มบันทึก...');
  //   await this.page.locator(Crime.savebutton).click();
  //   console.log('=== บันทึกข้อมูลเรียบร้อย ===');
  //   await this.page.waitForTimeout(3000); // รอผลลัพธ์
  // }



  //                                                                                                             //case 5 ใส่เป็นชื่อที่ช่องรหัสพนักงาน
  // async addCrimeHistoryFive(data: PersonalData = singlePersonalData) {
  //   console.log('=== เพิ่มประวัติอาชญากรรม ===');
  //   // ---------- กดปุ่มเพิ่ม ----------
  //   await this.page.locator(Crime.plusbutton).click();
  //   // ---------- กรอกรหัสพนักงาน ----------
  //   await this.page.fill(Crime.EmployeeNumber, data.name);
  //   await this.page.locator(Crime.EmployeeNumber).press('Enter');
  //   await this.page.waitForTimeout(2000);
  //   // ---------- เลือกประเภทความผิด ----------
  //   console.log('กำลังเลื่อนไปที่ Dropdown ประเภทความผิด...');
  //   await this.page.locator(Crime.selectcrimetype).click();
  //   // รอให้ตัวเลือกแสดงขึ้นมาแล้วค่อยคลิกเลือก type1
  //   await this.page.locator(Crime.selecttype1).waitFor({ state: 'visible' });
  //   await this.page.locator(Crime.selecttype1).click();
  //   // ----------กรอกวันที่------------
  //   await this.page.fill(Crime.filldate, data.SaveDate);
  //   await this.page.locator(Crime.filldate).press('Enter');
  //   // ---------- กดปุ่มบันทึก ----------
  //   console.log('กำลังกดปุ่มบันทึก...');
  //   await this.page.locator(Crime.savebutton).click();
  //   console.log('=== บันทึกข้อมูลเรียบร้อย ===');
  //   await this.page.waitForTimeout(3000); // รอผลลัพธ์
  // }

  //                                                                                                             //case 6 ใส่รหัสพนักงานที่เป็นตัวอักษรพิเศษ
  // async addCrimeHistorysix(data: PersonalData = singlePersonalData) {
  //   console.log('=== เพิ่มประวัติอาชญากรรม ===');
  //   // ---------- กดปุ่มเพิ่ม ----------
  //   await this.page.locator(Crime.plusbutton).click();
  //   // ---------- กรอกรหัสพนักงาน ----------
  //   await this.page.fill(Crime.EmployeeNumber, data.SpecialString);
  //   await this.page.locator(Crime.EmployeeNumber).press('Enter');
  //   await this.page.waitForTimeout(2000);
  //   // ---------- เลือกประเภทความผิด ----------
  //   console.log('กำลังเลื่อนไปที่ Dropdown ประเภทความผิด...');
  //   await this.page.locator(Crime.selectcrimetype).click();
  //   // รอให้ตัวเลือกแสดงขึ้นมาแล้วค่อยคลิกเลือก type1
  //   await this.page.locator(Crime.selecttype1).waitFor({ state: 'visible' });
  //   await this.page.locator(Crime.selecttype1).click();
  //   // ----------กรอกวันที่------------
  //   await this.page.fill(Crime.filldate, data.SaveDate);
  //   await this.page.locator(Crime.filldate).press('Enter');
  //   // ---------- กดปุ่มบันทึก ----------
  //   console.log('กำลังกดปุ่มบันทึก...');
  //   await this.page.locator(Crime.savebutton).click();
  //   console.log('=== บันทึกข้อมูลเรียบร้อย ===');
  //   await this.page.waitForTimeout(3000); // รอผลลัพธ์
  // }


  // //                                                                                                             //case 7 ใส่ประเภทความผิดเป็นการกรอก จำหน่ายของผิดกฎหมาย
  // async addCrimeHistorySeven(data: PersonalData = singlePersonalData) {
  //   console.log('=== เพิ่มประวัติอาชญากรรม ===');
  //   // ---------- กดปุ่มเพิ่ม ----------
  //   await this.page.locator(Crime.plusbutton).click();
  //   // ---------- กรอกรหัสพนักงาน ----------
  //   await this.page.fill(Crime.EmployeeNumber, data.PersonCode);
  //   await this.page.locator(Crime.EmployeeNumber).press('Enter');
  //   await this.page.waitForTimeout(2000);
  //   // ---------- เลือกประเภทความผิด ----------
  //   console.log('กำลังเลื่อนไปที่ Dropdown ประเภทความผิด...');
  //   await this.page.locator('#ctl00_MainContent_Combo_CrimeType_Input').fill('จำหน่ายของผิดกฎหมาย');
  //   // ---------- กดปุ่มบันทึก ----------
  //   console.log('กำลังกดปุ่มบันทึก...');
  //   await this.page.locator(Crime.savebutton).click();
  //   console.log('=== บันทึกข้อมูลเรียบร้อย ===');
  //   await this.page.waitForTimeout(3000); // รอผลลัพธ์
  // }

  // //                                                                                                             //case 8 ใส่ประเภทความผิดเป็นการกรอกเป็น User
  // async addCrimeHistoryEight(data: PersonalData = singlePersonalData) {
  //   console.log('=== เพิ่มประวัติอาชญากรรม ===');
  //   // ---------- กดปุ่มเพิ่ม ----------
  //   await this.page.locator(Crime.plusbutton).click();
  //   // ---------- กรอกรหัสพนักงาน ----------
  //   await this.page.fill(Crime.EmployeeNumber, data.PersonCode);
  //   await this.page.locator(Crime.EmployeeNumber).press('Enter');
  //   await this.page.waitForTimeout(2000);
  //   // ---------- เลือกประเภทความผิด ----------
  //   console.log('กำลังเลื่อนไปที่ Dropdown ประเภทความผิด...');
  //   await this.page.locator('#ctl00_MainContent_Combo_CrimeType_Input').fill('User');
  //   // ---------- กดปุ่มบันทึก ----------
  //   console.log('กำลังกดปุ่มบันทึก...');
  //   await this.page.locator(Crime.savebutton).click();
  //   console.log('=== บันทึกข้อมูลเรียบร้อย ===');
  //   await this.page.waitForTimeout(3000); // รอผลลัพธ์
  // }


  //                                                                                                                 // case 9 แก้ไขประวัติอาชญากรรม
  // async updateCrimeHistoryNine(data: PersonalData = singlePersonalData) {
  //   console.log('=== แก้ไขประวัติอาชญากรรม ===');
  //   // ---------- กดที่รายชื่อพนักงาน ----------
  //   await this.page.locator(Crime.selectname).click();
  //   // ---------- เลือกประเภทความผิดอันเก่า ----------
  //   await this.page.locator(Crime.seletctcrime).click();
  //       // ---------- กดปุ่มแก้ไข ----------
  //   await this.page.locator(Crime.updatebutton).click();
  //   // ---------- เลือกdropdown ----------
  //   console.log('กำลังเลื่อนไปที่ Dropdown ประเภทความผิด...');
  //   await this.page.waitForTimeout(1000);
  //   await this.page.locator(Crime.selectdropdown).click();
  //   //----------เลือกประเภทความผิดอันใหม่----------
  //   await this.page.locator(Crime.updatecrimetype).click();
  //   // ---------- กดปุ่มบันทึก ----------
  //   console.log('กำลังกดปุ่มบันทึก...');
  //   await this.page.getByRole('link', { name: 'บันทึก' }).click();
  //   console.log('=== บันทึกข้อมูลเรียบร้อย ===');
  // }


  //                                                                                                                   //case 10 ลบประวัติอาชญากรรม
  // async DeleteCrimeHistoryTen(data: PersonalData = singlePersonalData) {
  //   console.log('=== ลบประวัติอาชญากรรม ===');
  //   // ---------- กดที่รายชื่อพนักงาน ----------
  //   await this.page.locator(Crime.selectemployee).click();
  //   // ---------- กดปุ่มลบ ----------
  //   await this.page.locator(Crime.deleteemp).click();
  //   // ---------- ยืนยันการลบ ----------
  //   //  await this.page.waitForTimeout(1000);
  //   // await this.page.locator(Crime.confirmdelete).click({ force: true });
  //   await this.page.getByRole('button', { name: 'ตกลง' }).click();
  //   // await this.page.getByRole('button', { name: 'Yes' }).click();
  //   console.log('=== ลบข้อมูลเรียบร้อย ===');
  // }


}


