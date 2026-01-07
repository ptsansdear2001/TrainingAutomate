import { test, expect } from '@playwright/test';
import { PersonnelPage } from '../../page/Personnel/EmployeeProfile/EmpHistory.ts';
import { LoginPage as Login } from '../../page/Login/Login.ts';




test.describe.serial('Module Personnel', () => {
  let Psnpage!: PersonnelPage;
  let loginPage!: Login;

  test.beforeEach(async ({ page }) => {
    Psnpage = new PersonnelPage(page);
    loginPage = new Login(page);

  });

  test('TcP-0001:ทดสอบเพิ่มพนักงานช่องกรอกข้อมูลให้ครบ ตามช่องที่บังคับ', async () => {
    await loginPage.login();
    await Psnpage.openPersonnelModule();
    await Psnpage.addPersonnelrequest();


  });





























  test('เพิ่ม พนง ที่บังคับ', async ({ page }) => {

    await page.locator('#ctl00_ContentTitleRight_RadToolBar1 > div > div > div > ul > li:nth-child(1) > a').click();
    await page.locator('#ctl00_MainContent_Combo_Initial_Input').click();
    await page.getByRole('listitem').filter({ hasText: 'นาย Mr.' }).click();

    // 3. กรอกชื่อ-นามสกุล (ไทย/อังกฤษ)
    await page.fill('#MainContent_Txt_FnameT', 'เพลไรท์');
    await page.fill('#MainContent_Txt_LnameT', 'อิอิ');
    await page.fill('#MainContent_Txt_FnameE', 'Playwright');
    await page.fill('#MainContent_Txt_LnameE', 'Eiei');

    // 4. กรอกรหัสพนักงานและเลขบัตรประชาชน
    await page.fill('#MainContent_Txt_PersonCode', '01');
    await page.fill('#MainContent_Txt_PersonCardID', '01');

    // 5. กรอกวันที่เริ่มงาน
    const startDateSelector = '#MainContent_TxtStartDate';
    await page.locator(startDateSelector).fill('');
    await page.fill(startDateSelector, '01/01/2568');
    await page.locator(startDateSelector).press('Enter');

    // 6. เลือกประเภทพนักงาน (M)
    const dropdownEmpType = page.locator('#ctl00_MainContent_Combo_EmpType_Input');
    await expect(dropdownEmpType).toBeVisible();
    await dropdownEmpType.click();
    const dropdownEmpTypeItemM = page.locator('//td[normalize-space()="M"]');
    await expect(dropdownEmpTypeItemM).toBeVisible();
    await dropdownEmpTypeItemM.click();

    // 7. เลือกระดับ (B)
    const dropdownLevel = page.locator('#ctl00_MainContent_Combo_Level_Input');
    await expect(dropdownLevel).toBeVisible();
    await dropdownLevel.click();
    await page.locator('//td[normalize-space()="B"]').click(); // ใช้ 'B' ตามโค้ดต้นฉบับ

    // 8. เลือกประเภทการจ่ายเงินเดือน (รายเดือน)
    const payrollType = page.locator('#ctl00_MainContent_Combo_TypeProcessSalary_Input');
    await expect(payrollType).toBeVisible();
    await payrollType.click();
    await page.locator('//td[normalize-space()="รายเดือน"]').click();

    // 9. กรอกวันที่บรรจุ
    await page.waitForTimeout(1000); // รอ 1 วินาทีตามโค้ดเดิม
    const permanentDateSelector = '#MainContent_TxtPassDate';
    await page.locator(permanentDateSelector).fill('');
    await page.fill(permanentDateSelector, '01/04/2568');
    await page.locator(permanentDateSelector).press('Enter');

    // 10. ย้ายไปส่วน "ข้อมูลส่วนตัว"
    await page.locator('#leftbar1_divPersonal').click();

    // 11. กรอกวันเกิด
    const dateOfBirthSelector = '#MainContent_TxtBirthDate';
    await page.locator(dateOfBirthSelector).fill('');
    await page.fill(dateOfBirthSelector, '01/04/2544');

    // 12. เลือกเพศ (ชาย)
    await page.locator('#ctl00_MainContent_Combo_Sex_Input').click();
    await page.locator('//td[normalize-space()="ชาย"]').nth(0).click();

    // 13. กรอกเลขประจำตัว
    await page.fill('#MainContent_Txt_Identity', '1234567890123');

    // 14. เลือกสถานภาพสมรส (โสด)
    await page.locator('#ctl00_MainContent_Combo_Marital_Input').click();
    await page.locator('//td[normalize-space()="โสด"]').click();

    // 15. บันทึกข้อมูล
    const saveButtonSelector = '#ctl00_ContentTitleRight_RadToolBar1 > div > div > div > ul > li:nth-child(1) > a'; // ต้องหา selector ของปุ่ม Save จริงๆ


    // เลื่อนไปที่ปุ่ม Save และคลิก
    await page.locator(saveButtonSelector).scrollIntoViewIfNeeded();
    await expect(page.locator(saveButtonSelector)).toBeVisible();
    await page.locator(saveButtonSelector).click();

    // 16. ตรวจสอบความสำเร็จ
    await expect(page.locator('text=เพลไรท์ อิอิ')).toBeVisible({ timeout: 60000 });

  });

});
