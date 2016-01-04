function callBubble(text,width,height,top,marginLeft,marginRight,paddingTop,paddingRight,paddingBottom,paddingLeft,reverse,textAlign){
    bubble.innerHTML=text;
    bubble.style.width=width + "px";
    bubble.style.height=height + "px";
    bubble.style.top=top + "px";
    bubble.style.marginLeft=marginLeft + "px";
    bubble.style.marginRight=marginRight + "px";
    bubble.style.paddingLeft = paddingLeft + "px";
    bubble.style.paddingRight = paddingRight + "px";
    bubble.style.paddingTop = paddingTop + "px";
    bubble.style.paddingBottom = paddingBottom + "px";
    bubble.style.textAlign=textAlign;
    if(reverse==0)
        bubble.style.backgroundImage="url(images/bubble.png)";
    else if(reverse==1)
        bubble.style.backgroundImage="url(images/bubble2.png)";
    else if(reverse==2)
        bubble.style.backgroundImage="url(images/bubbleDown.png)";
}

function destroyBubble(){
    bubble.innerHTML="";
    bubble.style.width="0px";
    bubble.style.height="0px";
    bubble.style.top="0px";
    bubble.style.margin="0px 0px 0px 0px";
    bubble.style.padding =  "0px 0px 0px 0px ";
}