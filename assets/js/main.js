// const navMenu = document.getElementById("nav-menu"),
//     navToggle = document.getElementById("nav-toggle"),
//     navClose = document.getElementById("nav-close")

// /*=============== SHOW MENU ===============*/
// /* validate if constant exists  */
// if (navToggle) {
//     navToggle.addEventListener('click', () => {
//         navMenu.classList.add("show-menu")
//     })
// }

// /*===== MENU HIDDEN =====*/
// /* validate if constant exists  */
// if (navClose) {
//     navClose.addEventListener('click', () => {
//         navMenu.classList.remove("show-menu")
//     })
// }

// const wapp = document.querySelector("#btn-whatsapp");

// wapp.addEventListener('click', () => {
//     window.open("https://wa.me/934532270?text=Hola!!%20estoy%20interesado%20en%20tus%20servicios%20de%20desarrollo%20web", "_blank");
// });

// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// const sections = document.querySelectorAll("section[id]");
// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {
//     let scrollY = window.pageYOffset;
//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop - 58,
//             sectionId = current.getAttribute("id");
//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
//         }
//         else {
//             document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
//         }
//     })
// }

// /*=============== REMOVE MENU MOBILE ===============*/
// const navLinks = document.querySelectorAll(".nav-link")

// function linkAction() {
//     const navMenu = document.getElementById("nav-menu")
//     // when we click on each nav link, we remove the show menu class
//     navMenu.classList.remove("show-menu")
// }
// navLinks.forEach(n => n.addEventListener('click', linkAction))

// /*=============== CHANGE BACKGROUND HEADER ===============*/
// function scrollHeader() {
//     const header = document.getElementById("header")
//     if (this.scrollY >= 80) {
//         header.classList.add("scroll-header");
//     } else {
//         header.classList.remove("scroll-header")
//     }
// }
// window.addEventListener("scroll", scrollHeader)

// /*=============== SCROLL UP BUTTON ===============*/
// function scrollUp() {
//     const btnUp = document.getElementById("btn-up")
//     if (this.scrollY >= 500) {
//         btnUp.classList.add("scroll-btn")
//     } else {
//         btnUp.classList.remove("scroll-btn")
//     }
// }

// window.addEventListener("scroll", scrollUp)

// const clicBtnUp = document.getElementById("btn-up")
// clicBtnUp.addEventListener('click', () => {
//     window.scrollTo(0, 0)
// })

// /*=============== TESTIMONIAL SWIPER ===============*/
// var swiper = new Swiper(".testimonial-wrapper", {
//     spaceBetween: 30,
//     loop: 'true',

//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });

// /*===== THEME BACKGROUNDS =====*/
// const root = document.querySelector(":root");
// let lightColorLightness;
// let whiteColorLightness;
// let darkColorLightness;
// let contactInput;

// // change background color
// const changeBG = () => {
//     root.style.setProperty('--light-color-lightness', lightColorLightness);
//     root.style.setProperty('--white-color-lightness', whiteColorLightness);
//     root.style.setProperty('--dark-color-lightness', darkColorLightness);
//     root.style.setProperty('--contact-input', darkColorLightness);

// }
// /**
//  * THEME BUTTON
//  */

// function themeClass() {
//     const buttonSun = document.getElementById('theme-btn');
//     const iconSun = document.getElementById('icon-btn')
//     const iconTS = document.getElementById('ts-icon')
//     if (buttonSun.classList.contains('active-dark')) {
//         buttonSun.classList.remove('active-dark');
//         iconSun.className = "lni lni-sun"

//         darkColorLightness = '17%';
//         whiteColorLightness = '100%'
//         lightColorLightness = '92%'
//         changeBG();
//         iconTS.style.setProperty('fill', '#241E38')
//     } else {
//         iconSun.className = "lni lni-night"
//         buttonSun.classList.add('active-dark');

//         darkColorLightness = '95%';
//         whiteColorLightness = '10%';
//         lightColorLightness = '0%';
//         contactInput = '#fff'
//         changeBG();
//         iconTS.style.setProperty('fill', '#F0EEF6')
//     }
// }

// const btnSun = document.getElementById('theme-btn');
// btnSun.addEventListener('click', themeClass);

// /**
//  * Scroll reveal
//  */

// window.scroll = ScrollReveal();

// const arrayRevealBottom = [
//     document.querySelector('#header'),
//     document.querySelector('#home'),
//     document.querySelector('#about'),
//     document.querySelector('#services'),
//     document.querySelector('#experience'),
//     document.querySelector('#contact'),
//     document.querySelector('#technologies'),
// ]

// const arrayRevealTop = [
//     document.querySelector('#about'),
//     document.querySelector('#services'),
//     document.querySelector('#experience'),
//     document.querySelector('#contact'),
//     document.querySelector('#technologies'),
//     document.querySelector('#tech-icons'),
// ]

// scroll.reveal(arrayRevealBottom, { duration: 2000, origin: 'bottom', distance: '-80px' })
// scroll.reveal(arrayRevealTop, { duration: 2000, origin: 'top', distance: '-100px' })

// /**
//  * Register action
//  */

// const form = document.getElementById('form')
// const { email, subject, message } = form
// const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


