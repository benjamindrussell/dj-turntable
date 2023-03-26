
const menuBtn = document.querySelector('.menu-btn');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

$(document).ready(function() {
    $('.menu-btn').click(function() {
      $('.navbar').toggleClass('on');
    });
});

const navbar = document.querySelector('.navbar');
const isTouchSupported = "ontouchstart" in window || window.navigator.maxTouchPoints;
if (isTouchSupported) {
    console.log("Supported");
    console.log(navbar);
    navbar.classList.add('touch');
} else {
    console.log("Not supported");
}

