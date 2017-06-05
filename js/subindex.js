$(function(){
	
	
	$(".inp0").blur(function(){
		var reg=/^\w{6,16}$/ig;
		if(reg.test($(".inp0").val())==false){
			$(".ma-ti").html("-请真正确的输入手机号");

			return;
		}
		$.get("subChild.php",{userName:$(".inp0").val()},function(data){
			if(data=="0"){
				$(".ma-ti").html("用户名已经存在");
				
				return
			}else{
				$(".ma-ti").html("");
			};	
		})
		
	});
	$("input").eq(1).blur(function(){
		var reg=/^\w{6,16}$/ig;
		if(reg.test($("input").eq(1).val())==false){
			$(".ma-ti").html("-密码格式错误，密码格式为6-16位字母/数字/符号，不可设置为常见简单弱密码");
			
			return;
		}else{
			$(".ma-ti").html("")
		}
	});
	
	$("input").eq(2).keypress(function(){
	if(this.value.length>=4){
		   this.value=this.value.substring(0,4);
		   this.value=this.value.replace(/[^\d]/g,'');
		}
		
	});
	$("input").eq(2).blur(function(){
		if($("input").eq(2).val().toLowerCase()!=$(".yan").html()){
			$(".ma-ti").html("验证错误");
			return;
		}else{
			$(".inp4").removeAttr("disabled");
		}
	});
	
	$(".inp4").click(function(){
		if(($(".inp0").val()!="") && ($("input").eq(1).val()!="")&& ($("input").eq(2).val()!="")){
		}else{
			$(".ma-ti").html("输入的内容部能空");
			$(".inp4").attr("disabled","disabled");
		}
	});
})


		

