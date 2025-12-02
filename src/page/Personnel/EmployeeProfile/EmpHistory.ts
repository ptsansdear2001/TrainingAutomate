
import { Page, expect } from '@playwright/test';
import { SelecterEmp } from '../../../selecter/Personnel/EmployeeProfile/EmpHistory.selecter.ts';


export class PersonnelPage {
  constructor(private page: Page) {}
  
  async openWebPage() {
    await this.page.goto('');
  }

}