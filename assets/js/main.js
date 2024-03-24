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
  // Get all carousel slides
  const slides = document.querySelectorAll('.carousel-slide');
  let currentSlide = 0;

  // Function to show slide
  function showSlide() {
    // Hide all slides
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    // Show current slide
    slides[currentSlide].style.display = 'block';

    // Increment current slide index
    currentSlide++;

    // Reset current slide index if it exceeds the total number of slides
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
  }

  // Show the first slide initially
  showSlide();

  // Automatically advance slides every 5 seconds (adjust interval as needed)
  setInterval(() => {
    showSlide();
  }, 5000);
});

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   autoplay: false,
// });
