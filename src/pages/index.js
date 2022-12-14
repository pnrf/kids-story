import './index.css';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  loop: true,
});

const headerBurgerButton = document.querySelector('.header__burger');
const dropDownMobileSelector = document.querySelector('.drop-down-mobile');

headerBurgerButton.addEventListener('click', () => {
  dropDownMobileSelector.classList.toggle('drop-down-mobile_visible');
});
