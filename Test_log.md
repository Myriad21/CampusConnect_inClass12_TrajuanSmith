# CampusConnect — Validation Test Log

**Project:** CampusConnect — The Accessible Registration Suite  
**Browser:** Brave  
**Environment:** Local browser  
**Test Data:** Fictional information only

## 1. Invalid Input Tests

| # | Action / Fictional Input | Expected Rule | Actual Message / Result | Pass / Fail |
|---|---|---|---|---|
| 1 | Leave Full Name empty and click Next | Name is required | Navigation blocked; required-name error displayed | Pass |
| 2 | Enter a campus email with an incorrect domain | Email must use `student.gsu.edu` | Custom campus-email error displayed | Pass |
| 3 | Enter a nine-digit student ID beginning with zero | First digit must be 1–9 | Student ID rejected; validation error displayed | Pass |
| 4 | Enter a password missing a required character category | Password must meet all five complexity requirements | Navigation blocked; unmet requirement identified | Pass |
| 5 | Enter a confirmation password different from the original | Confirmation must match exactly | Password mismatch error displayed | Pass |
| 6 | Select four interests | Maximum of three interests | Profile navigation blocked; interest-count error displayed | Pass |
| 7 | Leave Terms unchecked | Terms acceptance required | Profile navigation blocked; terms error displayed | Pass |
| 8 | Clear all membership selections using DevTools | One membership tier required | One membership error displayed in summary | Pass |
| 9 | Attempt to enter more than 140 characters in Biography | Maximum 140 characters | Appropriate biography-length validation error displayed | Pass |
| 10 | Modify an earlier field after reaching Review, then attempt final submission | All fields must be revalidated | Earlier invalid field blocked final submission | Pass |

## 2. Valid Registration Flow

| Action | Expected Result | Actual Result | Pass / Fail |
|---|---|---|---|
| Complete Identity with valid fictional information | Advances to Security | Advanced successfully | Pass |
| Enter valid password and matching confirmation | Checklist shows all requirements met | All five rules displayed Met; advanced to Profile | Pass |
| Complete Profile with valid selections | Advances to Review | Review displayed successfully | Pass |
| Inspect Review summary | Non-secret information shown; no password values exposed | Summary displayed information without revealing passwords | Pass |
| Submit valid registration | Success message appears; no data transmitted | Demonstration success message displayed; remained on page | Pass |

## 3. Back, Edit, and Stale Data

| Action | Expected Result | Actual Result | Pass / Fail |
|---|---|---|---|
| Click Back after entering valid information | Previous step opens with existing values | Previously entered values preserved | Pass |
| Click Edit Profile from Review | Profile opens with existing selections | Profile reopened successfully | Pass |
| Change a Profile selection and return to Review | Review displays updated information | Updated selection displayed | Pass |
| Make an earlier field invalid and attempt final submission | Final validation rejects stale or invalid data | Final submission blocked and linked error summary displayed | Pass |

## 4. Keyboard and Accessibility Tests

| Action | Expected Result | Actual Result | Pass / Fail |
|---|---|---|---|
| Navigate form using Tab and Shift+Tab | Interactive controls receive keyboard focus | Keyboard navigation worked | Pass |
| Activate buttons using keyboard | Navigation works without a mouse | Keyboard navigation tests passed | Pass |
| Click Next with invalid fields | Focus moves to error summary | Error summary received focus | Pass |
| Activate an error-summary link | Relevant section opens and field receives focus | Correct field received focus | Pass |
| Correct invalid input | Error summary updates without stealing focus | Focus remained in the edited field | Pass |
| Press Enter to submit from Review | Submission handler runs validation | Demonstration submitted successfully using Enter | Pass |
| Use a screen reader to trigger and hear an error | Error is announced meaningfully | Screen reader announced the validation error | Pass |

## 5. Browser Console

| Action | Expected Result | Actual Result | Pass / Fail |
|---|---|---|---|
| Complete registration and inspect DevTools Console | No JavaScript errors from application code | No JavaScript errors observed | Pass |

## 6. Test Summary

CampusConnect successfully passed the recorded invalid-input, valid-registration, navigation, and accessibility tests. Validation prevented users from advancing with invalid information and provided feedback that updated as errors were corrected. Back and Edit navigation preserved previously entered values, while final submission revalidated all fields to detect stale or invalid information. Keyboard navigation, Enter-key submission, screen-reader announcements, and error-summary focus behavior were also tested successfully. The application displayed a demonstration success message without transmitting or persistently storing registration data.