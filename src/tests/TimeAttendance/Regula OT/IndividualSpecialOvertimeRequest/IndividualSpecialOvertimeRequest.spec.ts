import { test } from '@playwright/test';

import { LoginPage } from '../../../../page/Login/Login';
import { TimeAttendancePage } from '../../../../page/TimeAttendance/RegulaOT/IndividualSpecialOvertimeRequest/IndividualSpecialOvertimeRequest';
import { IndividualSpecialOvertimeRequestTestCases as TestCases } from '../../../../testData/TimeAttendance/RegulaOT/IndividualSpecialOvertimeRequest/IndividualSpecialOvertimeRequest.testdata';

test.describe.serial('TimeAttendance - Regular OT - Individual Special OT Request', () => {
  let loginPage: LoginPage;
  let ta: TimeAttendancePage;

  test.beforeEach(async ({ page }) => {
    test.setTimeout(120_000);

    loginPage = new LoginPage(page);
    ta = new TimeAttendancePage(page);

    await loginPage.login();
    await ta.openTimeAttendanceModule();
  });

  test(TestCases[0].id, async () => {
    const tc = TestCases[0];

    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);

    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);

    await ta.save();
  });

  test(TestCases[1].id, async () => {
    const tc = TestCases[1];

    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);

    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);

    await ta.save();
  });

  test(TestCases[2].id, async () => {
    const tc = TestCases[2];

    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);

    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);

    await ta.save();
  });

  test(TestCases[3].id, async () => {
    const tc = TestCases[3];

    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);

    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);

    await ta.save();
  });

  test(TestCases[4].id, async () => {
    const tc = TestCases[4];

    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);

    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);

    await ta.save();
  });

  test(TestCases[5].id, async () => {
    const tc = TestCases[5];

    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);
    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);

    await ta.save();
  });

  test(TestCases[6].id, async () => {
    const tc = TestCases[6];

    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);
    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);
    await ta.save();
  });

  test(TestCases[7].id, async () => {
    const tc = TestCases[7];

    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);
    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);
    await ta.save();
  });

  test(TestCases[8].id, async () => {
    const tc = TestCases[8];
    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);
    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);
    await ta.save();
  });

  test(TestCases[9].id, async () => {
    const tc = TestCases[9];
    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);
    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);
    await ta.save();
  });

  test(TestCases[10].id, async () => {
    const tc = TestCases[10];
    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);
    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);
    await ta.save();
  });

  test(TestCases[11].id, async () => {
    const tc = TestCases[11];
    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);
    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);
    await ta.save();
  });

  test(TestCases[12].id, async () => {
    const tc = TestCases[12];
    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);
    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);
    await ta.save();
  });

  test(TestCases[13].id, async () => {
    const tc = TestCases[13];
    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);
    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);
    await ta.save();
  });

  test(TestCases[14].id, async () => {
    const tc = TestCases[14];
    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);
    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);
    await ta.save();
  });

  test(TestCases[15].id, async () => {
    const tc = TestCases[15];
    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);
    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);
    await ta.save();
  });

  test(TestCases[16].id, async () => {
    const tc = TestCases[16];
    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);
    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);
    await ta.save();
  });

  test(TestCases[17].id, async () => {
    const tc = TestCases[17];
    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);
    await ta.fillOTHours(tc.otHours); 

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);
    await ta.save();
  });

  test(TestCases[18].id, async () => {
    const tc = TestCases[18];
    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);
    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);
    await ta.save();
  });

  test(TestCases[19].id, async () => {
    const tc = TestCases[19];
    await ta.selectEmployeeByCode(tc.employee.employeeCode);
    await ta.selectStartDate(tc.date.start);
    await ta.selectEndDate(tc.date.end ?? tc.date.start);
    await ta.fillOTHours(tc.otHours);

    if (tc.amounts?.shiftOT !== undefined) await ta.fillShiftOT(String(tc.amounts.shiftOT));
    if (tc.amounts?.foodOT !== undefined) await ta.fillFoodOT(String(tc.amounts.foodOT));
    if (tc.amounts?.specialMoney !== undefined) await ta.fillSpecialMoney(String(tc.amounts.specialMoney));
    if (tc.remark) await ta.fillRemark(tc.remark);
    await ta.save();
  });
  
});
