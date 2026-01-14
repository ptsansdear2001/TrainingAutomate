import { Page, expect, selectors } from "@playwright/test";
import { url } from "../../../selecter/Login/login.selecter";
import { SelectorResignationNote } from "../../../selecter/Personnel/ResignationNote/ResignationNote";
import {
  dropdownSearchOption,
  resignData,
} from "../../../testData/Personnel/ResignationNote.ts/ResignationNote";

export class ResignationNote {
  constructor(private page: Page) {}

  async openWebPage() {
    await this.page.goto(url.UrlTiger);
    await expect(this.page).toHaveURL(url.UrlTiger);
  }

  async openResignModule() {
    await this.page
      .locator(SelectorResignationNote.EmployeeInformation)
      .hover();
    await this.page
      .locator(SelectorResignationNote.ResignationNoteButton)
      .click();
    await this.page.waitForTimeout(300);
  }

  async addResign() {
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.fill(
      SelectorResignationNote.EmployeeCode,
      resignData.employeeCode
    );
    await this.page.keyboard.press("Enter");

    //dropdown ประเภท

    await this.page.locator(SelectorResignationNote.ResignTypeDropdown).click();
    await this.page
      .locator(SelectorResignationNote.ResignTypeDropdownList, {
        hasText: resignData.resignType,
      })
      .click();

    await this.page
      .locator(SelectorResignationNote.ResignCauseDropdown)
      .click();
    await this.page
      .locator(SelectorResignationNote.ResignCauseDropdownList, {
        hasText: resignData.resignCause,
      })
      .click();

    await this.page.locator(SelectorResignationNote.SaveButton).click();
    await this.page.waitForTimeout(500);
    await this.page.reload();
  }

  async cancelResign() {
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.fill(
      SelectorResignationNote.EmployeeCode,
      resignData.employeeCode
    );
    await this.page.keyboard.press("Enter");

    //dropdown ประเภท

    await this.page.locator(SelectorResignationNote.ResignTypeDropdown).click();
    await this.page
      .locator(SelectorResignationNote.ResignTypeDropdownList, {
        hasText: resignData.resignType,
      })
      .click();
    await this.page
      .locator(SelectorResignationNote.ResignCauseDropdown)
      .click();

    await this.page
      .locator(SelectorResignationNote.ResignCauseDropdownList, {
        hasText: resignData.resignCause,
      })
      .click();

    await this.page.locator(SelectorResignationNote.CancelButton).click();
    await this.page.waitForTimeout(500);
  }

  async editResign() {
    await this.page.locator(SelectorResignationNote.Employee1).click();
    await this.page.locator(SelectorResignationNote.EditButton).click();
    //dropdown ประเภท

    await this.page.locator(SelectorResignationNote.ResignTypeDropdown).click();
    const ResignTypeOption = this.page.locator(
      SelectorResignationNote.ResignTypeDropdownList,
      {
        hasText: resignData.newResignType,
      }
    );

    // scroll ให้เห็น
    await ResignTypeOption.scrollIntoViewIfNeeded();

    // แล้ว click
    await ResignTypeOption.click();

    await this.page
      .locator(SelectorResignationNote.ResignCauseDropdown)
      .click();

    const ResignCauseOption = this.page.locator(
      SelectorResignationNote.ResignCauseDropdownList,
      {
        hasText: resignData.newResignCause,
      }
    );

    // scroll ให้เห็น
    await ResignCauseOption.scrollIntoViewIfNeeded();

    // แล้ว click
    await ResignCauseOption.click();

    await this.page
      .locator(SelectorResignationNote.ResignDate)
      .fill(resignData.newResignDate);

    await this.page.locator(SelectorResignationNote.SaveButton).click();
    await this.page.waitForTimeout(500);
  }

  async deleteResign() {
    await this.page.locator(SelectorResignationNote.Employee1).click();
    await this.page.locator(SelectorResignationNote.DeleteButton).click();

    const okButton = this.page.getByRole("button", { name: "OK" });
    await expect(okButton).toBeVisible();
    await okButton.click();

    await this.page.waitForTimeout(500);
  }

  async cancleDeleteResign() {
    await this.page.locator(SelectorResignationNote.Employee1).click();
    await this.page.locator(SelectorResignationNote.DeleteButton).click();

    const cancelButton = this.page.getByRole("button", { name: "Cancel" });
    await expect(cancelButton).toBeVisible();
    await cancelButton.click();

    await this.page.waitForTimeout(500);
  }

