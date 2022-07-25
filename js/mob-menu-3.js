(() => {
  const refs = {
    closeMenuBtn: document.querySelector('.him-bnt'),
    menu: document.querySelector('.mob-menu-wrap'),
  };

  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
