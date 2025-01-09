"use strict";

const historyPickers = document.querySelectorAll(".history-picker");
const historySlides = document.querySelectorAll(".history-details");
const historyPhotos = document.querySelectorAll(".history-image");

console.log(historyPickers);

historyPickers.forEach((picker, index) => {
  picker.addEventListener("click", function () {
    historySlides.forEach((history) => {
      history.classList.remove("active");
    });
    historySlides[index].classList.add("active");

    historyPhotos.forEach((photo) => photo.classList.remove("active"));
    historyPhotos[index].classList.add("active");

    historyPickers.forEach((history) => history.classList.remove("active"));
    picker.classList.add("active");
  });
});
