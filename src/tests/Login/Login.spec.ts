import { test, expect } from '@playwright/test';

import { LoginPage as Login } from '../../page/Login/Login.ts';

// test.use({ headless: false, viewport: { width: 1650, height: 1080 } });


test.describe('Login', () => {
  let loginPage!: Login;

  test.beforeEach(async ({ page }) => {
      loginPage = new Login(page);
  });

  test('login', async () => {
    await loginPage.login();
  });
});