  async addSameEmployeeCode() {
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.fill(
      SelectorResignationNote.EmployeeCode,
      resignData.sameEmployeeCode
    );
    await this.page.keyboard.press("Enter");

    //dropdown ประเภท

    await this.page.locator(SelectorResignationNote.ResignTypeDropdown).click();
    const ResignTypeOption = this.page.locator(
      SelectorResignationNote.ResignTypeDropdownList,
      {
        hasText: resignData.resignType,
      }
    );

    // scroll ให้เห็น
    await ResignTypeOption.scrollIntoViewIfNeeded();

    // แล้ว click
    await ResignTypeOption.click();

    await this.page
      .locator(SelectorResignationNote.ResignCauseDropdown)
      .click();

    const ResignCauseOption = this.page.locator(
      SelectorResignationNote.ResignCauseDropdownList,
      {
        hasText: resignData.resignCause,
      }
    );

    // scroll ให้เห็น
    await ResignCauseOption.scrollIntoViewIfNeeded();

    // แล้ว click
    await ResignCauseOption.click();

    await this.page.locator(SelectorResignationNote.SaveButton).click();
    await this.page.waitForTimeout(500);
  }

  async addWrongEmployeeCode() {
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.fill(
      SelectorResignationNote.EmployeeCode,
      resignData.wrongEmployeeCode
    );
    await this.page.keyboard.press("Enter");

    //dropdown ประเภท

    await this.page.locator(SelectorResignationNote.ResignTypeDropdown).click();
    const ResignTypeOption = this.page.locator(
      SelectorResignationNote.ResignTypeDropdownList,
      {
        hasText: resignData.resignType,
      }
    );

    // scroll ให้เห็น
    await ResignTypeOption.scrollIntoViewIfNeeded();

    // แล้ว click
    await ResignTypeOption.click();

    await this.page
      .locator(SelectorResignationNote.ResignCauseDropdown)
      .click();

    const ResignCauseOption = this.page.locator(
      SelectorResignationNote.ResignCauseDropdownList,
      {
        hasText: resignData.resignCause,
      }
    );

    // scroll ให้เห็น
    await ResignCauseOption.scrollIntoViewIfNeeded();

    // แล้ว click
    await ResignCauseOption.click();

    await this.page.locator(SelectorResignationNote.SaveButton).click();
    await this.page.waitForTimeout(500);
  }

  async addResignWithoutResignCauseAndType() {
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.fill(
      SelectorResignationNote.EmployeeCode,
      resignData.employeeCode
    );
    await this.page.keyboard.press("Enter");

    await this.page.locator(SelectorResignationNote.SaveButton).click();
    await this.page.waitForTimeout(500);
  }

  async enterInvalidResignCauseAndType() {
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.fill(
      SelectorResignationNote.EmployeeCode,
      resignData.employeeCode
    );
    await this.page.keyboard.press("Enter");

    await this.page
      .locator(SelectorResignationNote.ResignTypeInput)
      .fill(`${resignData.wrongResignType}`);
    await this.page
      .locator(SelectorResignationNote.ResignCauseInput)
      .fill(`${resignData.wrongResignCause}`);
    await this.page.waitForTimeout(500);
    await this.page.locator(SelectorResignationNote.SaveButton).click();
    await this.page.waitForTimeout(500);
  }

  async addResignNoSave() {
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.fill(
      SelectorResignationNote.EmployeeCode,
      resignData.employeeCode
    );
    await this.page.keyboard.press("Enter");

    //dropdown ประเภท

    await this.page.locator(SelectorResignationNote.ResignTypeDropdown).click();
    const ResignTypeOption = this.page.locator(
      SelectorResignationNote.ResignTypeDropdownList,
      {
        hasText: resignData.resignType,
      }
    );

    // scroll ให้เห็น
    await ResignTypeOption.scrollIntoViewIfNeeded();

    // แล้ว click
    await ResignTypeOption.click();

    await this.page
      .locator(SelectorResignationNote.ResignCauseDropdown)
      .click();

    const ResignCauseOption = this.page.locator(
      SelectorResignationNote.ResignCauseDropdownList,
      {
        hasText: resignData.resignCause,
      }
    );

    // scroll ให้เห็น
    await ResignCauseOption.scrollIntoViewIfNeeded();

    // แล้ว click
    await ResignCauseOption.click();

    await this.page.goBack();
    await this.page.waitForTimeout(500);
  }

  async ShowOnlyResign() {
    await this.page.locator(SelectorResignationNote.ShowOnlyResign).click();
    await this.page.waitForTimeout(500);
  }

