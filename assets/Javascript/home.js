// // BOUGHT BY YOU PAGE

// // script.js

// // Sample order data (in a real scenario, you might fetch this from an API)
// const orders = [
//     {
//         orderId: '12345',
//         date: '2024-11-15',
//         items: [
//             { productName: 'Wireless Mouse', productImage: 'https://via.placeholder.com/50', price: 25, quantity: 2 },
//             { productName: 'Keyboard', productImage: 'https://via.placeholder.com/50', price: 45, quantity: 1 },
//         ]
//     },
//     {
//         orderId: '67890',
//         date: '2024-10-10',
//         items: [
//             { productName: 'Laptop Stand', productImage: 'https://via.placeholder.com/50', price: 30, quantity: 1 },
//             { productName: 'USB-C Cable', productImage: 'https://via.placeholder.com/50', price: 15, quantity: 3 },
//         ]
//     }
// ];

// // Function to render orders
// function renderOrders() {
//     const orderHistory = document.getElementById('order-history');

//     // Loop through the orders and create HTML for each order
//     orders.forEach(order => {
//         const orderDiv = document.createElement('div');
//         orderDiv.classList.add('order');

//         // Create the order heading
//         const orderHeading = document.createElement('h3');
//         orderHeading.innerHTML = `Order #${order.orderId} - ${order.date}`;
//         orderDiv.appendChild(orderHeading);

//         // Create the list of items in the order
//         const itemList = document.createElement('ul');
        
//         order.items.forEach(item => {
//             const itemLi = document.createElement('li');
            
//             // Product image
//             const productImg = document.createElement('img');
//             productImg.src = item.productImage;
//             itemLi.appendChild(productImg);

//             // Product details
//             const productInfo = document.createElement('div');
//             productInfo.classList.add('product-info');
//             productInfo.innerHTML = `
//                 <span>${item.productName}</span>
//                 <span class="quantity">Quantity: ${item.quantity}</span>
//                 <span class="price">$${item.price}</span>
//             `;
//             itemLi.appendChild(productInfo);
            
//             itemList.appendChild(itemLi);
//         });

//         // Add the item list to the order
//         orderDiv.appendChild(itemList);

//         // Append the order to the order history section
//         orderHistory.appendChild(orderDiv);
//     });
// }

// // Call the renderOrders function to display orders when the page loads
// renderOrders();

