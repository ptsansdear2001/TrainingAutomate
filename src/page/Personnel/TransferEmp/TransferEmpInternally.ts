import { Page, expect } from '@playwright/test';
import { url } from '../../../selecter/Login/login.selecter.ts';
import { TransferEmpData } from '../../../testData/Personnel/TransferEmpInternally/TransferEmpInternally.ts';
import { TransEmp } from '../../../selecter/Personnel/TransferModify/TransferEmpInternally.selecter.ts';
import test from 'node:test';

export class TransferEmpInternallyPage {
    constructor(private page: Page) {}

    async openWebPage() {
        await this.page.goto(url.UrlTiger);
        await expect(this.page).toHaveURL(url.UrlTiger);
    }

    async openPersonnelModule() {
        await this.page.locator(TransEmp.employeeInformation).hover();
        await this.page.locator(TransEmp.transferEmpInternally).click();
        await expect(this.page).toHaveURL('https://connect.tigersoftcloud.com/NEW5/TigerOpenspaceHRM/Mobile/Personal/WebTranferPerson.aspx?MenuGroup=Transfer&Menuid=PNM1_007_01');
    }

    async openTransferEmpInternallySection() {
        console.log('=== เปิดส่วนโอนพนักงานภายใน ===');
        await this.page.locator(TransEmp.transferEmpInternally).click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    async addTransferEmpInternally(data: TransferEmpData) {
        console.log('=== เพิ่มโอนพนักงานภายใน ===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.searchEmployee).click();
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbarEmployeetext).fill(data.searchdrop.searchdropnumber);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbarEmployeetext).fill(data.transferDetails.employeeId);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbtnEmployee).click();
        await this.page.frameLocator(TransEmp.iframe).getByRole('link', { name: data.transferDetails.employeeId }).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(TransEmp.dropdownEmployeeOption).click();
        await this.page.locator(TransEmp.dropdownEmployeeOptiontext).fill(data.transferDetails.adjustmentTopic);
        await this.page.locator(TransEmp.positiondrop).click();

        await this.page.locator(TransEmp.Datetext).fill(data.transferDetails.effectiveDate);
        await this.page.waitForTimeout(3000);
        await this.page.locator(TransEmp.Convertto).click();
        await this.page.locator(TransEmp.Convertto).fill(data.transferDetails.targetPosition);
        await this.page.locator(TransEmp.Convertto).click();
        
