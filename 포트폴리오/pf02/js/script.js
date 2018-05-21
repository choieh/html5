$(document).ready(function(){
	
	var nowIdx = 0;
	var check = true;

	//모바일 버전 메뉴버튼 클릭시
	$("header>.mobile>.btn").on("click",function(){
		
		$(".mobile>nav").addClass("on").toggle()
		;
		
		if(check == true){
			
			$("header>.mobile>.btn>.fa-bars").hide();
			$("header>.mobile>.btn>.fa-times").css({
				"display":"block"
			});
			
			
			check = false;
			
		}else{
			$("header>.mobile>.btn>.fa-bars").show();
			$("header>.mobile>.btn>.fa-times").css("display","none");
			
			check = true;
		}
		
	});
	
	
	//맨위로 올라가는 버튼
	$("header>.mobile>.top").on("click",function(){
		
		$("html,body").stop().animate({"scrollTop":0},500);
		
	});
	
	
	//상세메뉴 버튼 클릭시 메뉴창 사라짐
	$("header>.mobile>nav>.m_gnb>li").on("click",function(){
		
		$("header>.mobile>nav").removeClass("on");
		$("header>.mobile>nav").hide();
		
		
		if(check == true){
			
			$("header>.mobile>.btn>.fa-bars").hide();
			$("header>.mobile>.btn>.fa-times").css("display","block");	
			
			check = false;
			
		}else{
			$("header>.mobile>.btn>.fa-bars").show();
			$("header>.mobile>.btn>.fa-times").css("display","none");
			
			check = true;
		}
		
		
	});
	
	//#box2 - 슬라이드
	
	setInterval(function(){
		
		if(nowIdx ==2){
			nowIdx = 0;
		}else{
			nowIdx= nowIdx+1;
		}
		
		$("#box2>.slides-container>.slide").stop().animate({"left":-100*nowIdx+"%"});
		
	},2000);
	

});





















