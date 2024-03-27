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

  const slides = document.querySelectorAll('.carousel-slide');

  let currentSlide = 0;
  function showSlide() {
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    slides[currentSlide].style.display = 'block';
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
  }

  showSlide();

  setInterval(() => {
    showSlide();
  }, 5000);
});
