// nav animation handler
const toggleAnimation = (e) => {
  const header = document.querySelector('header');
  const extendedMenu = document.querySelector('.extended-menu');

  if (!header.classList.contains('active')) {
    header.classList.add('active');
    extendedMenu.classList.toggle('active');
  } else {
    header.classList.remove('active');
    extendedMenu.classList.toggle('active');
  }
};

const navHandler = () => {
  const navHamburger = document.querySelector('.hamburger');
  const navlinks = document.querySelectorAll('.nav-links a');

  navHamburger.addEventListener('click', toggleAnimation);
  navlinks.forEach((link) => {
    link.addEventListener('click', toggleAnimation);
  });
};

navHandler();
