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

// Event listener for the form submission
document.getElementById("Login").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from submitting

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validate email and password fields before attempting to sign in
  if (!email || !password) {
    alert("Please fill out both email and password fields!");
    return;
  }

  // Sign in with Firebase authentication
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      alert("Login successful!");
      // Redirect to a different page after successful login
      window.location.href = "../HTML/index.html"; // Replace with your desired page
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`); // Fixed the error alert message
    });
});

// Form validation
const form = document.getElementById("Login");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function(event) {
  emailError.textContent = "";
  passwordError.textContent = "";

  // Email validation
  if (!email.validity.valid) {
    if (email.validity.valueMissing) {
      emailError.textContent = "Email is required!";
    } else if (email.validity.typeMismatch) {
      emailError.textContent = "Please enter a valid email address!";
    }
    event.preventDefault();
  }

  // Password validation
  if (!password.checkValidity()) {
    if (password.validity.valueMissing) {
      passwordError.textContent = "Password is required!";
    } else if (password.validity.tooShort) {
      passwordError.textContent = "Password must be at least 8 characters long!";
    }
    event.preventDefault();
  }
});

// Password length validation on input
password.addEventListener("input", function() {
  passwordError.textContent = "";
  if (password.validity.tooShort) {
    passwordError.textContent = `Password must be at least ${password.minLength} characters; you entered ${password.value.length}.`;
  }
});
