// Small JS: smooth scroll and mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  // year in footer
  const year = new Date().getFullYear();
  document.getElementById('year').textContent = year;

  // smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav if open
        document.getElementById('nav').classList.remove('open');
      }
    });
  });

  // mobile nav toggle
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // accessible: close nav on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') nav.classList.remove('open');
  });
});
