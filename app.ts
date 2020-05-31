var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mycanvas");
var context: CanvasRenderingContext2D = canvas.getContext("2d");
var smoke = new Smoke(canvas, context, 250, 10, 100);//canvas,context,startx,starty,no of particles to start
//default settings. one can customize
//smoke.radiusmax = 15;
//smoke.radiusmin = 3;
//smoke.vxrange = 1;
//smoke.vymax = 5;
//smoke.vymin = 1;
smoke.color = 'red';

runsmoke();


function runsmoke()
{
    smoke.start();
    
    //window.requestAnimationFrame(runsmoke);
}

canvas.addEventListener("mousemove", move, false);
function move(e: MouseEvent) {
    smoke.x = e.clientX;
    smoke.y = e.clientY;
}