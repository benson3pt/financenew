    $(document).ready(function(){
		
		//resize會reload
    	$(window).resize(function(){
    		location.reload();
    	});
	
		//主選單
		$("#myTabContent > .tab-pane").eq(0).show();
		$("#myTab li").click(function(){
        $(this).addClass('mytabactive').siblings().removeClass('mytabactive');
		var li_index = $(this).index();
		$("#myTabContent > .tab-pane").eq(li_index).siblings().hide();
		$("#myTabContent > .tab-pane").eq(li_index).fadeIn();
		
		//device >1025 &&<1280 畫面移動
		if ($('nav').width() >= 1025 && $('nav').width() <= 1280){
             $('html, body').animate({scrollTop:620}, 300);
			} else if($('nav').width() >= 1280){
			 $('html, body').animate({scrollTop:650}, 300);
			 }
             });
     
		
		//device 320-768 控制登入區
		if ($('nav').width() >= 320 && $('nav').width() <= 768){
			$(".navbar-black .login_btn").click(function(){
			if($(".main_bg").is(":visible")){
				$(".main_bg").stop().slideUp();
				$("section.option").css("padding-top",82);
     		}else{
				$(".main_bg").stop().slideDown();
				$("section.option").css("padding-top",0);
     			$('html, body').animate({scrollTop:0}, 300);
			}
			});

			} 
		
		
     	//device >1025 &&<1280 選單控制
			if ($('nav').width() >= 1025 && $('nav').width() <= 1280){
            $(window).scroll(function() {		
				if($(window).scrollTop() >= 625){
					$("section.option #myTab li").stop().animate({"padding-top":25+"px",
                       "padding-bottom":25+"px" }, 500)
					$("section.option >.container-fluid").css({
                       "top":82+"px",
                       "zIndex":"999999999",
                       "position":"fixed",
                     });
				}else{
					$("section.option #myTab li").stop().animate({"padding-top":45+"px",
                       "padding-bottom":45+"px" }, 500)
	
					$("section.option >.container-fluid").css({
                       "top":0+"px",
                       "zIndex":"0",
                       "position":"relative",
                     });
					}  
			});		
			} 	
     	//device > 1280 選單控制

           if ($('nav').width() >=  1280){
            $(window).scroll(function() {		
				if($(window).scrollTop() >= 625){
					$("section.option >.container-fluid").css({
                       "top":82+"px",
                       "zIndex":"999999999",
                       "position":"fixed",
                     });
					$("section.option #myTab li").stop().animate({"padding-top":35+"px",
                       "padding-bottom":35+"px" }, 300)
				}else{
					$("section.option >.container-fluid").css({
                       "top":0+"px",
                       "zIndex":"0",
                       "position":"relative",
                     });
					$("section.option #myTab li").stop().animate({"padding-top":45+"px",
                       "padding-bottom":45+"px" }, 300)
					}  
			});		
			} 	
		
 		 //均分內頁LI 寬度
		var page_option_w = $("section.page_option .container ul").width();
		var page_optionli_w  = page_option_w / $("section.page_option .container ul li").length;
		var fitpage_optionli_w = page_optionli_w -1
		$("section.page_option .container ul li").css("width",fitpage_optionli_w);
        
		$("section.page_option ul li").bind("click",function(){
	        $(this).addClass('active').siblings().removeClass('active');
		});
	
	
	});   