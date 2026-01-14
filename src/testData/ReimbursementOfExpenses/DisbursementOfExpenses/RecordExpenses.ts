export const expenseData = {
  employeeId: "B02", // รหัสพนักงาน
  usageDate: "14/01/2569", // วันที่ใช้ (แปลงจาก 2569 เป็น ค.ศ. 2026)
  employeeInfo: "บี ศูนย์สอง", // ข้อมูลพนักงาน
  expenseType: "ค่าเดินทาง", // ประเภทค่าใช้จ่าย
  amount: 100.00, // จำนวนเงินเบิก
  occurrence: 1, // ครั้งที่
  totalClaimed: 0.00, // ยอดรวมที่เบิก (Calculated Field)
  recordedDate: "14/01/2569", // วันที่บันทึก
  payerId: "6700000001", // ผู้จ่าย (รหัส)
  payerName: "สมศรี ใจดีมาก", // ชื่อผู้จ่าย
  attachment: null, // แนบไฟล์ (จากข้อมูลระบุเป็น "-")
  description: "ค่ารถแท็กซี่ไปติดต่อลูกค้าที่บริษัท ABC 2" // รายละเอียด
};

// หากต้องการ Interface สำหรับกำหนด Type ของข้อมูลชุดนี้
export interface IExpenseType {
  employeeId: string;
  usageDate: Date;
  employeeInfo: string;
  expenseType: string;
  amount: number;
  occurrence: number;
  totalClaimed: number;
  recordedDate: Date;
  payerId: string;
  payerName: string;
  attachment: File | null;
  description: string;
}