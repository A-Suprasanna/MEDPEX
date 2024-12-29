document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get("category");

    if (!categoryId) {
        console.error("Category not found in the URL");
        return;
    }
    console.log("Category ID from URL:", categoryId); 
    // Get products from localStorage
    let storedProducts = localStorage.getItem("products");

if (!storedProducts) {
    console.error("Products not found in localStorage");
    return;
}

storedProducts = JSON.parse(storedProducts);

// Log the stored products to check if they match the data you expect
console.log("Stored Products:", storedProducts);

const filteredProducts = storedProducts.filter(product => product.categoryId === categoryId);

// Log filtered products to check the result
console.log("Filtered Products:", filteredProducts);
    const productsToShow = filteredProducts.slice(0, 10); // Limit to first 10 products

    displayProducts(productsToShow);

    function displayProducts(products) {
        const productsContainer = document.getElementById("products-container");

        if (products.length === 0) {
            productsContainer.innerHTML = `<p>No products found for this category.</p>`;
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <p><strong>Prescription Required:</strong> Yes</p>
                <button class="buy-now">Buy Now</button>
                <button class="add-to-cart">Add to Cart</button>
            `;
            productsContainer.appendChild(productCard);

            // Handle buy now click
            productCard.querySelector(".buy-now").addEventListener("click", () => {
                alert(`Proceeding to buy ${product.name}`);
            });

            // Handle add to cart click
            productCard.querySelector(".add-to-cart").addEventListener("click", () => {
                addToCart(product);
            });
        });
    }

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    }
});
