import { Page, expect } from '@playwright/test';
import { ProLicenseSelecter } from '../../../selecter/Personnel/EmployeeProfile/Prolicense.selecter.ts';
import { ProLicenseData, singleProLicenseData, outdateProlicenseData, specialProlicenseData } from '../../../testData/Personnel/Prolicense.Data.ts';
import { url } from '../../../selecter/Login/login.selecter.ts';

export class ProLicensePage {
    constructor(private page: Page) { }

    async openWebPage() {
        await this.page.goto(url.UrlTiger);
        await expect(this.page).toHaveURL(url.UrlTiger);
      }
    
    async openProLicenseModule() {
        await this.page.locator(ProLicenseSelecter.empPro).hover();
        await this.page.locator(ProLicenseSelecter.subEmpPro).click();
        await this.page.waitForTimeout(2000);
        await this.page.locator(ProLicenseSelecter.dropDownProlicense).click();
        await this.page.locator(ProLicenseSelecter.dropDownProlicenseExpand).click();
        await this.page.waitForTimeout(3000);
      }
    
    async addFullProLicense(data: ProLicenseData = singleProLicenseData) {
        console.log('=== Adding Professional License Data ===');
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.licenseTypeField, data.licenseType);
        // await this.page.getByRole('listbox').getByText(data.licenseType).click();
        await this.page.fill(ProLicenseSelecter.numberField, data.number);
        await this.page.fill(ProLicenseSelecter.placeField, data.place);
        await this.page.fill(ProLicenseSelecter.noteField, data.note);
        await this.page.fill(ProLicenseSelecter.dateField, data.date);
        await this.page.locator(ProLicenseSelecter.dateField).press('Enter');
        await this.page.fill(ProLicenseSelecter.expiredField, data.expired);
        await this.page.locator(ProLicenseSelecter.expiredField).press('Enter');
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    };

    async addIDProLicense(data: ProLicenseData) {
        console.log('=== Adding Only ID Professional License Data ===');
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addIDLProLicense(data: ProLicenseData) {
        console.log('=== Adding ID and License Type Professional License Data ===');
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.licenseTypeField, data.licenseType);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addIDNOProLicense(data: ProLicenseData) {
        console.log('=== Adding ID and Number Professional License Data ===');
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.numberField, data.number);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addIDPlaceProLicense(data: ProLicenseData) {
        console.log('=== Adding ID and Place Professional License Data ===');
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.placeField, data.place);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addIDNoteProLicense(data: ProLicenseData) {
        console.log('=== Adding ID and Note Professional License Data ===');
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.noteField, data.note);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addOutdateProLicense(data: ProLicenseData = outdateProlicenseData) {
        console.log('=== Adding Outdate Professional License Data ===');
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.dateField, data.date);
        // await this.page.locator(ProLicenseSelecter.dateField).press('Enter');
        await this.page.fill(ProLicenseSelecter.expiredField, data.expired);
        // await this.page.locator(ProLicenseSelecter.expiredField).press('Enter');
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addFTypeProLicense(data: ProLicenseData = outdateProlicenseData) {
        console.log('=== Adding Fake Type Professional License Data ===');
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.licenseTypeField, data.licenseType);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addTextNOProLicense(data: ProLicenseData = outdateProlicenseData) {
        console.log('=== Adding Text Number Professional License Data ===');
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.numberField, data.number);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addspecialProLicense(data: ProLicenseData = specialProlicenseData) {
        console.log('=== Adding Special Character Professional License Data ===');
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.numberField, data.number);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addNOProLicense(data: ProLicenseData = specialProlicenseData) {
        console.log('=== Adding Only Number Professional License Data ===');
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.licenseTypeField, data.licenseType);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addSpecialProLicense(data: ProLicenseData = specialProlicenseData) {
        console.log('=== Adding Special Character Professional License Data ===');
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.licenseTypeField, data.licenseType);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addSpecialNOProLicense(data: ProLicenseData = specialProlicenseData) {
        console.log('=== Adding Special Character and Number Professional License Data ===');
        let specialCharNO = "*09-"
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.licenseTypeField, specialCharNO);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addLongStringNOProLicense(data: ProLicenseData = specialProlicenseData) {
        console.log('=== Adding Long String Number Professional License Data ===');
        let longString = "0".repeat(300);
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.numberField, longString);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addLongStringPlaceProLicense(data: ProLicenseData = specialProlicenseData) {
        console.log('=== Adding Long String Place Professional License Data ===');
        let longString = "0".repeat(500);
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.placeField, longString);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addLongStringNoteProLicense(data: ProLicenseData = specialProlicenseData) {
        console.log('=== Adding Long String Note Professional License Data ===');
        let longString = "0".repeat(1000);
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.noteField, longString);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addWrongDateProLicense(data: ProLicenseData = specialProlicenseData) {
        console.log('=== Adding Wrong Date Professional License Data ===');
        let wrongDate = "32/13/2023";
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.dateField, wrongDate);
        await this.page.fill(ProLicenseSelecter.expiredField, data.expired);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addWrongExpProLicense(data: ProLicenseData = specialProlicenseData) {
        console.log('=== Adding Wrong Expired Date Professional License Data ===');
        let wrongDate = "32/13/2023";
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.dateField, data.date);
        await this.page.fill(ProLicenseSelecter.expiredField, wrongDate);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addNoExpProLicense(data: ProLicenseData = specialProlicenseData) {
        console.log('=== Adding No Expired Date Professional License Data ===');
        let noDate = "";
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.dateField, data.date);
        await this.page.fill(ProLicenseSelecter.expiredField, noDate);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }

    async addNoDateProLicense(data: ProLicenseData = specialProlicenseData) {
        console.log('=== Adding No Date Professional License Data ===');
        let noDate = "";
        await this.page.locator(ProLicenseSelecter.addButton).click();
        await this.page.fill(ProLicenseSelecter.personCodeField, data.personCode);
        await this.page.fill(ProLicenseSelecter.dateField, noDate);
        await this.page.fill(ProLicenseSelecter.expiredField, data.expired);
        await this.page.locator(ProLicenseSelecter.saveButton).click();
        await this.page.waitForTimeout(3000);
    }
};