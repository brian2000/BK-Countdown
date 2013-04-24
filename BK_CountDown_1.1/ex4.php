<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Example4: Multiple Countdowns on the same page</title>
<!-- Require jQuery, and the BK_Countdown libraries -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="bk_countDown_min.js"></script>
<!-- A little bit of CSS to clean looks up a bit -->
<style>
hr{
	height: 1px;
	color:#CCC;
	margin-top:20px;
	margin-bottom:10px;
}
div{
	padding:10px;
	margin:4px;
	border:1px solid #999;
	display:inline;
}
span{
	margin-right:4px;
	font-family:"Courier New", Courier, monospace;
	font-size:24px;
}

.txt_days, .txt_hours, .txt_min{
	padding-right:4px;
	border-right:1px dotted #CCC;
}
.count_days, .count_hours, .count_min, .count_sec{
	font-weight:bold;
}
/* global css for countdowns */
.count_end {
	background:#FCF;
	border:1px solid #F00;
	font-weight: bold;
}
.count_now {
	background:#CFF;
	border:1px solid #060;
	font-weight: bold;
}
/* individual items */
#myCountDownDiv1{
	background:#CCC;
}
#myCountDownDiv1 span{
	font-family:"Arial Black", Gadget, sans-serif;
}
#myCountDownDiv1 .count_days, #myCountDownDiv1 .count_hours, #myCountDownDiv1 .count_min, #myCountDownDiv1 .count_sec{
	color:#00CC33;
}

#myCountDownDiv5_count_sec{
	color:#F00;
}
</style>


<?php 	$now = date('U');

		
		$date1 =  date('m/d/Y', strtotime('+10 days', $now));
		$date2 =  date('m/d/Y', strtotime('-10 days', $now));
		$date3 =  date('m/d/Y', ($now));
		$date4 =  date('m/d/Y', strtotime('+1 days', $now));
		$time4 = date('H:i', strtotime('+30 minutes', $now));
		$date5 =  date('m/d/Y', strtotime('+1 days', $now));
		$time5 = date('H:i', strtotime('+3 minutes', $now));

?>
<!-- This code creates the countdown once the document/page is ready -->
<script type="text/javascript">
$(document).ready(function() {  
	var myCountDown1 = new BK_CountDown('#myCountDownDiv1', '<?php echo $date1;?>', '00:00', {order: 2, spacer: ''});  
	var myCountDown2 = new BK_CountDown('#myCountDownDiv2', '<?php echo $date2;?>', '00:00', {order: 2, spacer: ''}); 
	var myCountDown3 = new BK_CountDown('#myCountDownDiv3', '<?php echo $date3;?>', '00:00', {order: 2, spacer: ''});  
	var myCountDown4 = new BK_CountDown('#myCountDownDiv4', '<?php echo $date4;?>', '<?php echo $time4;?>', {order: 2, spacer: ''});  
	var myCountDown5 = new BK_CountDown('#myCountDownDiv5', '<?php echo $date5;?>', '<?php echo $time5;?>', {order: 2, spacer: ''});   
});
</script>
</head>

<body >
    <p>
    <strong>Example4</strong>: Multiple Countdowns on the same page (with unique CSS)
    </p>

	<p>
	Countdown to <?php echo $date1;?></p>
	<div id="myCountDownDiv1"></div>
    <hr />
    <p>
	Countdown to <?php echo $date2;?></p>
	<div id="myCountDownDiv2"></div>
    <hr />
    <p>
	Countdown to <?php echo $date3;?></p>
	<div id="myCountDownDiv3"></div>
    <hr />
    <p>
	Countdown to <?php echo $date4;?>   <?php echo $time4;?></p>
	<div id="myCountDownDiv4"></div>
    <hr />
    <p>
	Countdown to <?php echo $date5;?>   <?php echo $time5;?></p>
	<div id="myCountDownDiv5"></div>
</body>
</html>