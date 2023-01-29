import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading" tabindex="0">Your Liked Restaurant</h2>
        <div id="restaurants" class="restaurants">
          
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      if(restaurants.length > 0) {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      } else {
        restaurantContainer.innerHTML = "Restaurant tidak ditemukan!";
      }
    });
  },
};

export default Favorite;
