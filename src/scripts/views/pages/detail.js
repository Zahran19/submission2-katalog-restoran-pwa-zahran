import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import UrlParser from '../../routes/url-parser';
import { restaurantDetail } from '../templates/template-creator'; // Import the template creator
import CONFIG from '../../globals/config'; // Import the config for image URLs

const Detail = {
    async render() {
        return `
          <section id="restaurant" class="restaurant"></section>
          <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);

        if (restaurant) {
            console.log(restaurant);

            // Get the element container for the restaurant detail
            const restaurantContainer = document.getElementById('restaurant');

            // Use the restaurantDetail template to render restaurant data
            restaurantContainer.innerHTML = restaurantDetail(restaurant.restaurant);

            // Optionally render menus and other dynamic data
            this._detailRestaurantMenus(restaurant.restaurant);
        } else {
            console.error("Restaurant data not found");
        }
    },

    _detailRestaurantMenus(restaurant) {
        // Render the food menu
        const foodsContainer = document.querySelector('#foods');
        restaurant.menus.foods.forEach((food) => {
            foodsContainer.innerHTML += `<li>${food.name}</li>`;
        });

        // Render the drinks menu
        const drinksContainer = document.querySelector('#drinks');
        restaurant.menus.drinks.forEach((drink) => {
            drinksContainer.innerHTML += `<li>${drink.name}</li>`;
        });
    }
};

export default Detail;