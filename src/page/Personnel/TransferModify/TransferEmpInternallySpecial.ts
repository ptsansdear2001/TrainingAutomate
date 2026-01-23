import { Page, expect } from "@playwright/test";
import { url } from "../../../selecter/Login/login.selecter";
import { TransferEmpIntenallySpecial } from "../../../selecter/Personnel/TransferModify/TransferEmpInternallySpecial.selecter";
import { TestData } from "../../../testData/Personnel/TransferEmpInternallySpecial.data";


export class TransferEmpInternallySpecialPage {
  
  constructor(private page: Page) {}


  async openWebPage() {
      await this.page.goto(url.UrlTiger);
      await expect(this.page).toHaveURL(url.UrlTiger);
    }

  //เปิดหน้าโอนประวัติพนักงานภายในแบบพิเศษ
  async openTransferEmpIntSpecialModule() {
    await this.page.waitForTimeout(500);
    await this.page.waitForLoadState('domcontentloaded')
    await this.page.locator(TransferEmpIntenallySpecial.kt_aside_menu).hover();
    await this.page.locator(TransferEmpIntenallySpecial.EmployeeInformation).click();
    await this.page.locator(TransferEmpIntenallySpecial.TransferModify).click();
    await this.page.waitForLoadState('domcontentloaded')
    await this.page.locator(TransferEmpIntenallySpecial.TransferModifyDropdown).click();
    await this.page.locator(TransferEmpIntenallySpecial.OptionSpecialTransfer).click();
  }
  
  //กดปุ่มเพิ่ม
  async clickAddButton(){
    await this.page.locator(TransferEmpIntenallySpecial.AddButton).click()
  }
  
  async SaveTransaction() {
    await this.page.locator(TransferEmpIntenallySpecial.SaveButton).click();
    const modal = this.page.locator('.rwDialog').filter({ hasText: 'พบรหัสบัตรประชาชนซ้ำ' });
    await modal.locator(TransferEmpIntenallySpecial.OkBtn).click();
  }

  async fillAndEnter(locator: string, value: string) {
    await this.page.locator(locator).fill(value);
    await this.page.waitForTimeout(300);
    await this.page.keyboard.press("Enter");
  }

  async fillPersonCode(data: any) {
    await this.fillAndEnter(TransferEmpIntenallySpecial.PersonCodeInput,data);
  }

  async fillNotes(data: any) {
    await this.page.locator(TransferEmpIntenallySpecial.NotesInput).fill(data);
  }

  async fillSectionCmb1(data: any) {
    await this.fillAndEnter(TransferEmpIntenallySpecial.SectionCmb1Dropdown,data);
  }

  async fillDepartmentCmb2(data: any) {
    await this.fillAndEnter(TransferEmpIntenallySpecial.DepartmentCmb2Dropdown,data);
  }

  async fillDivisionCmb3(data: any) {
    await this.fillAndEnter(TransferEmpIntenallySpecial.DivisionCmb3Dropdown,data);
  }

  async fillLevelCmb4(data: any) {
    await this.fillAndEnter(TransferEmpIntenallySpecial.LevelCmb4Dropdown,data);
  }

  async fillWorkLocationCmb5(data: any) {
    await this.fillAndEnter(TransferEmpIntenallySpecial.WorkLocationCmb5Dropdown,data);
  }

  async fillScopeOfWorkCmb6(data: any) {
    await this.fillAndEnter(TransferEmpIntenallySpecial.ScopeOfWorkCmb6Dropdown,data);
  }

  async fillPosition(data: any) {
    await this.fillAndEnter(TransferEmpIntenallySpecial.PositionDropdown,data);
  }

  async fillLevel(data: any) {
    await this.fillAndEnter(TransferEmpIntenallySpecial.LevelDropdown,data);
  }

  async fillContractType(data: any) {
    await this.fillAndEnter(TransferEmpIntenallySpecial.ContractTypeDropdown,data);
  }

  async fillCurrentSalary(data: any) {
    await this.fillAndEnter(TransferEmpIntenallySpecial.CurrentSalaryInput,data);
  }

  async fillEmpType(data: any) {
    await this.fillAndEnter(TransferEmpIntenallySpecial.EmpTypeDropdown,data);
  }

