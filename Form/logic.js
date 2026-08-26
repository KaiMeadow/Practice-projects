const form = document.querySelector("form");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const country = document.querySelector("#country");
const countryError = document.querySelector("#countryError");

const postalCode = document.querySelector("#postalCode");
const postalCodeError = document.querySelector("#postalCodeError");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

const confirmPassword = document.querySelector("#confirmPassword");
const confirmPasswordError = document.querySelector("#confirmPasswordError");

function validateEmail() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Please etner a valid email address.";
  }
  else if (email.validity.typeMismatch) {
    emailError.textContent = "Please etner a valid email address.";
  } else {
    emailError.textContent = "";
  }
};

function validateCountry() {
  if (country.validity.valueMissing) {
    countryError.textContent = "Please enter a country.";
  } else {
    countryError.textContent = "";
  }
};

function validatePostalCode() {
  if (postalCode.validity.valueMissing) {
    postalCodeError.textContent = "Please enter a valid postal code.";
  } else if (postalCode.validity.patternMismatch) {
    postalCodeError.textContent = "Please enter a valid postal code.";
  } else {
    postalCodeError.textContent = "";
  }
};

function validatePassword() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "Password must be at least 8 characters.";
  } else if (password.validity.tooShort) {
    passwordError.textContent = "Password must be at least 8 characters.";
  } else {
    passwordError.textContent = "";
  }
}

function validateConfirmPassword() {
  if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = "Please confirm your password.";
    confirmPassword.setCustomValidity("Please confirm your password.");
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    confirmPassword.setCustomValidity("Passwords do not match.");
  } else {
    confirmPasswordError.textContent = "";
    confirmPassword.setCustomValidity("");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  validateEmail();
  validateCountry();
  validateEmail();
  validatePostalCode();
  validatePassword();
  validateConfirmPassword();

  if(form.checkValidity()) {
    alert("nigga you did it ")
  }
});


email.addEventListener("input", validateEmail);
email.addEventListener("blur", validateEmail);

country.addEventListener("input", validateCountry);
country.addEventListener("blur", validateCountry);

postalCode.addEventListener("blur", validatePostalCode);
postalCode.addEventListener("input", validatePostalCode);

password.addEventListener("input", validatePassword);
password.addEventListener("blur", validatePassword);

confirmPassword.addEventListener("input", validateConfirmPassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);