"use strict";
jQuery(document).ready(function($) {

    //for Preloader

    /*   $(window).load(function () {
            $("#loading").fadeOut(500);
        });
    */

    $("#loading").fadeOut(500);

    //for Preloader


    //查看報價頁的標題
    var long = $(".newslide .carousel-inner .container .row .col-md-4 .port_item h4");
    long.each(function(e) {
        var str = $(this).text();
        var strlengh = str.length;

        if (strlengh > 9) { //如果標題字數超過9個字
            $(this).addClass("longWord")
        } else {
            $(this).removeClass("longWord")

        }
    });





    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-menu').find('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 56)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });



    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();

    // magnificPopup

    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.video-link').magnificPopup({
        type: 'iframe'
    });



    // slick slider active Home Page Tow
    //    $(".hello_slid").slick({
    //        dots: true,
    //        infinite: false,
    //        slidesToShow: 1,
    //        slidesToScroll: 1,
    //        arrows: true,
    //        prevArrow: "<i class='icon icon-chevron-left nextprevleft'></i>",
    //        nextArrow: "<i class='icon icon-chevron-right nextprevright'></i>",
    //        autoplay: true,
    //        autoplaySpeed: 2000
    //    });




    //---------------------------------------------
    // Scroll Up 
    //---------------------------------------------

    $(window).scroll(function() {
        var scrollVal = $(this).scrollTop();
        if (scrollVal > 550) {
            $("#go_top").stop().fadeIn();
        } else {
            $("#go_top").stop().fadeOut();
        }
    });
    $('#go_top').bind('click', function(event) {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });






    //Team Skillbar active js

    jQuery('.teamskillbar').each(function() {
        jQuery(this).find('.teamskillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });





    //End

});