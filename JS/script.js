// fix current year
document.querySelector('.year').textContent = new Date().getFullYear();

// Mobile Navigation
document
  .querySelector('.btn-mobile-nav')
  .addEventListener('click', function () {
    document.querySelector('.header').classList.toggle('nav-open');
  });
// Smooth Scrolling
document.querySelectorAll('a:link').forEach(function (a) {
  a.addEventListener('click', function (e) {
    e.preventDefault();
    const href = a.getAttribute('href');
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
    if (a.classList.contains('main-nav-link')) {
      document.querySelector('.header').classList.remove('nav-open');
    }
  });
});
const headerObs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add('sticky');
    if (ent.isIntersecting) document.body.classList.remove('sticky');
  },
  { root: null, rootMargin: '-80px', threshold: 0 }
);
headerObs.observe(document.querySelector('.section-hero'));
// nice revel
const revelSection = function (entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    console.log(entry.target);
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revelSection, {
  root: null,
  threshold: 0.15,
});

document.querySelectorAll('.section--show').forEach(function (section) {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});
