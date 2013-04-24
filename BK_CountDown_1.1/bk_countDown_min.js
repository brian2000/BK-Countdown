/*!
 *
 * Brian2000: BK_Countdown v1.1
 * AKA: Brian's jQuery Robust Date/Time Countdown
 * http://brian2000.com
 *
 * Copyright 2012, Brian Kennedy
 * Licensed under the GPL Version 3 license
 * http://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Date: Wed Jan 9 2013 2:54PM EST  
 *
 * This is the minified version of the script
 * For the source code and information about the project visit: http://www.brian2000.com/jquery/bk-countdown/
 */
function BK_CountDown(t,n,r,i){this.opts=i;this.complete=false;this.container=t;DArray=n.split("/");this.targetDate=DArray[0]+"/"+DArray[1]+"/"+DArray[2];TArray=r.split(":");this.targetHour=TArray[0];this.targetMin=TArray[1];if(typeof TArray[2]=="undefined"){this.targetSec=0}else{this.targetSec=TArray[2]}var o={order:"1",spacer:":",element:"span",end:"It has ended!",dayOf:"Today is the day!"};if(typeof this.opts!="undefined"){for(var u in o){if(typeof this.opts[u]=="undefined"){this.opts[u]=o[u]}}}else{this.opts=o}s=this.opts["spacer"];this.c=t.substring(1);e=this.opts["element"];if(this.opts["order"]==2){$(t).append("<"+e+' id="'+this.c+'_count_days" class="count_days"></'+e+">");$(t).append("<"+e+' id="'+this.c+'_txt_days" class="txt_days">'+s+" Days</"+e+">");$(t).append("<"+e+' id="'+this.c+'_count_hours" class="count_hours"></'+e+">");$(t).append("<"+e+' id="'+this.c+'_txt_hours" class="txt_hours">'+s+" Hours</"+e+">");$(t).append("<"+e+' id="'+this.c+'_count_min" class="count_min"></'+e+">");$(t).append("<"+e+' id="'+this.c+'_txt_min" class="txt_min">'+s+" Minutes</"+e+">");$(t).append("<"+e+' id="'+this.c+'_count_sec" class="count_sec"></'+e+">");$(t).append("<"+e+' id="'+this.c+'_txt_sec" class="txt_sec">'+s+" Seconds</"+e+">")}else{$(t).append("<"+e+' id="'+this.c+'_txt_days" class="txt_days">Days '+s+"</"+e+">");$(t).append("<"+e+' id="'+this.c+'_count_days" class="count_days"></'+e+">");$(t).append("<"+e+' id="'+this.c+'_txt_hours" class="txt_hours">Hours '+s+"</"+e+">");$(t).append("<"+e+' id="'+this.c+'_count_hours" class="count_hours"></'+e+">");$(t).append("<"+e+' id="'+this.c+'_txt_min" class="txt_min">Minutes '+s+"</"+e+">");$(t).append("<"+e+' id="'+this.c+'_count_min" class="count_min"></'+e+">");$(t).append("<"+e+' id="'+this.c+'_txt_sec" class="txt_sec">Seconds '+s+"</"+e+">");$(t).append("<"+e+' id="'+this.c+'_count_sec" class="count_sec"></'+e+">")}this.count_update=function(){date=new Date;n=new Date(this.targetDate);n.setHours(this.targetHour);n.setMinutes(this.targetMin);n.setSeconds(this.targetSec);var t=Math.round(date.getTime()/1e3);var r=Math.round(n.getTime()/1e3);differance=r-t;days=Math.floor(differance/(60*60*24)*1);hours=Math.floor(differance%(60*60*24)/(60*60)*1);minutes=Math.floor(differance%(60*60*24)%(60*60)/60*1);seconds=Math.floor(differance%(60*60*24)%(60*60)%60*1);if(days<=0){$(this.container+"_count_days").remove();$(this.container+"_txt_days").remove()}else{$(this.container+"_count_days").text(days)}if(days<=0&&hours<=0){$(this.container+"_count_hours").remove();$(this.container+"_txt_hours").remove()}else{$(this.container+"_count_hours").text(hours)}if(days<=0&&hours<=0&&minutes<=0){$(this.container+"_count_min").remove();$(this.container+"_txt_min").remove()}else{$(this.container+"_count_min").text(+minutes)}$(this.container+"_count_sec").text(seconds);if(this.opts["order"]==2){if(days<=1){$(this.container+"_txt_days").text(this.opts["spacer"]+"Day")}else{$(this.container+"_txt_days").text(this.opts["spacer"]+"Days")}if(hours==1){$(this.container+"_txt_hours").text(this.opts["spacer"]+"Hour")}else{$(this.container+"_txt_hours").text(this.opts["spacer"]+"Hours")}if(minutes==1){$(this.container+"_txt_min").text(this.opts["spacer"]+"Minute")}else{$(this.container+"_txt_min").text(this.opts["spacer"]+"Minutes")}if(seconds==1){$(this.container+"_txt_sec").text(this.opts["spacer"]+"Second")}else{$(this.container+"_txt_sec").text(this.opts["spacer"]+"Seconds")}}if(days<=0&&hours<=0&&minutes<=0&&seconds<=0){if((new Date).toDateString()==n.toDateString()){$(this.container).addClass("count_now");$(this.container).text(this.opts["dayOf"])}else{$(this.container).addClass("count_end");$(this.container).text(this.opts["end"])}this.complete=true}};this.count_update();var a=this;var f=setInterval(function(){a.count_update();if(a.complete==true){clearInterval(f)}},1e3)}