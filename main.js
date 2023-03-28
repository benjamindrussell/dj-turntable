//detects if the device uses a touchscreen or not
const navbar = document.querySelector('.navbar');
const isTouchSupported = "ontouchstart" in window || window.navigator.maxTouchPoints;
if (isTouchSupported) {
    console.log("Supported");
    console.log(navbar);
    navbar.classList.add('touch');
    document.getElementById("events").removeAttribute("href"); 
    document.getElementById("about").removeAttribute("href"); 
} else {
    console.log("Not supported");
}

//provides better touchscreen functionality to dropdown menu
async function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
async function eventClick () {
  await sleep(1);
  if(isTouchSupported){
    document.getElementById("events").setAttribute("href", "events.html"); 
  }
}
async function aboutClick () {
  await sleep(1);
  if(isTouchSupported){
    document.getElementById("about").setAttribute("href", "events.html"); 
  }
}

//shows menu button in moblie and handles animation
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    document.getElementById("events").removeAttribute("href"); 
    document.getElementById("about").removeAttribute("href"); 
    menuOpen = false;
  }
});

// Toggles navbar in mobile view
$(document).ready(function() {
    $('.menu-btn').click(function() {
      $('.navbar').toggleClass('on');
    });
});

// Swiper
// Params
var sliderSelector = '.swiper-container',
    options = {
      init: false,
      loop: true,
      speed:800,
      slidesPerView: 2, // or 'auto'
      // spaceBetween: 10,
      centeredSlides : true,
      effect: 'coverflow', // 'cube', 'fade', 'coverflow',
      coverflowEffect: {
        rotate: 50, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 100, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows : true, // Enables slides shadows
      },
      grabCursor: true,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        960: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      },
      // Events
      on: {
        imagesReady: function(){
          this.el.classList.remove('loading');
        }
      }
    };
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();
    





