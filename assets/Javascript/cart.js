
document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");

    // Retrieve the logged-in user's email from localStorage
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
        alert("Please log in to access your cart.");
        window.location.href = "/login.html"; // Redirect to login page
        return;
    }

    const cartKey = `${userEmail}_cart`; // Unique key for the user's cart
    const cart = JSON.parse(localStorage.getItem(cartKey)) || []; // Fetch user-specific cart

    function renderCart() {
        cartItemsContainer.innerHTML = "";
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
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

            // Add event listeners
            document.querySelectorAll(".increase-quantity").forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    const index = e.target.getAttribute("data-index");
                    cart[index].quantity += 1;
                    localStorage.setItem(cartKey, JSON.stringify(cart)); // Update user-specific cart
                    renderCart();
                });
            });

            document.querySelectorAll(".decrease-quantity").forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    const index = e.target.getAttribute("data-index");
                    if (cart[index].quantity > 1) {
                        cart[index].quantity -= 1;
                        localStorage.setItem(cartKey, JSON.stringify(cart)); // Update user-specific cart
                        renderCart();
                    }
                });
            });

            document.querySelectorAll(".remove-item").forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    const index = e.target.getAttribute("data-index");
                    cart.splice(index, 1);
                    localStorage.setItem(cartKey, JSON.stringify(cart)); // Update user-specific cart
                    renderCart();
                });
            });
        }
    }

    renderCart();
});

