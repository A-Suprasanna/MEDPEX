
document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("Medicalanddrugs");
    const prescriptionModal = document.getElementById("prescription-modal");
    const uploadBtn = document.getElementById("upload-btn");
    const cancelBtn = document.getElementById("cancel-btn");
    const cartIcon = document.getElementById("cart-icon");
    const cartCount = document.getElementById("cart-count");
    const cartModal = document.getElementById("cart-modal");
    const cartItems = document.getElementById("cart-items");
    const closeCartBtn = document.getElementById("close-cart-btn");

    // Fetch products from the JSON file
    fetch("./assets/data/medicaldrugs.json")
        .then((response) => response.json())
        .then((products) => {
            // Store the data in localStorage
            localStorage.setItem("products", JSON.stringify(products));

            // Retrieve the data from localStorage
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

            // Add event listeners to "Add to Cart" buttons
            const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
            addToCartBtns.forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const productName = e.target.getAttribute("data-product");
                    addToCart(productName);
                });
            });
        });

    // Function to add product to cart
    function addToCart(productName) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(productName);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        alert(`${productName} has been added to your cart successfully!`);
    }

    // Function to update cart count
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartCount.textContent = cart.length;
    }

    // Show cart items in modal
    cartIcon.addEventListener("click", () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
            cartItems.innerHTML = "<li>Your cart is empty.</li>";
        } else {
            cartItems.innerHTML = cart.map(item => `<li>${item}</li>`).join("");
        }
        cartModal.style.display = "block";
    });

    // Close cart modal
    closeCartBtn.addEventListener("click", () => {
        cartModal.style.display = "none";
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

    // Initialize cart count on page load
    updateCartCount();
});
