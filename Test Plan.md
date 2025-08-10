Test Plan
Scope
API endpoints (authentication, admin, user, product, order, payment)
UI: Wallet connection, navigation, gameplay, error handling, and user flows
Objectives
Verify all critical user and admin flows work as intended
Ensure protected resources are not accessible without authentication
Confirm UI elements and flows are present and functional
Validate error handling and edge cases
Test Types
Functional Testing (API & UI)
Security Testing (API protection, wallet connection)
Usability Testing (UI flows, error messages)
Edge Case Testing (invalid input, unauthorized access)
Tools
Playwright (API & UI automation)
Manual browser testing
Test Cases
API Test Cases
Test Case ID	Scenario	Steps	Expected Result	Status
API-01	Protected API (unauthenticated)	Call /admin/products without auth	401/403 Unauthorized	Fail
API-02	User Registration	Register with invalid data	400+ error, validation message	Pass
API-03	Payment Status (unauthenticated)	Call /payment/status/:id without auth	401/403 Unauthorized	Fail
API-04	Product List	GET /products	200 OK, product list	Pass
API-05	Login with wrong credentials	POST /user/login with invalid data	400+ error, error message	Pass
UI Test Cases
Test Case ID	Scenario	Steps	Expected Result	Status
UI-01	Homepage Loads	Go to /	"Welcome to Gamba v2" visible	Pass
UI-02	Wallet Connect Button	Go to /, check for connect button	Connect button visible	Pass
UI-03	Wallet Connection Flow	Click connect, select Phantom, approve in wallet	Wallet address shown in UI	Pass
UI-04	Game Play (Fake Balance)	Connect wallet, play Dice/Slots/Flip	Game plays, fake balance updates	Pass
UI-05	No Deposit Option	Connect wallet, look for deposit option	Deposit option visible	Fail
UI-06	Error Handling (Login)	Try to login with invalid credentials	User-friendly error message shown	Fail
UI-07	Navigation	Use navigation to switch between games/pages	Correct page loads, no errors	Pass
UI-08	Protected Page Access	Try to access profile/order page without login	Redirected or error shown	Fail
Edge Cases
Register with existing email
Play game with zero balance
Submit malformed API requests
Try admin endpoints with regular user token
Try to play a game with wallet disconnected
Summary
Test Plan: Covers both API and UI, with clear objectives and tools.
Test Cases: Separated and expanded for both API and UI, with realistic scenarios and edge cases.
Status: Some critical issues found (API protection, missing deposit, error handling).
