const burgerButton = document.querySelector('.burgermenu--js');
const mobileMenu = document.querySelector('.nav--js');

if(burgerButton && mobileMenu) burgerButton.addEventListener('click', () => {
    mobileMenu.classList.contains('nav--active') ? mobileMenu.classList.remove('nav--active') : mobileMenu.classList.add('nav--active');
});

if(mobileMenu) mobileMenu.addEventListener('click', () => {
    if(mobileMenu.classList.contains('nav--active')) mobileMenu.classList.remove('nav--active');
});