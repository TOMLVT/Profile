// menu show hidden 
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


    //show menu 
    if (navToggle) {
        navToggle.addEventListener('click',()=> {
            navMenu.classList.add('show-menu') 
        })
    }

    //menu hidden 
    if (navClose) {
            navClose.addEventListener('click',() => {
                navMenu.classList.remove('show-menu')
            })
    }
    //remove menu mobile 
    const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



//accordion skills
const skillsContent = document.getElementsByClassName('skills__content'),
skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills () {
    let itemClass = this.parentNode.className

    for (i=0; i < skillsContent.length;i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click',toggleSkills)
})

//services modal 
const modalViews = document.querySelectorAll ('.services__modal'),
modalBtns = document.querySelectorAll ('.services__button'),
modalClose = document.querySelectorAll ('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i) => {
    modalBtn.addEventListener('click',() => {
        modal(i)
    })
})

modalClose.forEach((modalClose) => {
modalClose.addEventListener('click',() => {
    modalViews.forEach((modalView) => {
        modalView.classList.remove('active-modal')
    })
})
})

//portfolio swipper
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop:true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  });

  //testimonial
  let swiperTestimonial = new Swiper('.testimonial__container', {
    loop:true,
    grabCursor:true,
    spaceBetween:48,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
    breakpoint: {
        568: {
            slidesPerView: 2,
        }
    }
  });

 //scroll sectons active link
 
 const sections = document.querySelectorAll('section[id]')
 function scrollActive () {
    const crollY = window.pageYOffset

    Selection.forEach(current => {
         const sectionheight = current.offsetHeight
         const sectionTop = current.offsetTop - 50;
         sectionId = current.getAttribute('id')

         if (scrollY > sectionTop && scrollY <= sectionTop + sectionheight) {
            Document.querySelector ('.nav__menu a[href*=` + sectionId + `]').classList.add('active-link')
         } else {
            document.querySelector('.nav__menu a[href*=` + sectionId + `]').classList.remove('active-link')
         }
    })
 }
window.addEventListener('scroll',scrollActive)


// change background header
function scrollHeader() {
      const nav = document.getElementById('header')
      if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
} 
window.addEventListener('scroll',scrollHeader)
//show scroll up
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
} 
window.addEventListener('scroll',scrollUp)



//dark light
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration:2500,
    delay : 400,
})

sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`)
sr.reveal(`.home__subtitle` , {delay:500})
sr.reveal(`.home__elec`, {delay:600})
sr.reveal(`.home__img`, {delay:800})
sr.reveal(`.home__car-data` , {delay:900 , interval:100, origin:'bottom'})
sr.reveal(`.home__button` , {delay:1000 , origin:'bottom'})
sr.reveal(`.home__data, .home__social,.about__img`, {origin:'left'})
sr.reveal(`.about__data, .offer__img`, {origin:'right'})
sr.reveal(`.features__map`, {delay:600, origin:'bottom'})
sr.reveal(`.project__one, .project__two, .skills__header, .skills__data, .services__content, .project__bg, .contact__container`, {interval:300})
sr.reveal(`.featured__card, .logos__content, .footer__content`, {interval:100})