/* Form Element */
const formInputList = document.querySelectorAll(".form-input");
const userNameInput = document.querySelector("#username-input");
const userNameTextError = document.querySelector("#username-text-error");
const userNameTextSuccess = document.querySelector("#username-text-success");
const emailInput = document.querySelector("#email-input");
const emailTextError = document.querySelector("#email-text-error");
const emailValidationError = document.querySelector("#email-validation-error");
const emailValidationSuccess = document.querySelector(
  "#email-validation-success"
);
const passwordInput = document.querySelector("#password-input");
const passwordTextError = document.querySelector("#password-text-error");
const passwordValidationError = document.querySelector(
  "#password-validation-error"
);
const passwordValidationSuccess = document.querySelector(
  "#password-validation-success"
);
const passwordMatchInput = document.querySelector("#password-match-input");
const passwordMatchTextError = document.querySelector(
  "#password-match-text-error"
);
const passwordMatchValidationError = document.querySelector(
  "#password-match-validation-error"
);
const passwordMatchValidationSuccess = document.querySelector(
  "#password-match-validation-success"
);
const submitBtn = document.querySelector("#form-submit");

const hasString = (input) => (input === "" ? false : true);

//Copied

const validateEmail = (email) =>
  email.split("").filter((char) => char === "@").length === 1;
const validatePassword = (password) => {
  const regex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return regex.test(password);
};
const validatePasswordConfirmation = (eventTargetValue, passwordInputValue) =>
  eventTargetValue === passwordInputValue;

const activateMessage = (element, messageType, eventTarget) => {
  if (messageType === "error") {
    element.classList.add("display-block");
    eventTarget.classList.add("form-input-danger");
  } else if (messageType === "success") {
    element.classList.add("display-block");
    eventTarget.classList.add("form-input-success");
  }
};

const deactivateMessage = (element, messageType, eventTarget) => {
  if (messageType === "error") {
    element.classList.remove("display-block");
    eventTarget.classList.remove("form-input-danger");
  } else if (messageType === "success") {
    element.classList.remove("display-block");
    eventTarget.classList.remove("form-input-success");
  }
};

userNameInput.addEventListener("input", (event) => {
  const eventTarget = event.target;
  const eventTargetValue = eventTarget.value;
  if (hasString(eventTargetValue)) {
    deactivateMessage(userNameTextError, "error", eventTarget);

    if (eventTargetValue.length > 3) {
      activateMessage(userNameTextSuccess, "success", eventTarget);
    } else {
      deactivateMessage(userNameTextSuccess, "success", eventTarget);
    }
  } else {
    activateMessage(userNameTextError, "error", eventTarget);
  }
});

emailInput.addEventListener("input", (event) => {
  const eventTarget = event.target;
  const eventTargetValue = eventTarget.value;
  if (hasString(eventTargetValue)) {
    deactivateMessage(emailTextError, "error", eventTarget);

    if (!validateEmail(eventTargetValue)) {
      deactivateMessage(emailValidationSuccess, "success", eventTarget);
      activateMessage(emailValidationError, "error", eventTarget);
    } else {
      deactivateMessage(emailValidationError, "error", eventTarget);
      activateMessage(emailValidationSuccess, "success", eventTarget);
    }
  } else {
    deactivateMessage(emailValidationError, "error", eventTarget);
    deactivateMessage(emailValidationSuccess, "success", eventTarget);
    activateMessage(emailTextError, "error", eventTarget);
  }
});

passwordInput.addEventListener("input", (event) => {
  const eventTarget = event.target;
  const eventTargetValue = eventTarget.value;
  if (hasString(eventTargetValue)) {
    deactivateMessage(passwordTextError, "error", eventTarget);

    if (!validatePassword(eventTargetValue)) {
      deactivateMessage(passwordValidationSuccess, "success", eventTarget);
      activateMessage(passwordValidationError, "error", eventTarget);
    } else {
      deactivateMessage(passwordValidationError, "error", eventTarget);
      activateMessage(passwordValidationSuccess, "success", eventTarget);
    }
  } else {
    deactivateMessage(passwordValidationError, "error", eventTarget);
    deactivateMessage(passwordValidationSuccess, "success", eventTarget);
    activateMessage(passwordTextError, "error", eventTarget);
  }
});

passwordMatchInput.addEventListener("input", (event) => {
  const eventTarget = event.target;
  const eventTargetValue = eventTarget.value;
  const passwordInputValue = passwordInput.value;
  if (hasString(eventTargetValue)) {
    deactivateMessage(passwordMatchTextError, "error", eventTarget);

    if (!validatePasswordConfirmation(eventTargetValue, passwordInputValue)) {
      deactivateMessage(passwordMatchValidationSuccess, "success", eventTarget);
      activateMessage(passwordMatchValidationError, "error", eventTarget);
    } else {
      deactivateMessage(passwordMatchValidationError, "error", eventTarget);
      activateMessage(passwordMatchValidationSuccess, "success", eventTarget);
      submitBtn.removeAttribute("disabled");
    }
  } else {
    deactivateMessage(passwordMatchValidationError, "error", eventTarget);
    deactivateMessage(passwordMatchValidationSuccess, "success", eventTarget);
    activateMessage(passwordMatchTextError, "error", eventTarget);
  }
});
