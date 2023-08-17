// nav.js
export function navSet(){
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navMenu = document.querySelector('nav');
    let timeoutId;

    // Toggle the "open" class on hover
    hamburgerIcon.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    navMenu.classList.add('open');
    });

    // Close the navigation if the mouse leaves the hamburger icon
    hamburgerIcon.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
        navMenu.classList.remove('open');
    }, 2000); // Set a 2-second timeout
    });

    // Close the navigation if the mouse leaves the hamburger icon and doesnt hover over the nav
    navMenu.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    });

    // Remove the "open" class when the mouse leaves the navigation
    navMenu.addEventListener('mouseleave', () => {
    navMenu.classList.remove('open');
    });
}




