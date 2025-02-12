document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");
    const closeMenu = document.getElementById("close-menu");

    menuToggle.addEventListener("click", function() {
        sideMenu.style.left = "0";
    });

    closeMenu.addEventListener("click", function() {
        sideMenu.style.left = "-250px";
    });

    // Close the menu when clicking outside of it
    document.addEventListener("click", function(event) {
        if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            sideMenu.style.left = "-250px";
        }
    });
});
