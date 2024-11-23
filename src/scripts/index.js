import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
    button: document.querySelector('#menu-button'),
    drawer: document.querySelector('#menu'),
    content: document.querySelector('#main-content'),
  });
  
  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
   
  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });

// Function to fetch restaurant data from DATA.json
// const fetchRestaurants = async () => {
//    try {
//        const response = await fetch('/data/DATA.json'); // Ensure this path is correct
//        if (!response.ok) {
//            throw new Error(`HTTP error! Status: ${response.status}`);
//        }
//        const data = await response.json();
//        return data.restaurants; // Return the restaurant data
//   } catch (error) {
//        console.error("Error fetching restaurant data:", error);
//        return []; // Return an empty array on error to prevent undefined issues
//    }
// };

// Function to calculate star ratings
// export function fillingStar(index, rating) {
//    const starTotal = 5;
//    const starPercentage = (rating / starTotal) * 100;
//    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
//    document.querySelectorAll('.stars-inner')[index].style.width = starPercentageRounded;
// }

// Function to render restaurant data in the DOM
// const renderRestaurants = (restaurants) => {
//    const restaurantList = document.getElementById('restaurant-list');
//    restaurantList.innerHTML = ''; // Clear the list

//    if (restaurants && restaurants.length > 0) {
//        restaurants.forEach((restaurant) => {
//            const listItem = document.createElement('li');
//            listItem.classList.add('restaurant-card');
//            listItem.setAttribute('tabindex', '0'); // Add tabindex

//            // Create the star rating using the displayRating function
//            const starsContainer = displayRating(restaurant.rating);

//            listItem.innerHTML = `
//                <figure class="headline__figure">
//                   <img src="${restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-image">
//                    <figcaption class="location">${restaurant.city}</figcaption>
//                </figure>
//                <div class="headline__content">
//                    <h2 class="restaurant-name">${restaurant.name}</h2>
//                    <div class="rating">
//                       <span class="rating-text">Rating: ${restaurant.rating}</span>
//                        <div class="stars">
//                            ${starsContainer.outerHTML} <!-- Append the stars -->
//                        </div>
//                    </div>
//                    <p class="description">${restaurant.description}</p>
//                </div>
//            `;
//            restaurantList.appendChild(listItem);
//        });
//    } else {
//        restaurantList.innerHTML = '<li class="no-data">No restaurants found.</li>';
//    }
// };

// Function to display stars based on rating
// function displayRating(rating) {
//    const starsContainer = document.createElement('div');
//    starsContainer.classList.add('stars'); // Add class for styling

//    for (let i = 1; i <= 5; i++) {
//        const star = document.createElement('span');
//        star.classList.add('star');

//        // Determine class based on rating
//        if (i <= Math.floor(rating)) {
//            star.classList.add('filled'); // Full star
//            star.innerHTML = '★'; // Full star
//        } else if (i === Math.floor(rating) + 1 && rating % 1 >= 0.5) {
//            star.classList.add('half'); // Half star
//            star.innerHTML = '★'; // Half star
//        } else {
//           star.innerHTML = '☆'; // Empty star
//        }

//        starsContainer.appendChild(star);
//    }

//    return starsContainer;
//}

// Fetch data from DATA.json
// fetchRestaurants()
//    .then(restaurants => {
//        const restaurantList = document.getElementById('restaurant-list');
        
//        // Render the initial restaurant list
//        renderRestaurants(restaurants);
//    })
//    .catch(error => console.error('Error fetching data:', error));

// Function to filter restaurants by search input
// const filterRestaurants = (restaurants, query) => {
//    const lowerCaseQuery = query.toLowerCase();
//    return restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(lowerCaseQuery));
// };

// Function to toggle the visibility of the menu
// const toggleMenu = () => {
//    const menuButton = document.getElementById('menu-button');
//    const menu = document.getElementById('menu');

//    menuButton.addEventListener('click', () => {
//        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
//        menuButton.setAttribute('aria-expanded', !isExpanded);
//       menu.classList.toggle('active', !isExpanded); // Toggle class active
//    });
// };

// Initialize menu toggle function
// toggleMenu();

// Fetch and display the restaurant data when the page loads
// let allRestaurants = [];
// fetchRestaurants().then((restaurants) => {
//    allRestaurants = restaurants;
//    renderRestaurants(allRestaurants);
// });

// Handle search form submission directly in the listener
// document.getElementById('search-form').addEventListener('submit', (event) => {
//    event.preventDefault(); // Prevent form from submitting
//    const query = document.getElementById('search-input').value; // Get the search input
//    const filteredRestaurants = filterRestaurants(allRestaurants, query); // Filter restaurants
//    renderRestaurants(filteredRestaurants); // Render filtered restaurants
// });