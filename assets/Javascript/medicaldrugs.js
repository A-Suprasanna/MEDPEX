// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
// import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCJ0R0fij-e5WnkNyZJlX71ky7X3Pvbqdg",
//     authDomain: "medpex.firebaseapp.com",
//     projectId: "medpex",
//     storageBucket: "medpex.firebasestorage.app",
//     messagingSenderId: "715806311436",
//     appId: "1:715806311436:web:ff4381560c9eb030601a29",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // DOM elements
// const userIcon = document.getElementById("user-icon");
// const dropdownMenu = document.getElementById("dropdown-menu");
// const welcomeText = document.getElementById("welcome-text");
// const authButton = document.getElementById("auth-button");
// const logoutButton = document.getElementById("logout-button");

// // Check if user is logged in from localStorage
// const checkUserLoginStatus = () => {
//     const userEmail = localStorage.getItem("userEmail");
//     if (userEmail) {
//         // User is logged in, display username and show logout button
//         welcomeText.textContent = `Welcome, ${userEmail.charAt(0).toUpperCase() + userEmail.slice(1)}`;
//         authButton.style.display = "none";
//         logoutButton.style.display = "block";
//     } else {
//         // User is not logged in, show login/register button
//         welcomeText.textContent = "Welcome!";
//         authButton.style.display = "block";
//         logoutButton.style.display = "none";
//     }
// };

// // Check user authentication state
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is logged in
//         const username = user.email;
//         localStorage.setItem("userEmail", username); // Store the email in localStorage
//         checkUserLoginStatus();
//     } else {
//         // User is logged out
//         localStorage.removeItem("userEmail"); // Remove user email from localStorage
//         checkUserLoginStatus();
//     }
// });

// // Toggle dropdown menu
// userIcon.addEventListener("click", () => {
//     dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
// });

// // Login/Register button click
// authButton.addEventListener("click", () => {
//     window.location.href = "./login.html";
// });

// // Logout button click
// logoutButton.addEventListener("click", () => {
//     signOut(auth)
//         .then(() => {
//             console.log("User logged out");
//             localStorage.removeItem("userEmail"); // Remove from localStorage
//             window.location.reload(); // Refresh the page to update UI
//         })
//         .catch((error) => {
//             console.error("Error logging out:", error);
//         });
// });

// // Call the function to check login status when the page loads
// checkUserLoginStatus();









document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("Medicalanddrugs");
    const prescriptionModal = document.getElementById("prescription-modal");
    const uploadBtn = document.getElementById("upload-btn");
    const cancelBtn = document.getElementById("cancel-btn");
    const paymentPage = document.getElementById("payment-page");
    const paymentForm = document.getElementById("payment-form");

    // Fetch products from the JSON file
    fetch("./assets/data/medicaldrugs.json")
        .then((response) => response.json())
        .then((products) => {
            // Store the data in local storage
            localStorage.setItem("products", JSON.stringify(products));

            // Retrieve the data from local storage
            const storedProducts = JSON.parse(localStorage.getItem("products"));

            // Populate the products in the container
            storedProducts.forEach((product) => {
                const productCard = `
                    <div class="product-card">
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                        <h2 class="product-name">${product.name}</h2>
                        <p class="product-description">${product.description}</p>
                        <p class="product-price">${product.price} <span class="currency">${product.currency}</span></p>
                        <button class="buy-now-btn" data-product="${product.name}">Buy Now</button>
                        <button class="add-to-cart-btn" data-product="${product.name}">Add to Cart</button>
                    </div>
                `;
                productsContainer.innerHTML += productCard;
            });

            // Add event listeners to "Buy Now" buttons
            const buyNowBtns = document.querySelectorAll(".buy-now-btn");
            buyNowBtns.forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const productName = e.target.getAttribute("data-product");
                    // Show the prescription upload modal
                    prescriptionModal.style.display = "flex";
                    localStorage.setItem("currentProduct", productName); // Store the product name for later use
                });
            });
        });

    // Cancel button to hide the modal
    cancelBtn.addEventListener("click", () => {
        prescriptionModal.style.display = "none";
    });

    // Handle "Upload Prescription" button click
    uploadBtn.addEventListener("click", () => {
        const prescriptionFile = document.getElementById("prescription-file").files[0];

        if (!prescriptionFile) {
            alert("Please upload a prescription before proceeding.");
            return;
        }

        // Show success message and proceed to payment page
        alert("Prescription uploaded successfully!");
        prescriptionModal.style.display = "none";
        // Optionally set up a delay for smooth navigation
        setTimeout(() => {
            window.location.href = "./payment.html"; // Redirect to payment page (adjust the path as needed)
        }, 500); // Delay of 500ms
    });
});


