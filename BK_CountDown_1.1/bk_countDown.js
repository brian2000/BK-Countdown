/*!
 *
 * Brian2000: BK_Countdown v1.1
 * AKA: Brian's jQuery Robust Date/Time Countdown
 * http://brian2000.com
 *
 * Copyright 2012-2013, Brian Kennedy
 * Licensed under the GPL Version 3 license
 * http://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Date: Wed Jan 9 2013 2:54PM EST  
 *
 * You can't remove this part, and if you make changes or improve things, please keep me informed.
 * Thank you, enjoy, and support Open Source!
 */
 
/*
    This portion explains how to use the counter, I recomend not deleting it either ;-)
	
	VARS [required]
	------------------------------------------------
  	container: ID of Element for counter
  	targetDate: MM/DD/YYYY
  	targetTime: HH:MM:SS (0-23 Hour) [seconds are optional]

  	OPTIONS:
	------------------------------------------------
  	order: format/output order 
  			order: 1 = Label + Spacer + Value
  			order: 2 = Value + Spacer + Label (reverse from order 1)
  	spacer: text/string seperator between label and value	
	element: html element for label and value containers (default is span)
	end: Message to display when date has passed
	dayOf: Message to display on day of counter expiration
		

*/
function BK_CountDown(container, targetDate, targetTime, opts) {
	/////////////////////////////////////////////////////
	//vars
	this.opts = opts;
	this.complete = false; //for exiting interval
	this.container = container; //target
	
	DArray = targetDate.split('/'); 
	this.targetDate = DArray[0] + '/' + DArray[1] + '/' + DArray[2];
	
	TArray = targetTime.split(':');
	this.targetHour = TArray[0]; //hr
	this.targetMin = TArray[1]; //min
	if (typeof TArray[2] == 'undefined') { //sec
	  this.targetSec = 0;
	}else{
		this.targetSec = TArray[2];
	}	
	/////////////////////////////////////////////////////
	// options
	var defaults = {
        'order'  	:      	"1",
		'spacer' 	:		':',
		'element'	:		'span',
        'end'  		:      	"It has ended!",
		'dayOf' 	: 		"Today is the day!"
    }
	if(typeof this.opts != "undefined") { //if options were assigned...
		for(var i in defaults) { //assign defaults for unchanged opts
			if(typeof this.opts[i] == "undefined") {
				this.opts[i] = defaults[i];
			}
		}
	}else{ //no options were assigned
		this.opts = defaults;
	}
	/////////////////////////////////////////////////////


	/////////////////////////////////////////////////////
	////////  assembly                  
	/////////////////////////////////////////////////////
	s = this.opts['spacer'];
	this.c = container.substring(1);
	e = this.opts['element'];
	if(this.opts['order'] == 2){
	//reverse assembly
		$(container).append('<' + e + ' id="' + this.c + '_count_days" class="count_days"></' + e + '>');		
		$(container).append('<' + e + ' id="' + this.c + '_txt_days" class="txt_days">' + s + ' Days</' + e + '>');
		$(container).append('<' + e + ' id="' + this.c + '_count_hours" class="count_hours"></' + e + '>');		
		$(container).append('<' + e + ' id="' + this.c + '_txt_hours" class="txt_hours">' + s + ' Hours</' + e + '>');
		$(container).append('<' + e + ' id="' + this.c + '_count_min" class="count_min"></' + e + '>');		
		$(container).append('<' + e + ' id="' + this.c + '_txt_min" class="txt_min">' + s + ' Minutes</' + e + '>');
		$(container).append('<' + e + ' id="' + this.c + '_count_sec" class="count_sec"></' + e + '>');			
		$(container).append('<' + e + ' id="' + this.c + '_txt_sec" class="txt_sec">' + s + ' Seconds</' + e + '>');	
	}
	else{
	//default assembly
		$(container).append('<' + e + ' id="' + this.c + '_txt_days" class="txt_days">Days ' + s + '</' + e + '>');		
		$(container).append('<' + e + ' id="' + this.c + '_count_days" class="count_days"></' + e + '>');
		$(container).append('<' + e + ' id="' + this.c + '_txt_hours" class="txt_hours">Hours ' + s + '</' + e + '>');		
		$(container).append('<' + e + ' id="' + this.c + '_count_hours" class="count_hours"></' + e + '>');
		$(container).append('<' + e + ' id="' + this.c + '_txt_min" class="txt_min">Minutes ' + s + '</' + e + '>');		
		$(container).append('<' + e + ' id="' + this.c + '_count_min" class="count_min"></' + e + '>');
		$(container).append('<' + e + ' id="' + this.c + '_txt_sec" class="txt_sec">Seconds ' + s + '</' + e + '>');		
		$(container).append('<' + e + ' id="' + this.c + '_count_sec" class="count_sec"></' + e + '>');
	}
	/////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	////////  Count Update function                 
	this.count_update = function count_update(){

		date = new Date(); //NOW
		targetDate = new Date(this.targetDate);
		targetDate.setHours(this.targetHour);
		targetDate.setMinutes(this.targetMin);
		targetDate.setSeconds(this.targetSec);
		
		var UDate =  Math.round(date.getTime()/1000);
		var UTargetDate =  Math.round(targetDate.getTime()/1000);
	
		differance = UTargetDate - UDate;
		
		days=Math.floor(differance/(60*60*24)*1);
		hours=Math.floor((differance%(60*60*24))/(60*60)*1);
		minutes=Math.floor(((differance%(60*60*24))%(60*60))/(60)*1);
		seconds=Math.floor((((differance%(60*60*24))%(60*60))%(60))*1);
		
		//if range is 0 don't display range
		//days
		if(days <= 0){$(this.container + '_count_days').remove();$(this.container + '_txt_days').remove();}
		else{$(this.container + '_count_days').text(days);}
		//hours
		if(days <= 0 && hours <= 0){$(this.container + '_count_hours').remove();$(this.container + '_txt_hours').remove();}
		else{$(this.container + '_count_hours').text(hours);}
		//min
		if(days <= 0 && hours <= 0 && minutes <= 0){$(this.container + '_count_min').remove();$(this.container + '_txt_min').remove();}
		else{$(this.container + '_count_min').text(+minutes);}
		//seconds
		$(this.container + '_count_sec').text(seconds);
		
		//Singular text for 'reverse' assembly
		if(this.opts['order'] == 2){
			if(days <= 1){$(this.container + '_txt_days').text(this.opts['spacer'] + 'Day');}
			else{$(this.container + '_txt_days').text(this.opts['spacer'] + 'Days')}
			if(hours == 1){$(this.container + '_txt_hours').text(this.opts['spacer'] + 'Hour');}
			else{$(this.container + '_txt_hours').text(this.opts['spacer'] + 'Hours');}
			if(minutes == 1){$(this.container + '_txt_min').text(this.opts['spacer'] + 'Minute');}
			else{$(this.container + '_txt_min').text(this.opts['spacer'] + 'Minutes');}
			if(seconds == 1){$(this.container + '_txt_sec').text(this.opts['spacer'] + 'Second');}
			else{$(this.container + '_txt_sec').text(this.opts['spacer'] + 'Seconds');}
		}
		
		//end of countdown
		if(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0){
			//timer is over, final output
			//if date is today!
			if(new Date().toDateString() == targetDate.toDateString()){
				$(this.container).addClass('count_now');
				$(this.container).text(this.opts['dayOf']);
			}else{//if date is after today				
				$(this.container).addClass('count_end');
				$(this.container).text(this.opts['end']);
			}
			this.complete = true;
		}	
	};
	/////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	
	//run immediately
	this.count_update();
	
	//now loop this every second
	var selfobject = this; //scope gets lost within setInterval (see: http://www.vonloesch.de/node/32)
	var theCounter = setInterval(function(){
		selfobject.count_update();
			if(selfobject.complete == true){
				clearInterval(theCounter);}
		}, 1000);
}