// form.addEventListener('submit', async (e) => {
//     e.preventDefault()
//     const firstCondition = email.value.length === 0 || subject.value.length === 0 || message.value.length === 0
//     try {
//         if (firstCondition) throw new Error('Alguno de los campos está incompleto 😢')
//         if (!regex.test(email.value)) throw new Error('El correo ingresado es inválido 😠📧')
//         const postMessage = await fetch("https://sheet.best/api/sheets/e9dda29b-5b22-4a0c-bfe7-ffb7f5402673", {
//             method: "POST",
//             mode: "cors",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ "email": email.value, "affair": subject.value, "message": message.value }),
//         })
//         const { ok: postVerify } = postMessage
//         if (postVerify) {
//             alert('El formulario fue enviado correctamente 😁')
//             email.value = ""
//             subject.value = ""
//             message.value = ""
//         } else { throw new Error('Sucedió un error al tratar de enviar el formulario 😭') }
//     } catch (error) {
//         alert(error.message)
//     }
// })

const navMenu = document.getElementById("nav-menu"), navToggle = document.getElementById("nav-toggle"), navClose = document.getElementById("nav-close"); navToggle && navToggle.addEventListener("click", () => { navMenu.classList.add("show-menu") }), navClose && navClose.addEventListener("click", () => { navMenu.classList.remove("show-menu") }); const wapp = document.querySelector("#btn-whatsapp"); wapp.addEventListener("click", () => { window.open("https://wa.me/934532270?text=Hola!!%20estoy%20interesado%20en%20tus%20servicios%20de%20desarrollo%20web", "_blank") }); const sections = document.querySelectorAll("section[id]"); function navHighlighter() { let e = window.pageYOffset; sections.forEach(t => { let o = t.offsetHeight, l = t.offsetTop - 58, s = t.getAttribute("id"); e > l && e <= l + o ? document.querySelector(".nav-menu a[href*=" + s + "]").classList.add("active-link") : document.querySelector(".nav-menu a[href*=" + s + "]").classList.remove("active-link") }) } window.addEventListener("scroll", navHighlighter); const navLinks = document.querySelectorAll(".nav-link"); function linkAction() { let e = document.getElementById("nav-menu"); e.classList.remove("show-menu") } function scrollHeader() { let e = document.getElementById("header"); this.scrollY >= 80 ? e.classList.add("scroll-header") : e.classList.remove("scroll-header") } function scrollUp() { let e = document.getElementById("btn-up"); this.scrollY >= 500 ? e.classList.add("scroll-btn") : e.classList.remove("scroll-btn") } navLinks.forEach(e => e.addEventListener("click", linkAction)), window.addEventListener("scroll", scrollHeader), window.addEventListener("scroll", scrollUp); const clicBtnUp = document.getElementById("btn-up"); clicBtnUp.addEventListener("click", () => { window.scrollTo(0, 0) }); var swiper = new Swiper(".testimonial-wrapper", { spaceBetween: 30, loop: "true", pagination: { el: ".swiper-pagination", clickable: !0 } }); const root = document.querySelector(":root"); let lightColorLightness, whiteColorLightness, darkColorLightness, contactInput; const changeBG = () => { root.style.setProperty("--light-color-lightness", lightColorLightness), root.style.setProperty("--white-color-lightness", whiteColorLightness), root.style.setProperty("--dark-color-lightness", darkColorLightness), root.style.setProperty("--contact-input", darkColorLightness) }; function themeClass() { let e = document.getElementById("theme-btn"), t = document.getElementById("icon-btn"), o = document.getElementById("ts-icon"); e.classList.contains("active-dark") ? (e.classList.remove("active-dark"), t.className = "lni lni-sun", darkColorLightness = "17%", whiteColorLightness = "100%", lightColorLightness = "92%", changeBG(), o.style.setProperty("fill", "#241E38")) : (t.className = "lni lni-night", e.classList.add("active-dark"), darkColorLightness = "95%", whiteColorLightness = "10%", lightColorLightness = "0%", contactInput = "#fff", changeBG(), o.style.setProperty("fill", "#F0EEF6")) } const btnSun = document.getElementById("theme-btn"); btnSun.addEventListener("click", themeClass), window.scroll = ScrollReveal(); const arrayRevealBottom = [document.querySelector("#header"), document.querySelector("#home"), document.querySelector("#about"), document.querySelector("#services"), document.querySelector("#experience"), document.querySelector("#contact"), document.querySelector("#technologies"),], arrayRevealTop = [document.querySelector("#about"), document.querySelector("#services"), document.querySelector("#experience"), document.querySelector("#contact"), document.querySelector("#technologies"), document.querySelector("#tech-icons"),]; scroll.reveal(arrayRevealBottom, { duration: 2e3, origin: "bottom", distance: "-80px" }), scroll.reveal(arrayRevealTop, { duration: 2e3, origin: "top", distance: "-100px" }); const form = document.getElementById("form"), { email: e, subject: t, message: o } = form, regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; form.addEventListener("submit", async l => { l.preventDefault(); let s = 0 === e.value.length || 0 === t.value.length || 0 === o.value.length; try { if (s) throw Error("Alguno de los campos est\xe1 incompleto \uD83D\uDE22"); if (!regex.test(e.value)) throw Error("El correo ingresado es inv\xe1lido \uD83D\uDE20\uD83D\uDCE7"); let n = await fetch("https://sheet.best/api/sheets/e9dda29b-5b22-4a0c-bfe7-ffb7f5402673", { method: "POST", mode: "cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: e.value, affair: t.value, message: o.value }) }), { ok: r } = n; if (r) alert("El formulario fue enviado correctamente \uD83D\uDE01"), e.value = "", t.value = "", o.value = ""; else throw Error("Sucedi\xf3 un error al tratar de enviar el formulario \uD83D\uDE2D") } catch (a) { alert(a.message) } });