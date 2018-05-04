$(document).ready(function(){

	var top_container = [
	$(".container_0").offset().top,
	$(".container_1").offset().top,
	$(".container_2").offset().top,
	$(".container_3").offset().top,
	$(".container_4").offset().top,
	$(".container_5").offset().top
	
	];
	
	//페이지 새로고침 시
	$(window).on("load",function(){
		$("html,body").stop().animate({"scrollTop":0});
		$(".gnb>li>a").eq(0).parent().addClass("on");
	});
	
	$()
	
	var nowIdx = 0;
	
	//클릭시 페이지 이동
	$(".gnb>li>a").on("click",function(evt){
		nowIdx = $(".gnb>li>a").index(this);
		$("html,body").stop().animate({"scrollTop":top_container[nowIdx]-50});
		evt.preventDefault();
	});
		
	$(window).on("scroll",function(){
		
		//nav고정
		if($(window).scrollTop()>top_container[1]-50){
			$("nav").addClass("n-fixed");
			$(".container_1").css("margin-top","50px");
		}else{
			$("nav").removeClass("n-fixed");
			$(".container_1").css("margin-top","0px");
		}
		
		
		for(var i=0;i<top_container.length;i++){
			if($(window).scrollTop()>=top_container[i]-50){
				$(".gnb>li>a").eq(i).parent().addClass("on")
				.siblings().removeClass("on");
			}
		}
		
	});
	
});
































// /