export interface PersonalData {
  // ข้อมูลพื้นฐาน
  title: string;
  nameTH: string;
  lastNameTH: string;
  nameEN: string;
  lastNameEN: string;
  employeeNumber: string;
  personCardID: string;
  startDate: string;

  // ข้อมูลประเภทพนักงาน
  employeeType: string;
  level: string;
  payrollType: string;
  permanentDate: string;

  // ข้อมูลส่วนตัว
  dateOfBirth: string;
  gender: string;
  identificationNumber: string;
  maritalStatus: string;

  accidentType: string;
  accidentDate: string;
  accidentTime: string;
  accidentPlace: string;
  accidentAssetDamage: string;
  accidentPersonDamage: string;
  accidentRecordDate: string;
  injuredPart: string;
  accidentDamageValue?: string;
  accidentDetail?: string;
  accidentRemark?: string;
}

export const singlePersonalData: PersonalData = {
  title: 'นาย Mr.',
  nameTH: 'สมชาย',
  lastNameTH: 'สุดหล่อ',
  nameEN: 'Somchai',
  lastNameEN: 'sudlor',
  employeeNumber: '66006700014',
  personCardID: '089',
  startDate: '10/05/2568',

  employeeType: 'รายเดือน',
  level: 'C',
  payrollType: 'รายเดือน',
  permanentDate: '10/08/2568',

  dateOfBirth: '14/12/2540',
  gender: 'ชาย',
  identificationNumber: '3720400567891',
  maritalStatus: 'โสด',

  accidentType: 'โดนรถชน',
  accidentDate: '15/06/2567',
  accidentTime: '08:30',
  accidentPlace: 'รามอินทรา',
  accidentAssetDamage: 'กระจกแตก',
  accidentPersonDamage: 'ขาขวาหัก',
  accidentRecordDate: '16/06/2567',
  injuredPart: 'ขาขวา',
  accidentDamageValue: '15000',
  accidentDetail: 'กระดูกขาขวาหัก',
  accidentRemark: 'แจ้งประกันแล้ว รอเคลม',
  
};
