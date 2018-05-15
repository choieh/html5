$(document).ready(function(){

	//모바일 버전 메뉴 버튼 클릭시
	$("header>.mobile>.btn").on("click",function(){
		
		$(".m_gnb").parent().addClass("on");
		
	});

});