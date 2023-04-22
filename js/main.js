/* Button mobile menu */

const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const mobileMenu = document.querySelector('.btn--mobile');

navBtn.onclick = function () {
    nav.classList.toggle('nav--mobile');
    mobileMenu.classList.toggle('btn--mobile-active');
    document.body.classList.toggle('no-scroll');
};