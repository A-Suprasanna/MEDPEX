// stayLoggedInWithIcon.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

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

// DOM elements
const userIcon = document.getElementById("user-icon");
const dropdownMenu = document.getElementById("dropdown-menu");
const welcomeText = document.getElementById("welcome-text");
const authButton = document.getElementById("auth-button");
const logoutButton = document.getElementById("logout-button");

// Toggle dropdown menu
userIcon.addEventListener("click", () => {
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

// Check user authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is logged in
        const username = user.email;
        welcomeText.textContent = `Welcome, ${username.charAt(0).toUpperCase() + username.slice(1)}`;
        authButton.style.display = "none";
        logoutButton.style.display = "block";
    } else {
        // User is logged out
        welcomeText.textContent = "Welcome!";
        authButton.style.display = "block";
        logoutButton.style.display = "none";
    }
});

// Login/Register button click
authButton.addEventListener("click", () => {
    window.location.href = "./index.html";
});

// Logout button click
logoutButton.addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            console.log("User logged out");
            window.location.reload(); // Refresh the page to update UI
        })
        .catch((error) => {
            console.error("Error logging out:", error);
        });
});

// Search Bar and Containers
const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");
const categoriesContainer = document.getElementById("categories-container");
const searchResultsContainer = document.getElementById("search-results-container");

const prescriptionModal = document.getElementById("prescription-modal");
const cancelBtn = document.getElementById("cancel-btn");
const uploadBtn = document.getElementById("upload-btn");

const paymentPage = document.getElementById("payment-page");
const paymentForm = document.getElementById("payment-form");

let allProducts = []; // Store all products

// Fetch Categories and Products
document.addEventListener("DOMContentLoaded", () => {
    fetch('./assets/data/categories.json')
        .then(response => response.json())
        .then(categories => {
            displayCategories(categories);
            loadAllProducts(categories);
        })
        .catch(error => console.error("Error loading categories:", error));
});

// Display Categories
function displayCategories(categories) {
    categories.forEach(category => {
        const categoryCard = document.createElement("div");
        categoryCard.classList.add("category-card");
        categoryCard.innerHTML = `
            <a href="${category.link}">
                <img src="${category.image}" alt="${category.label}">
                <p>${category.label}</p>
            </a>
        `;
        categoriesContainer.appendChild(categoryCard);
    });
}

// Load All Products
function loadAllProducts(categories) {
    const productPromises = categories.map(category =>
        fetch(category.products)
            .then(response => response.json())
            .catch(error => {
                console.error(`Error loading products for ${category.label}:`, error);
                return [];
            })
    );

    Promise.all(productPromises).then(productsByCategory => {
        productsByCategory.forEach(products => {
            allProducts = allProducts.concat(products);
        });
    });
}

// Search Functionality
function filterProducts(query) {
    const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().startsWith(query.toLowerCase())
    );
    renderSearchResults(filteredProducts);
}

// Event Listener for Typing in Search Bar
searchBar.addEventListener("input", () => {
    const query = searchBar.value.trim();
    if (!query) {
        searchResultsContainer.innerHTML = ""; // Clear results
        return;
    }
    filterProducts(query);
});

// Event Listener for Clicking Search Button
searchBtn.addEventListener("click", () => {
    const query = searchBar.value.trim();
    if (!query) {
        alert("Please enter a search query.");
        return;
    }
    filterProducts(query);
});

// Render Search Results
function renderSearchResults(products) {
    searchResultsContainer.innerHTML = "";
    if (products.length === 0) {
        searchResultsContainer.innerHTML = "<p>No products found.</p>";
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price} ${product.currency}</p>
            <div class="product-buttons">
                <button class="buy-now-btn" data-product="${product.name}">Buy Now</button>
                <button class="buy-now-btn" data-product="${product.name}">Add to cart</button>
            </div>
        `;
        searchResultsContainer.appendChild(productCard);
    });

    // Add event listeners for Buy Now buttons
    document.querySelectorAll(".buy-now-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const productName = e.target.getAttribute("data-product");
            prescriptionModal.style.display = "flex";
            localStorage.setItem("currentProduct", productName);
        });
    });
}

// Cancel Modal
cancelBtn.addEventListener("click", () => {
    prescriptionModal.style.display = "none";
});

// Upload Prescription
uploadBtn.addEventListener("click", () => {
    const prescriptionFile = document.getElementById("prescription-file").files[0];
    if (!prescriptionFile) {
        alert("Please upload a prescription before proceeding.");
        return;
    }
    prescriptionModal.style.display = "none";
    paymentPage.style.display = "flex";
});

// Payment Form Submission
// paymentForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const userName = document.getElementById("name").value;
//     const userAddress = document.getElementById("address").value;
//     const paymentMethod = document.getElementById("payment-method").value;

//     alert(`Payment successful for ${localStorage.getItem("currentProduct")}!
//     Name: ${userName}
//     Address: ${userAddress}
//     Payment Method: ${paymentMethod}`);
//     paymentPage.style.display = "none";
//     window.location.href = "./new.html";
// });


