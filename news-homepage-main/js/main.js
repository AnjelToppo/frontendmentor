const menuBtnEl = document.querySelector('.menu-btn');
const closeNavBtnEl = document.querySelector('.close-nav');
const navModalEl = document.querySelector('.nav-dialog');

menuBtnEl.addEventListener('click', (e) => {
    navModalEl.showModal();
});

closeNavBtnEl.addEventListener('click', (e) => {
    navModalEl.close();
})