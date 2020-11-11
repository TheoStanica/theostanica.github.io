gsap.registerPlugin(ScrollTrigger);

// parallax animations for moon and moonlight
var scene = document.getElementById('moonlight');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('moon');
var parallaxInstance = new Parallax(scene);
// ----------------------------------------------------

// nav animation handler
const toggleAnimation = (e) => {
  const header = document.querySelector('header');

  if (!header.classList.contains('active')) {
    header.classList.add('active');
    // e.target.classList.add('active');
    gsap.to('.line1', 0.3, { rotate: 45, y: 5.5 });
    gsap.to('.line2', 0.3, { rotate: -45, y: -5.5 });
    gsap.to('.extended-menu', 0.5, { y: '100vh', ease: 'power2.out' });
  } else {
    header.classList.remove('active');
    // e.target.classList.remove('active');
    gsap.to('.line1', 0.3, { rotate: 0, y: 0 });
    gsap.to('.line2', 0.3, { rotate: 0, y: 0 });
    gsap.to('.extended-menu', 0.5, {
      y: 0,
      ease: 'power1.out',
      clearProps: 'all',
    });
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

// -----------------------------------------------------

// const slides = document.querySelectorAll('.section-slide');
const slides = gsap.utils.toArray('.section-slide');

const goToSection = (section, anim) => {
  const image = section.querySelector('.image-slide');
  // console.log(image);

  const tl = gsap.timeline({
    ease: 'power2.out',
  });

  gsap.set('html', { overflow: 'hidden' });

  tl.to(window, {
    scrollTo: { y: section, autokill: false },
    duration: 0.8,
    overwrite: true,
    onComplete: () => gsap.set('html', { overflow: 'auto' }),
  });

  if (image) {
    // slides animation

    const cover = image.querySelector('.image-cover');
    const coverfiller = image.querySelector('.image-cover-filler');
    const number = image.querySelector('.page-num p');
    const left = section.querySelector('.hero-left');
    const title = section.querySelector('.hero-left .hero-title');
    const lines = section.querySelector('.hero-left .hero-lines');
    const subtitle = section.querySelector('.hero-left .hero-subtitle');
    const titleBg = section.querySelector('.hero-title-bg');

    tl.fromTo(image, 0.7, { scale: 0.9, x: 20 }, { scale: 1, x: 0 }, '-=0.5');

    tl.fromTo(
      cover,
      1,
      { width: '97%' },
      { width: '0', ease: 'power4.out' },
      '-=0.5'
    );
    tl.fromTo(coverfiller, 0.7, { width: '0%' }, { width: '100%' }, '-=1.25');
    tl.fromTo(number, 0.35, { y: '100%' }, { y: '0%' }, '-=0.35');
    tl.fromTo(subtitle, 1.6, { x: -700 }, { x: 0 }, '-=2');
    tl.fromTo(lines, 1.1, { x: -700 }, { x: 0 }, '-=1.5');
    tl.fromTo(title, 1, { x: -700 }, { x: 0 }, '-=1.3');
    tl.fromTo(titleBg, 1, { x: -700 }, { x: 0 }, '-=1.3');
    // tl.set('html', { overflow: 'auto' });
  } else {
    // moon animation
    var scene = document.getElementById('moon');
    var parallaxInstance = new Parallax(scene);
    const title = section.querySelector('.hero-left .hero-title');
    const lines = section.querySelector('.hero-left .hero-lines');
    const subtitle = section.querySelector('.hero-left .hero-subtitle');
    const cloud5 = section.querySelector('.cloud5');
    const cloud4 = section.querySelector('.cloud4');
    const cloud3 = section.querySelector('.cloud3');
    const cloud2 = section.querySelector('.cloud2');
    const cloud1 = section.querySelector('.cloud1');
    const moon = section.querySelector('.moon-image');
    const portfolioTitle = section.querySelector('.portfolio-title');

    tl.fromTo(subtitle, 1.6, { x: -700 }, { x: 0 }, '-=1.5');
    tl.fromTo(lines, 1.1, { x: -700 }, { x: 0 }, '-=1');
    tl.fromTo(title, 1, { x: -700 }, { x: 0 }, '-=0.8');
    tl.fromTo(
      cloud4,
      0.5,
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1 },
      '-=0.7'
    );
    tl.fromTo(
      cloud5,
      0.5,
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1 },
      '-=0.7'
    );

    tl.fromTo(moon, 0.5, { x: 300, opacity: 0 }, { x: 0, opacity: 1 }, '-=0.6');
    tl.fromTo(
      portfolioTitle,
      0.5,
      { x: 300, opacity: 0 },
      { x: '-30%', opacity: 1 },
      '-=0.6'
    );
    tl.fromTo(
      cloud3,
      0.5,
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1 },
      '-=0.5'
    );
    tl.fromTo(
      cloud2,
      0.5,
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1 },
      '-=0.5'
    );
    tl.fromTo(
      cloud1,
      0.5,
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1 },
      '-=0.5'
    );
    // tl.set('html', { overflow: 'auto' });
  }
};

slides.forEach((slide) => {
  ScrollTrigger.create({
    trigger: slide,
    onEnter: () => {
      goToSection(slide);

      console.log('on enter');
    },
    onEnterBack: () => {
      goToSection(slide);
      console.log('on back');
    },

    // markers: true,
  });
});
