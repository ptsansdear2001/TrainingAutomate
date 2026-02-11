import { test, expect } from '@playwright/test';
import { CrimeHistoryPage } from '/TrainingAutomate/src/page/Personnel/EmployeeProfile/CrimeHistory.ts';
import { LoginPage as Login } from '../../page/Login/Login.ts';


test.describe('Crime Module', () => {
  let Psnpage!: CrimeHistoryPage;
  let loginPage!: Login;



  test.beforeEach(async ({ page }) => {
    Psnpage = new CrimeHistoryPage(page);
    loginPage = new Login(page);
    await loginPage.login();
    await Psnpage.openPersonnelModule();
  });
  
  test('TcP-0001:ทดสอบเพิ่มพนักงานช่องกรอกข้อมูลให้ครบ ตามช่องที่บังคับ', async () => {
    await Psnpage.addCrimeHistory();
  });

  // test('TcP-0002:ทดสอบไม่ใส่ประวัติอาชญากรรม', async () => {
  //   await loginPage.login();
  //   await Psnpage.openPersonnelModule();
  //   await Psnpage.addCrimeHistoryTwo();
  // });

  // test('TcP-0003:ทดสอบไม่ใส่รหัสพนักงาน', async () => {
  //   await loginPage.login();
  //   await Psnpage.openPersonnelModule();
  //   await Psnpage.addCrimeHistoryThree();
  // });

  // test('TcP-0004:ทดสอบใส่เป็นรหัสพนักงานที่ไม่มีจริง', async () => {
  //   await loginPage.login();
  //   await Psnpage.openPersonnelModule();
  //   await Psnpage.addCrimeHistoryFour();
  // });
  
  // test('TcP-0005:ทดสอบใส่เป็นชื่อที่ช่องรหัสพนักงาน', async () => {
  //   await loginPage.login();
  //   await Psnpage.openPersonnelModule();
  //   await Psnpage.addCrimeHistoryFive();
  // });


  // test('TcP-0006:ทดสอบใส่ตัวอักษรพิเศษในช่องรหัสพนักงาน', async () => {
  //   await loginPage.login();
  //   await Psnpage.openPersonnelModule();
  //   await Psnpage.addCrimeHistorysix();
  // });


  // test('TcP-0007:ทดสอบใส่ข้อมูลที่ไม่ถูกต้องในช่องประเภทความผิด', async () => {
  //   await loginPage.login();
  //   await Psnpage.openPersonnelModule();
  //   await Psnpage.addCrimeHistorySeven();
  // });


  // test('TcP-0008:ทดสอบใส่ข้อมูลที่ไม่ถูกต้องในช่องประเภทความผิด User', async () => {
  //   await loginPage.login();
  //   await Psnpage.openPersonnelModule();
  //   await Psnpage.addCrimeHistoryEight();
  // });


  // test('TcP-0009:ทดสอบแก้ไขประวัติอาชญากรรม', async () => {
  //   await loginPage.login();
  //   await Psnpage.openPersonnelModule();
  //   await Psnpage.updateCrimeHistoryNine();
  // });

  // test('TcP-00010:ทดสอบลบประวัติอาชญากรรม', async () => {
  //   await loginPage.login();
  //   await Psnpage.openPersonnelModule();
  //   await Psnpage.DeleteCrimeHistoryTen();
  // });


  
 


















// });

});