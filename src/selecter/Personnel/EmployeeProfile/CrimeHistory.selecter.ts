import { selectors } from "@playwright/test";

export const Crime = {

//menu
EmployeeInformation : "#leftbar1_divPersonal",//เมนูข้อมูลพนักงาน
EmployeeInformation1 : "#leftbar1_lblleft_Usermenu_Personal",//เมนูข้อมูลพนักงานย่อย
EmpDropdown : "#ctl00_dropdown_ddlMenu > span",//dropdown พนักงาน
CrimeHistoryMenuSpan : "//*[@id='ctl00_dropdown_ddlMenu_DropDown']/div/ul/li[8]",//เมนูประวัติอาชญากรรม 


//add Crime
plusbutton :"//*[@id='ctl00_ContentTitleRight_RadToolBar1']/div/div/div/ul/li[1]/a",//+
EmployeeNumber : "#MainContent_Txt_PersonCode",//รหัสพนักงาน
selectemp : "#ctl00_MainContent_btnSearch",//เลือกพนักงาน
selectcrimetype : "//*[@id='ctl00_MainContent_Combo_CrimeType']/span",//ประเภทความผิด
selecttype1 : "//*[@id='ctl00_MainContent_Combo_CrimeType_DropDown']/div[2]/ul/li[7]",//ตัวเลือกประเภทความผิดลักทรัพย์นายจ้าง
// selecttype1 : "//*[@id='ctl00_MainContent_Combo_CrimeType_DropDown']/div[2]/ul/li[9]",//ตัวเลือกประเภทความผิดเรียกค่าไถ่
filldate : "#MainContent_txtSaveDate",//วันที่กระทำความผิด
savebutton : "//*[@id='ctl00_ContentTitleRight_RadToolBar1']/div/div/div/ul/li[4]/a",//บันทึก


//update
selectname : "//*[@id='ctl00_MainContent_RadTreeView1']/ul/li[2]/div/div",//เลือกชื่อพนักงาน
updatebutton : "//*[@id='ctl00_ContentTitleRight_RadToolBar1']/div/div/div/ul/li[2]/a",//ปุ่มแก้ไข
seletctcrime : "//*[@id='ctl00_MainContent_GridShowdata_ctl00__0']/td[2]",//เลือกประเภทความผิดอันที่ต้องการแก้ไข
selectdropdown : "//*[@id='ctl00_MainContent_Combo_CrimeType']/span",//dropdown ประเภทความผิดอันใหม่
updatecrimetype : "//*[@id='ctl00_MainContent_Combo_CrimeType_DropDown']/div[2]/ul/li[5]",//ประเภทความผิดอันใหม่ ชิงทรัพทย์
// seve : "#ctl00_ContentTitleRight_RadToolBar1 > div > div > div > ul > li[4]",//บันทึก

//deleteemp
selectemployee : "//*[@id='ctl00_MainContent_RadTreeView1']/ul/li[5]/div/div",//เลือกพนักงาน
deleteemp : "//*[@id='ctl00_ContentTitleRight_RadToolBar1']/div/div/div/ul/li[3]/a",//ลบ
confirmdelete : "//*[@id='confirm1770343488588_content']/div/div[2]/button[1]",//ยืนยันลบ

//deletecrieme
selectcrimeemp : "#ctl00_MainContent_RadTreeView1>  ul > li[5] > div > div",//เลือกพนักงาน
selectcrimes : "#ctl00_MainContent_GridShowdata_ctl00__1 > td[2]",//เลือกประวัติอาชญากรรม
deletecrime : "#ctl00_ContentTitleRight_RadToolBar1 > div > div > div > ul > li[3]",//ลบประวัติอาชญากรรม
confirmdeletecrime : "#ctl00_ContentTitleRight_RadToolBar1 > div > div > div > ul > li[3]",//ยืนยันลบประวัติอาชญากรรม

};