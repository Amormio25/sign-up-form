const nameInputs = document.querySelectorAll(".name");

const emailInput = document.querySelector("#email");
const emailErrors = document.querySelectorAll(".email");

const phoneInput = document.querySelector("#phone");
const phoneErrors = document.querySelectorAll(".phone");

const passwordInput = document.querySelector("#password");
const passwordErrors = document.querySelectorAll(".password");

const confirmPasswordInput = document.querySelector("#confirm-pw");
const confirmPasswordErrors = document.querySelectorAll(".confirm-pw");

nameInputs.forEach((nameInput) => {
    nameInput.addEventListener("blur", () => { 
        if (nameInput.value != "") { 
            nameInput.classList.remove("error");
            nameInput.classList.add("valid");
        } else {
            nameInput.classList.remove("valid")
        }
    });
});
emailInput.addEventListener("blur", validateEmail);
phoneInput.addEventListener("blur", validateNumber);
passwordInput.addEventListener("blur", validatePassword);
confirmPasswordInput.addEventListener("blur", confirmPassword);

function validateEmail() {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailInput.value !== "" && !emailInput.value.match(pattern)) {
        emailErrors.forEach((errorBox) => errorBox.classList.remove("valid"));
        emailErrors.forEach((errorBox) => errorBox.classList.add("error"));
        emailInput.classList.remove("valid");
        emailInput.classList.add("error");
    } else if (emailInput.value !== "" && emailInput.value.match(pattern)) {
        emailErrors.forEach((errorBox) => errorBox.classList.remove("error"));
        emailInput.classList.remove("error");
        emailInput.classList.add("valid");
    } else {
        emailInput.classList.remove("error");
        emailErrors.forEach((errorBox) => errorBox.classList.remove("error"));
    }
}

function validateNumber() {
    phoneErrors.forEach((phoneError) => {
        if (phoneInput.value !== "") {
            if (phoneInput.validity.valid) {
                phoneError.classList.remove("error");
                phoneInput.classList.remove("error");
                phoneInput.classList.add("valid");
            } else {
                phoneInput.classList.remove("valid");
                phoneInput.classList.add("error");
                phoneError.classList.add("error");
            }
        } else {
            phoneInput.classList.remove("error");
            phoneError.classList.remove("error");
        }
    });
}

function validatePassword() {
    const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;
    if (passwordInput.value !== "" && !passwordInput.value.match(pattern)) {
        passwordErrors.forEach((errorBox) => errorBox.classList.add("error"));
        passwordInput.classList.remove("valid");
        passwordInput.classList.add("error");
    } else if (passwordInput.value !== "" && passwordInput.value.match(pattern)) {
        passwordErrors.forEach((errorBox) => errorBox.classList.remove("error"));
        passwordInput.classList.remove("error");
        passwordInput.classList.add("valid");
    } else {
        passwordInput.classList.remove("error");
        passwordErrors.forEach((errorBox) => errorBox.classList.remove("error"));
    }
}

function confirmPassword() {
    if ((confirmPasswordInput.value !== "" && passwordInput.value === "") || 
            (confirmPasswordInput.value !== "" && !confirmPasswordInput.value.match(passwordInput.value))) {
                console.log("hi")
        confirmPasswordErrors.forEach((errorBox) => errorBox.classList.add("error"));
        confirmPasswordInput.classList.remove("valid");
        confirmPasswordInput.classList.add("error");
    } else if (confirmPasswordInput.value !== "" && confirmPasswordInput.value.match(passwordInput.value)) {
        confirmPasswordErrors.forEach((errorBox) => errorBox.classList.remove("error"));
        confirmPasswordInput.classList.remove("error");
        confirmPasswordInput.classList.add("valid");
    } else {
        confirmPasswordInput.classList.remove("error");
        confirmPasswordErrors.forEach((errorBox) => errorBox.classList.remove("error"));
    }
}