// document.addEventListener('DOMContentLoaded', function() {
//     const data = [
//         {
//             "image": "https://tiimg.tistatic.com/fp/1/007/784/paracetamol-500mg-tablets--229.jpg",
//             "name": "Paracetamol",
//             "description": "Paracetamol (Acetaminophen) is a common over-the-counter medication for relieving pain and reducing fever.",
//             "price": 200,
//             "currency": "INR"
//         },
//         {
//             "image": "https://www.albionbd.com/wp-content/uploads/2021/08/Aspirin-300mg-Soluble-Tablet.jpg",
//             "name": "Aspirin",
//             "description": "Aspirin is a nonsteroidal anti-inflammatory drug (NSAID) used to reduce pain, inflammation, and fever, and to prevent blood clots.",
//             "price": 290,
//             "currency": "INR"
//         },
//         {
//             "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/377899921/DI/ER/FI/101293874/azithromycin-500-mg-tablets-500x500.jpg",
//             "name": "Azithromycin",
//             "description": "Azithromycin is an antibiotic used to treat various bacterial infections, including respiratory, skin, and ear infections.",
//             "price": 260,
//             "currency": "INR"
//         },
//         {
//             "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSmVZb-jtVwBvrCazI9rv2Coet6__dJT3Zhw&s",
//             "name": "Morphine",
//             "description": "Morphine is a powerful opioid pain medication used to manage severe pain, particularly after surgery or injury.",
//             "price": 400,
//             "currency": "INR"
//         },
//         {
//             "image": "https://ecommerce.genericartmedicine.com/upload/products/product-photo-745.jpeg",
//             "name": "Ciprofloxacin",
//             "description": "Ciprofloxacin is an antibiotic used to treat various bacterial infections, including urinary, respiratory, and skin infections.",
//             "price": 1500,
//             "currency": "INR"
//         },
//         {
//             "image": "https://m.media-amazon.com/images/I/41i+zWBppZL._AC_UF1000,1000_QL80_.jpg",
//             "name": "Stethoscope ",
//             "description": "A device used by doctors to listen to internal sounds of the body, such as heartbeats and lung sounds.",
//             "price": 750,
//             "currency": "INR"
//         },
//         {
//             "image": "https://5.imimg.com/data5/SELLER/Default/2023/8/335862709/UC/YU/KS/141647456/firstmed-professional-aneroid-sphygmomanometer-with-stethoscope-black-bp-monitor-black-500x500.png",
//             "name": "Sphygmomanometer ",
//             "description": "A medical device used to measure blood pressure by detecting the force of blood against the walls of arteries.",
//             "price": 640,
//             "currency": "INR"
//         },
//         {
//             "image": "https://m.media-amazon.com/images/I/610lBxabhTL.jpg",
//             "name": "Thermometer",
//             "description": "A device used to measure body temperature. It can be digital or mercury-based and is commonly used to check for fever.",
//             "price": 650,
//             "currency": "INR"
//         },
//         {
//             "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsDp-V7E2ha_-fzAxQEKE6FnSSGaBUAMoAQ&s",
//             "name": "Otoscope",
//             "description": "A handheld device used by doctors to examine the ears, specifically the ear canal and eardrum.",
//             "price": 380,
//             "currency": "INR"
//         },
//         {
//             "image": "https://nationalindco.com/wp-content/uploads/2023/05/ophthalmoscope_beta_200s_with_rechargeable_battery_handle201853153342179_b-450x450.jpg",
//             "name": "Ophthalmoscope",
//             "description": "An instrument used by doctors to inspect the inside of the eye, including the retina, optic disc, and blood vessels.",
//             "price": 285,
//             "currency": "INR"
//         },
//         {
//             "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrseaqKdYKnJiHUVmknYXIysiSzoEyu1_vg&s",
//             "name": "Immune Boosting Vitamin C ",
//             "description": "Supports immune health, reduces the severity of colds, and promotes skin health.",
//             "price": 200,
//             "currency": "INR"
//           },
//           {
//             "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZaXN2MUwEXKy98KyPLg-bYT-HCQD64t8M7w&s",
//             "name": "Pure Omega-3 Fish Oil",
//             "description": "Rich in EPA and DHA, this supplement supports heart health, brain function, and reduces inflammation.",
//             "price": 290,
//             "currency": "INR"
//           },
//           {
//             "image": "https://images-eu.ssl-images-amazon.com/images/I/61sxYaxdcoL._AC_UL600_SR600,600_.jpg",
//             "name": "Natural Iron Supplement",
//             "description":"Supports red blood cell production, combats fatigue, and enhances overall energy levels.",
//             "price": 260,
//             "currency": "INR"
//           },
//           {
//             "image": "https://m.media-amazon.com/images/I/7119ktSu-aL._AC_UF1000,1000_QL80_.jpg",
//             "name": "Green Tea Extract Fat Burner",
//             "description": "Rich in antioxidants, helps boost metabolism and supports weight loss.",
//             "price": 400,
//             "currency": "INR"
//           },
//           {
//             "image": "https://rukminim2.flixcart.com/image/850/1000/kmds4nk0/vitamin-supplement/z/6/8/60-organic-turmeric-curcumin-extract-60-caps-perennial-original-imagfanvyhe9tvvx.jpeg?q=90&crop=false",
//             "name": "Organic Turmeric Curcumin Extract",
//             "description":"Offers potent anti-inflammatory benefits and supports joint and brain health.",
//             "price": 1500,
//             "currency": "INR"
//           },
//          {
//                 "image": "https://m.media-amazon.com/images/I/51O1OcXauaL._AC_UF1000,1000_QL80_.jpg",
//                 "name": "Surgical Scissors",
//                 "description": "Scissors designed for cutting tissues, sutures, or other surgical materials.",
//                 "price": 750,
//                 "currency": "INR"
//               },
//               {
//                 "image": "https://rukminim2.flixcart.com/image/850/1000/ky0g58w0/surgical-scalpel/k/o/8/10-sterile-11-surgical-blades-with-free-3-scalpel-knife-handle-original-imagabyqrxf7gtma.jpeg?q=90&crop=false",
//                 "name": "Surgical Scalpels",
//                 "description": "Precision cutting instruments used for making incisions in tissue during surgery.",
//                 "price": 640,
//                 "currency": "INR"
//               },
//               {
//                 "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qFH7ucymPFnibHhvnHuPTLCReux4EdaRbA&s",
//                 "name": "Hemostats",
//                 "description": "Clamps used to control bleeding by constricting blood vessels or tissues during surgery.",
//                 "price": 650,
//                 "currency": "INR"
//               },
//               {
//                 "image": "https://images-cdn.ubuy.co.in/634e4d1b611ffe61c8134a73-nitrile-gloves-1000-ml-disposable-latex.jpg",
//                 "name": "Surgical Gloves",
//                 "description": "Sterile gloves worn by medical staff during procedures to maintain sterility.",
//                 "price": 380,
//                 "currency": "INR"
//               },
//               {
//                 "image": "https://rukminim2.flixcart.com/image/850/1000/ksnjp8w0/mask-respirator/a/l/y/free-size-100-surgical-mask-pack-of-100-pieces-disposable-masks-original-imag65k8q6hddzcc.jpeg?q=90&crop=false",
//                 "name": "Surgical Masks",
//                 "description": "These are worn by surgeons, staff to prevent contamination, protect patients and healthcare workers.",
//                 "price": 285,
//                 "currency": "INR"
//               },
//               {
//                 "image": "https://ars.els-cdn.com/content/image/1-s2.0-S1530891X20428198-gr1.jpg",
//                 "name": "Insulin Pen",
//                 "description": "A pre-filled, disposable device used for administering insulin to manage blood sugar levels in diabetes.",
//                 "price": 750,
//                 "currency": "INR"
//               },
//               {
//                 "image": "https://images-cdn.ubuy.co.in/65e0c9201858a173fb205331-metene-twist-top-lancets-for-lancing.jpg",
//                 "name": "Lancets",
//                 "description": "It is a small, sharp needles used with a lancing device to obtain blood samples for glucose testing.",
//                 "price": 640,
//                 "currency": "INR"
//               },
//               {
//                 "image": "https://m.media-amazon.com/images/I/61KOWaNOzrL.jpg",
//                 "name": "Diabetic Test Strips",
//                 "description": "Disposable strips used in conjunction with blood glucose meters to measure blood sugar levels.",
//                 "price": 650,
//                 "currency": "INR"
//               },
//               {
//                 "image": "https://m.media-amazon.com/images/I/71bBqvfDf0L.jpg",
//                 "name": "Diabetic Skin Creams",
//                 "description": "It's a moisturizing lotions designed to prevent dry, cracked skin, which is a common issue for diabetics.",
//                 "price": 380,
//                 "currency": "INR"
//               },
//               {
//                 "image": "https://rukminim2.flixcart.com/image/850/1000/ky90scw0/resistance-tube/6/j/m/pack-of-3-fabric-resistance-loop-exercise-bands-for-hips-thighs-original-imagagv9ghecdhm6.jpeg?q=20&crop=false",
//                 "name": "Exercise Bands ",
//                 "description": "Resistance bands used in workouts to help diabetics improve circulation, strength, and overall fitness.",
//                 "price": 285,
//                 "currency": "INR"
//               }
//         // Add additional JSON objects here for the other 10 items...
//     ];

