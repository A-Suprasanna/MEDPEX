// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ0R0fij-e5WnkNyZJlX71ky7X3Pvbqdg",
  authDomain: "medpex.firebaseapp.com",
  projectId: "medpex",
  storageBucket: "medpex.firebasestorage.app",
  messagingSenderId: "715806311436",
  appId: "1:715806311436:web:ff4381560c9eb030601a29",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Form elements
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Error elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Validation patterns
const nameRegex = /^[a-zA-Z\s]{3,50}$/; // Only letters and spaces, 3-50 characters
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Valid email format
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/; // Rejects domains with numbers
const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com"];
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/; // Password rules

// Clear errors on input
[nameInput, emailInput, passwordInput, confirmPasswordInput].forEach((input) => {
  input.addEventListener("input", () => {
    document.getElementById(`${input.id}Error`).textContent = "";
  });
});

// Form submit event
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  let valid = true;

  // Validate name
  if (!nameInput.value.trim()) {
    nameError.textContent = "Name is required!";
    valid = false;
  } else if (!nameRegex.test(nameInput.value)) {
    nameError.textContent = "Name must be 3-50 characters, letters, and spaces only.";
    valid = false;
  }

  // Validate email
  if (!emailInput.value.trim()) {
    emailError.textContent = "Email is required!";
    valid = false;
  } else if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  // Validate password
  if (!passwordInput.value.trim()) {
    passwordError.textContent = "Password is required!";
    valid = false;
  } else if (!passwordRegex.test(passwordInput.value)) {
    passwordError.textContent =
      "Password must be 8-32 characters, include uppercase, lowercase, number, and special character.";
    valid = false;
  }

  // Validate confirm password
  if (!confirmPasswordInput.value.trim()) {
    confirmPasswordError.textContent = "Confirm Password is required!";
    valid = false;
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match!";
    valid = false;
  }

  if (!valid) return; // Stop if validation fails

  // Firebase registration
  createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then((userCredential) => {
      // Registration successful
      alert("Registration successful!");
      window.location.href = "./new.html"; // Redirect to new page
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      // Display Firebase error messages
      if (errorCode === "auth/email-already-in-use") {
        emailError.textContent = "This email is already registered!";
      } else if (errorCode === "auth/invalid-email") {
        emailError.textContent = "Invalid email address!";
      } else {
        emailError.textContent = errorMessage;
      }
    });
});





//FOR BUTTON

// createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     const username = nameInput.value;  // Assuming the user is providing their name
//     const firstLetter = username.charAt(0).toUpperCase();

//     // Store the first letter in localStorage
//     localStorage.setItem('usernameFirstLetter', firstLetter);

//     // Redirect to home page
//     window.location.href = "./home.html";
//   })
//   .catch((error) => {
//     // Handle registration error as before
//   });




  
  


  