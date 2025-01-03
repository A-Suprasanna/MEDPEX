document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

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
                    localStorage.setItem("cart", JSON.stringify(cart));
                    renderCart();
                });
            });

            document.querySelectorAll(".decrease-quantity").forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    const index = e.target.getAttribute("data-index");
                    if (cart[index].quantity > 1) {
                        cart[index].quantity -= 1;
                        localStorage.setItem("cart", JSON.stringify(cart));
                        renderCart();
                    }
                });
            });

            document.querySelectorAll(".remove-item").forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    const index = e.target.getAttribute("data-index");
                    cart.splice(index, 1);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    renderCart();
                });
            });
        }
    }

    renderCart();
});
