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

// Get references to DOM elements
const carousel = document.getElementById('carousel');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// Calculate the width of a single item
const itemWidth = () => {
  const item = carousel.querySelector('.item');
  return item.offsetWidth; // Includes the item's width only
};

// Assuming a fixed number of visible items and fixed space between items
const visibleItemCount = 3; // Number of items you want to show at a time
const spaceBetweenItems = 16; // Adjust the space between items as needed

// Calculate the total width to scroll for 3 items
const totalScrollWidth = () => (itemWidth() + spaceBetweenItems) * visibleItemCount;

// Update arrow visibility based on the current state
const updateArrows = () => {
  const totalItems = carousel.querySelectorAll('.item').length;
  const maxFirstItemIndex = totalItems - visibleItemCount;
  prev.style.display = firstVisibleItemIndex > 0 ? 'flex' : 'none';
  next.style.display = firstVisibleItemIndex < maxFirstItemIndex ? 'flex' : 'none';
};

// Track the index of the leftmost item in the viewport
let firstVisibleItemIndex = 0;

// Event listeners for buttons
next.addEventListener('click', () => {
  // Calculate the number of items to scroll without exceeding the total number of items
  const maxScrollIndex = carousel.querySelectorAll('.item').length - visibleItemCount;
  const itemsToScroll = Math.min(visibleItemCount, maxScrollIndex - firstVisibleItemIndex);
  carousel.scrollBy(totalScrollWidth(), 0);
  firstVisibleItemIndex = Math.min(firstVisibleItemIndex + itemsToScroll, maxScrollIndex);
  updateArrows();
});

prev.addEventListener('click', () => {
  const itemsToScroll = Math.min(visibleItemCount, firstVisibleItemIndex);
  carousel.scrollBy(-totalScrollWidth(), 0);
  firstVisibleItemIndex = Math.max(firstVisibleItemIndex - itemsToScroll, 0);
  updateArrows();
});

// Initial arrow state update and resize event listener
updateArrows();
window.addEventListener('resize', updateArrows);
