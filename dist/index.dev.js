"use strict";

var stars = document.querySelectorAll('.fa-star');
var emojies = document.querySelectorAll('.fa-regular');
var colors = ['red', 'yellow', 'blue', 'orange', 'green'];
stars.forEach(function (star, index) {
  star.addEventListener('click', function () {
    updateRating(index);
  });
});
updateRating(0);

function updateRating(index) {
  stars.forEach(function (star, idx) {
    if (idx < index + 1) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
  emojies.forEach(function (emoji) {
    emoji.style.transform = "translate(".concat(-index * 50, "px)");
    emoji.style.color = colors[index];
  });
}