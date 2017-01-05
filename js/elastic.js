
;(function(window){
    var left=0;
    var iSpeed=0;   // 速度
    var timer;
    window.elastic=function(obj, iTarget){
        clearInterval(timer);
        timer=setInterval(function(){
            iSpeed+=(iTarget-left)/5;
            iSpeed*=0.8;
            left+=iSpeed;

            obj.style.left=Math.round(left)+'px';
            // 关闭定时器
            if(Math.abs(iSpeed)<1 && Math.round(left)==iTarget){
                clearInterval(timer);
            }
        }, 30);
    }
})(window);








