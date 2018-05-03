$(document).ready(function(){
	
	
	//console.log( $("header>nav").height() );
	
	var $article = $("article");
	var nowIdx = 0;
	var onFlag = false; // true : 이동중 , false : 멈춤
	
	// ★article 높이 설정 및 가세정렬!
	//article의 높이 값을 브라운저의 높이값으로 적용
	$article.height($(window).height());
	
	//★세로중앙 정렬
	$article.css("line-height",$(window).height()+"px");
	
	
	//★브라우저 새로고침되었을때 화면 
	$(window).on("load",function(){
		
		$(".gnb>li>a").eq(nowIdx).parent().addClass("on");
		$("html,body").stop().animate({"scrollTop":0});
		
	});
	
	//★.gnb>li>a 를 클릭했을시 scroll 이벤트
	$(".gnb>li>a").eq(0).on("click",function(evt){
		
		$(".gnb>li>a").eq(0).parent().addClass("on").siblings().removeClass("on");
		$("html,body").stop().animate({"scrollTop":$(".cont0").offset().top});
		
		evt.preventDefault();
		
	});
	

	
	$(".gnb>li>a").eq(1).on("click",function(evt){
		
		$(".gnb>li>a").eq(1).parent().addClass("on").siblings().removeClass("on");
		$("html,body").stop().animate({"scrollTop":$(".cont1").offset().top});
		
		evt.preventDefault();
		
	});
	
	$(".gnb>li>a").eq(2).on("click",function(evt){
		
		$(".gnb>li>a").eq(2).parent().addClass("on").siblings().removeClass("on");
		$("html,body").stop().animate({"scrollTop":$(".cont2").offset().top});
		
		evt.preventDefault();
		
	});
	
	$(".gnb>li>a").eq(3).on("click",function(evt){
		
		$(".gnb>li>a").eq(3).parent().addClass("on").siblings().removeClass("on");
		$("html,body").stop().animate({"scrollTop":$(".cont3").offset().top});
		
		evt.preventDefault();
		
	});
	
	$(".gnb>li>a").eq(4).on("click",function(evt){
		
		$(".gnb>li>a").eq(4).parent().addClass("on").siblings().removeClass("on");
		$("html,body").stop().animate({"scrollTop":$(".cont4").offset().top});
		
		evt.preventDefault();
		
	});
	
	
	//★마우스 휠를 이용한 스크롤 이동에 대한 이벤트
	$(window).on("mousewheel DOMMouseScroll",function(evt){
		
		if(onFlag==false){	
			if(evt.originalEvent.wheelDelta>0 || evt.originalEvent.detail<0){
				
				if(nowIdx>0){
					nowIdx = nowIdx-1; // 위쪽으로 (== 앞페이지로)
					
				}
				
			}else{
				if(nowIdx<4){
					nowIdx = nowIdx+1; // 아래쪽으로 (== 뒷페이지로)
				}
			}	
			
			//선택된 메뉴 활성화 표시
			$(".gnb>li>a").eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
			
			onFlag = true; //현재 이동중
			
			//해당 article 영역으로 문서를 animate()
			$("html,body").stop().animate({"scrollTop":$article.eq(nowIdx).offset().top},function(){
				onFlag = false;
			});
	
		}	
		
	});
	
	
});

























// /