"use strict";

const menuBtn = document.querySelector(".menu-nav");
const cancelBtn = document.querySelector(".cancel-nav");
const mobileMenu = document.querySelector(".mobile-nav");
const homePageNavigation = document.querySelector("home_page_navigation");

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("close");
  menuBtn.style.display = "none";
});

cancelBtn.addEventListener("click", function () {
  mobileMenu.classList.add("close");
  menuBtn.style.display = "block";
});

console.log(cancelBtn);
