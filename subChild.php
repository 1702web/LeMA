<?php
  	header("Content-type","text/html;charset=utf-8");
	$userName = $_GET['userName'];
	$conn = mysql_connect("localhost:3306","root","lihai");
	mysql_select_db("LeMabase",$conn);
	$sqlStr ="select * from LeMaInfo where uesrName='".$userName."'";
	$result = mysql_query($sqlStr,$conn);
	$rows = mysql_num_rows($result);
	mysql_close($conn);
	if($rows==0){
		echo "1";
	}else{
		echo "0";
	};
?>