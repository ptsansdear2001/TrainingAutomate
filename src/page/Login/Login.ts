
import { Page, expect } from '@playwright/test';
import { selectorslogin, url } from '../../selecter/Login/login.selecter';
import { datalogin } from '../../testData/Login/Login.Data';



export class LoginPage {
  constructor(private page: Page) { }

  async login() {
    await this.page.goto(url.UrlTiger);
    await this.page.locator(selectorslogin.Username).fill(datalogin.user);
    await this.page.locator(selectorslogin.Password).fill(datalogin.pass);
    await this.page.locator(selectorslogin.LoginButton).click();
    await this.page.locator(selectorslogin.Combutton).click();
  
  }





}
