$(document).ready(function(){
	
	
	var top_container = [
		$(".container_0").offset().top,
		$(".container_1").offset().top,
		$(".container_2").offset().top,
		$(".container_3").offset().top,
		$(".container_4").offset().top	
	];
	
	
	//li에 대한 클릭 이벤트 구문
	var nowIdx = 0;

	$(".gnb>li>a").on("click",function(evt){
		nowIdx = $(".gnb>li>a").index(this);
		$("html,body").animate({scrollTop:top_container[nowIdx]-100});
		evt.preventDefault();
	});
	
	
	//문서가 load(된 시점)이벤트 구문
	$(window).on("load",function(){
		//$("html,body").animate({scrollTop:0});
		
	});
	
	
	//스크롤 이벤트 구문 - 주체는 항상 $(window)
	$(window).on("scroll",function(){
		
		if($(window).scrollTop()==0){
			$("header>nav").css("background","rgba(0,0,0,0.85)");
		}
		
		/*스크롤시 맨위로 올라가는 버튼 생성*/
		if($(window).scrollTop()>=100){	
			$("header>nav").css("background","rgba(0,0,0,0.55)");
			$(".up").stop().animate({"opacity":"1"},100);
		}else{
			$(".up").stop().animate({"opacity":"0"},100);
		}
		
		
		/*스트롤시 메뉴 선택*/
		for(var i=0;i<top_container.length;i++){
			if($(window).scrollTop()>=top_container[i]-100){
				$(".gnb>li>a").eq(i).parent().addClass("on").siblings().removeClass("on");
			}
		}
			
	});
	
	
	/*맨위로 올라가는 버튼*/
	$(".up").on("click",function(){
		
		$("html,body").stop().animate({scrollTop:0});
		
	});
	
	/*포트폴리오 - 이미지에 마우스 올렸을때 이미지 링크 버튼 보임*/
	$(".container_3>.boxs>.top>img").on("mouseover",function(){
		
		 var imgIdx = $(".container_3>.boxs>.top>img").index(this);
		
		 $(".container_3>.boxs>.top>span").eq(imgIdx).css("opacity",1);
		
	});
	
	$(".container_3>.boxs>.top>img").on("mouseout",function(){
		$(".container_3>.boxs>.top>span").css("opacity",0);
		
	});
	
	
	
});






















// /