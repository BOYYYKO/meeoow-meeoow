document.addEventListener("DOMContentLoaded", function () {
    const swiper2 = new Swiper('.swiper-2', {
        loop: true,
        speed: 500,
        slidesPerView:1,
        slidesPerGroup: 1,
        
    
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    
        autoplay: {
            delay: 3000,
        },
    
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2.5,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });
    
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        speed: 800,
        effect: 'slider',
        spaceBetween: 20,
    
        navigation: {
            nextEl: '.showcaseSlider-next',
            prevEl: '.showcaseSlider-prev',
        },
    
        autoplay: {
            delay: 3000,
        },
    
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2.55,
            },
            1920: {
                slidesPerView: 4,
            }
        },
    });
})