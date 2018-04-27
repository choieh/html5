$(document).ready(function(){
	
	$("header>nav>ul>li").on("click",function(){
		$(".screen>img").attr("src","images/big"+($(this).index()+1)+".jpg");
	});
	
});