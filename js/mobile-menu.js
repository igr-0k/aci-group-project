(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-btn'),
    closeMenuBtn: document.querySelector('.close-btn'),
    menu: document.querySelector('.mob-menu-wrap'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
