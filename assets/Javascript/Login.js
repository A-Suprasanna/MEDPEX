
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
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
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
    if (valid) {
        const emailValue = email.value;
        const passwordValue = password.value;
        btn.disabled = true;
        btn.innerText = 'Logging in...';
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((userCredential) => {
                const user = userCredential.user;
                let bool = true;
                localStorage.setItem('userLoggedIn',JSON.stringify(bool))
                localStorage.setItem('userEmail', user.email);
                console.log('Login successful:', user);
                    window.location.href = "../../../index.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/user-not-found') {
                    emailerror.textContent = 'No user found with this email';
                } else if (errorCode === 'auth/wrong-password') {
                    passworderror.textContent = 'Incorrect password';
                } else if (errorCode === 'auth/invalid-email') {
                    emailerror.textContent = 'Invalid email format';
                } else {
                    passworderror.textContent = 'Login failed. Please try again.';
                }
                console.error('Error during login:', errorCode, errorMessage);
                btn.disabled = false;
                btn.innerText = 'Login';
            });
    }
});
email.addEventListener("input", () => {
    emailerror.textContent = '';
});
password.addEventListener("input", () => {
    passworderror.textContent = '';
});


  
