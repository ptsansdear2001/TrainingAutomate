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
}

export const singlePersonalData: PersonalData = {
  title: 'นาย Mr.',
  nameTH: 'วิภาวี',
  lastNameTH: 'แสงทอง',
  nameEN: 'Wipawee',
  lastNameEN: 'Saengthong',
  employeeNumber: '089',
  personCardID: '089',
  startDate: '10/05/2568',

  employeeType: 'รายเดือน',
  level: 'C',
  payrollType: 'รายเดือน',
  permanentDate: '10/08/2568',

  dateOfBirth: '14/12/2540',
  gender: 'หญิง',
  identificationNumber: '3720400567891',
  maritalStatus: 'โสด'
};