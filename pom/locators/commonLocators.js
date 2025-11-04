/**
 * CommonLocators
 *
 * Centralized repository for reusable dynamic XPath locators.
 * Each locator is defined as a function that accepts a parameter
 * (e.g., button name, field name) and returns the corresponding XPath.
 */

export const CommonLocators = {
  
  
  /**
   * Locator for a button element.
   * - Matches button text case-insensitively.
   *
   * Example:
   *   CommonLocators.buttonLocator("Register")
   *   → //button[contains(translate(normalize-space(string()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "add to cart")]
   */
  emailField: () => '//input[@type="email"]',

  emailNextButton: () => '//*[@id="identifierNext"]',

  passwordField: () => '//input[@type="password"]',

  passwordNextButton: () => '//*[@id="passwordNext"]',

  loginFailureMessage: () => '//span[contains(text(), "Wrong password")]',

  navugationSidebar: () => '//div[@role="navigation"]',

  firstEmailRow: () => '//table//tr[contains(@class, "zA")][1]',

  composeButton: () => ' //div[@role="button"][contains(text(), "Compose")]',

  toField: () => '//input[@aria-label="To recipients"]',

  subjectField: () => '//input[@aria-label="Subject"]',

  bodyField: () => '//div[@aria-label="Message Body"]',

  sendButton: () => '//div[@role="button"][contains(@aria-label, "Send")]',

  emailSentNotification: () => '//span[contains(text(), "Message sent")]',

  emailErrorNotification: (message) => `//div[contains(text(), "${message}")]`,

  
  buttonLocator: (buttonName) => `//button[span[contains(text(), "${buttonName}")]]`,

  googleAccountProfileIcon: () => '//a[contains(@aria-label, "Google Account")]',

  signOutButton: () => '//a[contains(@href, "Logout")]',

  accountIframe: () => '//iframe[@name="account"]', 




 
};


