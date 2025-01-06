
document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("Medicalequipment");
    const prescriptionModal = document.getElementById("prescription-modal");
    const uploadBtn = document.getElementById("upload-btn");
    const cancelBtn = document.getElementById("cancel-btn");

    // Fetch products from JSON file
    fetch("./assets/data/medicalequipment.json")
        .then((response) => response.json())
        .then((products) => {
            // Store products in local storage
            localStorage.setItem("products", JSON.stringify(products));

            // Populate products in the container
            products.forEach((product) => {
                const productCard = `
                    <div class="product-card">
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                        <h2 class="product-name">${product.name}</h2>
                        <p class="product-description">${product.description}</p>
                        <p class="product-price">${product.price} ${product.currency}</p>
                        <button class="buy-now-btn" data-product="${product.name}">Buy Now</button>
                        <button class="add-to-cart-btn" data-product="${product.name}">Add to Cart</button>
                    </div>
                `;
                productsContainer.innerHTML += productCard;
            });

            // Add event listener to "Add to Cart" buttons
            document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    const productName = e.target.getAttribute("data-product");
                    addToCart(productName);
                });
            });

            // Add event listeners to "Buy Now" buttons
            document.querySelectorAll(".buy-now-btn").forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    const productName = e.target.getAttribute("data-product");

                    // Check if the user is logged in
                    const userEmail = localStorage.getItem("userEmail");
                    if (!userEmail) {
                        alert("Please log in to proceed.");
                        // Save redirect action and product info
                        localStorage.setItem(
                            "redirectAction",
                            JSON.stringify({ action: "buyNow", productName })
                        );
                        window.location.href = "/login.html"; // Redirect to login page
                        return;
                    }

                    // Show the modal
                    prescriptionModal.style.display = "flex";
                    localStorage.setItem("currentProduct", productName);
                });
            });
        });

    // Cancel modal
    cancelBtn.addEventListener("click", () => {
        prescriptionModal.style.display = "none";
    });

    // Upload prescription
    uploadBtn.addEventListener("click", () => {
        const prescriptionFile = document.getElementById("prescription-file").files[0];
        if (!prescriptionFile) {
            alert("Please upload a prescription before proceeding.");
            return;
        }
        alert("Prescription uploaded successfully!");
        prescriptionModal.style.display = "none";
        setTimeout(() => (window.location.href = "./payment.html"), 500);
    });

    // Add to Cart function
    function addToCart(productName) {
        const userEmail = localStorage.getItem("userEmail");
        if (!userEmail) {
            alert("Please log in to add items to your cart.");
            window.location.href = "/login.html";
            return;
        }

        const cartKey = `${userEmail}_cart`;
        const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

        const products = JSON.parse(localStorage.getItem("products"));
        if (!products) {
            console.error("Products list is not available in localStorage.");
            return;
        }

        const product = products.find((p) => p.name === productName);

        if (product) {
            const existingItem = cart.find((item) => item.name === productName);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                product.quantity = 1;
                cart.push(product);
            }
            localStorage.setItem(cartKey, JSON.stringify(cart));
            alert(`${productName} has been added to your cart!`);
        } else {
            console.error("Product not found:", productName);
        }
    }

    // Handle redirect action after login
    const redirectAction = JSON.parse(localStorage.getItem("redirectAction"));
    if (redirectAction) {
        if (redirectAction.action === "buyNow") {
            const productName = redirectAction.productName;

            // Open the modal for the "Buy Now" action
            prescriptionModal.style.display = "flex";
            localStorage.setItem("currentProduct", productName);
        }
        localStorage.removeItem("redirectAction");
    }
});
