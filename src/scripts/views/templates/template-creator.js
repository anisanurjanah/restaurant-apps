import CONFIG from '../../globals/config';

const allCategory = (categories) => {
  let categoryList = '';

  categories.forEach((category) => {
    categoryList += `${category.name}`;
  });
  return categoryList;
};

const allMenu = (menus) => {
  let menuList = '';

  menus.forEach((menu) => {
    menuList += `<li tabindex="0">${menu.name}</li>`;
  });
  return menuList;
};

const allReview = (reviews) => {
  let reviewList = '';

  reviews.forEach((review) => {
    reviewList += `
      <div class="restaurant__customer-review__item">
        <h4 tabindex="0">${review.name}</h4>
        <p class="customer-review__date" tabindex="0">Date : ${review.date}</p>
        <p tabindex="0">${review.review}</p>
      </div>
      `;
  });
  return reviewList;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="lazyload restaurant-item__header__poster" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" 
        alt="${restaurant.name}" tabindex="0">
        <div class="restaurant-item__header__rating">
            <p tabindex="0">⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}" tabindex="0">${restaurant.name}</a></h3>
        <p tabindex="0">City : ${restaurant.city}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__name">  
    <h2 tabindex="0">${restaurant.name}</h2>
  </div>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" 
  alt="${restaurant.name}" tabindex="0"/>
  <div class="restaurant__info">
    <h3 tabindex="0">Information</h3>
    <h4 tabindex="0">Name</h4>
    <p tabindex="0">${restaurant.name}</p>
    <h4 tabindex="0">Rating</h4>
    <p tabindex="0">${restaurant.rating}</p>
    <h4 tabindex="0">City</h4>
    <p tabindex="0">${restaurant.city}</p>
    <h4 tabindex="0">Address</h4>
    <p tabindex="0">${restaurant.address}</p>
  </div>
  <div class="restaurant__category">
    <h4 tabindex="0">Category</h4>
    <p tabindex="0">${allCategory(restaurant.categories)}</p>
  </div>
  <div class="restaurant__description">
    <h4 tabindex="0">Description</h4>
    <p tabindex="0">${restaurant.description}</p>
  </div>
  <div class="restaurant__menu">
    <div class="restaurant__menu__foods">
      <h4 tabindex="0">Foods :</h4>
      <ol>${allMenu(restaurant.menus.foods)}</ol>
    </div>
  </div>
  <div class="restaurant__menu">
    <div class="restaurant__menu__drinks">
      <h4 tabindex="0">Drinks :</h4>
      <ol>${allMenu(restaurant.menus.drinks)}</ol>
    </div>
  </div>
  <div class="restaurant__customer-review">
    <h4 tabindex="0">Customer Reviews</h4>
    <div class="restaurant__customer-review__card">
      ${allReview(restaurant.customerReviews)}
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like" tabindex="0">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like" tabindex="0">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
