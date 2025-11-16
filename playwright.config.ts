import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if test.only is left */
  forbidOnly: !!process.env.CI,

  /* Retry failed tests */
  retries: process.env.CI ? 1 : 0,

  /* Use all available CPUs unless on CI */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter configuration */
  reporter: [
    ['line'],                // show console progress
    ['html'],                // generate HTML report
    ['allure-playwright'],   // generate Allure report
  ],
  /* Default test options */
  use: {
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'retain-on-failure', // Optional: keep video for failed tests
  },

  /* Configure projects for different browsers and devices */
  projects: [
    // Desktop Browsers
   {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Desktop Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Desktop Safari',
      use: { ...devices['Desktop Safari'] },
    },

    //  Mobile Browsers
    {
      name: 'Mobile iPhone 14 Pro Max',
      use: { ...devices['iPhone 14 Pro Max'], headless: false },
    },
    {
      name: 'Mobile Galaxy S24',
      use: { ...devices['Galaxy S24'], headless: false },
    },
  ],

  /* Optionally start a local dev server before tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});








// /*
// import { defineConfig, devices } from '@playwright/test';

// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
//  //import dotenv from 'dotenv';
//  //import path from 'path';
//  //dotenv.config({ path: path.resolve(__dirname, '.env') });

// /**
//  * See https://playwright.dev/docs/test-configuration.
//  */
// export default defineConfig({
//   testDir: './tests',


//   /* Run tests in files in parallel */
//   fullyParallel: true,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */


//   forbidOnly: false,

//   retries: 0,
  
//   workers: undefined,


//   //----forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//  //----retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//  //------ workers: process.env.CI ? 1 : undefined,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {


//     screenshot: 'only-on-failure',
    

//     /* Base URL to use in actions like `await page.goto('/')`. */
//     //baseURL: 'https://stg-ds.sharjah.ae/mocked-users',

//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//   },

//    Configure projects for major browsers 
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },

//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },

//     {
//       name: 'mobileSafari',
//       use: {
//         headless: false,
//         ...devices['iPhone 12'] },
//     },

//     {
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },
// //{
// //name :'mobile',
// //testMatch : 'testMobile.spec.ts',
// //use: {
// //...devices['iPhone 14 Pro Max'],
// //}

// //},

//     // Test against mobile viewports. 
//     {
//       name: 'Mobile iPhone 14 Pro Max',
//       use: { ...devices['Galaxy S24'] },
//     },
//     // {
//     //   name: 'Mobile Safari',
//     //   use: { ...devices['iPhone 12'] },
//     // },

//     /* Test against branded browsers. */
//     // {
//     //   name: 'Microsoft Edge',
//     //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     // },
//     // {
//     //   name: 'Google Chrome',
//     //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     // },
//   ],

//   /* Run your local dev server before starting the tests */
//   // webServer: {
//   //   command: 'npm run start',
//   //   url: 'http://localhost:3000',
//   //   reuseExistingServer: !process.env.CI,
//   // },
// });
