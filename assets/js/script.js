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

document.addEventListener('DOMContentLoaded', function() {
    var lightbox = new FsLightbox();
    lightbox.props.sources = [];

    for (let i = 1; i <= 20; i++) {
        lightbox.props.sources.push(`./assets/images/gallery-${i}.jpg`);
    }
    document.getElementById('openGallery').addEventListener('click', () => {
        lightbox.open(1);
    });

    // Get all elements with the class 'data-gallery-img'
    var galleryItems = document.querySelectorAll('[data-gallery-img]');


    // Loop over each gallery item
    galleryItems.forEach(function(item) {
      // Set an onclick event handler for each item
      item.onclick = function() {
        // Retrieve the value of 'data-gallery-img'
        var imgIndex = this.getAttribute('data-gallery-img');
          console.log(imgIndex);
        
        // Assuming lightbox.open() accepts an index as an argument
        // Convert imgIndex to an integer if necessary
        lightbox.open(parseInt(imgIndex));
      };
    });
})