//     function generateHTML(data) {
//       let htmlContent = '';

//       data.forEach(item => {
//           htmlContent += `
//               <div class="product-card">
//                   <a href="#">
//                       <img src="${item.image}" alt="${item.name}" class="product-image">
//                   </a>
//                   <a href="#"><h3 class="product-name">${item.name}</h3></a>
//                   <p class="product-description">${item.description}</p>
//                   <p class="product-price">${item.price} <span class="currency">${item.currency}</span></p>
//                   <button class="buy-now-btn" data-product-id="${item.name}" data-product-details='${JSON.stringify(item)}'>Buy now</button>
//                   <button class="add-to-cart-btn" data-product-id="${item.name}">Add to cart</button>
//               </div>
//           `;
//       });

//       return htmlContent;
//   }

//   // Fetch the first 5 products into Meddrug
//   document.getElementById('Meddrug').innerHTML = generateHTML(data.slice(0, 5));

//   // Fetch the next 5 products into medquip
//   document.getElementById('medquip').innerHTML = generateHTML(data.slice(5, 10));

//   // Fetch the next 5 products into healsup
//   document.getElementById('healsup').innerHTML = generateHTML(data.slice(10, 15));

//   // Fetch the next 5 products into sursup
//   document.getElementById('sursup').innerHTML = generateHTML(data.slice(15, 20));

