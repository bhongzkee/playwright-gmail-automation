# Gmail Automation Test Suite (Playwright + JavaScript)

This project automates **Gmail web workflows** using [Playwright](https://playwright.dev/).  
It includes **login, email navigation, composing, sending, and logout** functionalities — with both **positive and negative** test scenarios.

---

## Features

**End-to-End Gmail Automation**
- Login using parameterized credentials  
- Open and navigate emails  
- Compose and send multiple emails  
- Logout properly  

**Test Data Parameterization**
- Credentials and email data stored in `config/config.json`  
- `.env` file for sensitive information (e.g. username/password)  

**Positive & Negative Scenarios**
- Valid login and successful email sending  
- Invalid login and missing recipient error handling  

**Reusable Page Object Model (POM)**
- Clean separation between test logic and UI interactions  
- Gmail actions stored in `pom/pages/gmailActions.js`  

**Custom Configuration Loader**
- Reads `.env` and `config.json` dynamically through `helpers/configHelper.js`

**Custom Fixtures**
- Centralized `gmail` and `configData` setup  
- No repetitive code in tests  
- Simplified test maintenance and scalability  




---

## Setup Instructions

### 1 Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) (v18 or above)
- npm (comes with Node)
- [Google Chrome](https://www.google.com/chrome/)

### 2 Install Dependencies
```bash
npm install





---

## Run All Tests
npx playwright test





---

## Open the report with video (videos are saved in test-results folder)
npx playwright show-report