  async addResignInResignOnly() {
    await this.page.locator(SelectorResignationNote.ShowOnlyResign).click();
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.fill(
      SelectorResignationNote.EmployeeCode,
      resignData.employeeCode
    );
    await this.page.keyboard.press("Enter");

    //dropdown ประเภท

    await this.page.locator(SelectorResignationNote.ResignTypeDropdown).click();
    const ResignTypeOption = this.page.locator(
      SelectorResignationNote.ResignTypeDropdownList,
      {
        hasText: resignData.resignType,
      }
    );

    // scroll ให้เห็น
    await ResignTypeOption.scrollIntoViewIfNeeded();

    // แล้ว click
    await ResignTypeOption.click();

    await this.page
      .locator(SelectorResignationNote.ResignCauseDropdown)
      .click();

    const ResignCauseOption = this.page.locator(
      SelectorResignationNote.ResignCauseDropdownList,
      {
        hasText: resignData.resignCause,
      }
    );

    // scroll ให้เห็น
    await ResignCauseOption.scrollIntoViewIfNeeded();

    // แล้ว click
    await ResignCauseOption.click();

    await this.page.locator(SelectorResignationNote.SaveButton).click();
    await this.page.waitForTimeout(500);
  }

  async editResignInResignOnly() {
    await this.page.locator(SelectorResignationNote.ShowOnlyResign).click();
    await this.page.locator(SelectorResignationNote.EditButton).click();

    await this.page.waitForTimeout(500);
  }

  async deleteResignInResignOnly() {
    await this.page.locator(SelectorResignationNote.ShowOnlyResign).click();
    await this.page.locator(SelectorResignationNote.DeleteButton).click();

    const okButton = this.page.getByRole("button", { name: "OK" });
    await expect(okButton).toBeVisible();
    await okButton.click();

    await this.page.waitForTimeout(500);
  }

  async searchResignInResignOnly() {
    await this.page.locator(SelectorResignationNote.ShowOnlyResign).click();
    await this.page.locator(SelectorResignationNote.SearchButton).click();

    const frame = this.page.frameLocator(
      SelectorResignationNote.ModalSearchIframe
    );
    const link = frame.locator(`a:has-text("${resignData.employeeCode}")`);

    await link.waitFor({ state: "visible" });
    await link.click();
  }

  async searchResignEmp() {
    await this.page.locator(SelectorResignationNote.SearchButton).click();
  }

  async searchResignEmpDropdown() {
    await this.page.locator(SelectorResignationNote.SearchButton).click();

    const frame = this.page.frameLocator(
      SelectorResignationNote.ModalSearchIframe
    );

    await frame.locator(SelectorResignationNote.ModalSearchDropdown).click();

    const option = frame.locator(".rcbItem", {
      hasText: dropdownSearchOption.employeeNameThai,
    });

    await option.waitFor({ state: "visible" });
    await option.click();
  }

  async searchResignEmpButton() {
    await this.page.locator(SelectorResignationNote.SearchButton).click();
    const frame = this.page.frameLocator(
      SelectorResignationNote.ModalSearchIframe
    );
    await frame
      .locator(SelectorResignationNote.ModalSearchInput)
      .fill(resignData.employeeCode);
    await frame.locator(SelectorResignationNote.ModalSearchButton).click();
  }

  async selectResignEmp() {
    await this.page.locator(SelectorResignationNote.SearchButton).click();

    const frame = this.page.frameLocator(
      SelectorResignationNote.ModalSearchIframe
    );
    const link = frame.locator(`a:has-text("${resignData.employeeCode}")`);

    await link.waitFor({ state: "visible" });
    await link.click();
  }

  async searchEmp() {
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.locator(SelectorResignationNote.EmployeeCodeSearch).click();
  }

  async searchEmpDropdown() {
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.locator(SelectorResignationNote.EmployeeCodeSearch).click();

    const frame = this.page.frameLocator(
      SelectorResignationNote.ModalSearchIframe
    );

    await frame.locator(SelectorResignationNote.ModalSearchDropdown).click();

    const option = frame.locator(".rcbItem", {
      hasText: dropdownSearchOption.employeeNameThai,
    });

    await option.waitFor({ state: "visible" });
    await option.click();
  }

  async searchEmpButton() {
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.locator(SelectorResignationNote.EmployeeCodeSearch).click();

    const frame = this.page.frameLocator(
      SelectorResignationNote.ModalSearchIframe
    );
    await frame
      .locator(SelectorResignationNote.ModalSearchInput)
      .fill(resignData.employeeCode);
    await frame.locator(SelectorResignationNote.ModalSearchButton).click();
  }

