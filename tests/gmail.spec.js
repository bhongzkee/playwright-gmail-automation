/**
 * Gmail Automation Test Suite using Playwright (Fixture-based)
 *
 * This suite performs end-to-end automated testing of Gmail web functionalities
 * using Playwright and custom fixtures for enhanced modularity and reusability.
 *
 * Coverage:
 *   1. Positive Scenarios:
 *       - Successful login and inbox navigation
 *       - Composing and sending multiple emails
 *   2. Negative Scenarios:
 *       - Invalid login credentials
 *       - Attempting to send an email without a recipient
 *
 * Structure & Architecture:
 *   - **Fixtures**:
 *       - `gmail`: Provides a pre-initialized GmailActions instance per test.
 *       - `configData`: Dynamically loads test data and credentials via `configHelper`.
 *   - **Page Object Model (POM)**:
 *       - Encapsulates Gmail UI logic and interactions within `gmailActions.js`.
 *   - **Test Lifecycle**:
 *       - Managed through Playwright’s fixture system, removing manual setup in `beforeEach`.
 *
 * File Organization:
 *   ├── helpers/
 *   │   └── configHelper.js        → Loads and resolves environment-based config
 *   ├── pom/pages/
 *   │   └── gmailActions.js        → Page Object Model for Gmail UI actions
 *   ├── fixtures/
 *   │   └── gmailFixture.js        → Provides `gmail` and `configData` fixtures
 *   ├── tests/
 *   │   └── gmail.spec.js          → Contains this suite definition
 *
 * Benefits:
 *   - Cleaner and DRY (Don’t Repeat Yourself) test code
 *   - Auto-managed GmailActions lifecycle through fixtures
 *   - Easier scaling for future Gmail test scenarios
 *   - Seamless integration with CI/CD and Allure reporting
 */



import { test } from '../fixtures/gmailFixture.js';


test.describe('Gmail Automation Suite', () => {

  /**
   * Positive Scenario #1:
   * Tests valid login flow and verifies that
   * the user can successfully access and open emails in the inbox.
   */
  test('Positive - Valid Login and Open First Email', async ({ gmail, configData }) => {
    await gmail.login(configData.validUser.username, configData.validUser.password);
    await gmail.verifyLoginSuccess();
    await gmail.openFirstEmail();
    await gmail.logout();
  });

  /**
   * Negative Scenario #1:
   * Tests invalid login credentials and ensures Gmail displays an error message.
   */
  test('Negative - Invalid Login Credentials', async ({ gmail, configData }) => {
    await gmail.login(configData.validUser.username, configData.invalidUser.password);
    await gmail.verifyLoginFailure();
  });

  /**
   * Positive Scenario #2:
   * Tests composing and sending multiple emails successfully
   * using parameterized data from the config file.
   */
  test('Positive - Compose and Send 3 Emails', async ({ gmail, configData }) => {
    await gmail.login(configData.validUser.username, configData.validUser.password);
    await gmail.verifyLoginSuccess();

    // Iterate through configured emails and send each one
    for (const email of configData.emails) {
      await gmail.composeAndSendEmail(email.recipient, email.subject, email.body);
      await gmail.verifyEmailSent();
    }

    await gmail.logout();
  });

  /**
   * Negative Scenario #2:
   * Tests the case where the user attempts to send an email without a recipient.
   * Verifies that an appropriate error message is displayed.
   */
  test('Negative - Compose Email Without Recipient', async ({ gmail, configData }) => {
    await gmail.login(configData.validUser.username, configData.validUser.password);
    await gmail.verifyLoginSuccess();

    // Attempt to send an email with missing recipient
    await gmail.composeAndSendEmail('', 'Test Email Subject', 'Test email body');
    await gmail.verifyEmailErrorSend('Please specify at least one recipient.');

    await gmail.logout();
  });

});
