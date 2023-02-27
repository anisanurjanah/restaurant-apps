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
    if(restaurants.length > 0){
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantContainer.innerHTML = `
        <h3 class="restaurant-item__not__found">Restaurant not found!</h3>
      `;
    }
  },
};

export default Favorite;