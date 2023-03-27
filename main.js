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






