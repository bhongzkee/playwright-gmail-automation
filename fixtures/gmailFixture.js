/**
 * 📦 Gmail Fixtures
 * Provides shared setup for Gmail test cases.
 *
 * Includes:
 *  - GmailActions instance
 *  - Loaded configuration data
 */

import { test as base } from '@playwright/test';
import { GmailActions } from '../pom/pages/gmailActions.js';
import { loadConfig } from '../helpers/configHelper.js';

// Load configuration once
const configData = loadConfig();

// Extend the base Playwright test with our custom fixtures
export const test = base.extend({
  gmail: async ({ page }, use) => {
    const gmail = new GmailActions(page);
    await use(gmail);
  },

  configData: async ({}, use) => {
    await use(configData);
  }
});
