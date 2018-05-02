$(document).ready(function(){
	
	/*
		각 section요소의 top값(문서/브라우저/body 로 부터의 거리)을 구할 때 사용하는 jQuery 메소드 :  ?.offset().top
	*/
	
	var top_container_0 = $(".container_0").offset().top;
	var top_container_1 = $(".container_1").offset().top;
	var top_container_2 = $(".container_2").offset().top;
	var top_container_3 = $(".container_3").offset().top;
	var top_container_4 = $(".container_4").offset().top;
	var top_container_5 = $(".container_5").offset().top;
	
	/*console.log(top_container_0,top_container_1,top_container_2,top_container_3,top_container_4,top_container_5);*/
	
	
	//0번째 메뉴 - li에 대한 클릭 이벤트 구문
	$(".gnb>li>a").eq(0).on("click",function(evt){
		//문서 전체를 선택 : $("html,body")
		$("html,body").animate({scrollTop:top_container_0-50});
		evt.preventDefault();//앵커태그의 기본기능 무력화
		
				
	});
	
	$(".gnb>li>a").eq(1).on("click",function(evt){
		$("html,body").animate({scrollTop:top_container_1-50});
		evt.preventDefault();
	});
	
	$(".gnb>li>a").eq(2).on("click",function(evt){
		$("html,body").animate({scrollTop:top_container_2-50});
		evt.preventDefault();
	});
	
	$(".gnb>li>a").eq(3).on("click",function(evt){
		$("html,body").animate({scrollTop:top_container_3-50});
		evt.preventDefault();
	});
	
	$(".gnb>li>a").eq(4).on("click",function(evt){
		$("html,body").animate({scrollTop:top_container_4-50});
		evt.preventDefault();
	});
	
	$(".gnb>li>a").eq(5).on("click",function(evt){
		$("html,body").animate({scrollTop:top_container_5-50});
		evt.preventDefault();
	});
	
	//문서가 load(된 시점)이벤트 구문
	$(window).on("load",function(){
		$("html,body").animate({scrollTop:0});
		$(".gnb>li>a").eq(0).parent().addClass("on"); /*첫번째 메뉴 활성화*/
		
	});
	
	
	//스크롤 이벤트 구문 - 주체는 항상 $(window)
	$(window).on("scroll",function(){
		
		/*
			만약 $(window).scrillTop() 값이 700보다 크다면
				$(nav)에게 .n-fixed 클래스를 추가 하고,
				$("top_container_1")에게 margin-top:50px
			
			그렇지 않으면 $(nav)에게 .n-fixed 클래스를 제거한다.
				$("top_container_1")에게 margin-top:0
		
		*/
		
		
		if($(window).scrollTop()>top_container_1-50){
			$("nav").addClass("n-fixed");
			$(".container_1").css("margin-top","50px");
		}else{
			$("nav").removeClass("n-fixed");
			$(".container_1").css("margin-top","0px");
		}
		
		if($(window).scrollTop()>=top_container_0){
			$(".gnb>li>a").eq(0).parent().addClass("on").siblings().removeClass("on");
		}
		
		if($(window).scrollTop()>=top_container_1-50){
			$(".gnb>li>a").eq(1).parent().addClass("on").siblings().removeClass("on");
		}
		
		if($(window).scrollTop()>=top_container_2-50){
			$(".gnb>li>a").eq(2).parent().addClass("on").siblings().removeClass("on");
		}
		
		if($(window).scrollTop()>=top_container_3-50){
			$(".gnb>li>a").eq(3).parent().addClass("on").siblings().removeClass("on");
		}
		
		if($(window).scrollTop()>=top_container_4-50){
			$(".gnb>li>a").eq(4).parent().addClass("on").siblings().removeClass("on");
		}
		
		if($(window).scrollTop()>=top_container_5-50){
			$(".gnb>li>a").eq(5).parent().addClass("on").siblings().removeClass("on");
		}
		
		
	});
	
});






















// /