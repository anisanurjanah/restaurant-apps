import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import $ from 'jquery';
import moment from 'moment';
import data from '../DATA.json';


// Menu drawer
const menu = document.querySelector('#menu');
const jumbotron = document.querySelector('.jumbotron');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

jumbotron.addEventListener('click', function () {
  drawer.classList.remove('open');
});

main.addEventListener('click', function () {
  drawer.classList.remove('open');
});


// Clock
const displayTime = () => {
  moment.locale('id');
  $('.clock__day').text(moment().format('LLLL'));
};

const updateTime = () => {
  displayTime();
  setTimeout(updateTime, 1000);
};

updateTime();


// Data Restaurant
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.katalog');

  data.restaurants.forEach(restoran => {
    container.innerHTML += `
      <article class="katalog-item">
        <img class="katalog-item__picture" src="${restoran.pictureId}" alt="Gambar katalog restoran" tabindex="0">
        <div class="katalog-item__content">
          <h1 class="katalog-item__title"><a href="#" tabindex="0">${restoran.name}</a></h1>
          <p class="katalog-item__city" tabindex="0">City : ${restoran.city}</p>
          <p class="katalog-item__rating" tabindex="0">Rating : ${restoran.rating}</p>
          <p class="katalog-item__description" tabindex="0">${restoran.description}</p>
        </div>
      </article> 
    `;
  });
});