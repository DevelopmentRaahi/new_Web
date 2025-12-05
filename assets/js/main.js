
const track = document.querySelector('.slide-track-sl');
const slides = document.querySelectorAll('.slide-item-sl');
const prevBtn = document.querySelector('.prev-sl');
const nextBtn = document.querySelector('.next-sl');
const navList = document.getElementById("navmenu");
const nav_menu = document.querySelector(".navmenu ul");

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

const menuLinks = navList.querySelectorAll('ul li a');
const current = window.location.pathname;

menuLinks && menuLinks.forEach((item) => {
  if (item.href.includes(current)) {
      item.classList.add("nav-active");
    }
})  


toggleBtn && toggleBtn.addEventListener('click', () => {
  const isMobile = window.innerWidth <= 991; // or 768px as per your breakpoint

  menu.classList.toggle('active');
  backdrop.classList.toggle('active');

  if (isMobile && menu.classList.contains('active')) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
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


// Back to Top Button Logic
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// back to top button
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Stop AOS animation on tablet and phone
window.addEventListener("resize", () => {
  if (window.innerWidth <= 991) {
    AOS.refreshHard();
  }
});

var viewJob = document.getElementById('jobDetails');
var viewJobDetails = document.querySelector('.job-details');
viewJob && viewJob.addEventListener('click', () => {
  viewJobDetails.classList.toggle('show');  
})



  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // window.addEventListener('scroll', function() {
  //   var navbar = document.getElementById('navbg');
  //   if (window.scrollY > 50) {
  //     // navbar.classList.add('bg-change_now');
  //     navbar.style.backgroundColor = "#fff";
  //   }
  // });

  /*=============== SHOW MENU ===============*/

  /**

*/

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    nav_menu.classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

const subscribe = document.querySelector('.footer-input input');
const subscribeBtn = document.querySelector('.footer-input button');

subscribeBtn && subscribeBtn.addEventListener('click', () => {
  let email = subscribe.value.trim();

  if (!email) {
    return alert('Please enter your email');
  } 

  // regex check
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!regex.test(email)) {
    return alert('Please enter a valid email');
  }

  alert('Subscribed successfully ✅');
});
