<?php
 header("Content-type","text/html;charset=utf-8");
	
	//一、接收用户的数据（用户名，密码）
	$userName = $_POST['userName'];
	$userPass = $_POST['userPass'];
	
	//1、建立连接（搭桥）
	$conn = mysql_connect("localhost:3306","root","lihai");
	
	//2、选择数据库
	mysql_select_db("lemabase",$conn);
	
	//3、执行SQL语句
	
	$sqlStr ="select * from LeMaInfo where uesrName='".$userName."' and uesrPass='".$userPass."'";
	$result = mysql_query($sqlStr,$conn);
	$rows = mysql_num_rows($result);
	//4、关闭数据库
	mysql_close($conn);
	
	if($rows==0){
		echo "1";
	}else{
		echo "0";
	}
	
?>