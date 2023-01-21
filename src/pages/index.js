import './index.css';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ------------ swiper ------------
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// const swiper = document.querySelector('.swiper').swiper;
// swiper.slideNext(1000, true);

// ------------ dropdown mobile menu ------------

const headerBurgerButton = document.querySelector('.header__burger');
const dropDownMobileSelector = document.querySelector('.drop-down-mobile');

headerBurgerButton.addEventListener('click', () => {
  dropDownMobileSelector.classList.toggle('drop-down-mobile_visible');
  dropDownMobileSelector.querySelector('.drop-down-mobile__button-cross').addEventListener('click', () => {
    dropDownMobileSelector.classList.remove('drop-down-mobile_visible');
  });
});

