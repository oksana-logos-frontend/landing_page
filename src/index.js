import Swiper, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Pagination]);
const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true 
  },
});
