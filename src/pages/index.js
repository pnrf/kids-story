import './index.css';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ------------ swiper ------------
// const slider = document.querySelector('.swiper');
// const videoGallery = document.querySelector('.slider-video');
// const sliderTeamClass = document.querySelector('.slider-team');

// const swiper = new Swiper(slider, {
//   modules: [Navigation, Pagination],

//   direction: 'horizontal',
//   loop: true,

//   pagination: {
//     el: '.swiper-pagination',
//   },

//   navigation: {
    // nextEl: '.slider__button-next',
    // prevEl: '.slider__button-prev',
//   },

//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

// const sliderVideo = new Swiper(videoGallery, {
// 	slidesPerView: 3,
// 	spaceBetween: 10,
// 	centeredSlides: true,

//   modules: [Pagination],

//   direction: 'horizontal',
//   loop: true,

//   pagination: {
//     el: '.swiper-pag',
//     type: 'bullets',
//     clickable: true,
//   },
// });

const swiperSectionTeam = new Swiper(".swiper-section-team", {
  modules: [Navigation, Pagination],
  slidesPerView: 4,
	spaceBetween: 32,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,

  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.slider__button-next_section_team',
    prevEl: '.slider__button-prev_section_team',
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

