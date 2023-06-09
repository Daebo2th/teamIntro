var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const contentEl = document.querySelector('.content')
const asideEl = contentEl.querySelector('.aside-menu')
const showEl = contentEl.querySelector('.show')

asideEl.addEventListener('click',function (e){
    gsap.to(showEl,.2,{
        backgroundImage: `url(${e.target.src})`,
        backgroundSize: "550px",
        backgroundRepeat: "no-repeat",
    })
})