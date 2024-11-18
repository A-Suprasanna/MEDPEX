
// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

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

const email = document.getElementById("email");
const password = document.getElementById("password");
const emailerror = document.getElementById("email-error");
const passworderror = document.getElementById("password-error");
const form = document.getElementById("form");
const btn = document.getElementById("login");
const minlength = 8;
// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
// Handle form submission
form.addEventListener("submit", (event) => {
    // Prevent form submission if the form is invalid
    event.preventDefault();
    // Clear previous error messages
    emailerror.textContent = '';
    passworderror.textContent = '';
    let valid = true;
    // Validate email
    if (email.value.length === 0) {
        emailerror.textContent = "Email required";
        valid = false;
    } else if (!validateEmail(email.value)) {
        emailerror.textContent = "Please enter a valid email";
        valid = false;
    }
    // Validate password
    if (password.value.length === 0) {
        passworderror.textContent = "Password required";
        valid = false;
    } else if (password.value.length < minlength) {
        passworderror.textContent = `Password must be at least ${minlength} characters long.`;
        valid = false;
    }
    // If validation passes, proceed to Firebase authentication
    if (valid) {
        const emailValue = email.value;
        const passwordValue = password.value;
        // Disable the login button during the request
        btn.disabled = true;
        btn.innerText = 'Logging in...';
        // Sign in the user using Firebase Authentication
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((userCredential) => {
                // Successfully logged in
                const user = userCredential.user;
                console.log('Login successful:', user);
                // Redirect to a different page (e.g., dashboard or home)
                window.location.href = "./home.html"; // Change this to the page you want to redirect to
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // Handle Firebase authentication error codes
                if (errorCode === 'auth/user-not-found') {
                    emailerror.textContent = 'No user found with this email';
                } else if (errorCode === 'auth/wrong-password') {
                    passworderror.textContent = 'Incorrect password';
                } else if (errorCode === 'auth/invalid-email') {
                    emailerror.textContent = 'Invalid email format';
                } else {
                    // For other errors, show a general message
                    passworderror.textContent = 'Login failed. Please try again.';
                }
                console.error('Error during login:', errorCode, errorMessage);
                // Reset the button state
                btn.disabled = false;
                btn.innerText = 'Login';
            });
    }
});
// Clear error messages as user types
email.addEventListener("input", () => {
    emailerror.textContent = ''; // Only clear email error
});
password.addEventListener("input", () => {
    passworderror.textContent = ''; // Only clear password error
});







