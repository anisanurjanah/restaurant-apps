import CONFIG from '../../globals/config';

const createRestaurantItem = (restaurant) => `
  <article class="katalog-item">
    <img class="katalog-item__picture" src="${CONFIG.SMALL_IMAGE_URL}${restaurant.pictureId}"
    alt="${restaurant.name}" tabindex="0">
    <div class="katalog-item__content">
      <h1 class="katalog-item__title"><a href="#" tabindex="0">${restaurant.name}</a></h1>
      <p class="katalog-item__rating" tabindex="0">Rating : ${restaurant.rating}</p>
    </div>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItem,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
