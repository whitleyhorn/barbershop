'use strict';

let currentLang = "en"; // default language

/**
    * Display Today's Hours
 */
const openHours = {
    "Monday": "8 AM - 6 PM",
    "Tuesday": "8 AM - 6 PM",
    "Wednesday": "8 AM - 6 PM",
    "Thursday": "8 AM - 6 PM",
    "Friday": "8 AM - 6 PM",
    "Saturday": "8 AM - 5 PM",
    "Sunday": "10 AM - 3 PM"
};

document.addEventListener("DOMContentLoaded", function() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var currentDay = days[new Date().getDay()];
    var todayHours = openHours[currentDay];

    document.getElementById("today-hours").textContent = todayHours;
});

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
      try {
        elem.addEventListener(type, callback);
      } catch (e) {
          console.error(e);
          console.trace();
          console.log(elem, type);
      }
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = () => navbar.classList.toggle("active");

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = () => navbar.classList.remove("active");

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * back top btn active when scroll down to 100px
 */

const backTopBtn = document.querySelector("[data-back-top-btn]");

const backTopActive = function () {
  if (window.scrollY > 100) {
    backTopBtn.classList.add("active");
  } else {
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", backTopActive);



/**
    * Spanish Language Switcher
    */
// Function to set the language and update the flag icon
const imagesDir = 'assets/images/';
const englishElems = document.querySelectorAll('[data-language="en"]');
const spanishElems = document.querySelectorAll('[data-language="es"]');


function setLanguage(lang) {
    const img = document.getElementById('language-flag');
    const question = document.getElementById('language-question');
    if (lang === 'es' || lang === 'es-ES') {
        currentLang = 'es';
        img.src = imagesDir + 'english-flag.png'; 
        question.innerHTML = "English?&nbsp";
        // Change the website text to Spanish
        englishElems.forEach(el => el.classList.add('hide'));
        spanishElems.forEach(el => el.classList.remove('hide'));
    } else {
        currentLang = 'en';
        img.src = imagesDir + 'spanish-flag.png';
        question.innerHTML = "¿Español?&nbsp";
        // Change the website text to English
        englishElems.forEach(el => el.classList.remove('hide'));
        spanishElems.forEach(el => el.classList.add('hide'));
    }
    document.documentElement.setAttribute('lang', currentLang);
}

// Toggle the language when the flag is clicked
function toggleLanguage() {
    setLanguage(currentLang === 'en' ? 'es' : 'en');
}

// Set the initial language based on the user's system language
window.onload = function() {
    const userLang = navigator.language || navigator.userLanguage; 
    setLanguage(userLang.includes('es') ? 'es' : 'en');
}
var containerId = 'slider-1';

var options = {
    transitionTime: 500,
    transitionZoom: 'in',
    arrows:true,
    arrowsHide: true,
    auto: true,
    autoTime: 2000,
    images: [
        'assets/images/gallery-1.jpg',
        'assets/images/gallery-2.jpg',
        'assets/images/gallery-3.jpg',
        'assets/images/gallery-4.jpg',
        'assets/images/gallery-5.jpg',
        'assets/images/gallery-6.jpg',
        'assets/images/gallery-7.jpg',
        'assets/images/gallery-8.jpg',
        'assets/images/gallery-9.jpg',
        'assets/images/gallery-11.jpg',
        'assets/images/gallery-12.jpg',
        'assets/images/gallery-13.jpg',
        'assets/images/gallery-14.jpg',
        'assets/images/gallery-15.jpg',
        'assets/images/gallery-16.jpg',
        'assets/images/gallery-17.jpg',
        'assets/images/gallery-20.jpg'
    ]
}

var slider = createSlider(containerId, options);
