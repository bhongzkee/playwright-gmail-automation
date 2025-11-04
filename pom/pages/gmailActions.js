import { CommonLocators } from '../locators/commonLocators';
import dotenv from 'dotenv';
dotenv.config();

export class GmailActions {
  constructor(page, testInfo) {
    this.page = page;
    this.testInfo = testInfo; // store testInfo once
  }

  async login(username, password) {
    await this.page.goto('https://mail.google.com/');

    // Username field and next
    await this.page.locator(CommonLocators.emailField()).fill(username);
    await this.page.locator(CommonLocators.emailNextButton()).click();
    await this.page.waitForTimeout(2000);

    // Password field and next
    await this.page.locator(CommonLocators.passwordField()).fill(password);
    await this.page.locator(CommonLocators.passwordNextButton()).click();
    await this.page.waitForTimeout(2000);
  }

  async verifyLoginSuccess() {
    // Wait for navigation sidebar (Inbox area)
    await this.page.waitForSelector(CommonLocators.navugationSidebar(), { timeout: 10000 });
    await this.page.waitForTimeout(2000);
  }

  async verifyLoginFailure() {
    // Gmail error message container
    await this.page.waitForSelector(CommonLocators.loginFailureMessage(), { timeout: 10000 });
    await this.page.waitForTimeout(2000);
  }

  async openFirstEmail() {
    // Wait for any email rows in Inbox
    await this.page.waitForSelector('//table//tr[contains(@class, "zA")]', { timeout: 15000 });
    const firstEmail = this.page.locator(CommonLocators.firstEmailRow());
    await firstEmail.click();
    await this.page.waitForTimeout(2000);

    // Navigate back to Inbox
    await this.page.locator('//a[contains(@aria-label, "Inbox")]').click();
  }

  async composeAndSendEmail(recipient, subject, body) {
    // Compose button
    await this.page.locator(CommonLocators.composeButton()).click();
 
    // To / Subject / Body fields
    await this.page.locator(CommonLocators.toField()).fill(recipient);
    await this.page.locator(CommonLocators.subjectField()).fill(subject);
    await this.page.locator(CommonLocators.bodyField()).fill(body);

    // Send button
    await this.page.locator(CommonLocators.sendButton()).click();
    await this.page.waitForTimeout(2000);
  }


  async verifyEmailSent() {
    // Confirmation
    await this.page.waitForSelector(CommonLocators.emailSentNotification(), { timeout: 10000 });
    await this.page.waitForTimeout(2000);
  }


  async verifyEmailErrorSend(message) {
    // Confirmation
    await this.page.waitForSelector(CommonLocators.emailErrorNotification(message), { timeout: 10000 });
    await this.page.waitForTimeout(2000);
    await this.page.locator(CommonLocators.buttonLocator('OK')).click();
    await this.page.waitForTimeout(2000);
  }


  async logout() {
    // Open account menu
    await this.page.locator(CommonLocators.googleAccountProfileIcon()).click();
    // await this.page.waitForTimeout(2000);

    // Wait for the iframe to appear
    const accountFrame = await this.page.frameLocator(CommonLocators.accountIframe());

    // Now you can locate elements inside that iframe using XPath
    await accountFrame.locator(CommonLocators.signOutButton()).click();
    await this.page.waitForTimeout(2000);
  }



  async takeScreenshot(name) {
    const screenshot = await this.page.screenshot({ fullPage: true });
    await this.testInfo.attach(`${name}-screenshot`, {
      body: screenshot,
      contentType: 'image/png',
    });
    console.log(`Screenshot attached: ${name}`);
  }




}




