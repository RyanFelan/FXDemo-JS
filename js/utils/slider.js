// Image Slider Logic
let slideIndex = 1;
let dotIndex = 1;

// Function to initialize the slider
export function initializeSlider() {
    // Set the initial slide
    showSlide(slideIndex);
}

// Function to show next slide
export function showNextSlide() {
    let slides = document.getElementsByClassName("slider-image");
    if (slideIndex >= slides.length) {
        showSlide(1);
    } else {
        showSlide(slideIndex + 1);
    }

}

export function showSlide(n) {
    let slides = document.getElementsByClassName("slider-image");
    let dots = document.getElementsByClassName("slider-control-dots");

    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    } else {
        slideIndex = n;
    }

    slideIndex = n;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    dotIndex = slideIndex;
}