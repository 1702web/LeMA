<?php
  header("content-typpe","text/html;charset=utf-8");
  $userName=$_POST["userName"];
  $usepass=$_POST["userPass"];
  $con=mysql_connect("localhost","root","lihai");
  mysql_select_db("LeMabase",$con);
  $sqlstr="insert into LeMaInfo(uesrName,uesrPass) value('".$userName."','".$usepass."')";	
  mysql_query($sqlstr,$con);
  mysql_close($con);
   echo "localhost.src='deng.php'";
?>