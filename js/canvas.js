var imgObj = null;
var imgObjRight = null;


function init(){
    imgObj = document.getElementById('leftFinDestination');
    imgObj.style.position= 'relative'; 
    imgObj.style.top = '15px';
    imgObjRight = document.getElementById('rightFinDestination');
    imgObjRight.style.position= 'fixed'; 
    imgObjRight.style.top = '0px';    
    imgObjRight.style.right = '500px'; 

}
function moveDown(){
    if(parseInt(imgObj.style.top)<421)
        {
        imgObj.style.top = parseInt(imgObj.style.top) + speed + 'px';
        setTimeout(moveDown,60);
        }
    else
        {
//        console.log("obj: "+elementChildren(imgObj)[1].src.substring(30,elementChildren(imgObj)[1].src.length-4));
//        console.log("mass: "+document.getElementById("sliderLeft").value);
        console.log("env: "+getEnv());
        var el=elementChildren(imgObj)[1].src.substring(30,elementChildren(imgObj)[1].src.length-4);
        var mass=document.getElementById("sliderLeft").value;
        printExperimentData(el, mass, getEnv(), 10);
        }
}

function moveDownRight(){
    if(parseInt(imgObjRight.style.top)<420)
        {
        imgObjRight.style.top = parseInt(imgObjRight.style.top) + speedRight + 'px';
        setTimeout(moveDownRight,60);
        }
    else{
//        console.log(elementChildren(imgObjRight)[2].src.substring(30,elementChildren(imgObj)[1].src.length-4));
//        console.log("mass: "+document.getElementById("sliderRight").value);
//        console.log("env: "+getEnv());
        var el=elementChildren(imgObjRight)[2].src.substring(30,elementChildren(imgObj)[1].src.length-4);
        var mass=document.getElementById("sliderRight").value;
        printExperimentData(el, mass, getEnv(), 10);
    }
}
var speedRight;
var speed;
window.onload =init;

function dropObject(){
    speed=5;
    speedRight=6;
    moveDown();
    moveDownRight();
    var btn=document.getElementById("submit");
    btn.value="reset";
    btn.onclick=doRestore;
    
}


function doRestore(){
    console.log("imgObj: "+imgObj);
    console.log(elementChildren(imgObj)[1]);
    console.log("woh: "+imgObj.childNodes[1][0]);
    elementChildren(imgObj)[1].style.width="50px";
    elementChildren(imgObj)[1].style.height="50px";
    imgObjRight.style.width="50px";
    imgObjRight.style.height="50px";
    if(elementChildren(imgObj)[1] || elementChildren(imgObjRight)[2])
        {
        document.getElementById('leftObjects').appendChild(elementChildren(imgObj)[1]);
        document.getElementById('rightObjects').appendChild(elementChildren(imgObjRight)[2]);
        }
    console.log(elementChildren(imgObjRight));

    imgObj.style.top = '15px';

    imgObjRight.style.top = '0px';
    var btn=document.getElementById("submit").value="Drop";
    document.getElementById("drag1").setAttribute("draggable", true);
    document.getElementById("drag2").setAttribute("draggable", true);
    document.getElementById("drag3").setAttribute("draggable", true);
    document.getElementById("drag4").setAttribute("draggable", true);
    document.getElementById("drag11").setAttribute("draggable", true);
    document.getElementById("drag22").setAttribute("draggable", true);
    document.getElementById("drag33").setAttribute("draggable", true);
    document.getElementById("drag44").setAttribute("draggable", true);
    console.log("in restore...");
    var btn=document.getElementById("submit");
    btn.onclick=dropObject;
}



function elementChildren (element) {
    var childNodes = element.childNodes,
        children = [],
        i = childNodes.length;
    
    while (i--) {
        if (childNodes[i].nodeType == 1) {
            children.unshift(childNodes[i]);
        }
    }

    return children;
}


function getEnv(){
    var env;
    if (document.getElementById('r1').checked){
        env = document.getElementById('r1').value;
    }
    if (document.getElementById('r2').checked){
        env = document.getElementById('r2').value;
    }
    return env;
}



function printExperimentData(el, mass, env, time) {
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = el;
    cell2.innerHTML = mass;
    cell3.innerHTML = env;
    cell4.innerHTML = time;
}