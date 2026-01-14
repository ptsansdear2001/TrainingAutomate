import { test, expect } from '@playwright/test';
import { LoginPage as Login } from '../../page/Login/Login.ts';
import { AccidentHistoryPage } from '../../page/Personnel/EmployeeProfile/AccidentHistory/AccidentHistory.ts';
import { singlePersonalData } from '../../testData/Personnel/AccHis.Data';



test.describe.serial('AccidentHistoryPage', () => {
  let Psnpage!: AccidentHistoryPage;
  let loginPage!: Login;

  test.beforeEach(async ({ page }) => {
    Psnpage = new AccidentHistoryPage(page);
    loginPage = new Login(page);

  });

  test('Tc-0001:ทดสอบเปิดหน้าประวัติการเกิดอุบัติเหตุ ', async () => {
    await loginPage.login();
    await Psnpage.openPersonnelModule();
    await Psnpage.openAccidentHistorySection();
  });

  test('Tc-0002:ทดสอบเพิ่มประวัติการเกิดอุบัติเหตุ ', async () => {  
    await loginPage.login();
    await Psnpage.openPersonnelModule();
    await Psnpage.openAccidentHistorySection();
    await Psnpage.addAccidentHistory(singlePersonalData);
  });

  
})