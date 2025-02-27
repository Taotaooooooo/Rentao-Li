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