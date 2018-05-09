$(document).ready(function(){
	
	//4-SNS
	$(".sns>li.facebook").on("mouseover",function(){
		console.log("마우스 오버 이벤트 발생");
		$(this).stop().css({"background-image":"url(images/facebook.png)"},500);
	});

});