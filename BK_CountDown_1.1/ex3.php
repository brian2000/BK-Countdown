<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Example3: Some CSS for the Countdown</title>
<!-- Require jQuery, and the BK_Countdown libraries -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="bk_countDown.js"></script>
<!-- A little bit of CSS to clean looks up a bit -->
<style>
#myCountDownDiv{
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
.count_sec{
	color:#F00;
}
</style>


<?php 
$now = date('U');	
$date =  date('m/d/Y', strtotime('+10 days', $now));
?>
<!-- This code creates the countdown once the document/page is ready -->
<script type="text/javascript">
$(document).ready(function() {  var myCountDown = new BK_CountDown('#myCountDownDiv', '<?php echo $date;?>', '12:00', {order: 2, spacer: ''});  });
</script>
</head>

<body >
    <p>
    In this a continuation of example 2. With additional CSS applied to the countdown 
    </p>
	<p>
	Countdown to <?php echo $date;?></p>
	<div id="myCountDownDiv"></div>
</body>
</html>