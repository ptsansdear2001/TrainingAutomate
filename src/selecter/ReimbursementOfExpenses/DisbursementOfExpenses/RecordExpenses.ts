export const selectors_RecordExpenses = {
    // dashboard and sidebar
    "icon_Reimbursement": `//*[@id="leftbar1_lileft_Benefits"]/a`,
    "btn_AddExpense": `//*[@id="ctl00_ContentTitleRight_RadToolBar1"]/div/div/div/ul/li[1]/a`,

    // fill info
    "txt_EmployeeCode": `//*[@id="MainContent_Txt_PersonCode"]`,       // แก้จาก textbox_employeeId เป็น Employee Code
    "search_Employee" : `//*[@id="ctl00_MainContent_btnSearch1"]`,
    "date_DateUse": `//*[@id="MainContent_txtDateUse"]`,               // แก้จาก date_expenseDate เป็น Date Use
    "ddl_ExpensesType": `//*[@id="ctl00_MainContent_Combo_ExpensesType_Input"]`, // แก้จาก dropdownType เป็น Expenses Type
    "select_ExpensesTypeOption": `//*[@id="ctl00_MainContent_Combo_ExpensesType_DropDown"]/div[2]/ul/li[2]`, // ตัวเลือกใน Dropdown
    "txt_Value": `//*[@id="MainContent_TextBox2"]`,                    // แก้จาก number_input เป็น Value
    "date_SaveDate": `//*[@id="MainContent_txtDateSave"]`,             // แก้จาก date_recordedDate เป็น Save Date
    "txt_Payer": `//*[@id="MainContent_TextBox7"]`,                    // แก้จาก payer_id เป็น Payer
    "txt_Num" : `//*[@id="MainContent_TextBox6"]`,
    "search_Payer" : '#ctl00_MainContent_btnSearchPersonAdd > .flaticon-search',
    "Attach_file" : `//*[@id="ctl00_MainContent_RadAsyncUpload1"]`,
    "description" : '#MainContent_txtExpensesDetail',

    // select
    "ddl_SelectSpan": `(//span[contains(., 'select')])[3]`, 
    
    // Option
    "option_Travel": "role=cell[name='ค่าเดินทาง']",
    "option_Medicine": "role=cell[name='ค่ายา']",

    // toolbar
    "btn_Add": "role=link[name='การเบิกค่าใช้จ่าย']",
    "btn_Save": "role=link[name='บันทึก']",
    "btn_Update": "role=link[name='แก้ไข']",
    "btn_Del" : "role=link[name='ลบ']",
    "btn_Cancel" : "role=link[name='ยกเลิก']",

    // tab
    "tab_Record_Expenses" : `//*[@id="ctl00_MainContent_RadTabStrip1"]/div/ul/li[1]/span/span`,
    "tab_Expenses_History" : `//*[@id="ctl00_MainContent_RadTabStrip1"]/div/ul/li[1]/span/span`,

    // alaret 
    "btn_ok": "role=button[name='OK']",
};