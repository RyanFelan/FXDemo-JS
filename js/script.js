// Function to handle button clicks
function handleButtonClick(buttonName) {
    document.getElementById("buttonClickInfo").innerText = "Button clicked: " + buttonName;
}

// Image Slider Logic
let slideIndex = 1;
let dotIndex = 1;
showSlide(slideIndex);

// Function to show next slide
function showNextSlide() {
    let slides = document.getElementsByClassName("slider-image");
    if (slideIndex >= slides.length) {
        showSlide(1);
    } else {
        showSlide(slideIndex + 1);
    }

}

// Set interval to change slide every 5 seconds
setInterval(showNextSlide, 5000);

function showSlide(n) {
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