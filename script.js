const relationshipStarted = new Date(2025, 8, 20);
const today = new Date();
const daysTogether = Math.max(0, Math.floor((today - relationshipStarted) / 86_400_000));

document.querySelector('#day-count').textContent = `${daysTogether} days`;

document.querySelectorAll('img').forEach((image, index) => {
  image.decoding = 'async';
  if (index > 1) image.loading = 'lazy';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal-on-scroll').forEach((element) => observer.observe(element));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  glow.style.transform = `translate(${event.clientX - 80}px, ${event.clientY - 80}px)`;
}, { passive: true });
