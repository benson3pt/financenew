"use strict";
jQuery(document).ready(function ($) {

//for Preloader

/*   $(window).load(function () {
        $("#loading").fadeOut(500);
    });
*/

     $("#loading").fadeOut(500);

	//for Preloader

	
/*登入首頁 橘色字*/


 $(".optional_ul li").eq(0).click(function(){
window.open("choice_best_index.shtml","_parent");	
	});
 $(".optional_ul li").eq(1).click(function(){
window.open("choice_best_index_1.shtml","_parent");	
	});
	
	
    /*---------------------------------------------*
     * objectkind.shtml
     ---------------------------------------------*/
	
	//$("#stockitem > .panel-default:eq(0) > .panel-heading").css("background","rgba(1,1,1,0.90)");
	  $("#stockitem .panel-default a").click(function(){
		  var $icon = $(this).children().children("i");
		  var $iconname = $icon.attr('class').split(' ')[1];
		  if($iconname === "fa-chevron-circle-down"){
			 $icon.removeClass("fa-chevron-circle-down").addClass("fa-chevron-circle-up");
			// $(this).parent($("#stockitem .panel-heading")).css("background","rgba(1,1,1,0.90)");
			 }else{
			 $icon.removeClass("fa-chevron-circle-up").addClass("fa-chevron-circle-down")
    		// $(this).parent($("#stockitem .panel-heading")).css("background","rgba(1,1,1,0.25)");
			 }
	  });
	
	
	/*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/



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

	$(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
	if(scrollVal>550){
		$("#go_top").stop().fadeIn();
	}else{
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

    jQuery('.teamskillbar').each(function () {
        jQuery(this).find('.teamskillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });





    //End

});



