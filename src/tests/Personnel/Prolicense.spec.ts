import {test, expect} from '@playwright/test';
import { LoginPage as Login } from '../../page/Login/Login.ts';
import { ProLicensePage } from '../../page/Personnel/EmployeeProfile/Prolicense.ts';
import { singleProlicenseData } from '../../../src/testData/Personnel/Prolicense.Data.ts';

test.describe.serial('ProLicensePage', () => {
    let proLicensePage!: ProLicensePage;
    let loginPage!: Login;

    test.beforeEach(async ({ page }) => {
        proLicensePage = new ProLicensePage(page);
        loginPage = new Login(page);
    });

    // test('Tc-0001: ทดสอบเปิดหน้าหนังสือรับรองวิชาชีพ', async () => {
    //     await loginPage.login();
    //     // await proLicensePage.openWebPage();
    //     await proLicensePage.openProLicenseModule();
    //     // await proLicensePage.addProfessionalLicense(singleProLicenseData);
    // });

    // test('Tc-0002: ทดสอบเพิ่มหนังสือรับรองวิชาชีพแบบเต็ม', async () => {
    //     await loginPage.login();
    //     // await proLicensePage.openWebPage();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addFullProLicense(singleProlicenseData);
    // });

    // test('Tc-0003: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยใช้แค่รหัสพนักงาน', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addIDProLicense(singleProlicenseData);
    // });

    // test('Tc-0004: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยใช้รหัสพนักงานและประเภทใบอนุญาต', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addIDLProLicense(singleProlicenseData);
    // });

    // test('Tc-0005: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยใช้รหัสพนักงานและหมายเลขใบอนุญาต', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addIDNOProLicense(singleProlicenseData);
    // });

    // test('Tc-0006: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยใช้รหัสพนักงานและสถานที่ออกใบอนุญาต', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addIDPlaceProLicense(singleProlicenseData);
    // });

    // test('Tc-0007: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยใช้รหัสพนักงานและหมายเหตุ', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addIDNoteProLicense(singleProlicenseData);
    // });

    // test('Tc-0008: ทดสอบเพิ่มหนังสือรับรองวิชาชีพที่หมดอายุ', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addOutdateProLicense();
    // });

    // test('Tc-0009: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยใช้ประเภทใบอนุญาตเป็น วิ่ง 4*100 เมตร', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addFTypeProLicense();
    // });

    // test('Tc-0010: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยใช้หมายเลขใบอนุญาตเป็นข้อความ', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addTextNOProLicense();
    // });

    // test('Tc-0011: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยใช้หมายเลขใบอนุญาตเป็นอักขระพิเศษ', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addspecialProLicense();
    // });

    // test('Tc-0012: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยใช้แค่หมายเลขใบอนุญาต', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addNOProLicense(singleProlicenseData);
    // });

    // test('Tc-0013: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยใช้แค่หมายเลขใบอนุญาตเป็นอักขระพิเศษ', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addSpecialProLicense();
    // });

    // test('Tc-0014: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยใช้ประเภทใบอนุญาตเป็นอักขระพิเศษและตัวเลข', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addSpecialNOProLicense();
    // });

    // test('Tc-0015: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยใช้หมายเลขใบอนุญาตที่มีความยาวเกินกำหนด', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addLongStringNOProLicense();
    // });

    // test('Tc-0016: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยใช้สถานที่ออกใบอนุญาตที่มีความยาวเกินกำหนด', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addLongStringPlaceProLicense();
    // });

    // test('Tc-0017: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยใช้หมายเหตุที่มีความยาวเกินกำหนด', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addLongStringNoteProLicense();
    // });

    // test('Tc-0018: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยใช้วันที่ไม่ถูกต้อง', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addWrongDateProLicense();
    // });

    // test('Tc-0019: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยใช้วันที่หมดอายุไม่ถูกต้อง', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addWrongExpProLicense();
    // });

    // test('Tc-0020: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยไม่ระบุวันที่หมดอายุ', async () => {
    //     await loginPage.login();
    //     await proLicensePage.openProLicenseModule();
    //     await proLicensePage.addNoExpProLicense();
    // });

    test('Tc-0021: ทดสอบเพิ่มหนังสือรับรองวิชาชีพโดยไม่ระบุวันที่ออกใบอนุญาต', async () => {
        await loginPage.login();
        await proLicensePage.openProLicenseModule();
        await proLicensePage.addNoDateProLicense();
    });
});