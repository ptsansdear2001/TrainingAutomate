
import { Page, expect } from '@playwright/test';
import { SelEmp } from '../../../selecter/Personnel/EmployeeProfile/EmpHistory.selecter.ts';
import { PersonalData, singlePersonalData } from '../../../testData/Personnel/EmHis.Data.ts';
import { url } from '../../../selecter/Login/login.selecter.ts';

export class PersonnelPage {
  constructor(private page: Page) { }

  async openWebPage() {
    await this.page.goto(url.UrlTiger);
    await expect(this.page).toHaveURL(url.UrlTiger);
  }

  async openPersonnelModule() {
    await this.page.locator(SelEmp.EmployeeInformation).hover();
    await this.page.locator(SelEmp.PersonnelButton).click();
    await this.page.waitForTimeout(5000);
  }
  async addPersonnelrequest(data: PersonalData = singlePersonalData) {
    console.log('=== เพิ่มข้อมูลพนักงาน ===');

    await this.page.locator(SelEmp.AddPersonnelButton).click();
    await this.page.locator(SelEmp.DropdownTitle).click();
    await this.page.getByRole('listitem').filter({ hasText: data.title }).click();

    await this.page.fill(SelEmp.NameTH, data.nameTH);
    await this.page.fill(SelEmp.LastNameTH, data.lastNameTH);
    await this.page.fill(SelEmp.NameEN, data.nameEN);
    await this.page.fill(SelEmp.LastNameEN, data.lastNameEN);
    await this.page.fill(SelEmp.EmployeeNumber, data.employeeNumber);
    await this.page.fill(SelEmp.PersonCardID, data.personCardID);

    // กรอกวันเริ่มงาน
    await this.page.fill(SelEmp.StartDate, data.startDate);
    await this.page.locator(SelEmp.StartDate).press('Enter');

    // เลือกประเภทพนักงาน
    const dropdownEmpType = this.page.locator(SelEmp.DropdownEmpType);
    await expect(dropdownEmpType).toBeVisible();
    await dropdownEmpType.click();
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(1000);
    await this.page.locator(SelEmp.DropdownEmpType).scrollIntoViewIfNeeded();
    await dropdownEmpType.click();
    await this.page.waitForLoadState('networkidle');
    const option = this.page.locator(SelEmp.DropdownEmpTypeItemM).nth(0);
    await option.click();

    // เลือก Level
    const dropdownLevel = this.page.locator(SelEmp.DropdownLevel);
    await expect(dropdownLevel).toBeVisible();
    await dropdownLevel.click();
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(1000);
    const Level = this.page.locator(SelEmp.DropdownLevelListA).nth(0);
    await Level.click();

    // เลือกประเภทการจ่ายเงิน
    const PayrollType = this.page.locator(SelEmp.PayrollType);
    await expect(PayrollType).toBeVisible();
    await PayrollType.click();
    await this.page.getByRole('listitem').filter({ hasText: data.payrollType }).click();

    await this.page.waitForTimeout(1000);

    // กรอกวันที่บรรจุ
    await this.page.fill(SelEmp.PermanentDate, data.permanentDate);
    await this.page.locator(SelEmp.PermanentDate).press('Enter');

    await this.page.locator(SelEmp.PersonnelInformation).click();
    await this.page.fill(SelEmp.DateOfBirth, data.dateOfBirth);
    await this.page.locator(SelEmp.Gender).click();
    await this.page.getByRole('listitem').filter({ hasText: data.gender }).nth(0).click();

    await this.page.fill(SelEmp.IdentificationNumber, data.identificationNumber);

    await this.page.locator(SelEmp.MaritalStatus).click();
    await this.page.getByRole('listitem').filter({ hasText: data.maritalStatus }).click();

    // บันทึกข้อมูล
    await this.page.locator(SelEmp.SaveButton).scrollIntoViewIfNeeded();
    await expect(this.page.locator(SelEmp.SaveButton)).toBeVisible();
    await this.page.locator(SelEmp.SaveButton).click();
    await this.page.waitForTimeout(5000);
    await expect(this.page.getByText(/สำเร็จ|Success/).first()).toBeVisible();
    await expect(this.page.getByText(data.nameTH).first()).toBeVisible();


  }

}