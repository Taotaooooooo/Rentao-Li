document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger-menu");
    const dropdown = document.getElementById("nav-dropdown");

    burger.addEventListener("click", function () {
        // Toggle dropdown visibility
        dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";

        // Add or remove the 'active' class for animation
        burger.classList.toggle("active");
    });

    // Close the menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!burger.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = "none";
            burger.classList.remove("active"); // Ensure animation resets when closing
        }
    });
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.prev-slide').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next-slide').addEventListener('click', () => changeSlide(1));

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateSlidePosition();
}

function updateSlidePosition() {
    const slider = document.querySelector('.slider');
    slider.style.transition = "transform 0.5s ease-in-out";  // Smooth transition for slide change
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function autoSlide() {
    changeSlide(1);
}

// Automatically change slides every 3 seconds
const slideInterval = setInterval(autoSlide, 3000);

// Ensure the first slide is visible on load
updateSlidePosition();

