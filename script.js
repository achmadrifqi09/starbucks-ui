const toggleMenu = document.querySelector('.navbar .toggle-menu');
const nav = document.querySelector('.navbar .navbar-nav');
const bd = document.querySelector('body');
const toggleCart = document.querySelector('.toggle-cart');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close input')


toggleMenu.addEventListener('click', function () {
    nav.classList.toggle('slide');
    bd.classList.toggle('over-body');
    modal.classList.remove('slide');
});

toggleCart.addEventListener('click', function () {
    modal.classList.toggle('slide');
    bd.classList.toggle('over-body');
    nav.classList.remove('slide');
});

closeBtn.addEventListener('click', function () {
    modal.classList.remove('slide');
});