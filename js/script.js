

//-----------------------------------------------------------------------------------------------------------------------------------------

// Menu burger on JavaScript
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
if (headerBurger) {
    headerBurger.addEventListener("click", function(e) {
      document.body.classList.toggle('lock') // Prohibit scroll if menu is open*
      headerBurger.classList.toggle('active');
      headerMenu.classList.toggle('active');
    });
}
// * In css for body.lock need write 'overflow: hidden'

// ------------------------------------------------------------------------------------------------------------------

// Select

const selectSingle = document.querySelector('.header__select');
const selectSingle_title = selectSingle.querySelector('.header__select-title');
const selectSingle_labels = selectSingle.querySelectorAll('.header__select-label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}