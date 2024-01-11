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
    
    // CommonJS	

// wow JS
new WOW().init(); 
