# CampusConnect — Validation Test Log

**Browser:** Brave  
**Test environment:** Local browser  
**Project:** CampusConnect — The Accessible Registration Suite

## 1. Invalid Input Tests

| # | Test Case | Expected Result | Actual Result | Status |
|---|---|---|---|---|
| 1 | Leave Full Name empty and click Next | Registration cannot advance; required-name error appears | Required-name error displayed; remained on Identity | Pass |
| 2 | Enter an email with a domain other than `student.gsu.edu` | Campus email rejected | Custom campus email error displayed | Pass |
| 3 | Enter a fictional student ID starting with zero | Student ID rejected | Nine-digit ID validation error displayed | Pass |
| 4 | Enter a password missing a required character category | Password rejected; checklist identifies missing requirement | Password validation prevented advancement | Pass |
| 5 | Enter a confirmation password different from the original | Confirmation rejected | Password mismatch error displayed | Pass |
| 6 | Select four interests | Profile cannot advance | Maximum-three-interests error displayed | Pass |
| 7 | Leave Terms unchecked | Profile cannot advance | Terms acceptance error displayed | Pass |
| 8 | Clear all membership tier selections using DevTools | Profile cannot advance; one membership error appears | One membership error displayed in summary | Pass |

## 2. Valid Registration Flow

| Test | Expected Result | Actual Result | Status |
|---|---|---|---|
| Complete Identity with valid information | Advances to Security | Advanced successfully | Pass |
| Enter a valid password and matching confirmation | All password rules show Met; advances to Profile | Checklist updated and navigation succeeded | Pass |
| Select a tier, 1–3 interests, and accept Terms | Advances to Review | Review displayed successfully | Pass |
| Submit valid registration | Displays demonstration success message without transmitting data | Success message displayed; no page navigation | Pass |

## 3. Navigation and Review

| Test | Expected Result | Actual Result | Status |
|---|---|---|---|
| Use Back to revisit a previous step | Previous entries remain populated | Values preserved | Pass |
| Use Edit Profile from Review | Returns to Profile with existing values | Profile reopened successfully | Pass |
| Change Profile selection and return to Review | Review reflects updated selection | Updated information displayed | Pass |
| Review password handling | Actual password is never displayed | Only password status displayed | Pass |

## 4. Accessibility and Error Feedback

| Test | Expected Result | Actual Result | Status |
|---|---|---|---|
| Navigate using keyboard | Form controls and buttons accessible | Keyboard navigation worked | Pass |
| Attempt Next with invalid fields | Focus moves to linked error summary | Error summary received focus | Pass |
| Activate an error-summary link | Correct step opens and affected field receives focus | Navigation and focus worked | Pass |
| Correct an invalid field | Error feedback updates without stealing focus | Error updated; focus remained in field | Pass |
| Correct all reported errors | Error summary disappears | Summary cleared automatically | Pass |
| Change membership tier | Group error clears | Membership validation updated | Pass |

## 5. Test Summary

The tests covered invalid inputs, valid registration, password security, multi-step navigation, error-summary behavior, and keyboard accessibility. The tested validation rules prevented progression when required information was missing or invalid. The Review step allowed users to inspect and edit their entries without revealing their password. The final registration action displayed a success message without submitting data to a server.