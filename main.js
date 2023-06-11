const body = document.querySelector(".body");
const nav = document.querySelector(".header-nav");
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header-ttl");
const main = document.querySelector("main");
const footer = document.querySelector(".footer");
const nav1 = document.querySelector(".nav1");
const nav2 = document.querySelector(".nav2");
const nav3 = document.querySelector(".nav3");
const nav4 = document.querySelector(".nav4");


hamburger.addEventListener("click", () => {
    body.classList.toggle("is-active");
    nav.classList.toggle("is-active");
    hamburger.classList.toggle("is-active");
    header.classList.toggle("is-active");
    main.classList.toggle("is-active");
    footer.classList.toggle("is-active");
})
hamburger.addEventListener("touchstart", () => {
    body.classList.toggle("is-active");
    nav.classList.toggle("is-active");
    hamburger.classList.toggle("is-active");
    header.classList.toggle("is-active");
    main.classList.toggle("is-active");
    footer.classList.toggle("is-active");
})



nav1.addEventListener("click", () => {
    body.classList.toggle("is-active");
    nav.classList.toggle("is-active");
    hamburger.classList.toggle("is-active");
    header.classList.toggle("is-active");
    main.classList.toggle("is-active");
    footer.classList.toggle("is-active");
})
nav2.addEventListener("click", () => {
    body.classList.toggle("is-active");
    nav.classList.toggle("is-active");
    hamburger.classList.toggle("is-active");
    header.classList.toggle("is-active");
    main.classList.toggle("is-active");
    footer.classList.toggle("is-active");
})
nav3.addEventListener("click", () => {
    body.classList.toggle("is-active");
    nav.classList.toggle("is-active");
    hamburger.classList.toggle("is-active");
    header.classList.toggle("is-active");
    main.classList.toggle("is-active");
    footer.classList.toggle("is-active");
})
nav4.addEventListener("click", () => {
    body.classList.toggle("is-active");
    nav.classList.toggle("is-active");
    hamburger.classList.toggle("is-active");
    header.classList.toggle("is-active");
    main.classList.toggle("is-active");
    footer.classList.toggle("is-active");
})
