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
}

function moveDownRight(){
    if(parseInt(imgObjRight.style.top)<420)
        {
        console.log("in r");
        imgObjRight.style.top = parseInt(imgObjRight.style.top) + speedRight + 'px';
        setTimeout(moveDownRight,60);
        }
}
var speedRight;
var speed;
window.onload =init;

function dropObject(){
    speed=5;
    speedRight=2;
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
    document.getElementById('leftObjects').appendChild(elementChildren(imgObj)[1]);
    document.getElementById('rightObjects').appendChild(elementChildren(imgObjRight)[2]);

    console.log(elementChildren(imgObjRight));
    imgObj.width="50px";
    imgObj.height="50px";
    imgObj.style.top = '15px';

    imgObjRight.style.width="50px";
    imgObjRight.style.height="50px";
    imgObjRight.style.top = '0px';
    var btn=document.getElementById("submit").value="reset";
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

