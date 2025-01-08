
// document.addEventListener("DOMContentLoaded", () => {
//     const cartItemsContainer = document.getElementById("cart-items");

//     // Retrieve the logged-in user's email from localStorage
//     const userEmail = localStorage.getItem("userEmail");
//     if (!userEmail) {
//         alert("Please log in to access your cart.");
//         window.location.href = "/login.html"; // Redirect to login page
//         return;
//     }

//     const cartKey = `${userEmail}_cart`; // Unique key for the user's cart
//     const cart = JSON.parse(localStorage.getItem(cartKey)) || []; // Fetch user-specific cart

//     function renderCart() {
//         cartItemsContainer.innerHTML = "";
//         if (cart.length === 0) {
//             cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
//         } else {
//             cart.forEach((item, index) => {
//                 const cartItem = `
//                     <div class="cart-item">
//                         <img src="${item.image}" alt="${item.name}" class="cart-item-image">
//                         <div class="cart-item-details">
//                             <h3>${item.name}</h3>
//                             <p>${item.description}</p>
//                             <p>${item.price} ${item.currency}</p>
//                             <div class="quantity-controls">
//                                 <button class="decrease-quantity" data-index="${index}">-</button>
//                                 <span class="quantity">${item.quantity}</span>
//                                 <button class="increase-quantity" data-index="${index}">+</button>
//                             </div>
//                             <button class="remove-item" data-index="${index}">Remove</button>
//                         </div>
//                     </div>
//                 `;
//                 cartItemsContainer.innerHTML += cartItem;
//             });

//             // Add event listeners
//             document.querySelectorAll(".increase-quantity").forEach((btn) => {
//                 btn.addEventListener("click", (e) => {
//                     const index = e.target.getAttribute("data-index");
//                     cart[index].quantity += 1;
//                     localStorage.setItem(cartKey, JSON.stringify(cart)); // Update user-specific cart
//                     renderCart();
//                 });
//             });

//             document.querySelectorAll(".decrease-quantity").forEach((btn) => {
//                 btn.addEventListener("click", (e) => {
//                     const index = e.target.getAttribute("data-index");
//                     if (cart[index].quantity > 1) {
//                         cart[index].quantity -= 1;
//                         localStorage.setItem(cartKey, JSON.stringify(cart)); // Update user-specific cart
//                         renderCart();
//                     }
//                 });
//             });

//             document.querySelectorAll(".remove-item").forEach((btn) => {
//                 btn.addEventListener("click", (e) => {
//                     const index = e.target.getAttribute("data-index");
//                     cart.splice(index, 1);
//                     localStorage.setItem(cartKey, JSON.stringify(cart)); // Update user-specific cart
//                     renderCart();
//                 });
//             });
//         }
//     }

//     renderCart();
// });
document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const orderSummaryContainer = document.getElementById("order-summary");
    const orderSummaryButton = document.getElementById("order-summary-btn");
    const proceedToBuyButton = document.querySelector(".proceed-to-payment-btn");

    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
        alert("Please log in to access your cart.");
        window.location.href = "/login.html"; // Redirect to login page
        return;
    }

    const cartKey = `${userEmail}_cart`;
    const purchasedKey = `${userEmail}_purchased`;

    const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    const purchased = JSON.parse(localStorage.getItem(purchasedKey)) || [];

    // Function to render the cart
    function renderCart() {
        cartItemsContainer.innerHTML = "";
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            proceedToBuyButton.style.display = "none"; // Hide button when the cart is empty
        } else {
            cart.forEach((item, index) => {
                const cartItem = `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                        <div class="cart-item-details">
                            <h3>${item.name}</h3>
                            <p>${item.description}</p>
                            <p>${item.price} ${item.currency}</p>
                            <div class="quantity-controls">
                                <button class="decrease-quantity" data-index="${index}">-</button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="increase-quantity" data-index="${index}">+</button>
                            </div>
                            <button class="remove-item" data-index="${index}">Remove</button>
                        </div>
                    </div>
                `;
                cartItemsContainer.innerHTML += cartItem;
            });

            // Display the "Proceed to Buy" button
            proceedToBuyButton.style.display = "block"; // Show button when cart has items
        }

        // Always display the "Order Summary" button
        orderSummaryButton.style.display = "block";
    }

    // Function to display order summary (always show, even if cart is empty)
    function displayOrderSummary() {
        orderSummaryContainer.innerHTML = "<h3>Order Summary</h3>";

        // If there are no items in the cart, show a message
        if (cart.length === 0) {
            orderSummaryContainer.innerHTML += "<p>Your cart is empty. You need to add products to proceed with the order.</p>";
        }

        // Display purchased items, if any
        if (purchased.length === 0) {
            orderSummaryContainer.innerHTML += "<p>You have no purchased items yet.</p>";
        } else {
            purchased.forEach((item) => {
                const orderItem = `
                    <div class="order-item">
                        <h4>${item.name} (x${item.quantity})</h4>
                        <p>${item.price} ${item.currency}</p>
                    </div>
                `;
                orderSummaryContainer.innerHTML += orderItem;
            });

            // Calculate total price of purchased items
            const totalPrice = purchased.reduce((total, item) => {
                return total + item.quantity * parseFloat(item.price);
            }, 0);

            orderSummaryContainer.innerHTML += `<p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>`;
        }
    }

    // Proceed to buy items in the cart
    proceedToBuyButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Add items to proceed.");
            return;
        }

        const confirmPurchase = confirm("Are you sure you want to proceed to buy?");
        if (confirmPurchase) {
            cart.forEach((item) => {
                const existingItem = purchased.find((p) => p.name === item.name);
                if (existingItem) {
                    existingItem.quantity += item.quantity;
                } else {
                    purchased.push(item);
                }
            });

            localStorage.setItem(purchasedKey, JSON.stringify(purchased)); // Save purchased items
            localStorage.removeItem(cartKey); // Clear the cart
            renderCart();
        }
    });

    // Add event listener to the "Order Summary" button
    orderSummaryButton.addEventListener("click", displayOrderSummary);

    // Event listener for the "Increase Quantity" button
    document.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("increase-quantity")) {
            const index = e.target.getAttribute("data-index");
            cart[index].quantity += 1;
            localStorage.setItem(cartKey, JSON.stringify(cart)); // Update cart
            renderCart();
        }
    });

    // Event listener for the "Decrease Quantity" button
    document.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("decrease-quantity")) {
            const index = e.target.getAttribute("data-index");
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
                localStorage.setItem(cartKey, JSON.stringify(cart)); // Update cart
                renderCart();
            }
        }
    });

    // Event listener for the "Remove Item" button
    document.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("remove-item")) {
            const index = e.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem(cartKey, JSON.stringify(cart)); // Update cart
            renderCart();
        }
    });

    renderCart();
});
