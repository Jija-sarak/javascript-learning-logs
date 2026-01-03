const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const summerySection = document.getElementById("summarySection");
const btn = document.querySelector("button");

let name = "";
let email = "";
let password = "";
let confirmPassword = "";

nameInput.addEventListener("blur", (e) => {
    name = e.target.value.trim();
    const errorP = nameInput.nextElementSibling;
    if (name === "") {
        errorP.innerText = "Name is required";
        errorP.style.color = "red";
        return;
    }

    if (name.length < 2) {
        errorP.innerText = "Name must be at least 2 characters";
        errorP.style.color = "red";
        return;
    }

    errorP.innerText = "";
});

emailInput.addEventListener("blur", (e) => {
    email = e.target.value.trim();
    const errorP = emailInput.nextElementSibling;

    if (email === "") {
        errorP.innerText = "Email is required";
        errorP.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        errorP.innerText = "Email must contain @";
        errorP.style.color = "red";
        return;
    }

    errorP.innerText = "";

});

passwordInput.addEventListener("blur", (e) => {
    password = e.target.value.trim();
    const errorP = passwordInput.nextElementSibling;

    if (password === "") {
        errorP.innerText = "Password is required";
        errorP.style.color = "red";
        return;
    }

    errorP.innerText = "";
});

confirmPasswordInput.addEventListener("blur", (e) => {
    confirmPassword = e.target.value.trim();
    const errorP = confirmPasswordInput.nextElementSibling;

    if (confirmPassword === "") {
        errorP.innerText = "Confirm password is required";
        errorP.style.color = "red";
        return;
    }

    if (password !== confirmPassword) {
        errorP.innerText = "Passwords do not match";
        errorP.style.color = "red";
        return;
    }

    errorP.innerText = "";
});

btn.addEventListener("click", (e) => {
    e.preventDefault();

    let isValid = true;

    if (name === "" || name.length < 2) {
        nameInput.nextElementSibling.innerText =
            name === "" ? "Name is required" : "Name must be at least 2 characters";
        nameInput.nextElementSibling.style.color = "red";
        isValid = false;

    } else {
        nameInput.nextElementSibling.innerText = "";
    }

    if (email === "" || !email.includes("@")) {
        emailInput.nextElementSibling.innerText =
            email === "" ? "Email is required" : "Email must contain @";
        emailInput.nextElementSibling.style.color = "red";
        isValid = false;
    } else {
        emailInput.nextElementSibling.innerText = "";
    }

    if (password === "") {
        passwordInput.nextElementSibling.innerText = "Password is required";
        passwordInput.nextElementSibling.style.color = "red";
        isValid = false;
    } else {
        passwordInput.nextElementSibling.innerText = "";
    }

    if (confirmPassword === "" || password !== confirmPassword) {
        confirmPasswordInput.nextElementSibling.innerText =
            confirmPassword === "" ? "Confirm password is required" : "Passwords do not match";
        confirmPasswordInput.nextElementSibling.style.color = "red";
        isValid = false;
    } else {
        confirmPasswordInput.nextElementSibling.innerText = "";
    }

    if (isValid) {
        summerySection.innerHTML = `
            <h3>Submitted Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> ${"*".repeat(password.length)}</p>
        `;

    } else {
        summerySection.innerHTML = "";
    }
});
