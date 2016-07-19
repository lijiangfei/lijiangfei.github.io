function getPos(obj){
    var l=0;
    var t=0;
    while (obj){
        l+=obj.offsetLeft;
        t+=obj.offsetTop;
        obj=obj.offsetParent
    }
    return {left:l, top:t}
}
function toDou(n){
    return n<10?'0'+n:''+n;
}
window.onload=function(){
    'use strict';
    var oUl=document.getElementById('ul1');
    var aImg=oUl.getElementsByTagName('img');
    var zIndex=999;
    function clock(){
        var oDate=new  Date;
        var str=toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
        for(var i=0; i<aImg.length; i++){
            move(aImg[i],{top:-35*str.charAt(i)},{easing:'linear',duration:500})
        }
    }
    clock();
    setInterval(clock,1000);
    var oTop=document.getElementById('top');
    var oSta=document.getElementById('sta');
    var oLi1=document.getElementById('li1');
    var top=getPos(oTop).top;
    window.onscroll=function(){
        var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop>top){
            oUl2.style.position='fixed';
            oUl2.style.left=0;
            oUl2.style.top=0;
            oSta.style.display='block';
            oUl2.style.zIndex=zIndex++;
            oLi1.style.top=54+'px';
            oStr.style.display='block';
            oStr.style.zIndex=zIndex++;
        }
        else{
            oUl2.style.position='relative';
            oUl2.style.zIndex=zIndex++;
            oSta.style.display='none';
            oLi1.style.top=0+'px';
            oStr.style.display='none';
        }
    };
    var oBox=document.getElementById('box');
    var oSpan=oBox.children[0];

    var N=6;
    for(var i=0; i<N; i++){
        var oSpan=document.createElement('span');
        oBox.appendChild(oSpan);
    }
    var aSpan=oBox.children;
    aSpan[0].innerHTML='jQuery';
    aSpan[1].innerHTML='css';
    aSpan[2].innerHTML='jsonp';
    aSpan[3].innerHTML='ajax';
    aSpan[4].innerHTML='html5';
    aSpan[5].innerHTML='mvc';
    var bFlag=true;
    setTimeout(function(){
        if(bFlag){
            for(var i=0; i<aSpan.length; i++){
                var d=360/N*i;
                cirMove(aSpan[i], d);
            }
        }else{
            for(var i=0; i<aSpan.length; i++){
                cirMove(aSpan[i], 0);
            }
        }
        bFlag=!bFlag;
    },1000);
    var R=oBox.offsetWidth/2;
    function cirMove(obj, iTarget){
        // 角度
        obj.a=obj.a || 0;
        var start=obj.a;
        var dis=iTarget-start;

        var count=Math.floor(1000/30);
        var n=0;
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
            n++;

            var a=n/count;
            var cur=start+dis*a;
            // 更新角度
            obj.a=cur;
            var x=R+R*Math.sin(cur*Math.PI/180);
            var y=R-R*Math.cos(cur*Math.PI/180);
            obj.style.left=x+'px';
            obj.style.top=y+'px';
            if(n==count){
                clearInterval(obj.timer);
            }
        }, 30);
    }
    var oIntro=document.getElementById('intro');
    var str='我是一个做事认真，踏实肯干的人。我热衷于钻研各种新鲜技术，紧跟时代潮流。有1年前端开发经验，有良好的编码习惯,能够配合团队完成相关工作。熟练使用HTML、CSS、JavaScript、jQuery、Ajax、Jsonp、DOM等前端技术、熟悉jQuery插件熟悉HTML5、CSS3新技术熟悉闭包、封闭空间、面向对象.';
    for(var i=0; i<str.length; i++){
        var oLi=document.createElement('li');
        oLi.innerHTML=str.charAt(i);
        oIntro.appendChild(oLi);
    }
    var aLi=oIntro.getElementsByTagName('li');
    var iNow=0;
    var timer=setInterval(function(){
        move(aLi[iNow], {opacity: 1});
        iNow++;
        if(iNow==aLi.length){
            clearInterval(timer);
        }
    }, 100);
    var oSkill=document.getElementById('skill');
    var aLi2=oSkill.getElementsByTagName('li');
    var aOpa=oSkill.getElementsByTagName('div');
    for(var i=0; i<aLi2.length; i++){
        aLi2[i].index=i;
        aLi2[i].onmouseover=function(){
            move(aOpa[this.index],{height:230},{easing:'linear'})
        };
        aLi2[i].onmouseout=function(){
            move(aOpa[this.index],{height:80},{easing:'linear'})
        }
    }
    var  oHobby=document.getElementById('hobby');
    var aLi3=oHobby.getElementsByTagName('li');
    var oBtn1=document.getElementById('btn1');
    var aBtn1=oBtn1.getElementsByTagName('li');
    var oBxo1=document.getElementById('box1');
    var oUl2=document.getElementById('ul2');
    var time=null;
    var n=0;
    oBxo1.onmouseover=function(){
        clearInterval(time);
    };
    oBxo1.onmouseout=function(){
        time=setInterval(function(){
            for(var i=0; i<aBtn1.length; i++){
                aBtn1[i].index=i;
                aBtn1[i].onmouseover=function(){
                    n=this.index;
                    for(var i=0; i<aLi3.length; i++){
                        aLi3[i].style.opacity=0;
                        aBtn1[i].className='';
                    }
                    move(aLi3[this.index],{opacity:1});
                    this.className='on';

                };
            }
            for(var i=0; i<aLi3.length; i++){
                aLi3[i].style.opacity=0;
                aBtn1[i].className='';
            }
            n++;
            if(n==aLi3.length){
                n=0;
            }
            move(aLi3[n],{opacity:1});
            aBtn1[n].className='on'
        },800)
    };
    time=setInterval(function(){
            n++;
        if(n==aLi3.length){
            n=0;
        }
          for(var i=0; i<aLi3.length; i++){
                    aLi3[i].style.opacity=0;
                    aBtn1[i].className='';
                }
                move(aLi3[n],{opacity:1});
                aBtn1[n].className='on'
    },800);
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
    var oRight=document.getElementById('right');
    var aLi4=oRight.getElementsByTagName('li');
    var aDiv4=oRight.getElementsByTagName('div');
    var aP=oRight.getElementsByTagName('p');
    for(var i=0; i<aLi4.length; i++){
        aLi4[i].index=i;
        aLi4[i].onmouseenter=function(){
            for(var i=0; i<aLi4.length; i++){
                aP[i].style.opacity='none';
                aDiv4[i].style.height='0'
            }
            aP[this.index].style.display='block';
            console.log(aDiv4[this.index]);
            move(aDiv4[this.index],{height:190})
        };
        aLi4[i].onmouseleave=function(){
            move(aDiv4[this.index],{height:0});
            aP[this.index].style.display='none';
        }
    }
    var ul2=document.getElementById('ul2');
    var aLi5=ul2.getElementsByTagName('li');
    var oBlock=aLi5[aLi5.length-1];
    for(var i=0; i<aLi5.length-2; i++){
        aLi5[i].onmouseover=function(){
            elastic(oBlock, this.offsetLeft);
        };
        aLi5[i].onmouseout=function(){
            elastic(oBlock, 191);
        };
    }
};
