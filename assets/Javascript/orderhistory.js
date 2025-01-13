
// orderhistory.js

// document.addEventListener("DOMContentLoaded", () => {
//     const orderSummaryContainer = document.getElementById("order-summary-container");
    
//     // Get the purchased items from localStorage
//     const userEmail = localStorage.getItem("userEmail");
//     const purchasedKey = `${userEmail}_purchased`;
//     const purchased = JSON.parse(localStorage.getItem(purchasedKey)) || [];

//     // Function to render purchased items
//     function renderOrderSummary() {
//         orderSummaryContainer.innerHTML = "<h3>Purchased Items</h3>";

//         if (purchased.length === 0) {
//             orderSummaryContainer.innerHTML += "<p>You have no purchased items yet.</p>";
//         } else {
//             purchased.forEach((item) => {
//                 const orderItem = `
//                     <div class="order-item">
//                         <img src="${item.image}" alt="${item.name}" class="order-item-image">
//                         <div class="order-item-details">
//                             <h4>${item.name} (x${item.quantity})</h4>
//                             <p><strong>Description:</strong> ${item.description}</p> <!-- Add description here -->
//                             <p><strong>Price:</strong> ${item.price} ${item.currency}</p>
//                         </div>
//                     </div>
//                 `;
//                 orderSummaryContainer.innerHTML += orderItem;
//             });

//             // Calculate total price of purchased items
//             const totalPrice = purchased.reduce((total, item) => {
//                 return total + item.quantity * parseFloat(item.price);
//             }, 0);

//             orderSummaryContainer.innerHTML += `<p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>`;
//         }
//     }

//     renderOrderSummary();
// });

document.addEventListener("DOMContentLoaded", () => {
    const orderSummaryContainer = document.getElementById("order-summary-container");

    // Get the purchased items from localStorage
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
        orderSummaryContainer.innerHTML = "<p>Please log in to view your order history.</p>";
        return;
    }

    const purchasedKey = `${userEmail}_purchased`;
    const purchased = JSON.parse(localStorage.getItem(purchasedKey)) || [];

    // Function to render purchased items
    function renderOrderSummary() {
        orderSummaryContainer.innerHTML = "<h3>Purchased Items</h3>";

        if (purchased.length === 0) {
            orderSummaryContainer.innerHTML += "<p>You have no purchased items yet.</p>";
        } else {
            purchased.forEach((item) => {
                const orderItem = `
                    <div class="order-item">
                        <img src="${item.image}" alt="${item.name}" class="order-item-image">
                        <div class="order-item-details">
                            <h4>${item.name} (x${item.quantity})</h4>
                            <p><strong>Description:</strong> ${item.description}</p>
                            <p><strong>Price:</strong> ${item.price} ${item.currency}</p>
                        </div>
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

    renderOrderSummary();
});
