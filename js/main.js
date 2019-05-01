$(function(){
	/* navigation */
	$(".nav > ul > li").hover(
		function(){
			$(this).parent().addClass("over");
		},
		function(){
			$(this).parent().removeClass("over");
		}
	);
	$(".nav > ul > li").focusin(function(){
		$(this).addClass("over");
		$(this).parent().addClass("over");
	});
	$(".nav > ul > li").focusout(function(){
		$(this).removeClass("over");
		$(this).parent().removeClass("over");
	});

	
	var w;
	var total=4;
	var amount=0;

	$(window).resize(function(){
		w=$(window).width();

		if(w > 1200){
			distance=w;
		}
		else{
			distance=1200;
		}
		$(".hero .gallery").css({width:distance*total});
	});
	$(window).trigger("resize");

	$(".direction_nav .left").click(function(e){ 
		e.preventDefault();
		amount-=distance;
		$(".gallery").css({left:amount});
		$(".gallery").prepend($(".gallery li").last());

		amount+=distance;
		$(".gallery").animate({left:amount}, 500);
	});
	$(".direction_nav .right").click(function(e){ 
		e.preventDefault();
		amount-=distance;
		$(".gallery").animate({left:amount}, 500, function(){
			amount+=distance;
			$(this).css({left : amount});
			$(this).append($(".gallery li").first());
		});
	});
});