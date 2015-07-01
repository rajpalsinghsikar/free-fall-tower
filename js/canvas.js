var imgObj = null;
var imgObjRight = null;
var speedRight=1;
var speed=1;

function init(){
    callBubble("Pick an Object to Weight",120,70,-610,-363,0,30,0,0,26,0,"left");
    document.getElementById("submit").disabled=true;
    document.getElementById("sliderLeft").value=0;
//    document.getElementById("leftMass").value=document.getElementById("sliderLeft").value; 
    document.getElementById("sliderRight").value=0;
//    document.getElementById("rightMass").value=document.getElementById("sliderRight").value; 
    document.getElementById("sliderLeft").disabled=true;
    document.getElementById("sliderRight").disabled=true;
    leftMeterChange(0);
    rightMeterChange(0);    
    imgObj = document.getElementById('leftFinDestination');
//    imgObj.style.position= 'relative'; 
    imgObj.style.top = '-60px';
    imgObjRight = document.getElementById('rightFinDestination');
//    imgObjRight.style.position= 'fixed'; 
    imgObjRight.style.top = '-60px';    
//    imgObjRight.style.right = '500px'; 

}
function moveDown(){
    if(parseInt(imgObj.style.top)<=314)
        {
        imgObj.style.top = parseInt(imgObj.style.top) + speed + 'px';
        setTimeout(moveDown,60);
        }
    else
        {
//        console.log("obj: "+elementChildren(imgObj)[1].src.substring(30,elementChildren(imgObj)[1].src.length-4));
//        console.log("mass: "+document.getElementById("sliderLeft").value);
//        console.log("env: "+getEnv());
        var el=getElementName(elementChildren(imgObj)[0].id);
        el=getObjectName(el);
        var mass=document.getElementById("sliderLeft").value;
        var timeTaken;
        if(document.getElementById('r2').checked)
            timeTaken=Math.sqrt((2*15)/9.8);
        else
            timeTaken=Math.sqrt(((2*15*10)/(9.8*speed)));
        printExperimentData(el, mass, getEnv(), timeTaken.toFixed(2));
        if(parseInt(imgObjRight.style.top)>308 || parseInt(imgObjRight.style.top)===-60){
            document.getElementById("submit").value="Reset";
            document.getElementById("submit").disabled=false;
            document.getElementById('r1').disabled=false;
            document.getElementById('r2').disabled=false;
            callBubble("Click on Reset to Perfom new experiment",145,80,-580,-205,0,50,0,0,20,2,"left");
            }
        }
}

function moveDownRight(){
    if(parseInt(imgObjRight.style.top)<=314)
        {
        imgObjRight.style.top = parseInt(imgObjRight.style.top) + speedRight + 'px';
        setTimeout(moveDownRight,60);
        }
    else{
//        console.log(elementChildren(imgObjRight)[2].src.substring(30,elementChildren(imgObj)[1].src.length-4));
//        console.log("mass: "+document.getElementById("sliderRight").value);
//        console.log("env: "+getEnv());
        var el=getElementName(elementChildren(imgObjRight)[0].id);
        el=getObjectName(el);
//        console.log("err: "+elementChildren(imgObjRight)[1]);
        var mass=document.getElementById("sliderRight").value;
        var timeTaken;
        if(document.getElementById('r2').checked)
            timeTaken=Math.sqrt((2*15)/9.8);
        else
            timeTaken=Math.sqrt(((2*15*10)/(9.8*speedRight)));
        printExperimentData(el, mass, getEnv(), timeTaken.toFixed(2));
        if(parseInt(imgObj.style.top)>308 || parseInt(imgObj.style.top)===-60) {
            document.getElementById("submit").value="Reset";
            document.getElementById("submit").disabled=false;
            document.getElementById('r1').disabled=false;
            document.getElementById('r2').disabled=false;
            callBubble("Click on Reset to Perfom new experiment",145,80,-580,-205,0,50,0,0,20,2,"left");
        }
    }
}

window.onload =init;

