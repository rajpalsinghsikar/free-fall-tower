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
        console.log("in l");
        imgObj.style.top = parseInt(imgObj.style.top) + speed + 'px';
        setTimeout(moveDown,60);
        }
    else
        {
        console.log("obj: "+elementChildren(imgObj)[1].src.substring(30,elementChildren(imgObj)[1].src.length-4));
        console.log("mass: "+document.getElementById("sliderLeft").value);

        console.log("env: "+getEnv());
        }
}

function moveDownRight(){
    if(parseInt(imgObjRight.style.top)<420)
        {
        console.log("in r");
        imgObjRight.style.top = parseInt(imgObjRight.style.top) + speedRight + 'px';
        setTimeout(moveDownRight,60);
        }
    else{
        console.log(elementChildren(imgObjRight)[2].src.substring(30,elementChildren(imgObj)[1].src.length-4));
        console.log("mass: "+document.getElementById("sliderRight").value);
        console.log("env: "+getEnv());
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
    elementChildren(imgObj)[1].width="50px";
    elementChildren(imgObj)[1].height="50px";
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