new Swiper('.swiper',{
  observer: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true 
    },
});

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});
