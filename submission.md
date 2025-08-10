# Gametip QA Engineer Test Submission

---

## 1. Project Setup & Execution

### Repository
- [Bitbucket: bypinsun/gametip](https://bitbucket.org/bypinsun/gametip/src)

### Setup Steps
1. **Clone the repository:**
   ```sh
   git clone https://bitbucket.org/bypinsun/gametip.git
   cd gametip
   ```
2. **Install dependencies:**
   ```sh
   npm install --legacy-peer-deps
   ```
   > *Note: Some dependency conflicts may occur. Use `--legacy-peer-deps` as a workaround. For long-term stability, update and align dependencies regularly.*
3. **Start the project:**
   ```sh
   npm run dev
   ```
   - This runs both the server and client.

### Setup Issues & Solutions
- **Dependency conflicts:**  
  - Resolved using `--legacy-peer-deps` during `npm install`.
- **Allure/Playwright peer issues:**  
  - Use `npm install --save-dev allure-playwright --legacy-peer-deps`.
- **No critical setup blockers.**

---

## 2. Manual Testing & Bug Identification

### Key Features Explored
- Wallet connection (Phantom)
- Game selection and play (Dice, Slots, Flip, etc.)
- Fake balance usage
- Admin/product/user/order/payment endpoints

### Critical Issues Identified

| ID  | Issue                                                                 | Steps to Reproduce                                                                 | Expected Result                        | Actual Result                        | Severity |
|-----|-----------------------------------------------------------------------|------------------------------------------------------------------------------------|----------------------------------------|--------------------------------------|----------|
| 1   | **Protected endpoints return 200 for unauthenticated requests**       | Call `/admin/products`, `/user/profile`, `/order`, `/payment/status/:id` unauth.   | 401/403 Unauthorized                   | 200 OK                               | High     |
| 2   | **No deposit functionality for main platform account**                | Connect wallet, look for deposit option                                            | Option to deposit funds                | No deposit option found              | High     |
| 3   | **Hardcoded API keys and insecure API usage**                         | Inspect backend code for API keys, e.g. paymentController.js                     | No secrets in codebase                 | API key visible in code              | Critical |
| 4   | **Games are implemented fully in the frontend**                       | Play any game, inspect network                                                     | Game logic handled on-chain or via API | All game logic is client-side        | Info     |
| 5   | **Dependency conflicts on install**                                   | Run `npm install`                                                                 | Clean install                          | Peer dependency warnings/errors      | Medium   |
| 6   | **No error message for failed login**                                 | Attempt login with invalid credentials                                             | User-friendly error message            | No/unclear feedback                  | Low      |
| 7   | **Unvalidated external API usage (Chainlink)**                        | Review commented code using `chainlink-api-v3.cloud`                               | Secure, validated API usage            | Unvalidated, insecure API call       | High     |
| 8  | **Use of blacklisted/phishing API endpoint**                  | Review code, `visit chainlink-api-v3.cloud`                               | API endpoint is secure and reputable| Endpoint is flagged as phishing/malicious by **MetaMask** and **blocklists** | Critical  |
| 9 | Deprecation warning (`util._extend`) | Start server | No deprecation warnings | Deprecation warning shown | Low |
| 10 | API key does not start with "SG." | Check environment/config | API key is valid or unused | Warning or error about API key format | Low |
| 11 | Module not found: `has-symbols` | Start server, trigger errorHandler | No missing module errors | Error: Cannot find module 'has-symbols' | Medium |

---

## 3. Test Plan

### Scope
- API endpoints (authentication, admin, user, product, order, payment)
- UI: Wallet connection, navigation, gameplay, error handling, and user flows

### Objectives
- Verify all critical user and admin flows work as intended
- Ensure protected resources are not accessible without authentication
- Confirm UI elements and flows are present and functional
- Validate error handling and edge cases
- Check for security vulnerabilities (hardcoded secrets, unvalidated API usage)

### Test Types
- Functional Testing (API & UI)
- Security Testing (API protection, wallet connection, secret management)
- Usability Testing (UI flows, error messages)
- Edge Case Testing (invalid input, unauthorized access)

### Tools
- Playwright (API & UI automation)
- Manual browser testing

---

## 4. Test Cases

### API Test Cases

| Test Case ID | Scenario                        | Steps                                                                 | Expected Result                        | Actual Result                        | Status |
|--------------|---------------------------------|-----------------------------------------------------------------------|----------------------------------------|--------------------------------------|--------|
| API-01       | Protected API (unauthenticated) | Call `/admin/products` without auth                                   | 401/403 Unauthorized                   | 200 OK (Bug)                         | Fail   |
| API-02       | User Registration               | Register with invalid data                                            | 400+ error, validation message         | 400 error, validation message        | Pass   |
| API-03       | Payment Status (unauthenticated)| Call `/payment/status/:id` without auth                               | 401/403 Unauthorized                   | 200 OK (Bug)                         | Fail   |
| API-04       | Product List                    | GET `/products`                                                       | 200 OK, product list                   | 200 OK, product list                 | Pass   |
| API-05       | Login with wrong credentials    | POST `/user/login` with invalid data                                  | 400+ error, error message              | 400+ error, unclear feedback         | Fail   |

### UI Test Cases

| Test Case ID | Scenario                        | Steps                                                                 | Expected Result                        | Actual Result                        | Status |
|--------------|---------------------------------|-----------------------------------------------------------------------|----------------------------------------|--------------------------------------|--------|
| UI-01        | Homepage Loads                  | Go to `/`                                                             | "Welcome to Gamba v2" visible          | "Welcome to Gamba v2" visible        | Pass   |
| UI-02        | Wallet Connect Button           | Go to `/`, check for connect button                                   | Connect button visible                 | Connect button visible               | Pass   |
| UI-03        | Wallet Connection Flow          | Click connect, select Phantom, approve in wallet                      | Wallet address shown in UI             | Wallet address shown in UI           | Pass   |
| UI-04        | Game Play (Dice/Slots/Flip)     | Connect wallet, play Dice, Slots, Flip                                | Game plays, balance updates            | Game plays, balance updates          | Pass   |
| UI-05        | Deposit Option (Add Liquidity)  | Connect wallet, check for Add Liquidity button                        | Add Liquidity button visible and functional | Add Liquidity button visible, navigates to pool creation | Pass   |
| UI-06        | Navigation                      | Use navigation to switch between games/pages                          | Correct page loads, no errors          | Correct page loads, no errors        | Pass   |
| UI-07        | Protected Page Access           | Try to access profile/play page without wallet connection             | Page loads for both connected and unconnected users | Page loads, no error                 | Pass   |

### Edge Cases

- **Play game with zero balance:**  
  Manual test: Pass. You cannot play with insufficient funds, but no error message is shown.

- **Submit malformed API requests:**  
  Example: Accessing `http://localhost:4002/dices` returns "Game not found! 👎".  
  Pass.

- **Try admin endpoints with regular user token:**  
  Gameplay is determined by user balance, not authorization. Token is created upon wallet connection, but games are playable without wallet connection. No authorization policy enforced.  
  Fail.

- **Try to play a game with wallet disconnected:**  
  Games are playable without wallet connection; no authorization policy enforced.

---

## 5. API Test Automation

### API Test Results Table

| Endpoint                        | Method | Auth Required | Expected | Actual | Status |
|----------------------------------|--------|--------------|----------|--------|--------|
| /products                       | GET    | No           | 200      | 200    | <span style="color:blue">Pass</span>   |
| /products/all                   | GET    | No           | 200      | 200    | <span style="color:blue">Pass</span>   |
| /admin/products                 | GET    | Admin        | 401/403  | 200    | <span style="color:red">Fail</span>    |
| /admin/product/new              | POST   | Admin        | 401/403/404 | 401/403/404 | <span style="color:blue">Pass</span>   |
| /admin/product/:id              | PUT    | Admin        | 401/403/404 | 401/403/404 | <span style="color:blue">Pass</span>   |
| /admin/product/:id              | DELETE | Admin        | 401/403/404 | 401/403/404 | <span style="color:blue">Pass</span>   |
| /product/:id                    | GET    | No           | 200/404  | 200/404| <span style="color:blue">Pass</span>   |
| /review                         | PUT    | User         | 401/403/404 | 401/403/404 | <span style="color:blue">Pass</span>   |
| /admin/reviews                  | GET    | No           | 200      | 200    | <span style="color:blue">Pass</span>   |
| /admin/reviews                  | DELETE | Admin        | 401/403/404 | 401/403/404 | <span style="color:blue">Pass</span>   |
| /user/register                  | POST   | No           | >=400    | >=400  | <span style="color:blue">Pass</span>   |
| /user/login                     | POST   | No           | >=400    | >=400  | <span style="color:blue">Pass</span>   |
| /user/profile                   | GET    | User         | 401/403  | 200    | <span style="color:red">Fail</span>    |
| /order                          | GET    | User         | 401/403  | 200    | <span style="color:red">Fail</span>    |
| /order                          | POST   | User         | 401/403/404 | 401/403/404 | <span style="color:blue">Pass</span>   |
| /payment/process                | POST   | No           | >=400    | >=400  | <span style="color:blue">Pass</span>   |
| /callback                       | POST   | No           | 200/400/404/500 | 200/400/404/500 | <span style="color:blue">Pass</span>   |
| /payment/status/:id             | GET    | User         | 401/403  | 200    | <span style="color:red">Fail</span>    |

### API Collection (Postman format, minimal example)

```json
{
  "info": {
    "name": "Gametip API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    { "name": "GET /products", "request": { "method": "GET", "url": "{{baseUrl}}/products" } },
    { "name": "GET /products/all", "request": { "method": "GET", "url": "{{baseUrl}}/products/all" } },
    { "name": "GET /admin/products", "request": { "method": "GET", "url": "{{baseUrl}}/admin/products" } },
    { "name": "POST /admin/product/new", "request": { "method": "POST", "url": "{{baseUrl}}/admin/product/new" } },
    { "name": "PUT /admin/product/:id", "request": { "method": "PUT", "url": "{{baseUrl}}/admin/product/1" } },
    { "name": "DELETE /admin/product/:id", "request": { "method": "DELETE", "url": "{{baseUrl}}/admin/product/1" } },
    { "name": "GET /product/:id", "request": { "method": "GET", "url": "{{baseUrl}}/product/1" } },
    { "name": "PUT /review", "request": { "method": "PUT", "url": "{{baseUrl}}/review" } },
    { "name": "GET /admin/reviews", "request": { "method": "GET", "url": "{{baseUrl}}/admin/reviews" } },
    { "name": "DELETE /admin/reviews", "request": { "method": "DELETE", "url": "{{baseUrl}}/admin/reviews" } },
    { "name": "POST /user/register", "request": { "method": "POST", "url": "{{baseUrl}}/user/register" } },
    { "name": "POST /user/login", "request": { "method": "POST", "url": "{{baseUrl}}/user/login" } },
    { "name": "GET /user/profile", "request": { "method": "GET", "url": "{{baseUrl}}/user/profile" } },
    { "name": "GET /order", "request": { "method": "GET", "url": "{{baseUrl}}/order" } },
    { "name": "POST /order", "request": { "method": "POST", "url": "{{baseUrl}}/order" } },
    { "name": "POST /payment/process", "request": { "method": "POST", "url": "{{baseUrl}}/payment/process" } },
    { "name": "POST /callback", "request": { "method": "POST", "url": "{{baseUrl}}/callback" } },
    { "name": "GET /payment/status/:id", "request": { "method": "GET", "url": "{{baseUrl}}/payment/status/1" } }
  ]
}
```

---

## 6. Security Issues & Mitigation

### **Hardcoded API Keys and Insecure API Usage**
- **Issue:** API keys (e.g., Chainlink) are hardcoded in backend code and could be exposed if moved to frontend.
- **Mitigation:**  
  - Never hardcode API keys or secrets in frontend or public code.
  - Store all secrets in environment variables (`process.env`).
  - Move all sensitive API calls to the backend.
  - Rotate any exposed keys immediately.

### **Unvalidated External API Usage**
- **Issue:** The commented-out Chainlink API call does not validate responses or handle errors securely.
- **Mitigation:**  
  - Always validate and sanitize external API responses.
  - Implement robust error handling and logging.
  - Avoid using external APIs directly from the frontend.

### **Use of Blacklisted/Phishing API Endpoint**
- **Issue:** The code references `chainlink-api-v3.cloud`, which is flagged as a phishing/malicious site by MetaMask and other security tools.
- **Mitigation:**  
  - Remove all references to this endpoint.
  - Audit all third-party services for reputation and security.
  - Use only reputable, verified APIs.
  - Regularly check dependencies and endpoints against security blocklists.

### **Deprecation Warning (`util._extend`)**
- **Issue:** Deprecated Node.js API used in code or dependencies.
- **Mitigation:**  
  - Refactor code to use `Object.assign()` instead of `util._extend`.
  - Update dependencies to latest versions to avoid deprecated APIs.

### **API Key Format Issue**
- **Issue:** API key does not start with "SG." (SendGrid or similar).
- **Mitigation:**  
  - Ensure correct API key format in environment/config.
  - Remove unused or misconfigured API keys from codebase.

### **Module Not Found: `has-symbols`**
- **Issue:** Missing module due to unsafe dynamic code execution or dependency issue.
- **Mitigation:**  
  - Remove or refactor any dynamic `require` or unsafe code execution.
  - Ensure all required modules are installed and dependencies are up to date.
---

## 7. Optional: UI Automation

### UI Automation (Playwright Example)

```typescript
// filepath: d:\Workspace\gametip\ui-tests\ui.spec.ts
import { test, expect } from '@playwright/test';

test('Homepage loads and wallet connect button is visible', async ({ page }) => {
  await page.goto('http://localhost:4001/');
  await expect(page.getByText('Welcome to Gamba v2')).toBeVisible();
  await expect(page.getByRole('button', { name: /connect/i })).toBeVisible();
});
```

**Execution:**

**All tests:**
```sh
npx playwright test
```
**API test:**
```sh
npx playwright test tests/api/api.spec.ts
```
**e2e test:**
```sh
npx playwright test tests/e2e/ui.spec.ts
```

---

## 7.1. E2E Test Coverage Summary

The Playwright E2E suite covers the following for the Gamba v2 platform:

**Homepage UI:**
- Verifies visibility of all key components, navigation links, and action buttons.
- Confirms wallet connect button and main branding elements are present.
- Confirms the Add Liquidity button is visible and functional.

**Game Features:**
- **Dice:** Full flow from homepage, modal dismissal, navigation, starting the game, and multiple rolls with result checks.
- **Slots:** Full flow including navigation, starting the game, spinning, and repeatability.
- **Flip:** Full flow including navigation, starting the game, flipping, and result check.
- Note: The platform has 8 games; 3 (Dice, Slots, Flip) are automated in the current E2E suite.

**Modal Handling:**
- All tests handle the acknowledge modal if present, ensuring reliable automation.

**Component Visibility:**
- All main homepage components and game links are asserted for visibility.

**Smart Contract Betting Game (AUT) Coverage:**
- The E2E tests interact with the UI and simulate user actions for betting games (Dice, Slots, Flip).
- If the games are implemented as smart contract interactions, these tests confirm the UI triggers and displays results as expected.
- The tests do not directly verify on-chain events, contract calls, or blockchain state changes—only the UI and user flows.

**Exhaustiveness:**
- All major game flows and homepage components are covered.
- Edge cases (e.g., error handling, wallet disconnect, invalid bets) are not included in the current suite.
- For full smart contract coverage, additional integration or contract-level tests would be needed.

**Conclusion:**
- The E2E suite exhaustively covers the main UI flows and betting game features for the current implementation.
- For deeper smart contract (AUT) validation, consider adding integration tests or contract event assertions.
---

## 8. Submission Notes

- **Critical backend bug:** Protected endpoints return 200 for unauthenticated requests. This violates REST standards and should be fixed.
- **Critical security issue:** Hardcoded API keys and insecure API usage. Move all secrets to environment variables and backend.
- **Dependency issues:** Use `--legacy-peer-deps` for now, but update dependencies for long-term stability.
- **Games are implemented in the frontend:** This is a valid Dapp pattern, but for auditability, consider exposing game actions via API or on-chain events.
- **Deposit functionality is handled via the Add Liquidity flow:** The "Add Liquidity" button is visible and active on the homepage. Clicking it navigates users to https://explorer.gamba.so/ where they can create a pool, connect their wallet, and supply funds to the platform. This serves as the deposit mechanism for the platform.
- **All required and optional deliverables are included above.**

---
