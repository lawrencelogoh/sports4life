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

  document
    .getElementById('contactForm')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const number = document.getElementById('number').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Construct the mailto URL
      const mailtoLink = `mailto:selormlogoh96@gmail.com?subject=Conntect with our team&body=
                Full Name: ${name}%0D%0A
                Phone Number: ${number}%0D%0A
                Email: ${email}%0D%0A
                Message: ${message}`;

      // Open the mail client
      window.location.href = mailtoLink;

      document.getElementById('contactForm').reset();
    });
});

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperContainer = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,

  // navigation: true,
  virtual: {
    slides: (function () {
      const slides = [];
      for (var i = 0; i < 600; i += 1) {
        slides.push('Slide ' + (i + 1));
      }
      return slides;
    })(),
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
