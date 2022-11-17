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


// const swiper = new Swiper('.swiper', {
//   slidesPerView: 1,
//   speed: 400,
//   spaceBetween: 100,
//   // loop: true,
//   grabCursor: true,

//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },

//   // modules: [ Navigation, Pagination ],

  // // pagination: {
  // //   el: '.swiper-pagination',
  // // },

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

//   // scrollbar: {
//   //   el: '.swiper-scrollbar',
//   // },
// });

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });
