const navBar = document.querySelector('.navigation-bar');

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    navBar.classList.add('scrolled');
  } else {
    navBar.classList.remove('scrolled');
  }
});