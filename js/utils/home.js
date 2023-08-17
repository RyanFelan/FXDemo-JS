// home.js

// Import modules
import { initializeSlider, showSlide, showNextSlide } from './slider.js';
import { handleButtonClick } from './buttonHandlers.js';

// Keep track of time of slider
let time = 10000;

// Initialize the slider and start slideshow
let intervalID = setInterval(showNextSlide, time);
initializeSlider(time);

// Attach event listeners to the dots for navigation
const dots = document.querySelectorAll('.slider-control-dots');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(intervalID);
        showSlide(index + 1);
        intervalID = setInterval(showNextSlide, time);

    });
});

// Event listeners for button clicks
document.getElementById('button1').addEventListener('click', () => {
  handleButtonClick('Button 1');
});
document.getElementById('button2').addEventListener('click', () => {
  handleButtonClick('Button 2');
});




