$(document).ready(function () {

    // setting dynamic css variabels
    getDynamicDimensions();


    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        
        //adding class to body if scrolled from pagetop
        if(scrollTop > 5){
            $("body").addClass("scrolled");
        }else{
            $("body").removeClass("scrolled");
        }
    })

    //sliders
    $(".destinations .slider").slick({
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1800,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2
              }
            }
          ]
      });
                  
});


/* custom functions*/

function getDynamicDimensions() {
    //getting values
    var containerOffset = $(".container").offset().left;
    var navbarHeight = $(".siteHeader .navbar").height();

    //setting values
    $("body").css({
        "--containerOffset": containerOffset,
        "--navbarHeight": navbarHeight
    });

    //change values on resize
    $(window).resize(function () {
        getDynamicDimensions();
    });
}


