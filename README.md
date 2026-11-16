# CampusConnect — The Accessible Registration Suite

CampusConnect is a four-step student club registration form developed using HTML, CSS, and JavaScript to demonstrate accessible client-side form validation.

The application can be run by opening `index.html` in a modern web browser with JavaScript enabled, provided that `style.css` and `validator.js` remain in the same folder.

The registration process consists of Identity, Security, Profile, and Review steps, allowing users to enter information, correct errors, and review their entries before completing the demonstration.

The project applies HTML constraint validation alongside JavaScript validation patterns, including `blur`, `input`, and `change` event listeners, custom validation messages, and final submission checks.

Reusable functions such as `customMessage()`, `checkField()`, and `showErrors()` manage validation rules and error feedback across the registration steps.

Accessibility features include associated labels, keyboard navigation, ARIA attributes, linked error summaries, and error messages that do not rely exclusively on color.

One design decision was to preserve entered information when users navigate backward by hiding and displaying existing form sections rather than rebuilding them.

A tradeoff of combining native HTML constraints with custom JavaScript validation is the additional implementation complexity required to provide consistent messages and control validation timing.

The application is a client-side demonstration and does not transmit registration information, create user accounts, or store submitted records on a server.

Known limitations include requiring JavaScript for multi-step navigation, losing entered information when the page is reloaded, and lacking authoritative server-side validation.