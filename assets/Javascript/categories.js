// document.addEventListener("DOMContentLoaded", () => {
//     const categoriesKey = "categories"; // LocalStorage key for categories data
  
//     // Check if categories data is already in localStorage
//     if (!localStorage.getItem(categoriesKey)) {
//       // Fetch categories from the JSON file and store them in localStorage
//       fetch('./assets/data/categories.json')
//         .then(response => response.json())
//         .then(data => {
//           localStorage.setItem(categoriesKey, JSON.stringify(data)); // Save to localStorage
//           displayCategories(data); // Display categories after fetching
//         })
//         .catch(error => console.error("Error fetching categories JSON:", error));
//     } else {
//       // Retrieve categories from localStorage
//       const storedCategories = JSON.parse(localStorage.getItem(categoriesKey));
//       displayCategories(storedCategories); // Display categories from localStorage
//     }
  
//     // Function to dynamically render categories
//     function displayCategories(categories) {
//       const categoriesContainer = document.getElementById("categories");
//       categoriesContainer.innerHTML = ""; // Clear previous content (if any)
  
//       categories.forEach(category => {
//         const categoryDiv = document.createElement("div");
//         categoryDiv.classList.add("allproducts");
//         categoryDiv.innerHTML = `
//           <a href="${category.link}">
//             <img src="${category.image}" alt="${category.name}" class="product_img">
//             <p>${category.name}</p>
//           </a>
//         `;
//         categoriesContainer.appendChild(categoryDiv);
//       });
//     }
//   });
  