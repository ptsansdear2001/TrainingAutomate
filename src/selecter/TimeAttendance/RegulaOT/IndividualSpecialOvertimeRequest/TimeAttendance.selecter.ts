import type { Page, Locator } from '@playwright/test';

export const selectors_TimeAttendance = {
  
  // Sidebar
  sidebarToggler: (page: Page): Locator =>
    page.locator('xpath=//*[@id="kt_aside_toggler"]'),

  timeAttendanceMenu: (page: Page): Locator =>
    page.locator('xpath=//*[@id="leftbar1_lblTimeModuleLeftSide"]'),

  regularOTMenu: (page: Page): Locator =>
    page.locator('xpath=//*[@id="leftbar1_lblleft_Time_OTNormal"]'),

  // OT Request
  
  otRequestDropdown: (page: Page): Locator =>
    page.locator('xpath=//*[@id="ctl00_dropdown_ddlMenu"]/span'),

  otRequestOptionIndividualSpecial: (page: Page): Locator =>
    page.locator('xpath=//*[@id="ctl00_dropdown_ddlMenu_DropDown"]/div/ul/li[4]'),

  // Employee popup / grid
  
  employeeSearchIcon: (page: Page): Locator =>
    page.locator('xpath=//*[@id="ctl00_MainContent_btnSelect"]'),
    
 
  employeeCodeLinkFixed: (page: Page): Locator =>
    page.locator('xpath=//*[@id="ctl00_MainContent_GridShowdata_ctl00__2"]/td[1]/a'),


  employeeCodeLinkByCode: (page: Page, code: number | string): Locator =>
    page
      .locator(
        `xpath=//table[contains(@id,"GridShowdata")]//tr//td[1]//a[normalize-space(text())="${String(
          code
        )}"]`
      )
      .first(),

  // Dates

  startDateInput: (page: Page): Locator =>
    page.locator('xpath=//*[@id="MainContent_ccbDate"]'),

  endDateInput: (page: Page): Locator =>
    page.locator('xpath=//*[@id="MainContent_ccbEDate"]'),


  // OT Inputs

  ot1Input: (page: Page): Locator =>
    page.locator('xpath=//*[@id="ctl00_MainContent_mkeOT1"]'),

  ot15Input: (page: Page): Locator =>
    page.locator('xpath=//*[@id="ctl00_MainContent_mkeOT2"]'),

  ot2Input: (page: Page): Locator =>
    page.locator('xpath=//*[@id="ctl00_MainContent_mkeOT3"]'),

  ot25Input: (page: Page): Locator =>
    page.locator('xpath=//*[@id="ctl00_MainContent_mkeOT4"]'),

  ot3Input: (page: Page): Locator =>
    page.locator('xpath=//*[@id="ctl00_MainContent_mkeOT5"]'),

  ot6Input: (page: Page): Locator =>
    page.locator('xpath=//*[@id="ctl00_MainContent_mkeOT6"]'),

  // Amounts
  shiftOTInput: (page: Page): Locator =>
    page.locator('xpath=//*[@id="ctl00_MainContent_txt_Shift"]'),

  foodOTInput: (page: Page): Locator =>
    page.locator('xpath=//*[@id="ctl00_MainContent_txt_Food"]'),

  specialMoneyInput: (page: Page): Locator =>
    page.locator('xpath=//*[@id="ctl00_MainContent_txt_special"]'),

  // Remark + Save
  remarkInput: (page: Page): Locator =>
    page.locator('xpath=//*[@id="MainContent_txtNNmemo"]'),

  saveButton: (page: Page): Locator =>
    page.locator('xpath=//*[@id="MainContent_btnSave"]'),
};

// เผื่อ import { selectors as S }
export const selectors = selectors_TimeAttendance;
