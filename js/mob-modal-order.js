(() => {
  const refs = {
    openModalBtn: document.querySelector('.order-btn'),
    closeModalBtn: document.querySelector('.modal-order__close-btn'),
    modal: document.querySelector('.backdrop'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('no-shown');
    refs.body.classList.toggle('no-scroll');
  }
})();
