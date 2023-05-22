let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const btnPopup = document.querySelector('.btn-popup');
const wrapper = document.querySelector('.wrapper');
const btnClose = document.querySelector('.icon-close');
const btnSubmit = document.querySelector('.btn-sub');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    menu.classList.remove('active');
};
btnPopup.addEventListener('click', function() {
    wrapper.style.display = 'block';
  });

  btnClose.addEventListener('click', function() {
    wrapper.style.display = 'none';
  });

  btnSubmit.addEventListener('click', function() {
    wrapper.style.display = 'none';
  });