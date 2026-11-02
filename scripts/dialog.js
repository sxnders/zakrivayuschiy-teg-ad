const dialog = document.querySelector('.dialog');
const openButton = document.querySelector('[data-dialog-open]');

openButton.addEventListener('click', () => dialog.showModal());
