document.addEventListener("DOMContentLoaded", () => {
    const paymentDetailsContainer = document.getElementById("payment-details");
    const paymentForm = document.getElementById("payment-form");

    // Retrieve the selected product details from localStorage
    const currentProduct = JSON.parse(localStorage.getItem("currentProduct"));

    if (currentProduct) {
        // Display product name and details on the payment page
        paymentDetailsContainer.innerHTML = `
            <h3>Proceed with Payment for: ${currentProduct.name}</h3>
            <p>Price: ${currentProduct.price} <span class="currency">${currentProduct.currency}</span></p>
        `;
    } else {
        // If no product is found in localStorage, redirect back to the main page
        window.location.href = "./index.html";
    }

    // Handle payment form submission
    paymentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const userName = document.getElementById("name").value;
        const userAddress = document.getElementById("address").value;
        const paymentMethod = document.getElementById("payment-method").value;

        // Show a confirmation message (or process payment here)
        alert(`Payment successful for ${currentProduct.name}!\nUser: ${userName}\nAddress: ${userAddress}\nPayment Method: ${paymentMethod}`);
    });
});