        await this.page.locator(TransEmp.noti).click();
        await this.page.locator(TransEmp.noti).fill(data.transferDetails.remark);
        await this.page.waitForTimeout(3000);
        await this.page.locator(TransEmp.saveemployee).click();
        await this.page.waitForTimeout(3000);
        await expect(this.page.getByText('บันทึกสำเร็จ')).toBeVisible();
    }

    async editTransferEmpInternally(data: TransferEmpData) {
        console.log('=== แก้ไขโอนพนักงานภายใน ===');
        await this.page.locator(TransEmp.employeedata).click();
        await this.page.locator(TransEmp.clickemployeedata).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(TransEmp.editemployee).click();
        await this.page.locator(TransEmp.Datetext).fill(data.transferDetails.efftivedate2);
        await this.page.locator(TransEmp.Convertto).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(TransEmp.Convertto).click();
        await this.page.locator(TransEmp.Convertto).click();
        await this.page.locator(TransEmp.Convertto).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(TransEmp.Convertto).fill(data.transferDetails.targetoption3);
        await this.page.locator(TransEmp.Convertto).press('Enter');
        await this.page.waitForTimeout(3000);
        await this.page.locator(TransEmp.Convertto).click();
        await this.page.locator(TransEmp.Convertto).click();
        await this.page.locator(TransEmp.singularityposition).click()
        await this.page.waitForTimeout(3000);

        await this.page.locator(TransEmp.noti).click();
        await this.page.locator(TransEmp.noti).fill(data.transferDetails.remark2);
        await this.page.locator(TransEmp.saveemployee).click();
        await this.page.waitForTimeout(3000);
        await expect(this.page.getByText('บันทึกสำเร็จ')).toBeVisible();
    }


    async deleteTransferEmpInternally(data: TransferEmpData) {
        console.log('=== ลบโอนพนักงานภายใน ===');
        await this.page.locator(TransEmp.employeedata).click();
        await this.page.locator(TransEmp.deleteemployee).click();
        const confirmModal = this.page.locator("div[id^='RadWindowWrapper_confirm']");
        await expect(confirmModal).toBeVisible({ timeout: 5000 });
        await confirmModal.locator('.rwOkBtn').click();
        await this.page.waitForTimeout(3000);
    }

    async serarchemployeeid(data: TransferEmpData) {
        console.log('=== ค้นหาพนักงานตามเลขรหัสพนักงาน ===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.searchEmployee).click();
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbarEmployeetext).fill(data.searchdrop.searchdropnumber);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbarEmployeetext).fill(data.transferDetails.employeeId);
        await this.page.waitForTimeout(3000);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbtnEmployee).click();
        await this.page.waitForTimeout(3000);
        await this.page.frameLocator(TransEmp.iframe).getByRole('link', { name: data.transferDetails.employeeId }).click();
        await this.page.waitForTimeout(3000);
    }

    async serarchemployeethainame(data: TransferEmpData) {
        console.log('=== ค้นหาพนักงานตามชื่อไทย ===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(TransEmp.searchEmployee).click();
        await this.page.waitForTimeout(3000);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchEmployeedropdown).fill(data.searchdrop.searchdropthainame);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchEmployeedropdown).press('Tab');
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbarEmployeetext).fill(data.employeeProfile.nameTh);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbtnEmployee).click();
        await this.page.waitForTimeout(3000);
        await this.page.frameLocator(TransEmp.iframe).getByRole('link', { name: data.transferDetails.employeeId }).click();
        await this.page.waitForTimeout(3000);
    }

    async serarchemployeethailastname(data: TransferEmpData) {
        console.log('=== ค้นหาพนักงานตามนามสกุลไทย ===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.searchEmployee).click();
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchEmployeedropdown).fill(data.searchdrop.searchdropthailastname);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchEmployeedropdown).press('Tab');
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbarEmployeetext).fill(data.employeeProfile.surnameTh);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbtnEmployee).click();
        await this.page.waitForTimeout(3000);
        await this.page.frameLocator(TransEmp.iframe).getByRole('link', { name: data.transferDetails.employeeId }).click();
        await this.page.waitForTimeout(3000);
    }

    async serarchemployeengname(data: TransferEmpData) {
        console.log('=== ค้นหาพนักงานตามชื่ออังกฤษ ===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.searchEmployee).click();
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchEmployeedropdown).fill(data.searchdrop.searchdropengname);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchEmployeedropdown).press('Tab');
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbarEmployeetext).fill(data.employeeProfile.nameEn);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbtnEmployee).click();
        await this.page.waitForTimeout(3000);
        await this.page.frameLocator(TransEmp.iframe).getByRole('link', { name: data.transferDetails.employeeId }).click();
        await this.page.waitForTimeout(3000);
    }

    async serarchemployeenglastname(data: TransferEmpData) {
        console.log('=== ค้นหาพนักงานตามนามสกุลอังกฤษ ===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.searchEmployee).click();
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchEmployeedropdown).fill(data.searchdrop.searchdropenglastname);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchEmployeedropdown).press('Tab');
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbarEmployeetext).fill(data.employeeProfile.surnameEn);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbtnEmployee).click();
        await this.page.waitForTimeout(3000);
        await this.page.frameLocator(TransEmp.iframe).getByRole('link', { name: data.transferDetails.employeeId }).click();
        await this.page.waitForTimeout(3000);
    }


    async serarchemployeecode(data: TransferEmpData) {
        console.log('=== ค้นหาพนักงานตามรหัสบัตรประชาชน ===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.searchEmployee).click();
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchEmployeedropdown).fill(data.searchdrop.searchdropcode);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchEmployeedropdown).press('Tab');
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbarEmployeetext).fill(data.employeeProfile.idCard);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbtnEmployee).click();
        await this.page.waitForTimeout(3000);
        await this.page.frameLocator(TransEmp.iframe).getByRole('link', { name: data.transferDetails.employeeId }).click();
        await this.page.waitForTimeout(3000);
    }

    async testletter(data: TransferEmpData) {
        console.log('=== ค้นหาด้วยชื่อภาษาอังกฤษแบบ ตัวพิมพ์เล็ก/ใหญ่ผสมกัน ===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.searchEmployee).click();
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchEmployeedropdown).fill(data.searchdrop.searchdropengname);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchEmployeedropdown).press('Tab');
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbarEmployeetext).fill(data.employeeProfile.nameEn);
        await this.page.waitForTimeout(3000);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbtnEmployee).click();
        await this.page.frameLocator(TransEmp.iframe).getByRole('link', { name: data.transferDetails.employeeId }).click();
        await this.page.waitForTimeout(3000);
    }

    async serchemty(data: TransferEmpData) {
        console.log('=== ค้นหาพนักงานไม่พบ ===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.searchEmployee).click();
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchEmployeedropdown).fill(data.searchdrop.searchdropnumber);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchEmployeedropdown).press('Tab');
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbarEmployeetext).fill(data.transferDetails.searchempty);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbtnEmployee).click();
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbtnEmployee).press('Esc');
    }

    async clcikserch(data: TransferEmpData) {
        console.log('===กดปุ่มสีแดง "ค้นหา" ด้วยเมาส์===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.searchEmployee).click();
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbtnEmployee).click();
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbtnEmployee).press('Enter');
    }

    async clicknumber(data: TransferEmpData) {
        console.log('===การนำข้อมูลไปใช้ (Click) ที่เลขรหัสพนักงาน===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.searchEmployee).click();
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbarEmployeetext).fill(data.searchdrop.searchdropnumber);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbarEmployeetext).fill(data.transferDetails.employeeId);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbtnEmployee).click();
        await this.page.frameLocator(TransEmp.iframe).getByRole('link', { name: data.transferDetails.employeeId }).click();
    }

    async togglecheckbox(data: TransferEmpData) {
        console.log('===ตรวจสอบสถานะ Checkbox ไม่มีผลกับการปรับโอนย้าย===')
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.Checkbox).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(TransEmp.Checkbox).click();
    }

    async targetoption(data: TransferEmpData) {
        console.log('===เลือก "หัวข้อการปรับ"===')
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.dropdownEmployeeOption).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(TransEmp.dropdownEmployeeOptiontext).fill(data.transferDetails.adjustmentTopic);
        await this.page.locator(TransEmp.positiondrop).click();
    }


    async selectFutureDate(data: TransferEmpData) {
        console.log('=== เลือก "วันที่ปรับ" (ล่วงหน้า) ===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.Datetext).click();
        const futureDate = (data.transferDetails as any).futureDate || '01/01/2030';
        await this.page.locator(TransEmp.Datetext).fill(futureDate);
        await this.page.keyboard.press('Enter');
    }


    async selectEffectiveDate(data: TransferEmpData) {
        console.log('=== เลือก "วันที่มีผล" ===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.Datetext).click();
        await this.page.locator(TransEmp.Datetext).fill(data.transferDetails.effectiveDate);
        await this.page.keyboard.press('Tab');
    }

    // 3. เปลี่ยนค่า "ปรับเป็น"
    async changeTargetPosition(data: TransferEmpData) {
        console.log('=== เปลี่ยนค่า "ปรับเป็น" ===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.Convertto).click();
        await this.page.locator(TransEmp.Convertto).clear();
        await this.page.locator(TransEmp.Convertto).fill(data.transferDetails.targetPosition);
        await this.page.locator(TransEmp.Convertto).clear();
        await this.page.locator(TransEmp.Convertto).fill(data.transferDetails.targetPosition2);
    }

    async fillRemarkThai(data: TransferEmpData) {
        console.log('=== กรอกหมายเหตุ (ไทย) ===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.noti).click();
        await this.page.locator(TransEmp.noti).fill(data.transferDetails.remark || 'ทดสอบหมายเหตุภาษาไทย');
    }

    async fillRemarkEngNum(data: TransferEmpData) {
        console.log('=== กรอกหมายเหตุ (อังกฤษ/ตัวเลข) ===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.noti).click();
        await this.page.locator(TransEmp.noti).fill('Test 12345');
    }

    async openEmployeeSearchModal() {
        console.log('=== คลิกแว่นขยาย จะแสดงหน้าค้นหาพนักงาน ===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.searchEmployee).click();
        await expect(this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbtnEmployee)).toBeVisible();
    }

    async searchInDropdown(data: TransferEmpData) {
        console.log('=== ค้นหาใน dropdown ===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.dropdownEmployeeOption).click();
        await this.page.locator(TransEmp.dropdownEmployeeOptiontext).fill(data.transferDetails.adjustmentTopic);
        await this.page.keyboard.press('Enter');
    }

    async typeEffectiveDate(data: TransferEmpData) {
        console.log('=== การเลือกวันที่ด้วยคีย์บอร์ด โดยการพิมพ์ ===');
        await this.page.locator(TransEmp.addemployee).click();
        await this.page.locator(TransEmp.Datetext).click();
        await this.page.locator(TransEmp.Datetext).type(data.transferDetails.effectiveDate, { delay: 100 });
        await this.page.keyboard.press('Enter');
    }

    async selectAndEditFromHistory() {
        console.log('=== คลิกเลือกพนักงาน ในประวัติพนักงาน และ กดแก้ไข ===');
        await this.page.locator(TransEmp.employeedata).first().click();
        await this.page.locator(TransEmp.editemployee).click();
        await expect(this.page.locator(TransEmp.saveemployee)).toBeVisible();
    }


    async checkAdjustmentNoData(data: TransferEmpData) {
        console.log('=== Negative: ตรวจสอบการปรับข้อมูลพนักงาน แบบไม่ใส่ข้อมูล ===');
        await this.page.locator(TransEmp.addemployee).click();

        await this.page.locator(TransEmp.searchEmployee).click();
        await this.page.waitForTimeout(3000);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbarEmployeetext).fill(data.transferDetails.employeeId);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbtnEmployee).click();
        await this.page.frameLocator(TransEmp.iframe).getByRole('link', { name: data.transferDetails.employeeId }).click();
        await this.page.waitForTimeout(3000);

        await this.page.locator(TransEmp.saveemployee).click();
        await this.page.waitForTimeout(3000);
        await expect(this.page.getByText('กรุณาเลือกหัวข้อการปรับ')).toBeVisible();

    }

    async saveNoAdjustmentTopic(data: TransferEmpData) {
        console.log('=== Negative: บันทึกข้อมูลโดยไม่ระบุ "หัวข้อการปรับ" ===');
        await this.page.locator(TransEmp.addemployee).click();

        await this.page.locator(TransEmp.searchEmployee).click();
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbarEmployeetext).fill(data.transferDetails.employeeId);
        await this.page.frameLocator(TransEmp.iframe).locator(TransEmp.searchbtnEmployee).click();
        await this.page.waitForTimeout(3000);
        await this.page.frameLocator(TransEmp.iframe).getByRole('link', { name: data.transferDetails.employeeId }).click();
        await this.page.locator(TransEmp.Datetext).fill(data.transferDetails.effectiveDate);
        await this.page.waitForTimeout(3000);
        await this.page.locator(TransEmp.dropdownEmployeeOptiontext).click();
        await this.page.locator(TransEmp.dropdownEmployeeOptiontext).fill(data.transferDetails.adjustmentTopic);
        await this.page.waitForTimeout(3000);
        await this.page.locator(TransEmp.saveemployee).click();
        await this.page.waitForTimeout(3000);
        await expect(this.page.getByText('กรุณาเลือกหัวข้อที่ต้องการปรับเป็น')).toBeVisible();
    }
}