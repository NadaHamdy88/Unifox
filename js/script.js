$(document).ready(function(){
        // Show Navbar when Click on icon
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });

    // when scroll body .. sticky navbar
    $(window).scroll(function(){
        var sc= $(this).scrollTop();
        if (sc > 50){ //show sticky navbar
            $('header').addClass('sticky');
        }
        else{
            $('header').removeClass('sticky');
        }

        if (sc > 1881) {
            $('.time').countTo(); //Run Count To Plugin
            $(window).off('scroll');
        }

        if (sc > 500) {  //fade the scroll to btn
            $('.scrollTop').show();
        }
        else {
            $('.scrollTop').hide();
        }
    });

    //portfolio Buttons change bg
    $('.buttons button').click(function(){
        $(this).addClass('active_btn').siblings().removeClass('active_btn')
    });
    $('.images').mixItUp();

    //owl carousel >> team section
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

// choose panel
$('.c-panel li').click(function(){
    $(this).addClass('active_btn').siblings().removeClass('active_btn');
    
    var panel = $(this).data('role');
    $('.content > div').hide();
    $('.content').contents().filter('#' + panel).fadeIn();

});
  

//popup video in choose section
$('.pop').magnificPopup({
    type: 'iframe'
});

// slick slider on pleasure section
$('.slick').slick({
    nextArrow: false,
    prevArrow: false,
    autoplay: true,
    autoplaySpeed: 1000,
    
});

//scroll to top
$('.scrollTop').click(function(){
    $('body,html').animate({
        scrollTop: 0
    },500);
});

// smooth scroll
$('.list a').click(function(){
    $('body,html').animate({
        scrollTop : $($(this).attr('href')).offset().top - 80
    });
});

});