//   // Fetch the last 5 products into diabetcare
//   document.getElementById('diabetcare').innerHTML = generateHTML(data.slice(20, 25));

//   // Event listener for the "Buy Now" buttons
//   document.querySelectorAll('.buy-now-btn').forEach(button => {
//       button.addEventListener('click', function() {
//           const productDetails = JSON.parse(button.getAttribute('data-product-details'));
//           const productDetailsQuery = new URLSearchParams({
//               name: productDetails.name,
//               description: productDetails.description,
//               price: productDetails.price,
//               currency: productDetails.currency,
//               image: productDetails.image
//           }).toString();
          
//           // Redirect to the product details page with the product details in the URL query parameters
//           window.location.href = `product-details.html?${productDetailsQuery}`;
//       });
//   });
// });


// //MEDPEX logo 
// const medpexLogoDiv = document.getElementById('medpexlogo');
        
// // Create an img element
// const imgElement = document.createElement('img');

// // Set the src attribute to your image URL
// imgElement.src = './assets/images/aboutmedpex.png';
// imgElement.alt = 'Medpex Logo';

// // Append the img element to the div
// medpexLogoDiv.appendChild(imgElement);

// //CAROUSAL IMAGES

// const slides = document.querySelector('.carousel-slides');
// const images = document.querySelectorAll('.carousel-slide img');
// const prevButton = document.querySelector('.arrow-left');
// const nextButton = document.querySelector('.arrow-right');
// const visibleImages = 3;
// let currentIndex = 1; // Start with the second image in the middle

// function updateCarousel() {
//     // Translate the slides container
//     slides.style.transform = `translateX(-${(currentIndex - 1) * 100 / visibleImages}%)`;

//     // Update the 'active' class to highlight the middle image
//     images.forEach((img, index) => {
//         img.classList.remove('active');
//         if (index === currentIndex) {
//             img.classList.add('active');
//         }
//     });
// }

// // Event listeners for the arrows
// prevButton.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image if at the start
//     updateCarousel();
// });

// nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image if at the end
//     updateCarousel();
// });

// // Initial state
// updateCarousel();

// // CONTACT US

// document.getElementById('contactForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     // Get form data
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Create a mailto link
//     const mailtoLink = `mailto:suprasanna2006@gmail.com?subject=Message from ${name}&body=Name: ${name}%0A%0A${message}`;

    
//     // Open the mailto link
//     window.location.href = mailtoLink;

//     // Optionally, show a success message (but email is not confirmed sent)
//     alert("Your message has been prepared. Please confirm in your email client.");
// }); 




// document.getElementById('contactForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     // Clear any previous error messages
//     clearErrorMessages();

//     // Get form data
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const message = document.getElementById('message').value.trim();

//     let isValid = true;

//     // Validate name (no numbers, min 3 characters, max 32 characters)
//     if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
//         showError('name', 'Name must be 3-32 characters long and contain only letters.');
//         isValid = false;
//     }

//     // Validate email (simple regex for email format)
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//         showError('email', 'Please enter a valid email address.');
//         isValid = false;
//     }

//     // Validate message (minimum 10 characters)
//     if (message.length < 20) {
//         showError('message', 'Message must be at least 20 characters long.');
//         isValid = false;
//     }

//     // If all inputs are valid, process the form
//     if (isValid) {
//         const mailtoLink = `mailto:suprasanna2006@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
//         window.location.href = mailtoLink;
//         alert("Your message has been prepared. Please confirm in your email client.");
//     }
// });

// // Function to show error messages under the input fields
// function showError(fieldId, message) {
//     const field = document.getElementById(fieldId);
//     let errorElement = document.createElement('div');
//     errorElement.className = 'error-message';
//     errorElement.innerText = message;
//     field.parentElement.appendChild(errorElement);
//     field.classList.add('input-error');
// }

// // Function to clear previous error messages
// function clearErrorMessages() {
//     const errorMessages = document.querySelectorAll('.error-message');
//     errorMessages.forEach(msg => msg.remove());
//     const inputs = document.querySelectorAll('.input-error');
//     inputs.forEach(input => input.classList.remove('input-error'));
// }










