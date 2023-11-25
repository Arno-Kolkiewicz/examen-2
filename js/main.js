

var burger = document.querySelector('.nav-burger');
var menu = document.querySelector('.nav-line');
var main = document.querySelector('.main');
var footer = document.querySelector('.footer');

var clickburger = function clickburger() {
    menu.classList.toggle('menu-active')
    main.classList.toggle('main-close')
    footer.classList.toggle('footer-close')
};

burger.addEventListener('click',clickburger);


const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
	},
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
