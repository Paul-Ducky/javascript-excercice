// empty canvas //
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d")

//initialise on fullscreen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// allow resizing sizes! --> does delete drawing :o //
window.addEventListener("resize",function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})
// variables //
let drawing = false;



//functions //
function startPos(event){
    drawing = true;
    draw(event)
}
function endPos(){
    drawing = false;
    context.beginPath();
}
function draw(event){
    if (drawing!==true){
        return;
    }
    context.lineWidth = 30;
    context.lineCap = "round"

    context.lineTo(event.clientX, event.clientY);
    context.stroke();
    context.beginPath();
    context.moveTo(event.clientX, event.clientY);
}

// event list //
canvas.addEventListener("mousedown",startPos);
canvas.addEventListener("mousemove",draw)
canvas.addEventListener("mouseup",endPos);

