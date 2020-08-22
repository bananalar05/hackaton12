function Modal (element) {
  this.element = element;
  this.buttonClose = this.element.querySelector('js_modal_close');
  this.buttonAccept = this.element.querySelector('js_modal_accept');

  this.buttonClose.onclick = () => {
    this.close();
  };

  this.buttonAccept.onclick = () => {
    this.close();
  };
}

Modal.prototype.open = function () {
  this.element.classList.add('is-modal-open');
};

Modal.prototype.close = function () {
  this.element.classList.remove('is-modal-open');
};

export default Modal;