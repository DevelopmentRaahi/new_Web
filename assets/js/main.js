
const track = document.querySelector('.slide-track-sl');
const slides = document.querySelectorAll('.slide-item-sl');
const prevBtn = document.querySelector('.prev-sl');
const nextBtn = document.querySelector('.next-sl');

let currentSlide = 0;

// function updateSlidePosition() {
//   const slideWidth = slides[0].offsetWidth;
//   track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
// }

// nextBtn && nextBtn.addEventListener('click', () => {
//   if (currentSlide < slides.length - 1) {
// 	currentSlide++;
// 	updateSlidePosition();
//   }
// });

// prevBtn && prevBtn.addEventListener('click', () => {
//   if (currentSlide > 0) {
// 	currentSlide--;
// 	updateSlidePosition();
//   }
// });

// window.addEventListener('resize', updateSlidePosition);


const toggleBtn = document.getElementById('menu-toggle');
const menu = document.querySelector('.header__menu');
const backdrop = document.querySelector('#backdrop');
const body = document.querySelector('body');

toggleBtn.addEventListener('click', () => {
  const isMobile = window.innerWidth <= 991; // or 768px as per your breakpoint

  menu.classList.toggle('active');
  backdrop.classList.toggle('active');

  if (isMobile && menu.classList.contains('active')) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 991) {
    document.body.classList.remove('no-scroll');
    menu.classList.remove('active');
    backdrop.classList.remove('active');
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector('.icons-track-m');
  const slides = document.querySelectorAll('.icon-slide-m');
  const prevBtn = document.querySelector('.icon-prev-btn-m');
  const nextBtn = document.querySelector('.icon-next-btn-m');

  if (!track || slides.length === 0 || !prevBtn || !nextBtn) return;

  let currentIndex = 0;
  function updateSlider() {
	const slideWidth = slides[0].offsetWidth + 15; // 15px gap
	track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % slides.length;
	updateSlider();
  });

  prevBtn.addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateSlider();
  });

  window.addEventListener('resize', updateSlider);
});



