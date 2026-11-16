# CampusConnect — Validation Map

| Field | Rule | HTML / JS / Both | Event / Stage |
|---|---|---|---|
| Full Name | Required; at least one letter; only A–Z, a–z, spaces, hyphens, and apostrophes | Both: `required`, `pattern`, `customMessage()` | Blur; input correction; Identity Next; final submit |
| Campus Email | Required; valid email format; exact `student.gsu.edu` domain, case-insensitive | Both: `type="email"`, `required`, `customMessage()` | Blur; input correction; Identity Next; final submit |
| Student ID | Required; exactly 9 digits; first digit 1–9 | Both: `required`, `pattern`, `customMessage()` | Blur; input correction; Identity Next; final submit |
| Password | Required; 8+ characters; uppercase, lowercase, digit, and non-whitespace symbol | Both: `required`, `minlength`, `customMessage()` | Blur; live checklist on input; Security Next; final submit |
| Confirm Password | Required; exact match with password, without trimming | Both: `required`, `customMessage()` | Blur; input correction; password changes; Security Next; final submit |
| Membership Tier | One selection: Basic ($25), Standard ($50), or Deluxe ($100) | Both: required radio group; `checkField()` | Change; Profile Review; final submit |
| Interests | Select at least 1 and no more than 3 interests | Both: `required` multi-select; `customMessage()` | Change; Profile Review; final submit |
| Biography | Optional; maximum 140 characters | Both: `maxlength="140"`; `customMessage()` | Input counter; blur; Profile Review; final submit |
| Terms Acceptance | Checkbox must be checked | Both: `required`; `customMessage()` | Change; Profile Review; final submit |

## Validation and Accessibility Notes

- **Field validation:** `checkField()` applies custom rules and native HTML constraints.
- **Error feedback:** Invalid fields receive `aria-invalid="true"` and associated error messages through `aria-describedby`.
- **Error summary:** `showErrors()` creates linked messages that navigate to affected fields.
- **Navigation:** Next and Review validate the current step; Back preserves existing entries.
- **Final validation:** Submit rechecks all registration fields, including those in earlier steps.
- **Security:** Password values are never displayed in the Review summary or stored persistently.