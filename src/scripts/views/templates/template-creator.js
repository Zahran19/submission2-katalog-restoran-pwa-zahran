import CONFIG from '../../globals/config';

// Fungsi untuk membuat bintang berdasarkan rating
const createStars = (rating) => {
  const starsContainer = document.createElement('div');
  starsContainer.classList.add('stars-outer');

  const starsInner = document.createElement('div');
  starsInner.classList.add('stars-inner');
  starsInner.style.width = `${rating * 20}%`; // Set width untuk mencocokkan rating

  starsContainer.appendChild(starsInner);
  return starsContainer;
};

// Fungsi untuk membuat item restoran
const restaurantItem = (restaurant) => `
  <article class="restaurant-card" tabindex="0">
    <figure class="restaurant-card__figure">
      <img src="${restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-image">
      <figcaption class="restaurant-card__city">${restaurant.city}</figcaption>
    </figure>
    <div class="restaurant-card__content">
      <h1 class="headline__title">
        <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
      </h1>
      <div class="restaurant-card__rating">
        <span>Rating: ${restaurant.rating}</span>
        ${createStars(restaurant.rating).outerHTML} <!-- Masukkan bintang -->
      </div>
      <p class="restaurant-card__description">${restaurant.description}</p>
    </div>
  </article>
`;

// Fungsi untuk merender daftar restoran
const renderRestaurants = (restaurants) => {
  const restaurantList = document.getElementById('restaurant-list');
  restaurantList.innerHTML = ''; // Bersihkan daftar

  if (restaurants && restaurants.length > 0) {
    restaurants.forEach((restaurant) => {
      const listItem = document.createElement('li');
      listItem.classList.add('restaurant-card');
      listItem.setAttribute('tabindex', '0'); // Tambahkan tabindex

      // Buat item restoran HTML
      listItem.innerHTML = restaurantItem(restaurant);
      restaurantList.appendChild(listItem);
    });
  } else {
    restaurantList.innerHTML = '<li class="no-data">No restaurants found.</li>';
  }
};

// Template untuk menampilkan detail restoran
const restaurantDetail = (restaurant) => `
<img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant-detail">
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <p>${restaurant.description}</p>
    <p><strong>City:</strong> ${restaurant.city}</p>
    <p><strong>Rating:</strong> ${restaurant.rating}</p>
    <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name} image" />

    <h3>Categories:</h3>
    <ul>
      ${restaurant.categories.map(category => `<li>${category.name}</li>`).join('')}
    </ul>

    <h3>Menus:</h3>
    <div>
      <h4>Foods:</h4>
      <ul id="foods">
        ${restaurant.menus.foods.map(food => `<li>${food.name}</li>`).join('')}
      </ul>

      <h4>Drinks:</h4>
      <ul id="drinks">
        ${restaurant.menus.drinks.map(drink => `<li>${drink.name}</li>`).join('')}
      </ul>
    </div>

    <h3>Customer Reviews:</h3>
    <ul>
      ${restaurant.customerReviews.map(review => `
        <li><strong>${review.name}:</strong> ${review.review} <em>(${review.date})</em></li>
      `).join('')}
    </ul>
  </div>
`;

// Template untuk menampilkan detail menu makanan
const restaurantFoodDetail = (food) => `
  <p class="menu-item">${food.name}</p>
`;

// Template untuk menampilkan detail menu minuman
const restaurantDrinkDetail = (drink) => `
  <p class="menu-item">${drink.name}</p>
`;

// Template untuk menampilkan detail ulasan pelanggan
const restaurantCustomerReviewsDetail = (review) => `
  <div class="review">
    <p class="review-name">${review.name}</p>
    <p class="review-date">${review.date}</p>
    <p class="review-text">${review.review}</p>
  </div>
`;

// Template untuk tombol suka
const likeButton = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

// Template untuk tombol tidak suka
const likedButton = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

// Fungsi untuk menghitung dan menampilkan rating bintang
export function fillingStar(index, rating) {
  const starTotal = 5;
  const starPercentage = (rating / starTotal) * 100;
  const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  document.querySelectorAll('.stars-inner')[index].style.width = starPercentageRounded;
}

// Ekspor renderRestaurants agar bisa digunakan di tempat lain
export { 
  restaurantItem,
  restaurantFoodDetail,
  restaurantDrinkDetail,
  restaurantCustomerReviewsDetail,
  likeButton,
  likedButton,
  renderRestaurants 
};