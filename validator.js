const form = document.querySelector("#regForm");
const sections = Array.from(form.querySelectorAll(".step"));
const fields = Array.from(form.querySelectorAll("input, select, textarea"));
const summary = document.querySelector("#error-summary");
const status = document.querySelector("#projectStatus");
let currentStep = 0;

fields.forEach(function (field) {
  if (!field.id) field.id = "field-" + fields.indexOf(field);
  let error = document.getElementById(field.id + "_err");
  if (!error) {
    error = document.createElement("p");
    error.id = field.id + "_err";
    error.className = "field-error";
    field.insertAdjacentElement("afterend", error);
  }
  const describedBy = new Set((field.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean));
  describedBy.add(error.id);
  field.setAttribute("aria-describedby", Array.from(describedBy).join(" "));
  error.setAttribute("aria-live", "polite");
});

function customMessage(field) {
  // TODO: return a message for each failed custom rule; return "" when valid.
  // fullname: reject whitespace-only / punctuation-only names.

  if (field.id === "fullname") {
        const name = field.value;

        if (name.trim() === "") {
            return "Please enter your full name.";
        }

        if (!/[A-Za-z]/.test(name)) {
            return "Your name must contain at least one letter.";
        }

        if (!/^[A-Za-z '-]+$/.test(name)) {
            return "Use only letters, spaces, hyphens, and apostrophes.";
        }

    }
  // campusEmail: require exactly the domain student.gsu.edu after @.

    if (field.id === "campusEmail") {
        const email = field.value.trim();

        if (email === "") {
            return "Please enter your campus email address.";
        }

        if (!/^[^\s@]+@student\.gsu\.edu$/i.test(email)) {
            return "Enter a valid campus email ending in @student.gsu.edu.";
        }
    }

    // campusID validation
    if (field.id === "studentId") {
        const studentId = field.value;

        if (studentId === "") {
            return "Please enter your fictional student ID.";
        }

        if (!/^[1-9][0-9]{8}$/.test(studentId)) {
            return "Student ID must contain exactly 9 digits and cannot start with zero.";
        }
    }
  // password: 8+ characters, upper, lower, digit, and a non-whitespace symbol.
    if (field.id === "password") {
        const password = field.value;

        if (password.length < 8) {
            return "Password must contain at least 8 characters.";
        }

        if (!/[A-Z]/.test(password)) {
            return "Password must contain at least one uppercase letter.";
        }

        if (!/[a-z]/.test(password)) {
            return "Password must contain at least one lowercase letter.";
        }

        if (!/[0-9]/.test(password)) {
            return "Password must contain at least one digit.";
        }

        if (!/[^A-Za-z0-9\s]/.test(password)) {
            return "Password must contain at least one symbol.";
        }
    }
  // confirm: compare against password.value without trimming either password.
    if (field.id === "confirm") {
        const password = document.querySelector("#password").value;
        const confirm = field.value;

        if (confirm === "") {
            return "Please confirm your password.";
        }

        if (confirm !== password) {
            return "Passwords do not match.";
        }
    }

    // interests: selectedOptions.length must be 1-3.
    if (field.id === "interests") {
        const selectedCount = field.selectedOptions.length;

        if (selectedCount < 1) {
            return "Please select at least one interest.";
        }

        if (selectedCount > 3) {
            return "You may select no more than three interests.";
        }
    }

  // bio: explicitly reject value.length > 140, including programmatically set values.
    if (field.id === "bio") {
        const bio = field.value;

        if (bio.length > 140) {
            return "Bio must not exceed 140 characters.";
        }
    }

    if (field.id === "terms") {
        if (!field.checked) {
            return "You must accept the terms before continuing.";
        }
    }

    
  return "";
}

function checkField(field) {
  field.setCustomValidity("");
  field.setCustomValidity(customMessage(field));
  const valid = field.checkValidity();
  document.getElementById(field.id + "_err").textContent = valid ? "" : field.validationMessage;
  field.setAttribute("aria-invalid", String(!valid));
  return valid;
}

function showStep(index) {
  currentStep = index;
  sections.forEach(function (section, i) { section.classList.toggle("active", i === index); });
  document.querySelector("#stepNum").textContent = index + 1;
  summary.hidden = true;
  sections[index].querySelector("h2").focus();
}

function showErrors(invalid) {
  summary.replaceChildren();
  const heading = document.createElement("h2");
  heading.textContent = "Please correct these fields";
  const list = document.createElement("ul");
  invalid.forEach(function (field) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#" + field.id;
    link.textContent = field.name + ": " + field.validationMessage;
    link.addEventListener("click", function (event) {
      event.preventDefault();
      showStep(sections.indexOf(field.closest(".step")));
      field.focus();
    });
    item.appendChild(link);
    list.appendChild(item);
  });
  summary.append(heading, list);
  summary.hidden = false;
  summary.focus();
}

