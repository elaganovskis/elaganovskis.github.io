const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger-menu-link");
const close = document.querySelector(".hamburger__close");
const headerActive = document.querySelector(".header-active");

hamburger.addEventListener("click", function(e) {
  if (header.classList.contains("header-active")) {
    e.preventDefault;
  } else {
    header.classList.add("header-active");
  }
});

close.addEventListener("click", function(e) {
  header.classList.remove("header-active");
});
