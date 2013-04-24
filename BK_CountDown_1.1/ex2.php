
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Example2: Reverse Order</title>
<!-- Require jQuery, and the BK_Countdown libraries -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="bk_countDown.js"></script>
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

/* css for the page */
.grn{ color:#090;}
.org{ color:#CC3300;}
</style>


<?php 	$now = date('U');	
		$date =  date('m/d/Y', strtotime('+10 days', $now));
?>
<!-- This code creates the countdown once the document/page is ready -->
<script type="text/javascript">
$(document).ready(function() {  var myCountDown = new BK_CountDown('#myCountDownDiv', '<?php echo $date;?>', '12:00', {order: 2, spacer: ''});  });
</script>
</head>

<body >
    <p>
    In this example the display order has been reversed from the default <strong class="org">Label + Spacer + Value</strong> to <strong class="grn">Value + Spacer + Label</strong>. 
    </p>
    
    <p>
    Note: The spacer has been set to '' 
    </p>
	<p>
	Countdown to <?php echo $date;?></p>
	<div id="myCountDownDiv"></div>
</body>
</html>