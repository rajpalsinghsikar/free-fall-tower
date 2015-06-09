//document.getElementById("submit").onclick = function fun(){
var can = document.getElementById('canvas');
var ctx = can.getContext('2d');
var x = 100, y = 10;
ctx.fillStyle = "black";
ctx.fillRect(700, 100, 100, 100);
/*var imageObj = new Image();
imageObj.src='images/ruler.png';
ctx.drawImage(imageObj, 10, 10);*/
draw();
//}
function draw() {
    //          java.lang.Thread.sleep(2000);
//    sleepFor(100);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(50,100,200,0.9)';
    ctx.fill();
    y += 2;
    if (y>=400)
        return;
    ctx.fillStyle = "rgba(34,45,223,0.9)";
    ctx.fillRect(0, 0, can.width, can.height);
    requestAnimationFrame(draw);
    //ctx.clearRect(0,0,can.width,can.height);
    }
function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}