"use strict";

class Slideshow {
  constructor(rootElement) {
    this.root = rootElement;

    // Select elements within this root
    this.slides = this.root.querySelectorAll(".slide");
    this.controls = this.root.querySelectorAll(".controls");
    this.stopBtn = this.root.querySelector(".stop");
    this.playBtn = this.root.querySelector(".play");
    this.currentSlide = 0;
    this.isPlaying = true;
    this.slideInterval = null;

    // Initialize slideshow
    this.init();
  }

  init() {
    this.showSlide(this.currentSlide);
    this.startSlide();
    this.addEventListeners();
  }

  showSlide(index) {
    this.slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    this.currentSlide = index;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.showSlide(this.currentSlide);
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.showSlide(this.currentSlide);
  }

  startSlide() {
    this.slideInterval = setInterval(() => this.nextSlide(), 5000);
    this.isPlaying = true;
  }

  stopSlide() {
    clearInterval(this.slideInterval);
    this.isPlaying = false;
  }

  resetSlideInterval() {
    clearInterval(this.slideInterval);
    if (this.isPlaying) this.startSlide();
  }

  addEventListeners() {
    // Play/Stop toggle
    if (this.controls[1]) {
      this.controls[1].addEventListener("click", () => {
        if (this.isPlaying) {
          this.stopSlide();
          this.playBtn.classList.add("active");
          this.stopBtn.classList.remove("active");
        } else {
          this.startSlide();
          this.playBtn.classList.remove("active");
          this.stopBtn.classList.add("active");
        }
      });
    }

    // Forward
    if (this.controls[2]) {
      this.controls[2].addEventListener("click", () => {
        this.nextSlide();
        this.resetSlideInterval();
      });
    }

    // Backward
    if (this.controls[0]) {
      this.controls[0].addEventListener("click", () => {
        this.prevSlide();
        this.resetSlideInterval();
      });
    }
  }
}

// Automatically initialize all slideshows
document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll(".slideshow");
  slideshows.forEach((slideshowElement) => {
    new Slideshow(slideshowElement);
  });
});
