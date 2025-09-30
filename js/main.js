"use strict"

const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("open");
    navLinks.classList.toggle("show");
});