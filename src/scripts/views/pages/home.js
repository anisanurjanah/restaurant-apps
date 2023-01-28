import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="jumbotron">
        <div class="jumbotron__inner">
          <h1 class="jumbotron__title" tabindex="0">FIND YOUR BEST RESTAURANT HERE</h1>
          <p class="jumbotron__tagline" tabindex="0">A Good Food Makes A Good Mood</p>
        </div>
      </div>

      <div class="content">
        <h2 class="content__heading" tabindex="0">RESTAURANT CATALOGUE</h1>
        <div id="restaurants" class="restaurants">
        
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
