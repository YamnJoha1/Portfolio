let ele = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    ele.style.width = `${(scrollTop / height) * 100}%`;
});


let menu= document.querySelector("#menu-btn");
let navbar= document.querySelector(".header .navbar");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};



let section = document.querySelector(".information");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function (){
    if (window.scrollY >= section.offsetTop - 100){
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
}

const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle-btn .toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle-btn .toggle .bx-moon");

toggle.addEventListener("change", () => {
    body.classList.toggle("light");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

});

var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});