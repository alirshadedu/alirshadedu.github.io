// Auto-update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav when a link is clicked
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact form — placeholder handling (no backend yet)
// This is where you'll later connect Formspree, EmailJS, or your own backend.
const form = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();

  if (!name) {
    formNote.textContent = 'Please enter your name.';
    formNote.style.color = '#b8863a';
    return;
  }

  // TODO: Replace this with a real form service (Formspree/EmailJS)
  // or connect to your own backend endpoint.
  formNote.textContent = `JazakAllah khair, ${name}! We'll reach out within 24 hours to schedule your trial class.`;
  formNote.style.color = '#1F4B43';
  form.reset();
});
