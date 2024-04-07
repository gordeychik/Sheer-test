const burger = document.querySelector('.header__burger');
const navbar = document.querySelector('.header__navbar');

burger.addEventListener('click', () => {
    navbar.classList.toggle('header__navbar--active');
    burger.classList.toggle('header__burger--active');
})
