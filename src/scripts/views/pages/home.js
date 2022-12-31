import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItem } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="jumbotron">
        <div class="jumbotron__inner">
          <h1 class="jumbotron__title">FIND YOUR BEST RESTAURANT HERE</h1>
          <p class="jumbotron__tagline">A Good Food Makes A Good Mood</p>
        </div>
      </section>

      <section class="content">
        <div class="latest">
          <h1 class="latest__label" tabindex="0">DAFTAR RESTORAN</h1>
          <div id="catalogue" class="katalog">
          
          </div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    const restaurantContainer = document.querySelector('.catalogue');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default Home;
