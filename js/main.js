const swiper_1 = new Swiper('.channel-slider__first', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints:{
      1990:{
        slidesPerView: 6,
      },
      1600:{
        slidesPerView:5,
      },
      1300:{
        slidesPerView:4,
      },
      1100:{
        slidesPerView:3,
      },
      800:{
        slidesPerView: 1,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.channel__first-button-next',
      prevEl: '.channel__first-button-prev',
    },
  });
  const swiper_2 = new Swiper('.channel-slider__second', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints:{
      1600:{
        slidesPerView: 3,
      },
      1100:{
        slidesPerView: 2,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.channel__second-button-next',
      prevEl: '.channel__second-button-prev',
    },
  });
  const swiper_3 = new Swiper('.channel-slider__third', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints:{
      1990:{
        slidesPerView: 6,
      },
      1600:{
        slidesPerView:5,
      },
      1300:{
        slidesPerView:4,
      },
      1100:{
        slidesPerView:3,
      },
      800:{
        slidesPerView: 1,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.channel__third-button-next',
      prevEl: '.channel__third-button-prev',
    },
  });



  if (document.documentElement.scrollWidth <= 640) {
    swiper_1.destroy();
    swiper_2.destroy();
    swiper_3.destroy();
  }

  function showSearch(){ 
  const searchBtn = document.querySelector('.mobile-search');
  const mobileSearch = document.querySelector('.input-group');
  const buttonSearch = document.querySelector('.button-search');

  buttonSearch.addEventListener('click', () => {
    mobileSearch.classList.remove('is-open');
    searchBtn.style.opacity = '1';
  })

  searchBtn.addEventListener('click', ()=>{
    mobileSearch.classList.add('is-open');
    searchBtn.style.opacity = '0';
  })
}
showSearch();