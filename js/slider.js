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
    var ld = document.getElementById("leftDestination");
    console.log("ld: "+ld);
    document.getElementById("leftMass").value=value;
    }
else if(status===1){
    var ld = document.getElementById("rightDestination");
    console.log("ld: "+ld);
    document.getElementById("rightMass").value=value;
    }
    //var droppedObj=getLocalData("getLocalData");
console.log("op: "+document.getElementById(droppedObj));

var droppedImg = document.getElementById(droppedObj);
console.log("target: "+droppedObj);
if(droppedImg) {
    console.log("im in");
    droppedImg.style.height = (value/35+40)+'px';
    droppedImg.style.width = (value/35+40)+'px';

}
}


function getLocalData(tableData)
{
    if(typeof(Storage) !== "undefined") {
    return localStorage.getItem(tableData);
} else {
    // Sorry! No Web Storage support..
    console.log("no Support for storage");
}
}


