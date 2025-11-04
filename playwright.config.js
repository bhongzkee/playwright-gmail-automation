import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,

  // Run tests in parallel
  fullyParallel: true,

  reporter: [
    ['list'], // default console reporter
    // ['allure-playwright', { resultsDir: './allure-reports/allure-results' }],
    ['html', { outputFolder: 'playwright-report', open: 'on-failure' }],
  ],


  use: {
    headless: true,
    // viewport: { width: 1280, height: 720 },
    trace: 'retain-on-failure',    //for playwright trace viewer
    screenshot: 'only-on-failure',
    video: 'on',
  },
});
