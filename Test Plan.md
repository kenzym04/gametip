# Test Plan

## Scope
- API endpoints (admin, user, product, order, payment)
- UI: Wallet connection, navigation, gameplay, error handling, and user flows

## Objectives
- Verify all critical user and admin flows work as intended
- Ensure protected resources are not accessible without authentication
- Confirm UI elements and flows are present and functional
- Validate error handling and edge cases
- Check for security vulnerabilities (hardcoded secrets, unvalidated API usage, dependency issues)

## Test Types
- Functional Testing (API & UI)
- Security Testing (API protection, wallet connection, secret management)
- Usability Testing (UI flows, error messages)
- Edge Case Testing (invalid input, unauthorized access, wallet disconnect)

## Tools
- Playwright (API & UI automation)
- Manual browser testing

## Test Cases

### API Test Cases

| Test Case ID | Scenario                        | Steps                                                                 | Expected Result                        | Actual Result                        | Status |
|--------------|---------------------------------|-----------------------------------------------------------------------|----------------------------------------|--------------------------------------|--------|
| API-01       | Protected API (unauthenticated) | Call `/admin/products` without auth                                   | 401/403 Unauthorized                   | 200 OK (Bug)                         | Fail   |
| API-02       | Product List                    | GET `/products`                                                       | 200 OK, product list                   | 200 OK, product list                 | Pass   |
| API-03       | Product List (All)              | GET `/products/all`                                                   | 200 OK, product list                   | 200 OK, product list                 | Pass   |
| API-04       | Create Product (Admin)          | POST `/admin/product/new`                                             | 401/403/404                            | 401/403/404                          | Pass   |
| API-05       | Update Product (Admin)          | PUT `/admin/product/:id`                                              | 401/403/404                            | 401/403/404                          | Pass   |
| API-06       | Delete Product (Admin)          | DELETE `/admin/product/:id`                                           | 401/403/404                            | 401/403/404                          | Pass   |
| API-07       | Product Details                 | GET `/product/:id`                                                    | 200 OK or 404 Not Found                | 200 OK or 404 Not Found              | Pass   |
| API-08       | Review Product                  | PUT `/review`                                                         | 401/403/404                            | 401/403/404                          | Pass   |
| API-09       | Get Reviews (Admin)             | GET `/admin/reviews`                                                  | 200 OK                                 | 200 OK                               | Pass   |
| API-10       | Delete Reviews (Admin)          | DELETE `/admin/reviews`                                               | 401/403/404                            | 401/403/404                          | Pass   |
| API-11       | User Registration               | POST `/user/register` with invalid data                               | >=400 error, validation message        | >=400 error, validation message      | Pass   |
| API-12       | User Login                      | POST `/user/login` with invalid data                                  | >=400 error, error message             | >=400 error, unclear feedback        | Fail   |
| API-13       | User Profile (unauthenticated)  | GET `/user/profile` without auth                                      | 401/403 Unauthorized                   | 200 OK (Bug)                         | Fail   |
| API-14       | Order List (unauthenticated)    | GET `/order` without auth                                             | 401/403 Unauthorized                   | 200 OK (Bug)                         | Fail   |
| API-15       | Create Order                    | POST `/order`                                                         | 401/403/404                            | 401/403/404                          | Pass   |
| API-16       | Payment Process                 | POST `/payment/process`                                               | >=400                                  | >=400                                | Pass   |
| API-17       | Callback                        | POST `/callback`                                                      | 200/400/404/500                        | 200/400/404/500                      | Pass   |
| API-18       | Payment Status (unauthenticated)| GET `/payment/status/:id` without auth                                | 401/403 Unauthorized                   | 200 OK (Bug)                         | Fail   |

### UI Test Cases

| Test Case ID | Scenario                        | Steps                                                                 | Expected Result                        | Status |
|--------------|---------------------------------|-----------------------------------------------------------------------|----------------------------------------|--------|
| UI-01        | Homepage Loads                  | Go to `/`                                                             | "Welcome to Gamba v2" visible          | Pass   |
| UI-02        | Wallet Connect Button           | Go to `/`, check for connect button                                   | Connect button visible                 | Pass   |
| UI-03        | Wallet Connection Flow          | Click connect, select Phantom, approve in wallet                      | Wallet address shown in UI             | Pass   |
| UI-04        | Game Play (Dice/Slots/Flip)     | Play Dice, Slots, Flip (with or without wallet connection)            | Game plays, balance updates            | Pass   |
| UI-05        | Deposit Option (Add Liquidity)  | Check for Add Liquidity button, click to navigate                     | Add Liquidity button visible and functional | Pass   |
| UI-06        | Navigation                      | Use navigation to switch between games/pages                          | Correct page loads, no errors          | Pass   |
| UI-07        | Protected Page Access           | Try to access profile/play/order page without wallet connection       | Page loads for both connected and unconnected users | Pass   |

### Edge Cases

- **Play game with zero balance:**  
  Pass. You cannot play with insufficient funds, but no error message is shown.

- **Submit malformed API requests:**  
  Pass. Example: Accessing `http://localhost:4002/dices` returns "Game not found! 👎".

- **Try admin endpoints with regular user token:**  
  Fail. Gameplay is determined by user balance, not authorization. Token is created upon wallet connection, but games are playable without wallet connection. No authorization policy enforced.

- **Try to play a game with wallet disconnected:**  
  Fail. Games are playable without wallet connection; no authorization policy enforced.

## Summary

- Test Plan: Covers both API and UI, with clear objectives and tools.
- Test Cases: Updated to reflect current implementation, including all tested routes and realistic scenarios.
- Status: Some critical issues found (API protection, security, error handling, dependency management, unvalidated API usage).
