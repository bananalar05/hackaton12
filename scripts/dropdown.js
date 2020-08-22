'use strict'
function Dropdown(element) {
  this.element = element;
  this.button = this.element.querySelector('button');

  this.button.onclick = () => {
    this.element.classList.toggle('is-active')
  }
}

  export default Dropdown