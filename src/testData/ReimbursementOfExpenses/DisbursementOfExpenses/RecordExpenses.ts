export const expenseData = {
  employeeId: "B02",
  futureusageDate: '18/01/2569',
  usageDate: "14/01/2569",
  oldusageDate: "9/01/2569",
  employeeInfo: "บี ศูนย์สอง",
  option_Travel: "ค่าเดินทาง",
  option_Medicine : "ค่ายา", 
  minimum_amount: "0.75",
  amount: "100.00",
  amount_emoji: "😀",
  negative_mounts : "-200",
  Decimal : "100.25",
  occurrence: "",
  totalClaimed: 0.00,
  recordedDate: "14/01/2569",
  oldrecordedDate: "9/01/2569",
  lastyearrecordedDate: "14/01/2568",
  payerId: "6700000001",
  payerName: "สมศรี ใจดีมาก",
  
  // แก้เป็น String ชื่อไฟล์เดียว
  attachment_jpg: "",
  attachment_pdf: "",
  
  description: "ค่ารถแท็กซี่ไปติดต่อลูกค้าที่บริษัท ABC 2",
  descriptionFullQuota:  "รวมค่าวัสดุและอุปกรณ์ติดตั้งพื้นฐาน ได้แก่ สายไฟเกรด A, ท่อร้อยสาย, เบรกเกอร์ และชุดน็อตยึดมาตรฐาน มอก. เพื่อความปลอดภัยและความทนทานในการใช้งานระยะยาว",
  boolTure: true,
  boolFalse: false,
  
};

// หากต้องการ Interface สำหรับกำหนด Type ของข้อมูลชุดนี้
export interface IExpenseType {
  employeeId: string;
  usageDate: string;
  employeeInfo: string;
  option_Travel: string;
  option_Medicine: string;
  amount: string;
  occurrence: string;
  totalClaimed: number;
  recordedDate: string;
  payerId: string;
  payerName: string;
  attachment_jpg: string;
  attachment_pdf: string;
  description: string;
}