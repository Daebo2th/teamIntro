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


asideEl.addEventListener('click',function (e){
    var clicked = e.target.dataset.big;
    const clickedEl = document.querySelector(clicked)
    $('.show').find('.introduce').removeClass('selected')
    clickedEl.classList.add('selected')
})