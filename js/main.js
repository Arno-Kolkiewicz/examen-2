

var burger = document.querySelector('.nav-burger');
var menu = document.querySelector('.nav-line');

var clickburger = function clickburger() {
    menu.classList.toggle('menu-active')
};

burger.addEventListener('click',clickburger);


const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
	},
    navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
    },
});