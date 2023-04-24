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
  await sleep(.1);
  if(isTouchSupported){
    document.getElementById("events").setAttribute("href", "events.html"); 
  }
}
async function aboutClick () {
  await sleep(.1);
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

/* //shows menu button in moblie and handles animation
let packageBtn = document.getElementById("platButton");
let packageOpen = false;  
function packageArrow(){
  if(!packageOpen) {
    packageBtn.classList.add('open');
    packageOpen = true;
  } else {
    packageBtn.classList.remove('open');
    packageOpen = false;
  }
} */

let isGoldActive = false;
async function goldDescript(){
  if(!isGoldActive) {
    document.getElementById("goldInfo").style.alignItems = "revert";
    document.getElementById("goldInfo").classList.add('open');
    document.getElementById("goldWrapper").classList.add('open');
    /* document.getElementById("goldInfo").style.height = "25vw"; */
    await sleep(.5);
    /* document.getElementById("goldWrapper").style.visibility = "visible"; */
    isGoldActive= true;
  } else {
    /* document.getElementById("goldInfo").style.height = "5vw"; */
    document.getElementById("goldInfo").classList.remove('open');
    document.getElementById("goldWrapper").classList.remove('open');
    /* document.getElementById("goldWrapper").style.visibility = "hidden"; */
    await sleep (.5);
    document.getElementById("goldInfo").style.alignItems = "center";
    isGoldActive= false;
  }
}

let isSilverActive = false;
async function silverDescript(){
  if(!isSilverActive) {
    document.getElementById("silverInfo").style.alignItems = "revert";
    document.getElementById("silverInfo").classList.add('open');
    document.getElementById("silverWrapper").classList.add('open');
    /* document.getElementById("silverInfo").style.height = "25vw"; */
    isSilverActive= true;
  } else {
    /* document.getElementById("silverInfo").style.height = "5vw"; */
    document.getElementById("silverInfo").classList.remove('open');
    document.getElementById("silverWrapper").classList.remove('open');
    await sleep (.5);
    document.getElementById("silverInfo").style.alignItems = "center";
    isSilverActive= false;
  }
}

let isPlatActive = false;
async function platDescript(){
  if(!isPlatActive) {
    document.getElementById("platInfo").style.alignItems = "revert";
    document.getElementById("platInfo").classList.add('open');
    document.getElementById("platinumWrapper").classList.add('open');
    /* document.getElementById("platInfo").style.height = "25vw"; */
    isPlatActive= true;
  } else {
    /* document.getElementById("platInfo").style.height = "5vw"; */
    document.getElementById("platInfo").classList.remove('open');
    document.getElementById("platinumWrapper").classList.remove('open');
    await sleep (.5);
    document.getElementById("platInfo").style.alignItems = "center";
    isPlatActive= false;
  }
}

const faders = document.querySelectorAll(".review");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      console.log('test');
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
      
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
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
    




