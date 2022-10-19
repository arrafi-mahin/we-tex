"use strict";
const animateTop = document.querySelectorAll(".animate-top");
const animateBottom = document.querySelectorAll(".animate-bottom");
const animateLeft = document.querySelectorAll(".animate-left");
const animateRight = document.querySelectorAll(".animate-right");
const animateFade = document.querySelectorAll(".animate-fade");
const animateScale = document.querySelectorAll(".animate-scale");
const counters = document.querySelectorAll(".count");
// Disable in mobile device
ScrollReveal({ mobile: false });

// ScrollReveal().reveal("#location", slideUp);
ScrollReveal().reveal(animateBottom, {
  distance: "50px",
  delay: 600,
  duration: 800,
  origin: "bottom",
});
ScrollReveal().reveal(animateRight, {
  distance: "50px",
  duration: 800,
  delay: 600,
  origin: "right",
});
ScrollReveal().reveal(animateLeft, {
  distance: "50px",
  duration: 800,
  delay: 600,
  origin: "left",
});
ScrollReveal().reveal(animateTop, {
  distance: "50px",
  duration: 800,
  delay: 600,
  origin: "top",
});
ScrollReveal().reveal(animateScale, { scale: 0.65, delay: 200 });

// Counter js
var countersQuantity = counters.length;
var counter = [];

for (let i = 0; i < countersQuantity; i++) {
  counter[i] = parseInt(counters[i].innerHTML);
}

var count = function (start, value, id) {
  var localStart = start;
  setInterval(function () {
    if (localStart < value) {
      localStart++;
      counters[id].innerHTML = localStart;
    }
  }, 10);
};

for (let j = 0; j < countersQuantity; j++) {
  count(0, counter[j], j);
}
