//var i = document.getElementById("slider"),
//    o = document.querySelector("output");
//
//o.innerHTML = i.value;
//
//i.addEventListener('change', function () {
//  o.innerHTML = i.value;
//  console.log("value: "+i.value);
//}, false);
//
//

function sliderChange(status , value){
//var i = document.getElementById("slider").value;
console.log("value: "+value);
if (status===0){
    if (value<100){
        value=100;
        document.getElementById("sliderLeft").value=100;
    }
    var ld = document.getElementById("leftDestination");
    console.log(status+" --> ld: "+ld);
//    document.getElementById("leftMass").value=value;
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
    console.log(status+" --> ld: "+ld);
//    document.getElementById("rightMass").value=value;
    document.getElementById("rightDestination").childNodes[1].style.cssText="width: "+(value/35+40)+"px; height: "+(value/35+40)+"px"
    document.getElementById("rightDestination").childNodes[1].style.bottom="0px";
    document.getElementById("rightDestination").childNodes[1].style.position="absolute";
    rightMeterChange(value);
    }
    //var droppedObj=getLocalData("getLocalData");
//console.log("op: "+document.getElementById(droppedObj));

var droppedImg = document.getElementById(droppedObj);
//console.log("target: "+droppedObj);
}


