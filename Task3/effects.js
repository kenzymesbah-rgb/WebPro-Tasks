
const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    hamburger.setAttribute("aria-expanded", isOpen);
});
