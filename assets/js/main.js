// const navMenu = document.getElementById("nav-menu"),
//       navToggle = document.getElementById("nav-toggle"),
//       navClose = document.getElementById("nav-close")

// /*=============== SHOW MENU ===============*/
// /* validate if constant exists  */
// if(navToggle)
// {
//   navToggle.addEventListener('click', () => {
//     navMenu.classList.add("show-menu")
//   })
// }

// /*===== MENU HIDDEN =====*/
// /* validate if constant exists  */
// if(navClose)
// {
//   navClose.addEventListener('click', () => {
//     navMenu.classList.remove("show-menu")
//   })
// }

// const wapp = document.querySelector("#btn-whatsapp");

// wapp.addEventListener('click', () => {      
//     window.open("https://wa.me/934532270?text=Hola!!%20estoy%20interesado%20en%20tus%20servicios%20de%20desarrollo%20web", "_blank");
// });

// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// const sections = document.querySelectorAll("section[id]");
// window.addEventListener("scroll", navHighlighter);

// function navHighlighter()
// {  
//   let scrollY = window.pageYOffset;  
//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 58,
//     sectionId = current.getAttribute("id");
//     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
//     {
//       document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
//     }
//     else
//     {
//       document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
//     }
//   })
// }

// /*=============== REMOVE MENU MOBILE ===============*/
// const navLinks = document.querySelectorAll(".nav-link")

// function linkAction()
// {
//   const navMenu = document.getElementById("nav-menu")
//   // when we click on each nav link, we remove the show menu class
//   navMenu.classList.remove("show-menu")
// }
// navLinks.forEach(n => n.addEventListener('click', linkAction))

// /*=============== CHANGE BACKGROUND HEADER ===============*/
// function scrollHeader()
// {
//   const header = document.getElementById("header")
//   if(this.scrollY >= 80) {
//     header.classList.add("scroll-header");     
//   } else {
//     header.classList.remove("scroll-header")
//   }
// }
// window.addEventListener("scroll", scrollHeader)

// /*=============== SCROLL UP BUTTON ===============*/
// function scrollUp(){
//   const btnUp = document.getElementById("btn-up")
//   if(this.scrollY >= 500) {
//     btnUp.classList.add("scroll-btn")
//   } else {    
//     btnUp.classList.remove("scroll-btn")
//   }
// }

// window.addEventListener("scroll", scrollUp)

// const clicBtnUp = document.getElementById("btn-up")
// clicBtnUp.addEventListener('click', ()=>{
//   window.scrollTo(0,0)
// })

// /*=============== TESTIMONIAL SWIPER ===============*/
// var swiper = new Swiper(".testimonial-wrapper", {
//     spaceBetween: 30,
//     loop: 'true',

//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
  
//   /*===== THEME BACKGROUNDS =====*/
// const root = document.querySelector(":root");
// let lightColorLightness;
// let whiteColorLightness;
// let darkColorLightness;
// let contactInput;

// // change background color
// const changeBG = () => {
//   root.style.setProperty('--light-color-lightness', lightColorLightness);
//   root.style.setProperty('--white-color-lightness', whiteColorLightness);
//   root.style.setProperty('--dark-color-lightness', darkColorLightness);
//   root.style.setProperty('--contact-input', darkColorLightness);
  
// }
//   /**
//    * THEME BUTTON
//    */
  
//   function themeClass(){
//     const buttonSun = document.getElementById('theme-btn');
//     const iconSun = document.getElementById('icon-btn')
//     const iconTS = document.getElementById('ts-icon')
//     if(buttonSun.classList.contains('active-dark')){
//       buttonSun.classList.remove('active-dark');  
//       iconSun.className = "lni lni-sun"

//       darkColorLightness = '17%';
//       whiteColorLightness = '100%'
//       lightColorLightness = '92%'
//       changeBG();
//       iconTS.style.setProperty('fill', '#241E38')
//     } else {      
//       iconSun.className = "lni lni-night"        
//       buttonSun.classList.add('active-dark');

//       darkColorLightness = '95%';
//       whiteColorLightness = '10%';
//       lightColorLightness = '0%';
//       contactInput = '#fff'
//       changeBG();
//       iconTS.style.setProperty('fill', '#F0EEF6')
//     }
//   }

