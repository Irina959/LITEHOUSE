
let header__burger = document.querySelector('.header__burger');
let burger__menu = document.querySelector('.nav');
let menu__link = document.querySelector('.nav__link')
let back = document.querySelector('body');


header__burger.onclick = function() {
    header__burger.classList.toggle('active');
    burger__menu.classList.toggle('active');
    back.classList.toggle('lock');
}
menu__link.onclick = function() {
    header__burger.classList.remove('active');
    burger__menu.classList.remove('active');
}
