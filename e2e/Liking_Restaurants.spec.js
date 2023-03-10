const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.restaurants');
  I.see('Restaurant not found!', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Restaurant not found!', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.retry(3).seeElement('.restaurant-item__content h3 a');

  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);
  I.retry(3).seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.retry(3).seeElement('.restaurant-item');

  const likedRestaurantName= await I.grabTextFrom('.restaurant-item__content h3 a');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('Unliking Restaurant', async ({ I }) => {
  I.see('Restaurant not found!', '.restaurant-item__not__found');
  I.amOnPage('/');

  I.retry(3).seeElement('.restaurant-item__content h3 a');

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
  I.see('Restaurant not found!', '.restaurant-item__not__found');
});