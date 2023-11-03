document.addEventListener('DOMContentLoaded', () => {


  document.querySelector(".navbar-open-btn").addEventListener("click", openNav);
  document.querySelector(".navbar-close-btn").addEventListener("click", closeNav);
 
  // Open and close navbar
  function openNav() {
    document.getElementById("nav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("nav").style.width = "0%";
  }


});
