$(document).ready(function() {
      // Scroll to the top when '.back_to_top' is clicked
    $('.back_to_top').click(function(){   //for back to top
         // Scroll to the top of the page with animation over 500 milliseconds
        $('html, body').animate({scrollTop: 0}, 500)//for back to top
    })//for back to top	


    $(window).on('load', function(){       // window load function-if web on/load hoi fuction will work
      $('.preloader').fadeOut(1000)   // page load hole preloader out
  })

})
    
 //common JS--------------------------------------------------
 
 var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
   spaceBetween: 24,
   loop: true,

   autoplay: {
    delay: 2500,
    disableOnInteraction: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

});
