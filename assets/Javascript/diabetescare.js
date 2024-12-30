
document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("diabetescare");
    const prescriptionModal = document.getElementById("prescription-modal");
    const uploadBtn = document.getElementById("upload-btn");
    const cancelBtn = document.getElementById("cancel-btn");
    const paymentPage = document.getElementById("payment-page");
    const paymentForm = document.getElementById("payment-form");

    // Fetch products from the JSON file
    fetch("./assets/data/diabetescare.json")
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

            // Add event listeners to buttons
            const buyNowBtns = document.querySelectorAll(".buy-now-btn");
            buyNowBtns.forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const productName = e.target.getAttribute("data-product");
                    // Show the prescription upload modal for "Buy Now"
                    prescriptionModal.style.display = "flex";
                    localStorage.setItem("currentProduct", productName); // Store the product name for later
                });
            });
        });
            // Cancel button to hide the modal
            cancelBtn.addEventListener("click", () => {
                prescriptionModal.style.display = "none";
            });

            // Handle upload prescription button click
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