function dropObject(){
    destroyBubble();
    setSpeed();
    
    if(document.getElementById("leftFinDestination").childNodes[0])
        document.getElementById("leftFinDestination").childNodes[0].draggable=false;
    if(document.getElementById("rightFinDestination").childNodes[0])
        document.getElementById("rightFinDestination").childNodes[0].draggable=false;
    if(elementChildren(imgObj)[0]!=undefined)
        {
        moveDown();
        }
    if(elementChildren(imgObjRight)[0]!=undefined)
        {
        moveDownRight();
        }
    
    for(var i=0;i<document.getElementById("rightObjects").childNodes.length;i++)
        document.getElementById("rightObjects").childNodes[i].draggable=false;
    
    for(var i=0;i<document.getElementById("leftObjects").childNodes.length;i++)
        document.getElementById("leftObjects").childNodes[i].draggable=false;

    document.getElementById('r1').disabled=true;
    document.getElementById('r2').disabled=true;
    var btn=document.getElementById("submit");
    btn.disabled=true;
    btn.onclick=doRestore;
    
}


function setSpeed(){
//    var time Math.sqrt();
    if(document.getElementById('r2').checked)
        {
        speed=5;
        speedRight=5;
        }
    else
        {
        var massL=document.getElementById("sliderLeft").value;
        var massR=document.getElementById("sliderRight").value;
        speed=(massL/100);
        speedRight=(massR/100);
        }
    
}

function getObjectName(obj){
    var res = obj.charAt(0).toUpperCase() + obj.slice(1);
    res=res.replace("-b", " B");
    return res;
}

function getElementName(name){
    var determiner=name.substring(name.length-2,name.length)
    var name=null;
    if(determiner==="ft")       // left object
        {
        name=elementChildren(imgObj)[0].id.substring(0,elementChildren(imgObj)[0].id.length-5)
        }
    if(determiner==="ht")       // left object
        {
        name=elementChildren(imgObjRight)[0].id.substring(0,elementChildren(imgObjRight)[0].id.length-6)
        }
    return name;
    }


function doRestore(){
    console.log("imgObj: "+imgObj);
    console.log(elementChildren(imgObj)[0]);
    console.log("woh: "+imgObj.childNodes[0]);
//    elementChildren(imgObj)[1].style.width="50px";
//    elementChildren(imgObj)[1].style.height="50px";
//    imgObjRight.style.width="50px";
//    imgObjRight.style.height="50px";

    if(elementChildren(imgObjRight)[0]!=undefined)
        {
        document.getElementById("rightFinDestination").childNodes[0].style.cssText="height: 50px; width: 50px;"
        document.getElementById('rightObjects').appendChild(elementChildren(imgObjRight)[0]);
        }
    if(elementChildren(imgObj)[0]!=undefined)
        {
        document.getElementById("leftFinDestination").childNodes[0].style.cssText="height: 50px; width: 50px;"
        document.getElementById('leftObjects').appendChild(elementChildren(imgObj)[0]);
        }
    console.log("hel: "+elementChildren(imgObjRight));

    imgObj.style.top = '-60px';

    imgObjRight.style.top = '-60px';
    var btn=document.getElementById("submit").value="Drop";

    console.log("in restore...");
    
    document.getElementById("submit").disabled=true;
    document.getElementById("sliderLeft").value=0;
//    document.getElementById("leftMass").value=document.getElementById("sliderLeft").value; 
    document.getElementById("sliderRight").value=0;
//    document.getElementById("rightMass").value=document.getElementById("sliderRight").value; 
    
    var btn=document.getElementById("submit");
    callBubble("Pick an Object to Weight",120,70,-610,-363,0,30,0,0,26,0,"left");
    for(var i=0;i<document.getElementById("leftObjects").childNodes.length;i++)
        document.getElementById("leftObjects").childNodes[i].draggable=true;
    for(var i=0;i<document.getElementById("rightObjects").childNodes.length;i++)
        document.getElementById("rightObjects").childNodes[i].draggable=true;  
    if(document.getElementById("leftFinDestination").childNodes[0])
        document.getElementById("leftFinDestination").childNodes[0].draggable=true;
    if(document.getElementById("rightFinDestination").childNodes[0])
        document.getElementById("rightFinDestination").childNodes[0].draggable=true;
    leftMeterChange(0);
    rightMeterChange(0);
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
    env=getObjectName(env);
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