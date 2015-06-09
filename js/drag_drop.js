function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
//  document.getElementById("text").innerHTML=ev.target.id;
    var data = ev.dataTransfer.getData("text");
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);

    if (data==="drag1" || data==="drag2" || data==="drag3" || data==="drag4"){
            console.log("in 1");
        ev.target.appendChild(document.getElementById(data));
        var ob1=document.getElementById("drag1").setAttribute("draggable",false);  
        var ob2=document.getElementById("drag2").setAttribute("draggable",false);
        var ob3=document.getElementById("drag3").setAttribute("draggable",false);
        var ob4=document.getElementById("drag4").setAttribute("draggable",false);
        document.getElementById(data).setAttribute("draggable",true);
//       var target=((data==="drag1")?"drag1":((data==="drag2")?"drag2":((data==="drag3")?"drag3":"drag4")));
//    console.log("target: "+target);
//    var ob5=document.getElementById(ev.target.id).setAttribute("draggable",true);
//    console.log(document.getElementById("div1"));
//    var target=((data===ob1)?ob1:((data===ob2)?ob2:(data===ob3)?ob3:ob4));
    }
    else if (data==="drag11" || data==="drag22" || data==="drag33" || data==="drag44"){
        ev.target.appendChild(document.getElementById(data));
        var ob1=document.getElementById("drag11").setAttribute("draggable",false);  
        var ob2=document.getElementById("drag22").setAttribute("draggable",false);
        var ob3=document.getElementById("drag33").setAttribute("draggable",false);
        var ob4=document.getElementById("drag44").setAttribute("draggable",false);
        document.getElementById(data).setAttribute("draggable",true);
    }
    else
    {;}
}