//   const btnSun = document.getElementById('theme-btn');
//   btnSun.addEventListener('click', themeClass);


//   /**
//    * Send message
//    */

//   const formHTML = document.querySelector('#form')
//   const buttonSend = document.querySelector('#mailto')

//   formHTML.addEventListener('submit', handleSubmit)

//   function handleSubmit(event){
//     event.preventDefault()
//     const form = new FormData(this) 
//     buttonSend.setAttribute('href', `mailto:martin99huacho@gmail.com?subject=${form.get('subject')}&body=${form.get('message')}`)
//     buttonSend.click()
//   }
const navMenu=document.getElementById("nav-menu"),navToggle=document.getElementById("nav-toggle"),navClose=document.getElementById("nav-close");navToggle&&navToggle.addEventListener("click",(()=>{navMenu.classList.add("show-menu")})),navClose&&navClose.addEventListener("click",(()=>{navMenu.classList.remove("show-menu")}));const wapp=document.querySelector("#btn-whatsapp");wapp.addEventListener("click",(()=>{window.open("https://wa.me/934532270?text=Hola!!%20estoy%20interesado%20en%20tus%20servicios%20de%20desarrollo%20web","_blank")}));const sections=document.querySelectorAll("section[id]");function navHighlighter(){let e=window.pageYOffset;sections.forEach((t=>{const n=t.offsetHeight,o=t.offsetTop-58,s=t.getAttribute("id");e>o&&e<=o+n?document.querySelector(".nav-menu a[href*="+s+"]").classList.add("active-link"):document.querySelector(".nav-menu a[href*="+s+"]").classList.remove("active-link")}))}window.addEventListener("scroll",navHighlighter);const navLinks=document.querySelectorAll(".nav-link");function linkAction(){document.getElementById("nav-menu").classList.remove("show-menu")}function scrollHeader(){const e=document.getElementById("header");this.scrollY>=80?e.classList.add("scroll-header"):e.classList.remove("scroll-header")}function scrollUp(){const e=document.getElementById("btn-up");this.scrollY>=500?e.classList.add("scroll-btn"):e.classList.remove("scroll-btn")}navLinks.forEach((e=>e.addEventListener("click",linkAction))),window.addEventListener("scroll",scrollHeader),window.addEventListener("scroll",scrollUp);const clicBtnUp=document.getElementById("btn-up");clicBtnUp.addEventListener("click",(()=>{window.scrollTo(0,0)}));var swiper=new Swiper(".testimonial-wrapper",{spaceBetween:30,loop:"true",pagination:{el:".swiper-pagination",clickable:!0}});const root=document.querySelector(":root");let lightColorLightness,whiteColorLightness,darkColorLightness,contactInput;const changeBG=()=>{root.style.setProperty("--light-color-lightness",lightColorLightness),root.style.setProperty("--white-color-lightness",whiteColorLightness),root.style.setProperty("--dark-color-lightness",darkColorLightness),root.style.setProperty("--contact-input",darkColorLightness)};function themeClass(){const e=document.getElementById("theme-btn"),t=document.getElementById("icon-btn"),n=document.getElementById("ts-icon");e.classList.contains("active-dark")?(e.classList.remove("active-dark"),t.className="lni lni-sun",darkColorLightness="17%",whiteColorLightness="100%",lightColorLightness="92%",changeBG(),n.style.setProperty("fill","#241E38")):(t.className="lni lni-night",e.classList.add("active-dark"),darkColorLightness="95%",whiteColorLightness="10%",lightColorLightness="0%",contactInput="#fff",changeBG(),n.style.setProperty("fill","#F0EEF6"))}const btnSun=document.getElementById("theme-btn");btnSun.addEventListener("click",themeClass);const formHTML=document.querySelector("#form"),buttonSend=document.querySelector("#mailto");function handleSubmit(e){e.preventDefault();const t=new FormData(this);buttonSend.setAttribute("href",`mailto:martin99huacho@gmail.com?subject=${t.get("subject")}&body=${t.get("message")}`),buttonSend.click()}formHTML.addEventListener("submit",handleSubmit);