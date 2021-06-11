const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");
const menucloseButton = document.querySelector(".menu-close");

menuButton.addEventListener("click", () => {
menu.classList.add("is-active");
menucloseButton.classList.add("is-active");
});
menucloseButton.addEventListener("click", () => {
menu.classList.remove("is-active");
menucloseButton.classList.remove("is-active");
});