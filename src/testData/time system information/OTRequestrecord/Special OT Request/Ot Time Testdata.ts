export type SpecialOTScope =
  | { type: 'ทั้งหมด' }
  | { type: 'รหัสพนักงาน'; from: string; to: string }
  | { type: 'เลือกกลุ่มข้อมูล'; groupName: string; from: string; to: string };

export type SpecialOTForm = {
  startDate: string;

  // OT
  ot1?: string;
  ot15?: string;
  ot2?: string;
  ot25?: string;
  ot3?: string;
  ot6?: string;

  // ค่าอื่น ๆ
  otAmount?: string;
  otFood?: string;
  specialMoney?: string;
  remark?: string;
};

export type SpecialOTCase = {
  id: string;
  title: string;

  // Login
  username: string;
  password: string;

  // Flow: เมนู + ประเภท OT
  otType: 'การขอโอทีแบบพิเศษ';

  // เงื่อนไขฝั่งซ้าย (ขอบเขต)
  scope: SpecialOTScope;

  // กรอกฟอร์ม
  form: SpecialOTForm;

  // เลือกพนักงาน (เอา string จบ)
  employee: string;
};

export const SpecialOTTestCases = [
  {
    id: 'TC01',
    title: 'ทั้งหมด + OT1/OT1.5 + พนักงาน 66006700008',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot1: '05:00',
      ot15: '05:00',
    },
    employee: '66006700008',
  },

  {
    id: 'TC02',
    title: 'รหัสพนักงาน + OT1/OT1.5',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: {
      type: 'รหัสพนักงาน',
      from: '<<EMP_FROM>>',
      to: '<<EMP_TO>>',
    },
    form: {
      startDate: '28/02/2569',
      ot1: '05:00',
      ot15: '05:00',
    },
    employee: '66006700010',
  },

  {
    id: 'TC03',
    title: 'เลือกกลุ่มข้อมูล + OT3 + ค่า/อาหาร/เงินพิเศษ',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: {
      type: 'เลือกกลุ่มข้อมูล',
      groupName: 'สถานที่ทำงาน',
      from: 'BKK-TKS-42 ไทเกอร์ซอฟท์ 1998 จำกัด',
      to: 'BKK-TKS-42 ไทเกอร์ซอฟท์ 1998 จำกัด',
    },
    form: {
      startDate: '28/02/2569',
      ot3: '03:00',
      otAmount: '500',
      otFood: '200',
      specialMoney: '200',
    },
    employee: '6700000001',
  },

  {
    id: 'TC04',
    title: 'ทั้งหมด + OT1',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot1: '05:00',
    },
    employee: '11042',
  },

  {
    id: 'TC05',
    title: 'ทั้งหมด + OT1.5',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot15: '05:00',
    },
    employee: 'A01',
  },

  {
    id: 'TC06',
    title: 'ทั้งหมด + OT2',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot2: '05:00',
    },
    employee: 'A02',
  },

  {
    id: 'TC07',
    title: 'ทั้งหมด + OT2.5',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot25: '05:00',
    },
    employee: 'A03',
  },

  {
    id: 'TC08',
    title: 'ทั้งหมด + OT3',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot3: '05:00',
    },
    employee: 'A04',
  },

  {
    id: 'TC09',
    title: 'ทั้งหมด + OT6',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot6: '05:00',
    },
    employee: 'A05',
  },

  {
    id: 'TC10',
    title: 'ทั้งหมด + ค่ากะโอที',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      otAmount: '500',
    },
    employee: 'A08',
  },

  {
    id: 'TC11',
    title: 'ทั้งหมด + ค่าอาหารโอที',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      otFood: '500',
    },
    employee: 'A09',
  },

  {
    id: 'TC12',
    title: 'ทั้งหมด + เงินพิเศษ',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      specialMoney: '500',
    },
    employee: 'A10',
  },

  {
    id: 'TC13',
    title: 'ทั้งหมด + OT1 + ค่ากะโอที',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot1: '05:00',
      otAmount: '500',
    },
    employee: 'B01',
  },

  {
    id: 'TC14',
    title: 'ทั้งหมด + OT1.5 + ค่ากะโอที',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot15: '05:00',
      otAmount: '500',
    },
    employee: 'B02',
  },

  {
    id: 'TC15',
    title: 'ทั้งหมด + OT2 + ค่ากะโอที',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot2: '05:00',
      otAmount: '500',
    },
    employee: 'B03',
  },

  {
    id: 'TC16',
    title: 'ทั้งหมด + OT2.5 + ค่ากะโอที',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot25: '05:00',
      otAmount: '500',
    },
    employee: 'B04',
  },

  {
    id: 'TC17',
    title: 'ทั้งหมด + OT3 + ค่ากะโอที',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot3: '05:00',
      otAmount: '500',
    },
    employee: 'B05',
  },

  {
    id: 'TC18',
    title: 'ทั้งหมด + OT1 + ค่ากะโอที + ค่าอาหาร',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot1: '05:00',
      otAmount: '500',
      otFood: '1000',
    },
    employee: 'B06',
  },

  {
    id: 'TC19',
    title: 'ทั้งหมด + OT1.5 + ค่ากะโอที + ค่าอาหาร',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot15: '05:00',
      otAmount: '500',
      otFood: '1000',
    },
    employee: 'B07',
  },

  {
    id: 'TC20',
    title: 'ทั้งหมด + OT2 + ค่ากะโอที + ค่าอาหาร',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot2: '05:00',
      otAmount: '500',
      otFood: '1000',
    },
    employee: 'B08',
  },

  {
    id: 'TC21',
    title: 'ทั้งหมด + OT2.5 + ค่ากะโอที + ค่าอาหาร',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot25: '05:00',
      otAmount: '500',
      otFood: '1000',
    },
    employee: 'B09',
  },

  {
    id: 'TC22',
    title: 'ทั้งหมด + OT3 + ค่ากะโอที + ค่าอาหาร',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot3: '05:00',
      otAmount: '500',
      otFood: '1000',
    },
    employee: 'B10',
  },

  {
    id: 'TC23',
    title: 'ทั้งหมด + OT6 + ค่ากะโอที + ค่าอาหาร',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot6: '05:00',
      otAmount: '500',
      otFood: '1000',
    },
    employee: 'C01',
  },

  {
    id: 'TC24',
    title: 'ทั้งหมด + OT1.5 + ค่ากะโอที + ค่าอาหาร + เงินพิเศษ',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot15: '05:00',
      otAmount: '500',
      otFood: '1000',
      specialMoney: '1000',
    },
    employee: 'C02',
  },

  {
    id: 'TC25',
    title: 'ทั้งหมด + OT2 + ค่ากะโอที + ค่าอาหาร + เงินพิเศษ',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot2: '05:00',
      otAmount: '500',
      otFood: '1000',
      specialMoney: '1000',
    },
    employee: 'C03',
  },

  {
    id: 'TC26',
    title: 'ทั้งหมด + OT2.5 + ค่ากะโอที + ค่าอาหาร + เงินพิเศษ',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot25: '05:00',
      otAmount: '500',
      otFood: '1000',
      specialMoney: '1000',
    },
    employee: 'C04',
  },

  {
    id: 'TC27',
    title: 'ทั้งหมด + OT3 + ค่ากะโอที + ค่าอาหาร + เงินพิเศษ',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot3: '05:00',
      otAmount: '500',
      otFood: '1000',
      specialMoney: '1000',
    },
    employee: 'C05',
  },

  {
    id: 'TC28',
    title: 'ทั้งหมด + OT6 + ค่ากะโอที + ค่าอาหาร + เงินพิเศษ',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot6: '05:00',
      otAmount: '500',
      otFood: '1000',
      specialMoney: '1000',
    },
    employee: 'C06',
  },

  {
    id: 'TC29',
    title: 'ทั้งหมด + OT6 + ค่ากะโอที + ค่าอาหาร + หมายเหตุ',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '28/02/2569',
      ot6: '05:00',
      otAmount: '500',
      otFood: '1000',
      remark: 'ทำโอทีหลังทำงาน',
    },
    employee: 'C06',
  },
] as const;
