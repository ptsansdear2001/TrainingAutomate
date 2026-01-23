export interface TransferEmpData {
  transferDetails: {
    employeeId: string;      // รหัสพนักงาน (ใช้ String ป้องกันเลข 0 นำหน้าหาย)
    adjustmentTopic: string; // หัวข้อการปรับ
    effectiveDate: string; 
    efftivedate2: string;  // วันที่มีผล
    targetPosition: string;  // ปรับเป็น (QA)
    targetPosition2: string;  // ปรับเป็น (ควอนตั้ม)
    targetoption3: string;
    remark: string;
    remark2: string;
    searchempty: string;         // หมายเหตุ (ใส่ ? คือมีหรือไม่มีก็ได้)
  };
  employeeProfile: {
    idCard: string;
    nameTh: string;
    surnameTh: string;
    nameEn: string;
    surnameEn: string;
    testletter: string;
  };
  searchdrop: {
    searchdropnumber: string;
    searchdropthainame: string;
    searchdropthailastname: string;
    searchdropengname: string;
    searchdropenglastname: string;
    searchdropcode: string;
  };
}

export const testData: TransferEmpData = {

  transferDetails: {
    employeeId: 'ุ66006700011',
    adjustmentTopic: 'ฝ่าย',
    effectiveDate: '28/1/2569',
    efftivedate2: '30/1/2569',
    targetPosition: 'QA',
    targetPosition2: 'ฝ่ายควอนตัม',
    targetoption3: 'ฝ่ายซิงกูลาริตี้',
    remark: 'test',
    remark2: 'testedit',
    searchempty: ''
  },
  employeeProfile: {
    idCard: '1819800007629',
    nameTh: 'พลวัต',
    surnameTh: 'ช่วยบำรุง',
    nameEn: 'Phonlawat',
    surnameEn: 'chuaibamrung',
    testletter: 'PhOnlaWAT',
  },
  searchdrop: {
    searchdropnumber: 'รหัสพนักงาน',
    searchdropthainame: 'ชื่อไทย',
    searchdropthailastname: 'นามสกุลไทย',
    searchdropengname: 'ชื่ออังกฤษ',
    searchdropenglastname: 'นามสกุลอังกฤษ',
    searchdropcode: 'รหัสบัตรประชาชน'
  }
};

