// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ0R0fij-e5WnkNyZJlX71ky7X3Pvbqdg",
  authDomain: "medpex.firebaseapp.com",
  projectId: "medpex",
  storageBucket: "medpex.firebasestorage.app",
  messagingSenderId: "715806311436",
  appId: "1:715806311436:web:ff4381560c9eb030601a29",
  measurementId: "G-H0JV8Y4ECN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Selecting form and input elements
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Clear error messages on typing in each field
nameInput.addEventListener("input", () => {
  nameError.textContent = "";
});

emailInput.addEventListener("input", () => {
  emailError.textContent = "";
});

// Real-time validation for password
passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters!";
  } else {
    passwordError.textContent = "";
  }
  confirmPasswordError.textContent = ""; // Clear confirm password error since it depends on password match
});

// Real-time validation for confirm password
confirmPasswordInput.addEventListener("input", () => {
  if (confirmPasswordInput.value === passwordInput.value) {
    confirmPasswordError.textContent = "";
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting by default

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  // Form validation checks
  let formIsValid = true;

  if (!nameInput.value.trim()) {
    nameError.textContent = "Name is required!";
    formIsValid = false;
  }

  if (!emailInput.value.trim()) {
    emailError.textContent = "Email is required!";
    formIsValid = false;
  }

  if (!passwordInput.value || passwordInput.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters!";
    formIsValid = false;
  }

  // Check confirm password field
  if (!confirmPasswordInput.value) {
    confirmPasswordError.textContent = "Confirm Password is required!";
    formIsValid = false;
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match!";
    formIsValid = false;
  }

  // If form is invalid, stop here
  if (!formIsValid) {
    return;
  }

  // Firebase registration
  createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then((userCredential) => {
      // Registration successful
      const user = userCredential.user;
      alert("Registration successful!");
      
      // Optional: redirect to another page
      window.location.href = "../HTML/index.html"; // Adjust the URL as needed
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      // Display Firebase error messages
      if (errorCode === "auth/email-already-in-use") {
        emailError.textContent = "This email is already registered!";
      } else {
        alert(`Error: ${errorMessage}`);
      }
    });
});



