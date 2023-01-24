import './index.css';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ------------ swiper (slider)------------

const swiperSectionIntro = new Swiper(".swiper-section-intro", {
  modules: [Navigation],

  direction: 'horizontal',
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: '.slider__button-next_section_intro',
    prevEl: '.slider__button-prev_section_intro',
  },
});

const swiperSectionVideo = new Swiper(".swiper-section-video", {
  modules: [Pagination],

  slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,

  pagination: {
    el: '.swiper-pagination_section_video',
    type: 'bullets',
    clickable: true,
  },
});

const swiperSectionTeam = new Swiper(".swiper-section-team", {
  modules: [Navigation],

  slidesPerView: 4,
	spaceBetween: 32,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: '.slider__button-next_section_team',
    prevEl: '.slider__button-prev_section_team',
  },
});

const swiperSectionReviews = new Swiper(".swiper-section-reviews", {
  modules: [Navigation, Pagination],

  slidesPerView: 2,
	spaceBetween: 32,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: '.slider__button-next_section_reviews',
    prevEl: '.slider__button-prev_section_reviews',
  },

  pagination: {
    el: ".swiper-pagination-section-reviews",
    type: 'bullets',
    clickable: true,
  },
});

// ------------ dropdown mobile menu ------------

const headerBurgerButton = document.querySelector('.header__burger');
const dropDownMobileSelector = document.querySelector('.drop-down-mobile');

headerBurgerButton.addEventListener('click', () => {
  dropDownMobileSelector.classList.toggle('drop-down-mobile_visible');
  dropDownMobileSelector.querySelector('.drop-down-mobile__button-cross').addEventListener('click', () => {
    dropDownMobileSelector.classList.remove('drop-down-mobile_visible');
  });
});

