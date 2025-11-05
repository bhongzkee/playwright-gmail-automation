/**
 * CommonLocators
 *
 * Centralized repository for reusable dynamic XPath locators for Gmail automation.
 * Each locator is defined as a function that returns the corresponding XPath.
 */

export const CommonLocators = {
  /**
   * Locates the email input field on the login page
   * @returns {string} XPath for email input field
   * @example
   * await page.locator(CommonLocators.emailField()).fill('user@example.com');
   */
  emailField: () => '//input[@type="email"]',

  /**
   * Locates the 'Next' button after email input
   * @returns {string} XPath for email next button
   * @example
   * await page.locator(CommonLocators.emailNextButton()).click();
   */
  emailNextButton: () => '//*[@id="identifierNext"]',

  /**
   * Locates the password input field
   * @returns {string} XPath for password input field
   * @example
   * await page.locator(CommonLocators.passwordField()).fill('userPassword123');
   */
  passwordField: () => '//input[@type="password"]',

  /**
   * Locates the 'Next' button after password input
   * @returns {string} XPath for password next button
   * @example
   * await page.locator(CommonLocators.passwordNextButton()).click();
   */
  passwordNextButton: () => '//*[@id="passwordNext"]',

  /**
   * Locates the wrong password error message
   * @returns {string} XPath for login failure message
   * @example
   * await expect(page.locator(CommonLocators.loginFailureMessage())).toBeVisible();
   */
  loginFailureMessage: () => '//span[contains(text(), "Wrong password")]',

  /**
   * Locates the navigation sidebar
   * @returns {string} XPath for navigation sidebar
   * @example
   * await expect(page.locator(CommonLocators.navigationSidebar())).toBeVisible();
   */
  navigationSidebar: () => '//div[@role="navigation"]',

  /**
   * Locates the first email in the inbox
   * @returns {string} XPath for first email row
   * @example
   * await page.locator(CommonLocators.firstEmailRow()).click();
   */
  firstEmailRow: () => '//table//tr[contains(@class, "zA")][1]',

  /**
   * Locates the compose button
   * @returns {string} XPath for compose button
   * @example
   * await page.locator(CommonLocators.composeButton()).click();
   */
  composeButton: () => '//div[@role="button"][contains(text(), "Compose")]',

  /**
   * Locates the recipient field in compose email
   * @returns {string} XPath for recipient field
   * @example
   * await page.locator(CommonLocators.toField()).fill('recipient@example.com');
   */
  toField: () => '//input[@aria-label="To recipients"]',

  /**
   * Locates the subject field in compose email
   * @returns {string} XPath for subject field
   * @example
   * await page.locator(CommonLocators.subjectField()).fill('Test Email Subject');
   */
  subjectField: () => '//input[@aria-label="Subject"]',

  /**
   * Locates the email body field in compose email
   * @returns {string} XPath for email body field
   * @example
   * await page.locator(CommonLocators.bodyField()).fill('This is the email content');
   */
  bodyField: () => '//div[@aria-label="Message Body"]',

  /**
   * Locates the send button
   * @returns {string} XPath for send button
   * @example
   * await page.locator(CommonLocators.sendButton()).click();
   */
  sendButton: () => '//div[@role="button"][contains(@aria-label, "Send")]',

  /**
   * Locates the "Message sent" notification
   * @returns {string} XPath for sent notification
   * @example
   * await expect(page.locator(CommonLocators.emailSentNotification())).toBeVisible();
   */
  emailSentNotification: () => '//span[contains(text(), "Message sent")]',

  /**
   * Locates error notification with specific message
   * @param {string} message - The error message to find
   * @returns {string} XPath for error notification
   * @example
   * await expect(page.locator(CommonLocators.emailErrorNotification('Please specify at least one recipient'))).toBeVisible();
   */
  emailErrorNotification: (message) => `//div[contains(text(), "${message}")]`,

  /**
   * Locates a button by its text content
   * @param {string} buttonName - The text content of the button
   * @returns {string} XPath for the button
   * @example
   * await page.locator(CommonLocators.buttonLocator('Save Draft')).click();
   */
  buttonLocator: (buttonName) => `//button[span[contains(text(), "${buttonName}")]]`,

  /**
   * Locates the Google Account profile icon
   * @returns {string} XPath for profile icon
   * @example
   * await page.locator(CommonLocators.googleAccountProfileIcon()).click();
   */
  googleAccountProfileIcon: () => '//a[contains(@aria-label, "Google Account")]',

  /**
   * Locates the sign out button
   * @returns {string} XPath for sign out button
   * @example
   * await page.locator(CommonLocators.signOutButton()).click();
   */
  signOutButton: () => '//a[contains(@href, "Logout")]',

  /**
   * Locates the Google Account iframe
   * @returns {string} XPath for account iframe
   * @example
   * const frame = page.frameLocator(CommonLocators.accountIframe());
   */
  accountIframe: () => '//iframe[@name="account"]'
};


