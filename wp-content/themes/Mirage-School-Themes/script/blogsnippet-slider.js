"use strict";

const forwardBlog = document.querySelector(".blog-right");
const backwardBlog = document.querySelector(".blog-left");
const blogSummary = document.querySelectorAll(".blog-summary");
var currentSummary = 0;
const blogLength = blogSummary.length;

console.log(blogSummary);

console.log(blogLength);

function showSummary(index) {
  blogSummary.forEach((summary, i) => {
    summary.classList.toggle("active", i === index);
  });
}

console.log(forwardBlog);
forwardBlog.addEventListener("click", function () {
  console.log("You're moving forward");
  currentSummary = (currentSummary + 1) % textLength;
  showSummary(currentSummary);
});

backwardBlog.addEventListener("click", function () {
  console.log("You're moving backward");
  currentSummary = (currentSummary - 1 + blogLength) % blogLength;
  showSummary(currentSummary);
});
