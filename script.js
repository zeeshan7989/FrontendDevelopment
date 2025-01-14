$(document).ready(function () {
  $('.slider').slick({
      slidesToShow: 3,       // Number of slides visible at once
      slidesToScroll: 1,     // Number of slides to scroll per swipe
      autoplay: true,        // Enable auto-play
      autoplaySpeed: 2000,   // Auto-play speed in milliseconds
      arrows: true,          // Show navigation arrows
      dots: true,            // Show navigation dots
  });
});
