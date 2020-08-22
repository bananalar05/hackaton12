import Dropdown from './dropdown.js';

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => {
  console.log(dropdown);
  new Dropdown(dropdown)
})


import accordion from './accordion.js';

const accordions = document.querySelectorAll('.collapse');
accordions.forEach((collapse) => {
  console.log(collapse);
  new accordion (collapse)
})


import Modal from './modal.js';

const button = document.querySelector('.js_open_modal');
const modal = new Modal(document.querySelector('js_modal'));
button.onclick = function () {
  modal.open();
}














/*
modals.forEach((modal) => {
  console.log(modal);
  new Modal(modal)
})*/
