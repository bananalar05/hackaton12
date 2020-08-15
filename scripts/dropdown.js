'use strict'
function Dropdown(element) {
  this.element = element;
  this.button = this.element.querySelector('button');

  const allElements = document.querySelectorAll('.dropdown')
  this.button.onclick = () => {
    allElements.forEach((element) => {
      element.classList.remove('is-active')
    })
    this.element.classList.toggle('is-active')
  }
}

  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach((dropdown) => {
    new Dropdown(dropdown)
  })