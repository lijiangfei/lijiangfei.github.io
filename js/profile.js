function getPos(obj){
    var l=0;
    var t=0;
    while (obj){
        l+=obj.offsetLeft;
        t+=obj.offsetTop;
        obj=obj.offsetParent;
    }
    return{
        left:l,
        top:t
    }
}
window.onload = function () {
    'use strict';
    var oTop=document.getElementById('top');
    var aLi=oTop.getElementsByTagName('li');
    var aSpan=oTop.getElementsByTagName('span');
    for(var i=0; i<aLi.length; i++){
        aLi[i].index=i;
        aLi[i].onmouseenter=function(){
            move(aSpan[this.index],{width:60})
        };
        aLi[i].onmouseleave=function(){
            move(aSpan[this.index],{width:0})
        }
    }
    var oCon1=document.getElementById('con1');
    var oDown=document.getElementById('down');
    var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
    window.onscroll=function(){
        var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop>600){
            move(oCon1,{opacity:1},{duration:100})
        }
        if(scrollTop>700){
            move(oDown,{opacity:1},{duration:100})
        }
        var oUl=document.getElementById('ul1');
        var aI=oUl.getElementsByTagName('i');
        console.log(scrollTop);
        if(scrollTop>800){
            for(var i=0; i<aI.length; i++){
                move(aI[i],{width:380},{duration:2000})
            }
        }
    };
};