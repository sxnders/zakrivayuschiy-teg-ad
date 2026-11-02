const dialog = document.querySelector('.dialog');
const openButton = document.querySelector('[data-dialog-open]');
const closeButton = dialog.querySelector('[data-dialog-close]');

openButton.addEventListener('click', () => dialog.showModal());

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  dialog.close();
});
