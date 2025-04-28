document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.header__navbar');
    const popup = document.getElementById('popup');
    const popupClose = document.getElementById('popupClose');

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        nav.classList.toggle('active');

        popup.classList.toggle('active');
    });

    popupClose.addEventListener('click', () => {
        popup.classList.remove('active');
        burger.classList.remove('open');
        nav.classList.remove('active');
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.remove('active');
            burger.classList.remove('open');
            nav.classList.remove('active');
        }
    });
});