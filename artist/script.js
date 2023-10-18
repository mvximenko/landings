const button = document.querySelector('.hamburger');
const rightNavSide = document.querySelector('.right');

button.addEventListener('click', () => {
  button.classList.toggle('animate');
  rightNavSide.classList.toggle('openDrawer');
});