document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear any previous error messages
    clearErrorMessages();

    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validate name (no numbers, min 3 characters, max 32 characters)
    if (!/^[a-zA-Z\s]{3,32}$/.test(name)) {
        showError('name', 'Name must be 3-32 characters long and contain only letters.');
        isValid = false;
    }

    // Validate email (improved regex for email format)
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        showError('email', 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate message (minimum 20 characters)
    if (message.length < 20) {
        showError('message', 'Message must be at least 20 characters long.');
        isValid = false;
    }

    // If all inputs are valid, process the form
    if (isValid) {
        const mailtoLink = `mailto:suprasanna2006@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
        window.location.href = mailtoLink;
        alert("Your message has been prepared. Please confirm in your email client.");
    }
});

// Function to show error messages under the input fields
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    let errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.innerText = message;
    field.parentElement.appendChild(errorElement);
    field.classList.add('input-error');
}

// Function to clear previous error messages
function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
    const inputs = document.querySelectorAll('.input-error');
    inputs.forEach(input => input.classList.remove('input-error'));
}


// // SEARCH BAR

// // function searchProduct() {
// //     const input = document.getElementById("search-input").value.toLowerCase();
// //     const products = document.querySelectorAll("#product-list li");

// //     let productFound = false;

// //     products.forEach(product => {
// //         const productName = product.textContent.toLowerCase();
// //         if (productName === input) {
// //             product.classList.add("visible"); // Show matching product
// //             productFound = true;
// //         } else {
// //             product.classList.remove("visible"); // Hide non-matching products
// //         }
// //     });

// //     if (!productFound) {
// //         alert("Product not found. Please try another search!");
// //     }
// // }

































// Store the data in local storage
document.addEventListener('DOMContentLoaded', function () {
    const data = [
        {
            "image": "https://tiimg.tistatic.com/fp/1/007/784/paracetamol-500mg-tablets--229.jpg",
            "name": "Paracetamol",
            "description": "Relieves pain and reduces fever.",
            "price": 200,
            "currency": "INR"
        },
        {
            "image": "https://www.albionbd.com/wp-content/uploads/2021/08/Aspirin-300mg-Soluble-Tablet.jpg",
            "name": "Aspirin",
            "description": "Reduces pain, inflammation, and fever.",
            "price": 290,
            "currency": "INR"
        },
        // Add your other items here...
    ];

    // Check if data exists in local storage, if not, save it
    if (!localStorage.getItem('productData')) {
        localStorage.setItem('productData', JSON.stringify(data));
    }

    // Fetch data from local storage
    const storedData = JSON.parse(localStorage.getItem('productData'));

    // Function to generate product cards
    function generateHTML(data) {
        let htmlContent = '';
        data.forEach(item => {
            htmlContent += `
                <div class="product-card">
                    <a href="#">
                        <img src="${item.image}" alt="${item.name}" class="product-image">
                    </a>
                    <a href="#"><h3 class="product-name">${item.name}</h3></a>
                    <p class="product-description">${item.description}</p>
                    <p class="product-price">${item.price} <span class="currency">${item.currency}</span></p>
                    <button class="buy-now-btn" data-product-id="${item.name}">Buy Now</button>
                    <button class="add-to-cart-btn" data-product-id="${item.name}">Add to Cart</button>
                </div>
            `;
        });
        return htmlContent;
    }

    // Render the product sections
    document.getElementById('Meddrug').innerHTML = generateHTML(storedData.slice(0, 5));
    document.getElementById('medquip').innerHTML = generateHTML(storedData.slice(5, 10));
    document.getElementById('healsup').innerHTML = generateHTML(storedData.slice(10, 15));
    document.getElementById('sursup').innerHTML = generateHTML(storedData.slice(15, 20));
    document.getElementById('diabetcare').innerHTML = generateHTML(storedData.slice(20, 25));

    // Buy Now Button Event Listener
    document.querySelectorAll('.buy-now-btn').forEach(button => {
        button.addEventListener('click', function () {
            const productId = button.getAttribute('data-product-id');
            const product = storedData.find(item => item.name === productId);

            // Save the selected product in local storage
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            window.location.href = 'product-details.html';
        });
    });

    // Add to Cart Button Event Listener
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function () {
            const productId = button.getAttribute('data-product-id');
            const product = storedData.find(item => item.name === productId);

            // Retrieve existing cart from local storage or initialize an empty array
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);

            // Save updated cart back to local storage
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${product.name} has been added to your cart!`);
        });
    });
});
