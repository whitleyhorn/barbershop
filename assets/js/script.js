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

const englishImages = [
    {
        "imageUrl": "./assets/images/gallery-1.jpg",
        "alt": "Experienced barber giving a haircut at Berkeley Barbershop in Berkeley Heights, NJ"
    },
    {
        "imageUrl": "./assets/images/gallery-2.jpg",
        "alt": "Professional hairdresser styling hair at Berkeley Barbershop, New Jersey"
    },
    {
        "imageUrl": "./assets/images/gallery-3.jpg",
        "alt": "Front view of Berkeley Barbershop, a welcoming local barbershop in Berkeley Heights"
    },
    {
        "imageUrl": "./assets/images/gallery-4.jpg",
        "alt": "Satisfied customer with a new haircut at Berkeley Barbershop in Berkeley Heights"
    },
    {
        "imageUrl": "./assets/images/gallery-5.jpg",
        "alt": "Hairdresser providing a trendy haircut at Berkeley Barbershop, NJ"
    },
    {
        "imageUrl": "./assets/images/gallery-6.jpg",
        "alt": "Young man enjoying a stylish haircut at Berkeley Barbershop, New Jersey"
    },
    {
        "imageUrl": "./assets/images/gallery-7.jpg",
        "alt": "Berkeley Barbershop exterior with motorcycle, a popular barbershop in Berkeley Heights"
    },
    {
        "imageUrl": "./assets/images/gallery-8.jpg",
        "alt": "Hairdresser drying hair at Berkeley Barbershop, a trusted barbershop in Berkeley Heights, NJ"
    },
    {
        "imageUrl": "./assets/images/gallery-9.jpg",
        "alt": "Barber shop client getting a modern haircut at Berkeley Barbershop in NJ"
    },
    {
        "imageUrl": "./assets/images/gallery-11.jpg",
        "alt": "Berkeley Barbershop storefront with motorcycle parked in front in Berkeley Heights, NJ"
    },
    {
        "imageUrl": "./assets/images/gallery-12.jpg",
        "alt": "Back view of a fresh haircut at Berkeley Barbershop, showcasing professional barbering"
    },
    {
        "imageUrl": "./assets/images/gallery-13.jpg",
        "alt": "Hairdresser at Berkeley Barbershop perfecting a client's haircut in Berkeley Heights"
    },
    {
        "imageUrl": "./assets/images/gallery-14.jpg",
        "alt": "Inside view of Berkeley Barbershop with customers getting haircuts and grooming services"
    },
    {
        "imageUrl": "./assets/images/gallery-15.jpg",
        "alt": "Busy day at Berkeley Barbershop with hairdressers providing expert haircuts"
    },
    {
        "imageUrl": "./assets/images/gallery-16.jpg",
        "alt": "Side view of a sharp and modern men's haircut at Berkeley Barbershop, NJ"
    },
    {
        "imageUrl": "./assets/images/gallery-20.jpg",
        "alt": "Customer enjoying a new, clean haircut at Berkeley Barbershop, NJ"
    }
]

const spanishImages = [
    {
        imageUrl: './assets/images/gallery-1.jpg',
        alt: 'Barbero experimentado cortando el cabello en Berkeley Barbershop en Berkeley Heights, NJ',
    },
    {
        imageUrl: './assets/images/gallery-2.jpg',
        alt: 'Peluquero profesional estilizando cabello en Berkeley Barbershop, Nueva Jersey',
    },
    {
        imageUrl: './assets/images/gallery-3.jpg',
        alt: 'Vista frontal de Berkeley Barbershop, una barbería local acogedora en Berkeley Heights',
    },
    {
        imageUrl: './assets/images/gallery-4.jpg',
        alt: 'Cliente satisfecho con un nuevo corte de pelo en Berkeley Barbershop en Berkeley Heights',
    },
    {
        imageUrl: './assets/images/gallery-5.jpg',
        alt: 'Peluquera proporcionando un corte de pelo moderno en Berkeley Barbershop, NJ',
    },
    {
        imageUrl: './assets/images/gallery-6.jpg',
        alt: 'Joven disfrutando de un corte de pelo con estilo en Berkeley Barbershop, Nueva Jersey',
    },
    {
        imageUrl: './assets/images/gallery-7.jpg',
        alt: 'Exterior de Berkeley Barbershop con motocicleta, una barbería popular en Berkeley Heights',
    },
    {
        imageUrl: './assets/images/gallery-8.jpg',
        alt: 'Peluquera secando cabello en Berkeley Barbershop, una barbería de confianza en Berkeley Heights, NJ',
    },
    {
        imageUrl: './assets/images/gallery-9.jpg',
        alt: 'Cliente de barbería obteniendo un corte de pelo moderno en Berkeley Barbershop en NJ',
    },
    {
        imageUrl: './assets/images/gallery-11.jpg',
        alt: 'Fachada de Berkeley Barbershop con moto aparcada enfrente en Berkeley Heights, NJ',
    },
    {
        imageUrl: './assets/images/gallery-12.jpg',
        alt: 'Vista trasera de un corte de pelo fresco en Berkeley Barbershop, mostrando barbería profesional',
    },
    {
        imageUrl: './assets/images/gallery-13.jpg',
        alt: 'Peluquera en Berkeley Barbershop perfeccionando el corte de pelo de un cliente en Berkeley Heights',
    },
    {
        imageUrl: './assets/images/gallery-14.jpg',
        alt: 'Vista interior de Berkeley Barbershop con clientes recibiendo cortes de pelo y servicios de aseo',
    },
    {
        imageUrl: './assets/images/gallery-15.jpg',
        alt: 'Día ajetreado en Berkeley Barbershop con peluqueros proporcionando cortes de pelo expertos',
    },
    {
        imageUrl: './assets/images/gallery-16.jpg',
        alt: 'Vista lateral de un corte de pelo masculino moderno y definido en Berkeley Barbershop, NJ',
    },
    {
        imageUrl: './assets/images/gallery-20.jpg',
        alt: 'Cliente disfrutando de un nuevo corte de pelo limpio en Berkeley Barbershop, NJ',
    },
];




// Assuming you have a base options object structure that you want to modify for English and Spanish
const baseOptions = {
    transitionTime: 500,
    transitionZoom: 'in',
    arrows:true,
    arrowsHide: true,
    auto: true,
    autoTime: 2000,
};

const englishOptions = {
    ...baseOptions,
    images: englishImages
};

const spanishOptions = {
    ...baseOptions,
    images: spanishImages
};

var englishSlider = createSlider('slider-english', englishOptions);
var spanishSlider = createSlider('slider-spanish', spanishOptions);
 
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

// Function to detect WebP support
function supportsWebp(callback) {
    // Create a small WebP image
    var webP = new Image();
    webP.onload = webP.onerror = function() {
        callback(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAAAAEAcQA1oAAUAAJABwAAoAAIAAASkAAB8AAIAA';
}

// Use the supportsWebp function
supportsWebp(function(supported) {
    var imagePath;
    var isDesktop = window.innerWidth >= 1024; // Example breakpoint

    if (isDesktop) {
        imagePath = supported ? 'berkeley_barbershop_desktop.webp' : 'berkeley_barbershop_desktop.jpg';
    } else {
        imagePath = supported ? 'berkeley_barbershop.webp' : 'berkeley_barbershop.jpg';
    }

    // Preload the determined image
    var link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imagePath;
    document.head.appendChild(link);
});
