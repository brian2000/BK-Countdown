<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Example1: Simple Countdown</title>
<!-- Require jQuery, and the BK_Countdown libraries -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="bk_countDown_min.js"></script>
<!-- A little bit of CSS to clean looks up a bit -->
<style>
#myCountDownDiv{
	padding:4px;
	margin:4px;
	border:1px solid #999;
	display:inline;
}
span{margin-right:4px;
}
</style>


<?php 	$now = date('U');	
		$date =  date('m/d/Y', strtotime('+10 days', $now));
?>
<!-- This code creates the countdown once the document/page is ready -->
<script type="text/javascript">
$(document).ready(function() {  var myCountDown = new BK_CountDown('#myCountDownDiv', '<?php echo $date;?>', '12:00');  });
</script>
</head>

<body >
	<p>
	Countdown to <?php echo $date;?></p>
	<div id="myCountDownDiv"></div>
</body>
</html>