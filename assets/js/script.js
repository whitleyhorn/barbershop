'use strict';

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
    elem.addEventListener(type, callback);
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
 * header & back top btn active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);



/**
 * filter function
 */

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (this.dataset.filterBtn === filterItems[i].dataset.filter ||
      this.dataset.filterBtn === "all") {

      filterItems[i].style.display = "block";
      filterItems[i].classList.add("active");

    } else {

      filterItems[i].style.display = "none";
      filterItems[i].classList.remove("active");

    }
  }
}

addEventOnElem(filterBtns, "click", filter);

/**
    * Gallery
    */

// Select all slides
const slides = document.querySelectorAll(".slide");
// Select the slider container
const slider = document.querySelector(".slider");

// Maximum height for the slider container
const maxSliderHeight = 500; // pixels

// Function to adjust the slider height based on the current image
function adjustSliderHeight(slide) {
  const img = slide.querySelector('img'); // Get the image within the slide
  
  const updateHeight = () => {
    const aspectRatio = img.naturalHeight / img.naturalWidth;
    const sliderWidth = slider.offsetWidth;
    let newHeight = sliderWidth * aspectRatio; // Calculate the new height based on aspect ratio
    
    // Enforce the maximum height limit
    if (newHeight > maxSliderHeight) {
      newHeight = maxSliderHeight;
    }
    
    slider.style.height = `${newHeight}px`; // Adjust the slider height
  };
  
  if (img.complete) {
    updateHeight();
  } else {
    img.onload = updateHeight; // Ensure the image is loaded before calculating
  }
}

// Loop through slides and set each slide's translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// Select next and previous slide buttons
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");

// Current slide counter
let curSlide = 0;
// Maximum number of slides
let maxSlide = slides.length - 1;

// Add event listener and navigation functionality for the next button
nextSlide.addEventListener("click", function () {
  // Check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  // Move slide
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });

  // Adjust slider height for the new current slide
  adjustSliderHeight(slides[curSlide]);
});

// Add event listener and navigation functionality for the previous button
prevSlide.addEventListener("click", function () {
  // Check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  // Move slide
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });

  // Adjust slider height for the new current slide
  adjustSliderHeight(slides[curSlide]);
});

// Initial adjustment for the first slide
adjustSliderHeight(slides[0]);

