$(function(){
		$(".na-le2 ul li").mouseenter(function(){
			$(".nav-c"+this.className+"").css("display","block").siblings().css("display","none");
			$(".nav-c").slideDown(200)
			
		});
		$(".na-le2 ul").mouseleave(function(){
			$(".nav-c>child").css("display","none");
			$(".nav-c").slideUp(200)
		});
		$("#banner .ban-min .ban-min-left ul li").mouseenter(function(){
			//alert(this.className)
			
			$(".ban-min"+this.className+"").css("display","block").siblings().css("display","none");
			$(".ban-min-right").show(200);
		});
		$("#banner .ban-min").mouseleave(function(){
			
			$(".ban-min-right>child").css("display","none");
			$(".ban-min-right").hide(200)
		});
		$(".inp1").focus(function(){
			$(".box").css("display","block");
			
			this.value="";
		});
		$(".inp1").blur(function(){
			$(".box").css("display","none");
			this.value="乐pro3";
		});
		$(window).scroll(function(){
			//alert("1")
			if(($("body").scrollTop())>=100){
				//alert("1")
				$("#nav").css({top:($("body").scrollTop()-25)+"px",boxShadow:"0px 5px 2px #F0EBEB"});
				
			}else{
				$("#nav").css({top:"0px",boxShadow:"none"})
			}
		});
	});