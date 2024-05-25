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
