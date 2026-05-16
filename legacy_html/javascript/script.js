"use strict";

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});
 
/**  
 * show go bottom btn when scroll window 
 */


const goBottomBtn = document.getElementById('goBottomBtn');

  window.addEventListener('scroll', () => {
    // Show button only when not near bottom
    if (window.innerHeight + window.scrollY < document.body.offsetHeight - 200) {
      goBottomBtn.classList.add('active');
    } else {
      goBottomBtn.classList.remove('active');
    }
  });

  goBottomBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });

  
  
