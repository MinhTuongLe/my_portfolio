const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const getHeaderMenu = $(".header__menu");
const getHeaderContent = $(".header__content");
const getHeaderCloseIcon = $(".header__close-icon");

const displayHeaderMenu = () => {
  getHeaderContent.style.transform = "translateX(0)";
};

const hideHeaderMenu = (event) => {
  getHeaderContent.style.transform = "translateX(100%)";
  event.stopPropagation();
};

getHeaderMenu.addEventListener("click", displayHeaderMenu);
getHeaderCloseIcon.addEventListener("click", hideHeaderMenu);

const getHeader = $(".header");
const headerOffsetHeightPx = getHeader.offsetHeight;
// const headerOffsetHeightVh = (headerOffsetHeightPx / window.innerHeight) * 100;
// const referenceHeightVh = 100 - headerOffsetHeightVh;

// const getReference = $(".reference");
// getReference.style.marginTop = headerOffsetHeightVh + "vh";
// getReference.style.height = referenceHeightVh + "vh";

// const getAbout = $(".contact");
// getAbout.style.height = referenceHeightVh + "vh";

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

const getHeaderMenuItems = $$(".header__content a");

getHeaderMenuItems.forEach((item) => {
  item.addEventListener("click", function() {
    if (window.innerWidth <= 680) {
      hideHeaderMenu();
    }
  });
});

// const getInfo = $(".info");
// const infoOffsetHeightPx = getInfo.offsetHeight;
// const infoOffsetHeightVh = (infoOffsetHeightPx / window.innerHeight) * 100;
// const footerHeight = referenceHeightVh - infoOffsetHeightVh
// const getFooter = $('.footer')
// getFooter.style.height = footerHeight + "vh"

const getCurrentYear = $(".current-year");
let currentDate = new Date();
getCurrentYear.textContent = currentDate.getFullYear();
