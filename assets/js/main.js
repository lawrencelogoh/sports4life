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

      const mailtoLink = `mailto:selormlogoh96@gmail.com?subject=Conntect with our team&body=
                Full Name: ${name}%0D%0A
                Phone Number: ${number}%0D%0A
                Email: ${email}%0D%0A
                Message: ${message}`;

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

const carouselImages = [
  {
    image: '/assets/20160804_065444.jpg',
  },
  {
    image: '/assets/20160803_111155.jpg',
  },

  {
    image: '/assets/20160804_065520.jpg',
  },
  {
    image: '/assets/20160804_065439.jpg',
  },

  {
    image: '/assets/20160804_065439.jpg',
  },
  {
    image: '/assets/20160804_065439.jpg',
  },
  {
    image: '/assets/20160804_065439.jpg',
  },

  {
    image: '/assets/20160804_065439.jpg',
  },
  {
    image: '/assets/20160804_065439.jpg',
  },

  {
    image: '/assets/20160804_065439.jpg',
  },
  {
    image: '/assets/20160804_065439.jpg',
  },
  {
    image: '/assets/20160804_065439.jpg',
  },
  {
    image: '/assets/20160804_065439.jpg',
  },
  {
    image: '/assets/20160804_065439.jpg',
  },
  {
    image: '/assets/20160804_065439.jpg',
  },
  {
    image: '/assets/20160804_065439.jpg',
  },
  {
    image: '/assets/20160804_065439.jpg',
  },
  {
    image: '/assets/20160804_065439.jpg',
  },
  {
    image: '/assets/20160804_065439.jpg',
  },
  {
    image: '/assets/20160804_065439.jpg',
  },
];
const swiperContainer = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  centeredSlides: true,
  spaceBetween: 30,

  virtual: {
    slides: (function () {
      const slides = [];
      carouselImages.forEach(({image}) => {
        console.log(image);
        slides.push(
          `<div class="swiper-slide" ><img src="${image}" alt="Image"></div>`
        );
      });
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
