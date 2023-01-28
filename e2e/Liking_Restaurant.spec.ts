const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.restaurants');
  I.see('Restaurant tidak ditemukan!', '.restaurants');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Restaurant tidak ditemukan!', '.restaurants');
  I.amOnPage('/');

  I.seeElement('.restaurant-item__content h3 a');

  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.restaurant-item');
  const likedRestaurantName= await I.grabTextFrom('.restaurant-item__content h3 a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('Unliking Restaurant', async ({ I }) => {
  I.see('Restaurant tidak ditemukan!', '.restaurants');
  I.amOnPage('/');

  I.seeElement('.restaurant-item__content h3 a');

  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-item__content h3 a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage("/#/favorite");
  I.see('Restaurant tidak ditemukan!', '.restaurants');
});
