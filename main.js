canvas=document.getElementById("my_Canvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
mouseEvent="Down";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="Up";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="Leave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
console.log(e);
currentpositionmousex=e.clientX-canvas.offsetLeft;
currentpositionmousey=e.clientY-canvas.offsetTop;
if(mouseEvent=="Down"){ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(currentpositionmousex,currentpositionmousey,radius,0,2*Math.PI);
    ctx.stroke();

}
}
