class Circle {
    constructor(vx, vy, initialx, initialy) {
        this.vx = vx;
        this.vy = vy;
        this.x = initialx;
        this.y = initialy;
        this.alpha = 255;
    }
    draw() {
        this.update();
    }
    update() {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        this.alpha *= 0.99;
        //console.log(this.x + " " + this.y)
    }
    get Alpha() {
        return (this.alpha);
    }
}
class Smoke {
    constructor(canvas, context, x, y, noofparticals) {
        this.container = [];
        this.context = context;
        this.x = x;
        this.y = y;
        //this.x = 300;
        //this.y = 300;
        this.no = noofparticals;
        this.canvas = canvas;
        this.vxrange = 1;
        this.vymin = 1;
        this.vymax = 5;
        this.color = 'white';
        //this.creat();
    }
    random(max, min) {
        return (Math.random() * (max - min) + min);
    }
    start() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //this.context.beginPath();
        this.context.rect(0, 0, canvas.width, canvas.height);
        this.context.fillStyle = 'black';
        this.context.fill();
        for (var i = 1; i <= this.no; i++) {
            var vy = this.random(this.vymin, this.vymax);
            var vx = this.random(-this.vxrange, this.vxrange);
            var circle = new Circle(vx, vy, this.x, this.y);
            this.container.push({ circle: circle });
        }
        var canvasData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        for (var i = 0; i < this.container.length; i++) {
            this.container[i].circle.draw();
            var index = (Math.round(this.container[i].circle.x) +
                Math.round(this.container[i].circle.y) * this.canvas.width) * 4;
            canvasData.data[index + 0] = 255;
            canvasData.data[index + 1] = 0;
            canvasData.data[index + 2] = 0;
            var alpha = Math.round(this.container[i].circle.Alpha);
            canvasData.data[index + 3] = alpha; //this.alpha;
        }
        this.context.putImageData(canvasData, 0, 0);
        for (var i = 0; i < this.container.length; i++) {
            if (this.container[i].circle.Alpha < 50) {
                this.container.splice(i, 1);
                i--;
            }
        }
        window.requestAnimationFrame(this.start.bind(this));
    }
}
//# sourceMappingURL=smoke.js.map