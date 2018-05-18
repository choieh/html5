$(document).ready(function(){
	
	var nowIdx = 0; //현재 슬라이드의 인덱스 : 0~4
	
	var $indicator = $("#slides>.slides-pagination>li>a");
	
	var interval_id; // setInterval()을 중지시킬때 사용
	
	
	//1단계 - 인디케이터에 대한 클릭이벤트 구문
	$indicator.on("click",function(evt){
		
		//4)2초마다 자동으로 실행되는 setInterval()을 중지시킬때
		clearInterval(interval_id);
		
		//1)이번에 클릭한 요소의 인덱스값을 추출
		nowIdx = $indicator.index(this);
		
		//2)해당 인디케이터 활성화 .on클래스 추가
		$indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
		
		//3)인덱스값에 매칭되는 슬라이드 위치로 이동
		$("#slides>.slides-container").stop().animate({"left":-100*nowIdx+"%"});
		
		//5)자동실행 설정
		interval_id = setInterval(function(){
		
		//다음버튼 클릭
		$("#slides>.slides-next").trigger("click"); //해당요소에 클릭이벤트 강제발생
		
	}, 2000);
		
		evt.preventDefault();
	});
	
	
	//2단계 - 이전, 다음 버튼에 대한 클릭이벤트 구문
	
		//이전 버튼
	$("#slides>.slides-prev").on("click",function(evt){
		
		//4)2초마다 자동으로 실행되는 setInterval()을 중지시킬때
		clearInterval(interval_id);
		
		//1)이전 슬라이드에 해당하는 인덱스값을 추출
		if(nowIdx ==0){
			nowIdx = 4;
		}else{
			nowIdx= nowIdx-1;
		}
		
		//2)해당 인디케이터 활성화 .on클래스 추가
		$indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
		
		//3)인덱스값에 매칭되는 슬라이드 위치로 이동
		$("#slides>.slides-container").stop().animate({"left":-100*nowIdx+"%"});
		
		//5)자동실행 설정
		interval_id = setInterval(function(){
		
		//다음버튼 클릭
		$("#slides>.slides-next").trigger("click"); //해당요소에 클릭이벤트 강제발생
		
	}, 2000);
		
		
		evt.preventDefualt();
	});
	
		//다음버튼
	$("#slides>.slides-next").on("click",function(evt){
		
		//4)2초마다 자동으로 실행되는 setInterval()을 중지시킬때
		clearInterval(interval_id);
		
		
		//1)다음 슬라이드에 해당하는 인덱스값을 추출
		if(nowIdx ==4){
			nowIdx = 0;
		}else{
			nowIdx= nowIdx+1;
		}
		
		//2)해당 인디케이터 활성화 .on클래스 추가
		$indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
		
		//3)인덱스값에 매칭되는 슬라이드 위치로 이동
		$("#slides>.slides-container").stop().animate({"left":-100*nowIdx+"%"});
		
		
		//5)자동실행 설정
		interval_id = setInterval(function(){
		
		//다음버튼 클릭
		$("#slides>.slides-next").trigger("click"); //해당요소에 클릭이벤트 강제발생
		
	}, 2000);
		
		evt.preventDefault();
	});
	
	
	//3단계 - 자동 실행
	interval_id = setInterval(function(){
		
		//다음버튼 클릭
		$("#slides>.slides-next").trigger("click"); //해당요소에 클릭이벤트 강제발생
		
	}, 2000);
	
	
	
	
});























// /