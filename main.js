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
const headerOffsetHeightVh = (headerOffsetHeightPx / window.innerHeight) * 100;
const referenceHeightVh = 100 - headerOffsetHeightVh;

const getReference = $(".reference");
getReference.style.marginTop = headerOffsetHeightVh + "vh";
getReference.style.height = referenceHeightVh + "vh";

