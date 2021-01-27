$(document).ready(function () {

    // setting dynamic css variabels
    getDynamicDimensions();

    //adding class to body if scrolled from pagetop
    addClassToBodyIfScrolled();
    $(window).scroll(function () {
        addClassToBodyIfScrolled();
    })

    $(".hamburger").click(function () {
        $(this).toggleClass("change").siblings(".navbar-collapse").parents("body").toggleClass("navbarOpen");
    })

    //adding class to inout field if it has value
    ifInputHasValueToggleActive();


    //sliders
    $(".destinations .slider").slick({
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1800,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $(".testimonials .slider").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2800,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // setting background image via attribute
    $("[data-image-src]").each(function () {
        var imgUrl = $(this).attr("data-image-src");
        $(this).css("background-image", "url(" + imgUrl + ")");
    });

});


/* custom functions*/

function getDynamicDimensions() {
    //getting values
    var containerOffset = $(".container").offset().left;
    var navbarHeight = $(".siteHeader .navbar").innerHeight();

    //setting values
    $("body").css({
        "--containerOffset": containerOffset + 'px',
        "--navbarHeight": navbarHeight + 'px'
    });

    //change values on resize
    $(window).resize(function () {
        getDynamicDimensions();
    });
}


function ifInputHasValueToggleActive() {

    $("form input,form textarea").focusout(function () {
        console.log($(this).val().length)
        if ($(this).val().length != 0) {
            $(this).parent().addClass("active");
        } else {
            $(this).parent().removeClass("active");
        }
    })
}

function addClassToBodyIfScrolled() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 10) {
        $("body").addClass("scrolled");
    } else {
        $("body").removeClass("scrolled");
    }
}