  async selectEmployeeCode() {
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.locator(SelectorResignationNote.EmployeeCodeSearch).click();

    const frame = this.page.frameLocator(
      SelectorResignationNote.ModalSearchIframe
    );
    const link = frame.locator(`a:has-text("${resignData.employeeCode}")`);

    await link.waitFor({ state: "visible" });
    await link.click();
  }

  async closeSearchModal() {
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.locator(SelectorResignationNote.EmployeeCodeSearch).click();

    await this.page
      .locator(SelectorResignationNote.ModalSearchCloseButton)
      .click();
  }

  async addResignType() {
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.locator(SelectorResignationNote.ResignTypeEdit).click();

    const frame = this.page.frameLocator(
      SelectorResignationNote.ModalSearchIframe
    );

    await frame.locator(SelectorResignationNote.AddResignType).click();

    await frame
      .locator(SelectorResignationNote.ThaiInputResignType)
      .fill(resignData.th_InputResignType);
    await frame
      .locator(SelectorResignationNote.ThaiInputResignType)
      .press("Enter");

    await frame
      .locator(SelectorResignationNote.EnglishInputResignType)
      .fill(resignData.eng_InputResignType);
    await frame.locator(SelectorResignationNote.SaveResignType).click();
  }

  async cancelResignType() {
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.locator(SelectorResignationNote.ResignTypeEdit).click();

    const frame = this.page.frameLocator(
      SelectorResignationNote.ModalSearchIframe
    );

    await frame.locator(SelectorResignationNote.AddResignType).click();

    await frame
      .locator(SelectorResignationNote.ThaiInputResignType)
      .fill(resignData.th_InputResignType);
    await frame
      .locator(SelectorResignationNote.ThaiInputResignType)
      .press("Enter");

    await frame
      .locator(SelectorResignationNote.EnglishInputResignType)
      .fill(resignData.eng_InputResignType);
    await frame.locator(SelectorResignationNote.CancelResignType).click();
  }

  async editResignType() {
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.locator(SelectorResignationNote.ResignTypeEdit).click();

    const frame = this.page.frameLocator(
      SelectorResignationNote.ModalSearchIframe
    );

    const row = frame
      .locator(SelectorResignationNote.ResignTypeTable, {
        has: frame.locator("td div", { hasText: resignData.th_InputResignType }),
      })
      .first();

    const cell = row.locator(SelectorResignationNote.ResignTypeCell);
    await cell.click();

    // 2️⃣ input จะโผล่ใน rgBatchContainer
    const input = cell.locator(SelectorResignationNote.ResignTypeEditInput);
    // 3️⃣ clear + fill
    await input.fill(resignData.th_editResignType);
    await input.press("Enter");
    await frame.locator(SelectorResignationNote.SaveResignType).click();
  }

  async deleteResignType() {
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.locator(SelectorResignationNote.ResignTypeEdit).click();

    const frame = this.page.frameLocator(
      SelectorResignationNote.ModalSearchIframe
    );

    const row = frame
      .locator(SelectorResignationNote.ResignTypeTable, {
        has: frame.locator("td div", {
          hasText: resignData.th_deleteResignType,
        }),
      })
      .first();

    await row.waitFor({ state: "visible" });
    await row.scrollIntoViewIfNeeded();
    await row.locator(SelectorResignationNote.ResignTypeDeleteButton).click();

    const okButton = this.page.getByRole("button", { name: "ตกลง" });
    await expect(okButton).toBeVisible();
    await okButton.click();

    await frame.locator(SelectorResignationNote.SaveResignType).click();
  }

  async cancelDeleteResignType() {
    await this.page.locator(SelectorResignationNote.AddButton).click();
    await this.page.locator(SelectorResignationNote.ResignTypeEdit).click();

    const frame = this.page.frameLocator(
      SelectorResignationNote.ModalSearchIframe
    );

    const row = frame
      .locator(SelectorResignationNote.ResignTypeTable, {
        has: frame.locator("td div", {
          hasText: resignData.th_deleteResignType,
        }),
      })
      .first();

    await row.waitFor({ state: "visible" });
    await row.scrollIntoViewIfNeeded();
    await row.locator(SelectorResignationNote.ResignTypeDeleteButton).click();

    const okButton = frame.getByRole("button", { name: "ยกเลิก" });
    await expect(okButton).toBeVisible();
    await okButton.click();
  }
}
