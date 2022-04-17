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
// Testimonials carousel slider swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  }
  // mousewheel: true,
  // keyboard: true
})

// ScrollrevealJS - Monstrar elementos

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
  //reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card, 
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
   `,
  { interval: 100 }
)

/* Back to top button */
/* mudar header da pagina*/

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  if (this.window.scrollY >= navHeight) {
    // maior que altura do header
    header.classList.add('scroll')
  } else {
    // menor que altura do header
    header.classList.remove('scroll')
  }
}

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top') //Peguei o botão
  if (window.scrollY >= 560) {
    // se o scroll for >= que 560px
    backToTopButton.classList.add('show') // então agrego a classLiss (show) ao lado do .back-to-top
  } else {
    // se não for
    backToTopButton.classList.remove('show') // removo a classList (show) da class .back-to-top
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
