interface ResignData {
  // ข้อมูลพื้นฐาน
  nameTH: string;
  lastNameTH: string;
  nameEN: string;
  lastNameEN: string;
  employeeCode: string;
  sameEmployeeCode: string;
  wrongEmployeeCode: string;
  cardID: string;

  resignType: string;
  resignCause: string;
  newResignType: string;
  newResignCause: string;

  wrongResignType: string;
  wrongResignCause: string;

  resignDate: string;
  newResignDate: string;
  saveDate: string;
  resignDetail: string;

  th_InputResignType: string;
  th_InputResignCause: string;
  eng_InputResignType: string;
  eng_InputResignCause: string;

  th_deleteResignType: string;
  eng_deleteResignType: string;
  th_deleteResignCause: string;
  eng_deleteResignCause: string;

  th_editResignType: string;
  eng_editResignType: string;
  th_editResignCause: string;
  eng_editResignCause: string;

  // ข้อมูลประเภทพนักงาน
  //   employeeType: string;
  //   level: string;
  //   payrollType: string;
  //   permanentDate: string;
}

export const resignData: ResignData = {
  nameTH: "จิรวัฒน์",
  lastNameTH: "ชนะสิทธิ์",
  nameEN: "Jirawat",
  lastNameEN: "Chanasit",
  employeeCode: "66006700012",
  sameEmployeeCode: "66006700012",
  wrongEmployeeCode: "660000000012",
  cardID: "66006700012",
  resignDate: "06/01/2569",
  newResignDate: "05/01/2569",
  saveDate: "06/01/2569",
  resignDetail: "ลาออก",
  resignType: "เลิกจ้าง",
  resignCause: "-",
  wrongResignType: "000",
  wrongResignCause: "000",
  newResignType: "ออก -",
  newResignCause: "-",
  th_InputResignType: "ลาออก1",
  eng_InputResignType: "Resignation1",
  th_InputResignCause: "ลาออก1",
  eng_InputResignCause: "Resignation1",

  th_editResignType: "ลาออก2",
  eng_editResignType: "Resignation1",
  th_editResignCause: "ลาออก2",
  eng_editResignCause: "Resignation1",

  th_deleteResignType: "ลาออก2",
  eng_deleteResignType: "Resignation1",
  th_deleteResignCause: "ลาออก2",
  eng_deleteResignCause: "Resignation1",
};

interface DropdownSearchOption {
  all: string;
  employeeCode: string;
  employeeNameThai: string;
  employeeNameEnglish: string;
  employeeLastnameThai: string;
  employeeLastnameEnglish: string;
  cardID: string;
}

export const dropdownSearchOption: DropdownSearchOption = {
  all: "ทั้งหมด",
  employeeCode: "รหัสพนักงาน",
  employeeNameThai: "ชื่อไทย",
  employeeNameEnglish: "ชื่ออังกฤษ",
  employeeLastnameThai: "นามสกุลไทย",
  employeeLastnameEnglish: "นามสกุลอังกฤษ",
  cardID: "เลขบัตรประชาชน",
};