  async fillTypeProcess(data: any) {
    await this.fillAndEnter(TransferEmpIntenallySpecial.TypeProcessDropdown,data);
  }

  async fillTransferSalary(data: any) {
    await this.page.locator(TransferEmpIntenallySpecial.TransferSalaryInput).fill(data);
  }

  async ExpectPersonDetail(name: string, Cmb3: string, Position: string, level: string, TypeProSalaryCurrent: string) {
    await expect(this.page.locator(TransferEmpIntenallySpecial.CurrentPersonNameInput)).toHaveValue(name);
    await expect(this.page.locator(TransferEmpIntenallySpecial.Cmb3CurrentInput)).toHaveValue(Cmb3);
    await expect(this.page.locator(TransferEmpIntenallySpecial.CurrentPosition)).toHaveValue(Position);
    await expect(this.page.locator(TransferEmpIntenallySpecial.CurrentLevel)).toHaveValue(level);
    await expect(this.page.locator(TransferEmpIntenallySpecial.CurrentTypeSalary)).toHaveValue(TypeProSalaryCurrent);
  }

  async clearAllField (){
    await this.fillPersonCode('');
    await this.fillNotes('');
    await this.fillSectionCmb1('');
    await this.fillDepartmentCmb2('');
    await this.fillDivisionCmb3('');
    await this.fillLevelCmb4('');
    await this.fillWorkLocationCmb5('');
    await this.fillScopeOfWorkCmb6('');
    await this.fillPosition('');
    await this.fillLevel('');
    await this.fillContractType('');
    await this.fillCurrentSalary('');
    await this.fillEmpType('');
    await this.fillTypeProcess('');
    await this.fillTransferSalary('');
  }

  async ExpectAllFieldClear() {
    const fields = [
      TransferEmpIntenallySpecial.PersonCodeInput,
      TransferEmpIntenallySpecial.NotesInput,
      TransferEmpIntenallySpecial.SectionCmb1Dropdown,
      TransferEmpIntenallySpecial.DepartmentCmb2Dropdown,
      TransferEmpIntenallySpecial.DivisionCmb3Dropdown,
      TransferEmpIntenallySpecial.LevelCmb4Dropdown,
      TransferEmpIntenallySpecial.WorkLocationCmb5Dropdown,
      TransferEmpIntenallySpecial.ScopeOfWorkCmb6Dropdown,
      TransferEmpIntenallySpecial.CostCenterCmb7Dropdown,
      TransferEmpIntenallySpecial.GroupApproveCmb8Dropdown,
      TransferEmpIntenallySpecial.PositionDropdown,
      TransferEmpIntenallySpecial.LevelDropdown,
      TransferEmpIntenallySpecial.ContractTypeDropdown,
      TransferEmpIntenallySpecial.CurrentSalaryInput,
      TransferEmpIntenallySpecial.EmpTypeDropdown,
      TransferEmpIntenallySpecial.TypeProcessDropdown,
      TransferEmpIntenallySpecial.TransferSalaryInput,
    ];
    
    for (const field of fields) {
      await expect(this.page.locator(field)).toHaveValue('');
    }
  }

  async ChooseSearchType(data: string) {
    await this.page.locator(TransferEmpIntenallySpecial.SearchTypeDropdown).click()
    await this.page.locator(TransferEmpIntenallySpecial.SearchTypeDropdownList, { hasText: data,}).click();
    
  }

  async fillAllRequiredFields(data: typeof TestData) {
    await this.fillNotes(data.Notes);
    await this.fillSectionCmb1(data.Combo1);
    await this.fillDepartmentCmb2(data.Combo2);
    await this.fillDivisionCmb3(data.Combo3);
    await this.fillLevelCmb4(data.Combo4);
    await this.fillWorkLocationCmb5(data.Combo5);
    await this.fillScopeOfWorkCmb6(data.Combo6);
    await this.fillPosition(data.Position);
    await this.fillLevel(data.Level);
    await this.fillContractType(data.ContractType);
    await this.fillCurrentSalary(data.CurrentSalary);
    await this.fillEmpType(data.EmpType);
    await this.fillTypeProcess(data.TypeProcess);
    await this.fillTransferSalary(data.TransferSalary);
}
  async expectSaveSuccess() {
    await expect(this.page.getByText("บันทึกสำเร็จ"))
    .toBeVisible({ timeout: 10000 });
}

}
