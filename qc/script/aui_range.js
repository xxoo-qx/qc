/*
 * AUI JAVASCRIPT PLUGIN
 * 滑动 aui-range
 * Copyright (c) 2015 auicss.com @流浪男  QQ：343757327  群：344869952
 */
 (function( window, undefined ) {
    "use strict";
    var auiRange = function(params,callback) {
        this._init(params,callback);
    };
    var time=null;
    var distance,offsetLeft,tooltipWidth;
    auiRange.prototype = {
        _init: function(params,callback) {
            var self = this;
            distance = Math.abs(params.element.max - params.element.min);
            offsetLeft = params.element.offsetLeft;
          //  tooltipWidth = params.element.offsetWidth - 37;
        //   params.element.insertAdjacentHTML('afterend','<div class="aui-range-tip aui-hide">投屏播放进度控制'+params.element.value+'</div>');
             params.element.insertAdjacentHTML('afterend','<div class="aui-range-tip aui-hide">拖动滑块可以设置投屏播放时间</div>');
            var scaleWidth = (tooltipWidth / distance) * Math.abs(params.element.value - params.element.min);
         //   params.element.nextSibling.style.left = (offsetLeft + scaleWidth + 0)+'px';
            params.element.addEventListener("input",function(){
                self._showTip(params.element,callback);
            });
            params.element.addEventListener("touchmove",function(){
                self._showTip(params.element,callback);
            });
            params.element.addEventListener("touchend",function(){
                self._hideTip(params.element);
            });
        },
        _showTip: function(el,callback){
            el.nextSibling.classList.remove("aui-hide");
            var scaleWidth = (tooltipWidth / distance) * Math.abs(el.value - el.min);
       //     el.nextSibling.style.left = (offsetLeft + scaleWidth + 0)+'px';
	   
						//秒数转化为时分秒
						var secondTime = parseInt(el.value);// 秒
						var minuteTime = 0;// 分
						var hourTime = 0;// 小时
						if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
							//获取分钟，除以60取整数，得到整数分钟
							minuteTime = parseInt(secondTime / 60);
							//获取秒数，秒数取佘，得到整数秒数
							secondTime = parseInt(secondTime % 60);
							//如果分钟大于60，将分钟转换成小时
							if(minuteTime > 60) {
								//获取小时，获取分钟除以60，得到整数小时
								hourTime = parseInt(minuteTime / 60);
								//获取小时后取佘的分，获取分钟除以60取佘的分
								minuteTime = parseInt(minuteTime % 60);
							}
						}
						var result = "" + parseInt(secondTime) + "秒";
			 
						if(minuteTime > 0) {
							result = "" + parseInt(minuteTime) + "分" + result;
						}
						if(hourTime > 0) {
							result = "" + parseInt(hourTime) + "小时" + result;
						}

            el.nextSibling.innerText = '把投屏播放时间设置为：'+result;
            callback({
                value:el.value
            });
        },
        _hideTip : function(el){
            if (time) {
                clearTimeout(time);
            }
            time = setTimeout(function() {
                el.nextSibling.classList.add("aui-hide");
            }, 1500);
        }
    }
    window.auiRange = auiRange;
})(window);


