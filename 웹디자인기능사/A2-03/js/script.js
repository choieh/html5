$(document).ready(function(){
	
	var nowIdx =0; //보여지는 슬라이드에 해당하는 인덱스 번호

	//1-메인메뉴

		//메인메뉴에 마우스 커서를 올렸을 때
	$(".gnb>li").on("mouseover",function(){
		$(this).children(".submenu").stop().slideDown();
	});

		//메인메뉴에 마우스 커서가 벗어났을 때
	$(".gnb>li").on("mouseout",function(){
		$(this).children(".submenu").stop().slideUp();
	});

	//2-슬라이드 배너(애니메이트 스타일)
	setInterval(function(){

		//다음번 슬라이드의 인덱스번호를 정함
		if(nowIdx==2){
			nowIdx=0;
		}else{
			nowIdx=nowIdx+1;
		}
		
		//컨테이너의 left좌표값을 지정
		$(".slides-container").stop().animate({"left":-1200*nowIdx});
	
	},2000); //2초마다 함수를 실행

	
	//3-팝업창
	$(".clse").on("click",function(){
		$(".popup").hide();
	}); //팝업창의 닫기 버튼을 클릭하면 팝업 숨김

	
});