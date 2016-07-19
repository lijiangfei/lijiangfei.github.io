/**
 * Created by Administrator on 2016/4/25.
 */
window.onload=function() {
        function aaa(a,b) {
            var oBox = document.getElementById(a);
            var oDiv = oBox.getElementsByTagName(b)[0];
            var oLgo = document.getElementById('logo');
            var oBtn1 = oLgo.getElementsByTagName('a')[0];
            var oDiv1 = oLgo.getElementsByTagName('a')[1];
            var oCar=document.getElementById('bycar');
            var oDiv2=oCar.getElementsByTagName('b')[0];

            var oBar=document.getElementById('banner1');
            var oBtn2=oBar.getElementsByTagName('img');
            var oDiv3=oBar.getElementsByTagName('a');
            oBox.onmouseover = function () {
                oDiv.style.display = 'block';
            };
            oBox.onmouseout = function () {
                oDiv.style.display = 'none';
            };
            oBtn1.onclick = function () {
                oDiv1.style.display = 'none';
            };
            oCar.onmouseover=function(){
                oDiv2.style.display='block';
            };
            oCar.onmouseout=function(){
                oDiv2.style.display='none';
            };
            for(var i=0; i<oDiv3.length; i++){
                oDiv3[i].index=i;
                oDiv3[i].onmouseover=function(){
                    for(var i=0; i<oBtn2.length; i++){
                        oDiv3[i].className='';
                        oBtn2[i].className='';
                    }
                    this.className='show';
                    oBtn2[this.index].className='active';
                }
            }
        }
        aaa('box','div');
        aaa('box1','div');
        aaa('box2','div');
        aaa('box3','div');
        aaa('box4','div')
    };
