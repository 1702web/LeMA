$(function(){
	   // alert(document.cookie)
	    if(getCookie("userName")!=""){
	    	$(".head-le").html("<sapn class='tianjia'>欢迎回来!!!</span>");
	    	$(".tianjia").css({color:"red",font:"14px/25px ''"})
	    }
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
				$("#nav").css({position:"fixed",top:"0",boxShadow:"0px 5px 2px #F0EBEB"});
				$("#head").css({marginBottom:"80px"})
				
			}else{
				$("#nav").css({position:"relative",top:"0px",boxShadow:"none"})
				$("#head").css({marginBottom:"0px"})
			}
		});
	});