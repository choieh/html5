$(document).ready(function(){
	/*
	썸네일을 클릭했을 때
	썸네일에 매칭되는 큰 이미지명으로 
	.screen>img의 src 속성값이 변경
	*/
	
	$("header>nav>ul>li").on('click',function(){
		//console.log("이미지 클릭");
		//이번에 클릭한 녀석( $(this) ) 의 index값?
		//$(this).index();
		/*
		li를 클릭했을 때 몇번째 것인지 알 수만 있다면... 좋겠다
		 (css에서 nth-child를 제외한 숫자는 0부터 시작)
		
		==>index+1
		*/
		//"images/big"+($(this).index()+1)+"jpg"
		
		$(".screen>img").attr('src',"images/big"+($(this).index()+1)+".jpg");
		
	});
	

});
	


