# Playwright Test Automation Setup

This repository contains automated tests using Playwright for testing web applications. The configuration file `playwright.config.ts` is used to define test settings and configure various aspects of test execution.

## Prerequisites

Before running the tests, make sure you have the following prerequisites installed:

- Node.js and npm (Node Package Manager)
- Playwright (installed automatically via npm)

```bash
npm install
```

## Configuration

The test configuration is specified in the `playwright.config.ts` file. It includes settings such as test directory, parallel execution, retry behavior, and browser configurations. Adjust the configuration according to your specific requirements.

## Running Tests

To run the tests, use the following command:

```bash
npx playwright test
```

This command will execute the tests in parallel based on the configuration provided in `playwright.config.ts`. The results will be displayed in the console.

## Browser Configurations

The test suite is configured to run against different browsers. By default, it is set up to run tests in Chromium. You can uncomment and modify the configurations for other browsers such as Firefox, WebKit, Mobile Chrome, Mobile Safari, Microsoft Edge, and Google Chrome.

```javascript
// Example for adding Firefox configuration
// {
//   name: 'firefox',
//   use: { ...devices['Desktop Firefox'] },
// },
```

## Allure Reporting

The test results are reported using the Allure Playwright reporter. The reports are generated in the `allure-results` directory. To generate and view the Allure report, use the following commands:

```bash
npx playwright test
allure generate allure-results --clean -o allure-report
allure open allure-report
```

This will open the Allure report in your default browser, providing detailed information about test execution.

## Additional Notes

- Adjust the `baseURL` in the configuration if your application is hosted on a different server.
- Uncomment and modify the `webServer` configuration if you need to run a local development server before starting the tests.

Feel free to customize the configuration and adapt it to your specific project needs. Happy testing!