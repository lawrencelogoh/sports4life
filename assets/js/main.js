document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuBtn = document.querySelector('.navbar-open-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenuBtn.addEventListener('click', function () {
    if (mobileMenu.style.top === '0px') {
      mobileMenu.style.top = '-100%';
    } else {
      mobileMenu.style.top = '0';
    }
  });

  const mobileNavbarOpenBtn = document.querySelector('.mobile-navbar-open-btn');

  mobileNavbarOpenBtn.addEventListener('click', function () {
    mobileMenu.style.top = '-100%';
  });
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
