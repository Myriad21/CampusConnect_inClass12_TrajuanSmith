# CampusConnect — Validation Map

| Field | Validation Rules | HTML Enforcement | JavaScript Enforcement |
|---|---|---|---|
| Full Name | Required; at least one letter; only letters, spaces, hyphens, and apostrophes | `required`, `pattern` | `customMessage()` checks empty input, letter requirement, and allowed characters |
| Campus Email | Required; valid email format; exact `student.gsu.edu` domain (case-insensitive) | `type="email"`, `required` | `customMessage()` checks the required domain using a regular expression |
| Student ID | Required; exactly 9 digits; first digit 1–9 | `required`, `pattern` | `customMessage()` verifies the nine-digit format |
| Password | Required; at least 8 characters; uppercase, lowercase, digit, and symbol | `type="password"`, `required`, `minlength="8"` | `customMessage()` enforces complexity; `updatePasswordChecklist()` displays live feedback |
| Confirm Password | Required; must match password exactly | `type="password"`, `required` | `customMessage()` compares both password values without trimming |
| Membership Tier | One selection required: Basic ($25), Standard ($50), or Deluxe ($100) | Radio group; `required` | `checkField()` validates the radio group together |
| Interests | At least 1 and no more than 3 selections | `<select multiple required>` | `customMessage()` checks `selectedOptions.length` |
| Biography | Optional; maximum 140 characters | `maxlength="140"` | `customMessage()` checks length; `input` listener updates the character counter |
| Terms Acceptance | Must be checked before continuing | `type="checkbox"`, `required` | `customMessage()` checks whether the checkbox is selected |

## Validation Timing and Accessibility

- **On blur:** Fields are validated when users leave them.
- **On input:** Previously invalid fields are rechecked while users correct them.
- **On change:** Radio buttons, checkboxes, and the interests selector are revalidated.
- **On Next/Review:** All fields in the current step are validated before advancing.
- **On Submit:** Every form field is revalidated, including fields in earlier steps.
- **Error feedback:** `aria-invalid`, `aria-describedby`, field-level messages, and a linked error summary communicate validation problems.
- **Focus management:** Failed navigation moves focus to the error summary; correcting fields updates the summary without stealing focus.