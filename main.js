const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// Open Menu 
const getHeaderMenu = $(".header__menu");
const getHeaderContent = $(".header__content");
const getHeaderCloseIcon = $(".header__close-icon");
const getOverlay = $('.overlay')

const displayHeaderMenu = () => {
  getHeaderContent.style.transform = "translateX(0)";
  getOverlay.style.display = 'block'
};

const hideHeaderMenu = () => {
  getHeaderContent.style.transform = "translateX(100%)";
  getOverlay.style.display = 'none'
};

getHeaderMenu.addEventListener("click", displayHeaderMenu);
getHeaderCloseIcon.addEventListener("click", hideHeaderMenu);
getOverlay.addEventListener("click", hideHeaderMenu);
//


const getHeader = $(".header");
const headerOffsetHeightPx = getHeader.offsetHeight;

// Scroll to each section
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("a[href^='#']");

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        var targetOffset = targetElement.offsetTop - headerOffsetHeightPx;

        window.scrollTo({
          top: targetOffset,
          behavior: "smooth",
        });
      }
    });
  }
});
//



const getHeaderMenuItems = $$(".header__content a");

getHeaderMenuItems.forEach((item) => {
  item.addEventListener("click", function() {
    if (window.innerWidth <= 680) {
      hideHeaderMenu();
    }
  });
});




// Get current year
const getCurrentYear = $(".current-year");
let currentDate = new Date();
getCurrentYear.textContent = currentDate.getFullYear();
//