function buildReview() {
  const review = document.querySelector("#reviewSummary");
  review.replaceChildren();
  // TODO: add a safe summary of each non-secret value using textContent.
  const note = document.createElement("p");
  note.textContent = "TODO: complete the non-secret review summary. Passwords must not be shown.";
  review.appendChild(note);
  ["Identity", "Security", "Profile"].forEach(function (title, index) {
    const edit = document.createElement("button");
    edit.type = "button";
    edit.textContent = "Edit " + title;
    edit.addEventListener("click", function () { showStep(index); });
    review.appendChild(edit);
  });
}

form.addEventListener("click", function (event) {
  if (event.target.closest("[data-back]")) showStep(Math.max(0, currentStep - 1));
  if (event.target.closest("[data-next]")) {
    const invalid = fields.filter(function (field) {
      return sections[currentStep].contains(field) && !checkField(field);
    });
    if (invalid.length) { showErrors(invalid); return; }
    if (currentStep === 2) buildReview();
    showStep(Math.min(3, currentStep + 1));
  }
});

fields.forEach(function (field) {
  field.addEventListener("blur", function () { checkField(field); });
  field.addEventListener("input", function () {
    status.textContent = "";
    if (field.getAttribute("aria-invalid") === "true") checkField(field);
   
    // TODO: recheck confirmation if password changes after confirmation was entered.

    if (field.id === "password") {
        const confirmField = document.querySelector("#confirm");

        if (confirmField.value !== "") {
            checkField(confirmField);
        }
    }
  });
});
document.querySelector("#bio").addEventListener("input", function (event) {
  document.querySelector("#bioCount").textContent = 140 - event.target.value.length;
});
// TODO: update each #pwRules item on password input; show "Met" / "Needed" text.
const passwordInput = document.querySelector("#password");

function updatePasswordChecklist() {
    const password = passwordInput.value;

    const rules = {
        len: password.length >= 8,
        upper: /[A-Z]/.test(password),
        lower: /[a-z]/.test(password),
        digit: /[0-9]/.test(password),
        symbol: /[^A-Za-z0-9\s]/.test(password)
    };

    document.querySelectorAll("#pwRules li").forEach(function (item) {
        const rule = item.dataset.rule;
        const met = rules[rule];

        item.classList.toggle("met", met);
        item.classList.toggle("needed", !met);

        const label = item.dataset.label || item.textContent;
        item.dataset.label = label;

        item.textContent = label + " — " + (met ? "Met" : "Needed");
    });
}

passwordInput.addEventListener("input", updatePasswordChecklist);

updatePasswordChecklist();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const invalid = fields.filter(function (field) { return !checkField(field); });
  if (invalid.length) { showErrors(invalid); return; }
  buildReview();
  showStep(3);
  status.textContent = "Implemented checks passed. Nothing sent. Complete all TODOs before submitting this project.";
});
showStep(0);