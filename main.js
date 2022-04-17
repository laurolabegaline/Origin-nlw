// DOM Document Object Model
/* Abre e fecha o menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar header da pagina*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (this.window.scrollY >= navHeight) {
    // maior que altura do header
    header.classList.add('scroll')
  } else {
    // menor que altura do header
    header.classList.remove('scroll')
  }
})

/* Testimonials carousel slider swiper   */

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* ScrollrevealJS - Monstrar elementos   */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  '#home .image, #home .text,  #about .image, #about .text,  #services header, #services .card,  #testimonials header, #testimonials .testimonials,  #contact .text, #contact .links',
  { interval: 100 }
)

/* Back to top button */

const backToTopButton = document.querySelector('.back-to-top')
