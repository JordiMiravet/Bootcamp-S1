"use strict";

const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuIcon = toggleBtn.querySelector("img");
const navbar = document.querySelector(".navbar");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  navbar.classList.toggle("menu-open");
  document.body.classList.toggle("menu-open");

  if (navLinks.classList.contains("show")) {
    menuIcon.src = "./images/icon-close.svg";
    toggleBtn.setAttribute("aria-label", "Cerrar menú de navegación");
  } else {
    menuIcon.src = "./images/icon-hamburger.svg";
    toggleBtn.setAttribute("aria-label", "Abrir menú de navegación");
  }
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    navbar.classList.remove("menu-open");
    document.body.classList.remove("menu-open");
    menuIcon.src = "./images/icon-hamburger.svg";
    toggleBtn.setAttribute("aria-label", "Abrir menú de navegación");
  });
});

const tabsData = [
  {
    img: "./images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
  },
  {
    img: "./images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
  },
  {
    img: "./images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
  }
];

const tabButtons = document.querySelectorAll(".tabs__btn");

const bookmarkImg = document.querySelector(".bookmark__image img");
const bookmarkTitle = document.querySelector(".bookmark__content h2");
const bookmarkText = document.querySelector(".bookmark__content p");

tabButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    bookmarkImg.src = tabsData[index].img;
    bookmarkTitle.textContent = tabsData[index].title;
    bookmarkText.textContent = tabsData[index].text;

    tabButtons.forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
  });
});
