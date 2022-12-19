$(document).ready(function() { card.classList.add(cls.active);});

const card = document.querySelector('.card');
const open = card.querySelector('.card__illustration');
const content = card.querySelector('.card__content');
const illustration = card.querySelector('.card__illustration')
const cls = {
  active: 'is-active',
  closing: 'is-closing'
};
  
open.addEventListener('click', () => {
  card.classList.add(cls.active);
});


content.addEventListener('animationend', () => {
  card.classList.remove(cls.closing)
});

illustration.addEventListener('mousemove', function(e) {
  const r = this.getBoundingClientRect()

  this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
  this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2))) 
});

illustration.addEventListener('mouseout', function() {
  this.style.setProperty('--x', 0)
  this.style.setProperty('--y', 0)
});