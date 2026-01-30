export type OTKey = 'ot1' | 'ot15' | 'ot2' | 'ot25' | 'ot3' | 'ot6';

export type SpecialOTTestCase = {
  id: string;
  credentials: {
    username: string;
    password: string;
  };
  employee: {
    employeeCode: number; // รหัสพนักงาน (ตัวเลข)
    thaiFullName: string;
  };
  date: {
    start: string; // DD/MM/YYYY
    end?: string; // DD/MM/YYYY
    onboardDate?: string; // DD/MM/YYYY
  };
  otHours?: Partial<Record<OTKey, string>>; // OT ต้องเป็น string เช่น "01.30"
  amounts?: {
    shiftOT?: number;
    foodOT?: number;
    specialMoney?: number;
  };
  remark?: string;
};

export function normalizeCase(tc: SpecialOTTestCase) {
  return {
    ...tc,
    date: {
      ...tc.date,
      end: tc.date.end ?? tc.date.start,
    },
  };
}

export const specialOTTestCases: SpecialOTTestCase[] = [
  {
    id: 'TC01_17-18JAN_ot15_0130',
    credentials: { username: 'admin', password: 'admin' },
    employee: { employeeCode: 66006700008, thaiFullName: 'ปัณณวัฒน์  กาลพัฒน์' },
    date: { start: '17/01/2026', end: '18/01/2026' },
    otHours: { ot15: '01.30' },
    amounts: { shiftOT: 600, foodOT: 100, specialMoney: 400 },
  },
  {
    id: 'TC02_30JAN_ot1_0200',
    credentials: { username: 'admin', password: 'admin' },
    employee: { employeeCode: 66006700008, thaiFullName: 'ปัณณวัฒน์  กาลพัฒน์' },
    date: { start: '30/01/2026', end: '30/01/2026' },
    otHours: { ot1: '02.00' },
    amounts: { shiftOT: 800, foodOT: 200, specialMoney: 400 },
  },
  {
    id: 'TC03_30JAN_ot1_0200_duplicate',
    credentials: { username: 'admin', password: 'admin' },
    employee: { employeeCode: 66006700008, thaiFullName: 'ปัณณวัฒน์  กาลพัฒน์' },
    date: { start: '30/01/2026', end: '30/01/2026' },
    otHours: { ot1: '02.00' },
    amounts: { shiftOT: 800, foodOT: 200, specialMoney: 400 },
  },
  {
    id: 'TC04_27JAN_ot25_0800',
    credentials: { username: 'admin', password: 'admin' },
    employee: { employeeCode: 66006700008, thaiFullName: 'ปัณณวัฒน์  กาลพัฒน์' },
    date: { start: '27/01/2026', end: '27/01/2026' },
    otHours: { ot25: '08.00' },
    amounts: { shiftOT: 800, foodOT: 200, specialMoney: 400 },
  },
  {
    id: 'TC05_27JAN_ot25_0800_ot15_0300',
    credentials: { username: 'admin', password: 'admin' },
    employee: { employeeCode: 66006700008, thaiFullName: 'ปัณณวัฒน์  กาลพัฒน์' },
    date: { start: '27/01/2026', end: '27/01/2026' },
    otHours: { ot25: '08.00', ot15: '03.00' },
    amounts: { shiftOT: 800, foodOT: 200, specialMoney: 400 },
  },

  // ... ที่เหลือของคุณคงเดิมได้เลย

  {
    id: "TC06_27JAN_ot15_0300",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "27/01/2026", end: "27/01/2026" },
    otHours: { ot15: "03.00" },
    amounts: { shiftOT: 800, foodOT: 200, specialMoney: 400 },
  },
  {
    id: "TC07_13JAN_ot1_0200_withRemark",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "13/01/2026", end: "13/01/2026" },
    otHours: { ot1: "02.00" },
    amounts: { shiftOT: 800, foodOT: 200, specialMoney: 400 },
    remark: "พบลูกค้า",
  },
  {
    id: "TC08_14JAN_ot15_0130",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "14/01/2026", end: "14/01/2026" },
    otHours: { ot15: "01.30" },
    amounts: { shiftOT: 800, foodOT: 200, specialMoney: 400 },
  },
  {
    id: "TC09_15JAN_ot2_0300",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "15/01/2026", end: "15/01/2026" },
    otHours: { ot2: "03.00" },
    amounts: { shiftOT: 800, foodOT: 200, specialMoney: 400 },
  },
  {
    id: "TC10_16JAN_ot25_0400",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "16/01/2026", end: "16/01/2026" },
    otHours: { ot25: "04.00" },
    amounts: { shiftOT: 800, foodOT: 200, specialMoney: 400 },
  },
  {
    id: "TC11_19JAN_ot3_0600",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "19/01/2026", end: "19/01/2026" },
    otHours: { ot3: "06.00" },
    amounts: { shiftOT: 800, foodOT: 200, specialMoney: 400 },
  },
  {
    id: "TC12_20JAN_ot6_0800_onboardSameDay",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "20/01/2026", onboardDate: "20/01/2026" },
    otHours: { ot6: "08.00" },
    amounts: { shiftOT: 800, foodOT: 200, specialMoney: 400 },
  },
  {
    id: "TC13_21JAN_ot1_0200_onboard22JAN",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "21/01/2026", onboardDate: "22/01/2026" },
    otHours: { ot1: "02.00" },
    amounts: { shiftOT: 800, foodOT: 200, specialMoney: 400 },
  },
  {
    id: "TC14_02FEB_ot15_0300_onboard03FEB",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "02/02/2026", onboardDate: "03/02/2026" },
    otHours: { ot15: "03.00" },
    amounts: { shiftOT: 800, foodOT: 200, specialMoney: 400 },
  },
  {
    id: "TC15_09-13FEB_ot1_0400_bigRemark",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "09/02/2026", onboardDate: "13/02/2026" },
    otHours: { ot1: "04.00" },
    amounts: { shiftOT: 1000, foodOT: 500, specialMoney: 500 },
    remark: "เที่ยวเกาะ  ดำน้ำ  ดูปะการัง ปีนเขา ตีแนด  เล่นบาส ตกปลา",
  },
  {
    id: "TC16_16-20FEB_ot1_0400_ot6_0400",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "16/02/2026", onboardDate: "20/02/2026" },
    otHours: { ot1: "04.00", ot6: "04.00" },
    amounts: { shiftOT: 1000, foodOT: 500, specialMoney: 500 },
    remark: "เที่ยวเกาะ  ดำน้ำ  ดูปะการัง ปีนเขา ตีแนด  เล่นบาส ตกปลา",
  },
  {
    id: "TC17_23-27FEB_ot1_0400_ot15_0300_ot6_0400",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "23/02/2026", onboardDate: "27/02/2026" },
    otHours: { ot1: "04.00", ot15: "03.00", ot6: "04.00" },
    amounts: { shiftOT: 1000, foodOT: 500, specialMoney: 500 },
    remark: "ดูหนัง ยิงนก ตกปลา  หาเห็ด เลี้ยงควาย",
  },
  {
    id: "TC18_02-06MAR_ot1_0200_ot15_0300_ot2_0400_ot25_0500",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "02/03/2026", onboardDate: "06/03/2026" },
    otHours: { ot1: "02.00", ot15: "03.00", ot2: "04.00", ot25: "05.00" },
    amounts: { shiftOT: 1000, foodOT: 500, specialMoney: 500 },
    remark: "ไปดูหน้างานที่ต่างจังหวัด",
  },
  {
    id: "TC19_09-13MAR_ot1_ot15_ot2_ot25_ot3",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "09/03/2026", onboardDate: "13/03/2026" },
    otHours: { ot1: "02.00", ot15: "03.00", ot2: "04.00", ot25: "05.00", ot3: "06.00" },
    amounts: { shiftOT: 1000, foodOT: 500, specialMoney: 500 },
    remark: "ไปดูหน้างานที่ต่างจังหวัด",
  },
  {
    id: "TC20_09-13MAR_ot1_ot15_ot2_ot25_ot3_ot6_0800",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "09/03/2026", onboardDate: "13/03/2026" },
    otHours: { ot1: "02.00", ot15: "03.00", ot2: "04.00", ot25: "05.00", ot3: "06.00", ot6: "08.00" },
    amounts: { shiftOT: 1000, foodOT: 500, specialMoney: 500 },
    remark: "ไปดูหน้างานที่ต่างจังหวัด",
  },
  {
    id: "TC21_09-13MAR_ot1_ot15_ot2_ot25_ot3_ot6_0800_installSoftware",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "09/03/2026", onboardDate: "13/03/2026" },
    otHours: { ot1: "02.00", ot15: "03.00", ot2: "04.00", ot25: "05.00", ot3: "06.00", ot6: "08.00" },
    amounts: { shiftOT: 1000, foodOT: 500, specialMoney: 500 },
    remark: "ติดตั้งซอฟต์แวร์",
  },
  // เคสยอดเงินพิเศษ 1000 และ OT6 = 04.00 (มีซ้ำในข้อมูล)
  {
    id: "TC22_09-13MAR_ot6_0400_specialMoney_1000_installSoftware",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "09/03/2026", onboardDate: "13/03/2026" },
    otHours: { ot1: "02.00", ot15: "03.00", ot2: "04.00", ot25: "05.00", ot3: "06.00", ot6: "04.00" },
    amounts: { shiftOT: 1000, foodOT: 500, specialMoney: 1000 },
    remark: "ติดตั้งซอฟต์แวร์",
  },

  // ข้อมูลท้าย ๆ ที่มีแค่ user/pass/employee/name (เคสกรอกไม่ครบ/validate)
  {
    id: "TC23_onlyEmployeeInfo_validate",
    credentials: { username: "admin", password: "admin" },
    employee: { employeeCode: 66006700008, thaiFullName: "ปัณณวัฒน์  กาลพัฒน์" },
    date: { start: "01/01/2026" }, // ตั้งค่า placeholder เพื่อไม่ให้ชน type (ปรับได้ตามระบบ)
  },
];

export const IndividualSpecialOvertimeRequestTestCases = specialOTTestCases;