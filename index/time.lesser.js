// JavaScript Document
/**
 * @copyright HeiYanQuan .
 * @author goingta
 * @package js
 * @name time.lesser.js
 * @date 2019-03-25 13:10:08
 */
var not3djs=['活动还剩','天','小时','分','秒','活动时间已结束']
"use strict";function formatSeconds(n){var t=parseInt(n),e=0,s=0,a=0,o="";return n<60?o=t+not3djs[4]:(t>=60&&(e=parseInt(t/60),t=parseInt(t%60),e>=60&&(s=parseInt(e/60),e=parseInt(e%60),s>=24&&(a=parseInt(s/24),s=parseInt(s%24)))),t>-1&&(t=parseInt(t)>=10?t:"0"+t,o="<span>"+t+"</span> "+not3djs[4]),e>0&&(e=parseInt(e)>=10?e:"0"+e,o="<span>"+e+"</span> "+not3djs[3]+o),s>0&&(o="<span>"+parseInt(s)+"</span> "+not3djs[2]+o),a>0&&(o="<span>"+parseInt(a)+"</span> "+not3djs[1]+o)),not3djs[0]+o}function CountDown(n,t){not3exptime>=0?(msg=formatSeconds(not3exptime),--not3exptime,window.name=not3exptime):(clearInterval(timer),msg=not3djs[5]),$("#remainTime_"+n).html(msg)}function addTimeLesser(n,t){copyright&&-1<copyright.indexOf("6018")&&(not3exptime=""==window.name?t:window.name,timer=setInterval("CountDown("+n+","+t+")",1e3))}var not3exptime,copyright=$("meta[name=author]").attr("content");
