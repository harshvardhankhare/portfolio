const navmenu=document.getElementById('nav-menu'),
navtoggle=document.getElementById('nav-toggle'),
navclose=document.getElementById('nav-close')



if(navtoggle){
navtoggle.addEventListener('click',()=>{
    navmenu.classList.add('show-menu')
})

}
if (navclose) {
    navclose.addEventListener('click', ()=>{
        navmenu.classList.remove('show-menu')
    })
}
const navlink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navmenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navmenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkAction))

 /*const skillsContent = document.getElementsByClassName('skills_content'),
skillsheader=document.querySelectorAll('.skills_header')
function toggleSkills (){
let itemClass = this.parentNode.ClassName
  for (i=0; i < skillsContent.length; i++){
    skillsContent[i].className='skills_content skills_close'
  }
  if(itemClass ==='skills_content skills_close'){
    this.parentNode.className = 'skills_content skills_open'
  }
}
skillsheader.forEach((el)=>{
el.addEventListener('click',toggleSkills) 
}
)*/

const modalViews=document.querySelectorAll('.services_modal'),
modalbtns= document.querySelectorAll('.services_button'),
modalCloses= document.querySelectorAll('.services_modal-close')

let modal= function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}
modalbtns.forEach((modalbtn,i)=>{
  modalbtn.addEventListener('click',()=>{
modal(i)
  })
})
modalCloses.forEach((modalClose)=>{
  modalClose.addEventListener('click',()=>{
modalViews.forEach((modalView)=>{
  modalView.classList.remove('active-modal')
})
  })
})

let  swiperPortfolio = new Swiper('.portfolio_container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
 
});

let  swipeTestimonial = new Swiper('.testimonial_container', {
  loop: true,
  grabCursor:true,
  spaceBetween:true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },
  breakpoints:{
     568:{
      slidesPerView:2,
     }
  }
 
});