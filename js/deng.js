$(function(){
	$(".sp1").click(function(){
		$(".box1").css("display","none");
		$(".box2").css("display","block")
	});
	$(".sp2").click(function(){
		$(".box2").css("display","none");
		$(".box1").css("display","block")
	});
	$(".em-e2").click(function(){
		if($(".em-e2 a").html()=="展开》"){
			$(".img").css("display","inline-block");
			$(".em-e2 a").html(">收齐")
			
		}else{
			$(".img").css("display","none");
			$(".em-e2 a").html("展开》")
			
		}
		
	});
	$(".inp2").click(function(){
		var str1=$('input').eq(0).val();
		var str2=$('input').eq(1).val();
		$.post("deng.php",{userName:$('input').eq(0).val(),userPass:$('input').eq(1).val()},function(data){
			if(data=="0"){
				saveCookie("userName",str1,1);
				saveCookie("userPass",str2,1);
				location.href = "index.html";
			}else{
				$(".zou").html("账号密码有误");
			}
		});
	})
	
})
