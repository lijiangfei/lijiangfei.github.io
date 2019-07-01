function getPos(obj){
    var l=0;
    var t=0;
    while(obj){
        l+=obj.offsetLeft;
        t+=obj.offsetTop;

        obj=obj.offsetParent;
    }
    return {left: l, top: t};




}
function toDou(n){
    return n<10?'0'+n:''+n;
}
window.onload = function () {
    'use strict';
    var oUl=document.getElementById('ul1');
    var aImg=oUl.getElementsByTagName('img');
    var zIndex=999;
    var oStr=document.getElementById('str');
    oStr.onclick=function(){
        var timer;
        var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
        var start=scrollTop;
        var dis=0-start;

        var count=Math.floor(1000/30);
        var n=0;
        clearInterval(timer);
        timer=setInterval(function(){
            n++;
            var a=n/count;
            var cur=start+dis*a;
            document.documentElement.scrollTop=document.body.scrollTop=cur;
            if(n==count){
                clearInterval(timer);
            }
        }, 30);
    };
    function clock(){
        var oDate=new  Date;
        var str=toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
        for(var i=0; i<aImg.length; i++){
            move(aImg[i],{top:-35*str.charAt(i)},{easing:'linear',duration:500})
        }
    }
    clock();
    setInterval(clock,1000);
    (function(){
        var oUl=document.getElementById('ul2');
        var oBtn1=document.getElementById('btn1');
        var oBtn2=document.getElementById('btn2');
        var aLi=oUl.children;
        var timer;
        var left=0;
        oUl.innerHTML+=oUl.innerHTML;
        oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
        function toright(){
            clearInterval(timer);
            timer=setInterval(function(){
                left+=2;
                if(left>=0){
                    left=-oUl.offsetWidth/2;
                }
                oUl.style.left=left+'px';
            },30);
        }
        function toLeft(){
            clearInterval(timer);
            timer=setInterval(function(){
                left-=2;
                if(left<=-oUl.offsetWidth/2){
                    left=0;
                }
                oUl.style.left=left+'px';
            }, 30);
        }
        toright();
        oBtn1.onclick=function(){
            toLeft();
        };
        oBtn2.onclick=function(){
            clearInterval(timer);
            toright();
        }
    })();
    (function(){
        var oUl=document.getElementById('ul3');
        var aLi=oUl.children;
        var oBtn=document.getElementById('change');

        oBtn.onclick=function(){
            aPos.sort(function(){
                return Math.random()-0.5;
            });
            for(var i=0; i<aLi.length; i++){
                move(aLi[i], aPos[aLi[i].index]);
            }
        };

        var aPos=[];
        var zIndex=999;
        for(var i=0; i<aLi.length; i++){
            aPos[i]={
                left: aLi[i].offsetLeft,
                top: aLi[i].offsetTop
            };
        }
        for(var i=0; i<aLi.length; i++){
            aLi[i].style.position='absolute';
            aLi[i].style.left=aPos[i].left+'px';
            aLi[i].style.top=aPos[i].top+'px';
            aLi[i].style.margin=0;
        }

        for(var i=0; i<aLi.length; i++){
            drag(aLi[i]);
            aLi[i].index=i;
        }

        function drag(obj){
            obj.onmousedown=function(ev){
                obj.style.zIndex=zIndex++;
                clearInterval(obj.timer);
                var oEvent=ev || event;
                var disX=oEvent.clientX-obj.offsetLeft;
                var disY=oEvent.clientY-obj.offsetTop;

                document.onmousemove=function(ev){
                    var oEvent=ev || event;
                    obj.style.left=oEvent.clientX-disX+'px';
                    obj.style.top=oEvent.clientY-disY+'px';

                    for(var i=0; i<aLi.length; i++){
                        aLi[i].className='';
                    }
                    var oNear=findNearest(obj);
                    if(oNear){
                        oNear.className='active';
                    }
                };
                document.onmouseup=function(){
                    document.onmousemove=null;
                    document.onmouseup=null;

                    var oNear=findNearest(obj);
                    if(oNear){
                        move(oNear, aPos[obj.index]);
                        move(obj, aPos[oNear.index]);

                        oNear.className='';

                        var tmp;
                        tmp=oNear.index;
                        oNear.index=obj.index;
                        obj.index=tmp;
                    }else{
                        move(obj, aPos[obj.index]);
                    }
                };
                return false;
            };
        }
        function collTest(obj, obj2){
            var l1=obj.offsetLeft;
            var r1=obj.offsetWidth+l1;
            var t1=obj.offsetTop;
            var b1=obj.offsetHeight+t1;

            var l2=obj2.offsetLeft;
            var r2=obj2.offsetWidth+l2;
            var t2=obj2.offsetTop;
            var b2=obj2.offsetHeight+t2;

            if(r1<l2 || b1<t2 || l1>r2 || t1>b2){
                return false;
            }else{
                return true;
            }
        }
        function getDis(obj, obj2){
            var l1=obj.offsetLeft+obj.offsetWidth/2;
            var t1=obj.offsetTop+obj.offsetHeight/2;

            var l2=obj2.offsetLeft+obj2.offsetWidth/2;
            var t2=obj2.offsetTop+obj2.offsetHeight/2;

            var a=l1-l2;
            var b=t1-t2;
            return Math.sqrt(a*a+b*b);
        }
        function findNearest(obj){
            var iMin=99999999;
            var iMinIndex=-1;

            for(var i=0; i<aLi.length; i++){
                if(obj==aLi[i])continue;
                if(collTest(obj, aLi[i])){
                    var dis=getDis(obj, aLi[i]);
                    if(dis<iMin){
                        iMin=dis;
                        iMinIndex=i;
                    }
                }
            }
            if(iMinIndex==-1){
                return null;
            }else{
                return aLi[iMinIndex];
            }
        }
    })();
    (function(){
        var oUl=document.getElementById('znsRotatePic');
        var aLi=oUl.children;
        var aImg=oUl.getElementsByTagName('img');
        var aA=oUl.getElementsByTagName('a');
        aA[0].onclick=function(){
            toRight();
            return false;
        };
        aA[2].onclick=function(){
            toLeft();
            return false;
        };
        var aPos=[];
        for(var i=0; i<aLi.length; i++){
            aPos[i]={
                left: aLi[i].offsetLeft,
                top: aLi[i].offsetTop,
                width: aImg[i].offsetWidth,
                height: aImg[i].offsetHeight,
                opacity: getStyle(aImg[i], 'opacity'),
                oImgTop: aImg[i].offsetTop,
                fnClick: aA[i].onclick
            }
        }
        function toLeft(){
            aPos.unshift(aPos.pop());
            changePos();
        }
        function toRight(){
            aPos.push(aPos.shift());
            changePos();
        }
        function changePos(){
            for(var i=0; i<aLi.length; i++){
                move(aLi[i], {left: aPos[i].left, top: aPos[i].top});
                move(aImg[i], {width: aPos[i].width, height: aPos[i].height, opacity: aPos[i].opacity, top: aPos[i].oImgTop});
                aA[i].onclick=aPos[i].fnClick;
            }
        }
    })();
    (function(){
        var oBox=document.getElementById('blocking');
        var oBtn=document.getElementById('btn3');
        var R=4;
        var C=7;
        for(var r=0; r<R; r++){
            for(var c=0; c<C; c++){
                var oSpan=document.createElement('span');
                oSpan.style.width=oBox.offsetWidth/C+'px';
                oSpan.style.height=oBox.offsetHeight/R+'px';
                oBox.appendChild(oSpan);
                oSpan.style.left=oSpan.offsetWidth*c+'px';
                oSpan.style.top=oSpan.offsetHeight*r+'px';
                oSpan.style.backgroundPosition=-oSpan.offsetWidth*c+'px '+-oSpan.offsetHeight*r+'px';

                oSpan.r=r;
                oSpan.c=c;
            }
        }
        var aSpan=oBox.children;
        var n=0;
        oBtn.onclick=function(){
            n++;
            oBox.style.backgroundImage='url(img4/'+(n-1)%3+'.jpg)';
            for(var i=0; i<aSpan.length; i++){
                ;(function(i){
                    setTimeout(function(){
                        aSpan[i].style.opacity=0;
                        move(aSpan[i], {opacity: 1});
                        aSpan[i].style.backgroundImage='url(img4/'+n%3+'.jpg)';
                    }, 300*Math.random());
                })(i);
            }
        };
    })();
    (function(){
        var oUl=document.getElementById('ul4');
        var aLi=oUl.children;

        var width=aLi[0].offsetWidth;

        var iNow=0;
        oUl.onmousedown=function(ev){
            clearInterval(oUl.timer);
            var oEvent=ev || event;
            var disX=oEvent.clientX-oUl.offsetLeft;
            var downX=oEvent.clientX;

            document.onmousemove=function(ev){
                var oEvent=ev || event;

                oUl.style.left=oEvent.clientX-disX+'px';
            };
            document.onmouseup=function(ev){
                var oEvent=ev || event;
                document.onmousemove=null;
                document.onmouseup=null;

                var upX=oEvent.clientX;
                if(Math.abs(upX-downX)>100){
                    if(upX>downX){
                        iNow--;
                        iNow<0 && (iNow=0);
                        move(oUl, {left: -width*iNow});
                    }else{
                        iNow++;
                        iNow>aLi.length-1 && (iNow=aLi.length-1);
                        move(oUl, {left: -width*iNow});
                    }
                }else{
                    move(oUl, {left: -width*iNow});
                }
            };
            return false;
        };
    })();
    (function(){
        var oBox=document.getElementById('pv-box');
        var oUl=document.getElementById('pv-ul1');
        var aLi=oUl.children;
        var aImg=oUl.getElementsByTagName('img');
        oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
        var oBoxC=oBox.offsetWidth/2;
        oUl.onmousedown=function(ev){
            var oEvent=ev || event;
            var disX=oEvent.clientX-oUl.offsetLeft;

            document.onmousemove=function(ev){
                var oEvent=ev || event;
                var l=oEvent.clientX-disX;
                if(l>=oBoxC-(1-0.5)*aLi[0].offsetWidth){
                    l=oBoxC-(1-0.5)*aLi[0].offsetWidth;
                }
                if(l<=oBoxC-(aLi.length-0.5)*aLi[0].offsetWidth){
                    l=oBoxC-(aLi.length-0.5)*aLi[0].offsetWidth;
                }
                oUl.style.left=l+'px';
                setSize();
            };
            document.onmouseup=function(){
                document.onmousemove=null;
                document.onmouseup=null;
            };
            return false;
        };
        oUl.style.left=oBoxC-(2-0.5)*aLi[0].offsetWidth+'px';
        function setSize(){
            for(var i=0; i<aLi.length; i++){
                var c=Math.abs(oBoxC-(aLi[i].offsetLeft+aLi[i].offsetWidth/2+oUl.offsetLeft));
                var scale=1-c/500;
                scale<0.5 && (scale=0.5);
                aImg[i].style.width=scale*520+'px';
                aImg[i].style.marginLeft=-(scale*520-260)/2+'px';
                aImg[i].style.marginTop=-(scale*358-179)/2+'px';
                aLi[i].style.zIndex=scale*1000;
            }
        }
        setSize();
    })();
    (function(){
        var oUl=document.getElementById('ul5');
        var aLi=oUl.children;
        var w=30;
        oUl.style.width=aLi[0].offsetWidth+(aLi.length-1)*w+'px';
        for(var i=1; i<aLi.length; i++){
            aLi[i].style.left=aLi[0].offsetWidth+(i-1)*w+'px';
        }
        for(var i=0; i<aLi.length; i++){
            aLi[i].index=i;
            aLi[i].onmouseover=function(){
                for(var i=1; i<aLi.length; i++){
                    if(i<=this.index){
                        move(aLi[i],{left:i*w})
                    }
                    else{
                        move(aLi[i],{left:aLi[0].offsetWidth+(i-1)*w})
                    }
                }
            }
        }
    })();

};