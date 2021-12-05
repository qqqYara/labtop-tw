jQuery(document).ready(function($) {
    console.log( 'Документ и все ресурсы загружены' );

    new WOW().init();
    
    // $("a").click(function () {
    //     elementClick = $(this).attr("href");
    //     destination = $(elementClick).offset().top;
    //     $("body,html").animate({ scrollTop: destination - 50}, 1000);
    // });

    // // menu toggle
    // $(function(){
    //     $('.toggle-menu').on('click', function() {
    //         $(".menu-wrapper").toggleClass("active")
    //         $(".toggle-menu").toggleClass("active")
    //     })
    // })

    // const casesSwiper = document.getElementsByClassName('swiper__help-list');
    // if (casesSwiper){
    //     let mySwiper = new Swiper('#swiper__help-list', {
    //         // Optional parameters
    //         direction: 'horizontal',
    //         slidesPerView: 1,
    //         loop: true,
    //         spaceBetween: 15,
    //         navigation: {
    //             nextEl: '#help-list-next',
    //             prevEl: '#help-list-prev',
    //         },
    //         breakpoints: {
    //             0:{
    //                 slidesPerView: 1,
    //                 spaceBetween: 15,
    //             },
    //             576:{
    //                 slidesPerView: 2,
    //             },
    //             768:{
    //                 slidesPerView: 3,
    //             }
    //         }
    //     })
    // }

    // const aboutSwiper = document.getElementsByClassName('swiper__video-reviews');
    // if (aboutSwiper){
    //     let mySwiper = new Swiper('#swiper__video-reviews', {
    //         // Optional parameters
    //         direction: 'horizontal',
    //         loop: true,
    //         slidesPerView: 1,
    //         spaceBetween: 250,
    //         speed: 1500,
    //         navigation: {
    //             nextEl: '#video-reviews-next',
    //             prevEl: '#video-reviews-prev',
    //         },
    //         autoplay: {
    //             delay: 3000,
    //         },
    //     })
    // }
    
});