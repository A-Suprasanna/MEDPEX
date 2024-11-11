// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
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

export { auth, signInWithEmailAndPassword };

// Selecting form and input elements
const form = document.getElementById("Login");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Clear error messages when typing
email.addEventListener("input", () => {
  emailError.textContent = "";
});

password.addEventListener("input", () => {
  // Password length validation message
  if (password.value.length < 8) {
    passwordError.textContent = `Password must be at least 8 characters; you entered ${password.value.length}.`;
  } else {
    passwordError.textContent = "";
  }
});

// Form submit event
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting by default

  // Reset error messages
  emailError.textContent = "";
  passwordError.textContent = "";

  let formIsValid = true;

  // Validate email
  if (!email.value) {
    emailError.textContent = "Email is required!";
    formIsValid = false;
  } else if (!email.validity.valid) {
    emailError.textContent = "Please enter a valid email address!";
    formIsValid = false;
  }

  // Validate password length
  if (!password.value) {
    passwordError.textContent = "Password is required!";
    formIsValid = false;
  } else if (password.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters!";
    formIsValid = false;
  }

  // Stop if form is invalid
  if (!formIsValid) return;

  // Firebase authentication
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Successful sign-in
      alert("Login successful!");
      window.location.href = "./index.html"; // Replace with your destination page
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
});

