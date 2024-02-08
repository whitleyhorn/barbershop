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
    * Gallery
*/

// Utility function to initialize carousel controls
function initializeCarouselControls() {
    let currentCarousel = document.querySelector('.carousel[data-language="en"]'); // Start with English by default

    const getVisibleItemsCount = () => (window.innerWidth < 768) ? 2 : 3;
    const spaceBetweenItems = 16;

    const getItemWidth = () => {
        const item = currentCarousel.querySelector('.item:not(.hide)');
        return item ? item.offsetWidth : 0;
    };

    const getTotalScrollWidth = () => (getItemWidth() + spaceBetweenItems) * getVisibleItemsCount();

    let firstVisibleItemIndex = 0;

    const updateArrows = () => {
        const totalItems = currentCarousel.querySelectorAll('.item:not(.hide)').length;
        const maxFirstItemIndex = totalItems - getVisibleItemsCount();
        prev.style.display = firstVisibleItemIndex > 0 ? 'flex' : 'none';
        next.style.display = firstVisibleItemIndex < maxFirstItemIndex ? 'flex' : 'none';
    };

    next.addEventListener('click', () => {
        const maxScrollIndex = currentCarousel.querySelectorAll('.item:not(.hide)').length - getVisibleItemsCount();
        const itemsToScroll = Math.min(getVisibleItemsCount(), maxScrollIndex - firstVisibleItemIndex);
        currentCarousel.scrollBy(getTotalScrollWidth(), 0);
        firstVisibleItemIndex = Math.min(firstVisibleItemIndex + itemsToScroll, maxScrollIndex);
        updateArrows();
    });

    prev.addEventListener('click', () => {
        const itemsToScroll = Math.min(getVisibleItemsCount(), firstVisibleItemIndex);
        currentCarousel.scrollBy(-getTotalScrollWidth(), 0);
        firstVisibleItemIndex = Math.max(firstVisibleItemIndex - itemsToScroll, 0);
        updateArrows();
    });

    window.addEventListener('resize', () => {
        updateArrows();
    });

    // Function to switch the active carousel when the language is toggled
    window.setActiveCarousel = (language) => {
        currentCarousel = document.querySelector(`.carousel[data-language="${language}"]`);
        firstVisibleItemIndex = 0; // Reset index when language changes

        // Reset the scroll position of the carousel to the start
        currentCarousel.scrollTo(0, 0);

        updateArrows(); // Call updateArrows to reset the visibility of the arrows
    };


    updateArrows(); // Initial update
}

// Initialize carousel controls
initializeCarouselControls();

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
    setActiveCarousel(currentLang);
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
