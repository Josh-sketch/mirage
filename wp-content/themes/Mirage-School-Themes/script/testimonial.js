"use strict";

const forward = document.querySelector(".right");
const backward = document.querySelector(".left");
const testimonialText = document.querySelectorAll(".testimonial-text");
var currentText = 0;
const textLength = testimonialText.length;

console.log(testimonialText);

console.log(textLength);

function showText(index) {
  testimonialText.forEach((text, i) => {
    text.classList.toggle("active", i === index);
  });
}

forward.addEventListener("click", function () {
  console.log("You're moving forward");
  currentText = (currentText + 1) % textLength;
  showText(currentText);
});

backward.addEventListener("click", function () {
  console.log("You're moving backward");
  currentText = (currentText - 1 + textLength) % textLength;
  showText(currentText);
});
