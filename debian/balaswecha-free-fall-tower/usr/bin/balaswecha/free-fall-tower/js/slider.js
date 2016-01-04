function sliderChange(status , value){
if (status===0){
    if (value<100){
        value=100;
        document.getElementById("sliderLeft").value=100;
    }
    var ld = document.getElementById("leftDestination");
    document.getElementById("leftDestination").childNodes[1].style.cssText="width: "+(value/35+40)+"px; height: "+(value/35+40)+"px"
    document.getElementById("leftDestination").childNodes[1].style.bottom="0px";
    document.getElementById("leftDestination").childNodes[1].style.position="absolute";
    leftMeterChange(value);
    }
else if(status===1){
    if (value<100){
        value=100;
        document.getElementById("sliderRight").value=100;
    }
    var ld = document.getElementById("rightDestination");
    document.getElementById("rightDestination").childNodes[1].style.cssText="width: "+(value/35+40)+"px; height: "+(value/35+40)+"px"
    document.getElementById("rightDestination").childNodes[1].style.bottom="0px";
    document.getElementById("rightDestination").childNodes[1].style.position="absolute";
    rightMeterChange(value);
    }
else
    ;
var droppedImg = document.getElementById(droppedObj);
}


