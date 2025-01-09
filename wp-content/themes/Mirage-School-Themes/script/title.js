"use strict";

const heroTitles = document.querySelectorAll(".hero-title");
const heroBtns = document.querySelectorAll(".hero-btn");
const slideTitles = document.querySelectorAll(".slide-title");
// const slides = document.querySelectorAll(".slide");
//const captions = document.querySelectorAll(".slideshow-texts");
// const controls = document.querySelectorAll(".controls");
// const stop = document.querySelector(".stop");
// const play = document.querySelector(".play");
// let isPlaying = true;
// let slideInterval;

heroTitles.forEach((title) => {
  const titleString = title.textContent;
  const words = titleString.split(" ");
  let newString = "";
  words.forEach((word) => {
    word = `<span>${word}</span>`;
    newString += word + " ";
  });
  title.innerHTML = newString;
});

slideTitles.forEach((title) => {
  const titleString = title.textContent;
  const words = titleString.split(" ");
  let newString = "";
  words.forEach((word) => {
    word = `<span>${word}</span>`;
    newString += word + " ";
  });
  title.innerHTML = newString;
});

heroBtns.forEach((heroBtn) => {
  const btnString = heroBtn.textContent;
  const copies = btnString.split(" ");

  let newCopy = "";
  copies.forEach((copy) => {
    copy = `<span>${copy}</span>`;
    newCopy += copy + " ";
  });
  heroBtn.innerHTML = newCopy;
});

// let currentSlide = 0;

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.toggle("active", i === index);
//   });

//   // captions.forEach((caption, i) => {
//   //   caption.classList.toggle("active", i === index);
//   // });
//   currentSlide = index;
// }

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// function prevSlide() {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   showSlide(currentSlide);
// }

// function startSlide() {
//   slideInterval = setInterval(nextSlide, 5000);
//   isPlaying = true;
// }

// function stopSlide() {
//   clearInterval(slideInterval);
//   isPlaying = false;
// }

// function resetSlideInterval() {
//   clearInterval(slideInterval); // Clear the existing interval
//   slideInterval = setInterval(nextSlide, 5000); // Start a new interval
// }

// controls[1].addEventListener("click", () => {
//   if (isPlaying) {
//     stopSlide();
//     play.classList.add("active");
//     stop.classList.remove("active");
//     console.log("stop playing");
//   } else {
//     startSlide();
//     play.classList.remove("active");
//     stop.classList.add("active");
//     console.log("start playing");
//   }
// });

// controls[2].addEventListener("click", () => {
//   console.log("go forward");
//   nextSlide();
//   resetSlideInterval();
//   if (play.classList.contains("active")) {
//     stopSlide();
//   }
// });

// controls[0].addEventListener("click", () => {
//   console.log("go backward");
//   prevSlide();
//   resetSlideInterval();
//   if (play.classList.contains("active")) {
//     stopSlide();
//   }
// });

// // // Optional: Start on load
// document.addEventListener("DOMContentLoaded", () => {
//   showSlide(currentSlide); // Ensure this function is defined earlier in the script
//   startSlide(); // Ensure this function is defined earlier in the script
// });
