$(document).ready(function(){
	
	//1.애니메이트 슬라이드 배너
	/*
	var nowIdx = 0; //슬라이드에 해당하는 인덱스 번호 0,1,2

	setInterval(function(){
		
		//1)다음번 슬라이드의 인덱스 번호를 정함
		if(nowIdx == 2){
			nowIdx = 0;
		}else{
			nowIdx++;
		}
		
		$("section>.slides_container").stop().animate({
			"left":nowIdx*-1200
		});


	},2000); //일정시간 마다 익명함수를 실행시킨다.

	*/

	
	//1-1 페이드인 아웃 슬라이드 
	var nowIdx = 0; //보여지는 슬라이드에 대한 인덱스번호 0,1,2

	setInterval(function(){
		
		//1)현재 보여지는 슬라이드가 서서히 사라진다.
		$(".slides_container>li").eq(nowIdx).fadeOut();

		//2)다음번 보여질 슬라이드의 인덱스 번호를 정한다.
		if(nowIdx == 2){
			nowIdx = 0;
		}else{
			nowIdx++;
		}


		//3)다음번 인덱스에 해당하는 슬라이드가 나타난다.
		$(".slides_container>li").eq(nowIdx).fadeIn();
		
	},2000);


	/*
	//2. 서브메뉴 구현
	$("header>nav>.mainmanu>li").mouseover(function(){
		$(this).children(".submenu").stop().slideDown();
	}); //메인메뉴에 마우스 커서를 올렸을 때

	$("header>nav>.mainmanu>li").mouseout(function(){
		$(this).children(".submenu").stop().slideUp();
	}); //메인메뉴에 마우스 커서가 벗어났을 때

	*/

	//2-1 클릭이벤트를 적용한 메인/서브메뉴 기능 구현
	$(".mainmanu>li").click(function(){

		//메인메뉴중 하나를 클릭 시 해당 서브메뉴르 펼치고
		$(this).children(".submenu").stop().slideDown();

		//해당 메인메뉴에 li에 .on클래스를 추가하고, 나머지 메뉴들에게서는 .on클래스를 제거한다.
		$(this).addClass("on").siblings().removeClass("on");

		//이번에 클릭한 메인메뉴가 아닌 나머지 메뉴들의 서브메뉴를 사라지게 한다.
		$(this).siblings().children(".submenu").stop().slideUp();
	});

	$(".submenu>li").click(function(){
		//.submenu를 사라지게한다.
		$(this).parent().slideUp();
		$(this).parent().parent().removeClass("on");
		return false;//조상으로의 클릭이벤트 전달을 막아준다.
	}); //서브메뉴 클릭시 기존에 펼쳐진 서브메뉴를 사라지게 한다.




	//3. 팝업배너를 클릭해을 때 파업창 띄우기
	/*
	$("article>.banner>a").click(function(){
		$(".popup").show();
	});
	*/

	$("article>.popup>p>button").click(function(){
		$(".popup").hide();
	});//닫기 버튼 클릭했을때 팝업 사라짐

});







