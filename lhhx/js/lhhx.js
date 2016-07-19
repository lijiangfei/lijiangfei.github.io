
window.onload=function(){
    function bbb(c,d){
        var oBtn=document.getElementById(c);
        var oDiv=oBtn.getElementsByTagName(d)[0];
        oBtn.onmouseover=function(){
            oDiv.style.display='block';
        };
        oBtn.onmouseout=function(){
            oDiv.style.display='none';
        };
    }
    function ccc(e,f,g,h){
        var oBar=document.getElementById(e);
        var aDiv1=oBar.getElementsByTagName(f);
        var oBon=document.getElementById(g);
        var aBtn1=oBon.getElementsByTagName(h);
        for(var i=0; i<aBtn1.length; i++){
            aBtn1[i].index=i;
            aBtn1[i].onmouseover=function (){
                for(var i=0; i<aDiv1.length; i++){
                    aDiv1[i].className='';
                    aBtn1[i].className='';
                }
                this.className='active-1';
                aDiv1[this.index].className='show';
            }
        }
    }
    function ggg(n,o,p){
        var oBox1=document.getElementById(n);
        var aBtn6=oBox1.getElementsByTagName(o);
        var aDiv6=oBox1.getElementsByTagName(p);
        for(var i=0; i<aBtn6.length; i++){
            aBtn6[i].index=i;
            aBtn6[i].onmouseover=function(){
                for(var i=0; i<aDiv6.length; i++){
                    aBtn6[i].className='';
                    aDiv6[i].className='';
                }
                this.className='active-4';
                aDiv6[this.index].className='show-4';
            }
        }
    }
    function ddd(j,l,m){
        var obtn2=document.getElementById(j);
        var aBtn2=obtn2.getElementsByTagName(l);
        var aDiv2=obtn2.getElementsByTagName(m);
        for(var i=0; i<aBtn2.length; i++){
            aBtn2[i].index=i;
            aBtn2[i].onmouseover=function(){
                for(var i=0; i<aDiv2.length; i++){
                    aBtn2[i].className='';
                    aDiv2[i].className='';
                }
                this.className='active-2';
                aDiv2[this.index].className='show-2';
            }
        }
    }
   function eee(n,o,p,q){
       var oBtn3=document.getElementById(n);
       var aBtn3=oBtn3.getElementsByTagName(o);
       var oBnr=document.getElementById(p);
       var aDiv3=oBnr.getElementsByTagName(q);
       for(var i=0; i<aBtn3.length; i++){
           aBtn3[i].index=i;
           aBtn3[i].onmouseover=function(){
               for(var i=0; i<aDiv3.length; i++){
                   aDiv3[i].className='';
               }
               aDiv3[this.index].className='show-3';
           }
       }

   }
    function fff(r,s,t) {
        var oBtn4 = document.getElementById(r);
        var aAL = oBtn4.getElementsByTagName(s);
        var aDiv5 =oBtn4.getElementsByTagName(t);
        for (var i = 0; i < aAL.length; i++) {
            aAL[i].index=i;
            aAL[i].onmouseover = function () {
                for (var i = 0; i < aDiv5.length; i++) {
                    aAL[i].className = '';
                    aDiv5[i].className='';
                }
                this.className = 'active-3';
                aDiv5[this.index].className ='show-3';
            }
        }
    }
    function aaa(a,b){
        var oNav = document.getElementById(a);
        var oLi = oNav.getElementsByTagName(b);
        for (var i = 0; i < oLi.length; i++) {
            oLi[i].className = '';
            oLi[i].onmouseover = function () {
                for (var i = 0; i < oLi.length; i++) {
                    oLi[i].className = '';
                }
                this.className = 'active';
            }
        }
        for (var i = 0; i < oLi.length; i++) {
            oLi[i].className = '';
            oLi[i].onmouseout = function () {
                for (var i = 0; i < oLi.length; i++) {
                    oLi[i].className = '';
                }
                this.className = '';
            }
        }
        }
    aaa('nav','li');
    bbb('btn1','div');
    bbb('btn2','div');
    bbb('btn3','div');
    bbb('btn4','div');
    bbb('btn5','div');
    bbb('btn6','div');
    bbb('btn7','div');
    ccc('banner1','div','bon','a');
    ddd('btn-2','li','div');
    eee('con-3-top','a','banner-2','img');
    fff('btn-4','a','div');
    fff('btn-5','a','div');
    ggg('box-1','li','div');
};
