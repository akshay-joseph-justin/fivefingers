// script.js
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});
document.getElementById('year').textContent = new Date().getFullYear();


window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.member-text');
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if(boxTop < triggerBottom){
      el.classList.add('visible');
    }
  });
});
