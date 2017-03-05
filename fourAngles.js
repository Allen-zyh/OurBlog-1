var topLeft= document.getElementById("topLeft");
var zhedang1= document.getElementById("zhedang1");
var zhedang2= document.getElementById("zhedang2");
var x=20;
function change(){
  var y=x/5;
  var z=y-2;
  	topLeft.style.borderLeftWidth=x+"px";
  	topLeft.style.borderRightWidth=x+"px";
  	topLeft.style.borderTopWidth=x+"px";
  	topLeft.style.borderBottomWidth=x+"px";
  	topLeft.style.boxShadow="1px 1px "+y+"px "+z+"px #ebd372";
  	topLeft.style.borderRadius="0px 0px "+y+"px 0px";
  	zhedang1.style.height=100-2*x+"px";
  	zhedang2.style.width=100-2*x+"px";
  	zhedang1.style.top=2*x+"px";
  	zhedang2.style.left=2*x+"px";
  	if(x<50){
  	x=x+1;}
}
change();
topLeft.onmousedown=function(){
setInterval("change()",25);}

