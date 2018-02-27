/**
 * Created by kk on 2018/2/27.
 */
var textSize = 6;
var text0 = "Hello";
var text1 = "World";

var width = 550;
var height = 400;
var fps = 60;

var canvas = document.createElement("canvas");
// canvas.style.background = "black";
var ctx = canvas.getContext("2d");
canvas.width = width;
canvas.height = height;

var mouse = new Vector();
var textPoints = [];
var particles = [];
var halfTextSize = textSize * .4;

window.onload = function () {
    document.body.appendChild(canvas);
    document.body.appendChild(document.createElement("div")).innerHTML = "please move the mouse";
    initTextPoints(textSize);
    initParticles();
    setInterval(update, 1000 / fps);
}

function update() {
    ctx.save();
    ctx.globalAlpha = .2;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
    for (var i = 0, l = particles.length; i < l; i++) {
        particles[i].draw();
        particles[i].update();
    }
}

function initTextPoints(n) {
    var n = n || 4;
    ctx.font = "bold 12px serif"
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(text0, 0, 0, width);
    ctx.fillText(text1, 0, 25, width);
    var w = Math.max(ctx.measureText(text0).width, ctx.measureText(text0).width);

    var offsetX = (width - w * n) >> 1;
    var offsetY = (height - 28 * n) >> 1;

    textPoints = [];
    var data = ctx.getImageData(0, 0, width, height).data;
    for (var i = 0, wl = width * 4; i < data.length; i += 4) {
        if (data[i + 3] > 100) {
            x = (i % wl) / 4;
            y = parseInt(i / wl)
            textPoints.push([x * n + offsetX, y * n + offsetY]);
        }
    }
}


var Particle = function (x, y) {
    this.pos = new Vector(x, y);
    this.target = new Vector(x, y);
    this.color = "#f96";
    this.angle = 0;
    this.angleV = 0;
    this.v = new Vector();
    this.a = new Vector();
    this.move = false;
};

Particle.prototype = {
    draw: function () {
        ctx.save();
        ctx.fillStyle = "hsl(" + this.color + ",50%,50%)"
        ctx.translate(this.pos.x, this.pos.y);
        ctx.rotate(this.angle);
        ctx.fillRect(-halfTextSize, -halfTextSize, halfTextSize * 2, halfTextSize * 2);
        ctx.restore();
    },
    update: function () {

        this.angle += this.angleV;
        this.a = this.target.minusNew(this.pos);
        this.a.scale(.05);

        var ma = mouse.minusNew(this.pos);
        if (ma.getLength() < 40) {
            ma.scale(.1);
            ma.rotate(.1);
            this.pos.minus(ma);
            return;
        }

        this.color += 4;
        this.color = this.color % 360;
        this.move = true;
        this.v.plus(this.a);
        this.pos.plus(this.a);

    },
    init: function () {
        this.pos.x = Math.random() * width;
        this.pos.y = Math.random() * height;
        this.angleV = -.5 + Math.random();
        this.color = 1;
    }
};


function initParticles() {
    var p;

    // 控制每一个点从初始点 移动到指定 字体位置的时间
    textPoints.forEach(function (arr, i) {
        setTimeout(function () {
            p = new Particle(arr[0], arr[1]);
            p.init();
            p.color = i;
            particles.push(p);
        }, i * 10);
    });
}

canvas.onmousemove = function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
};

canvas.ontouchmove = function (e) {
    e.preventDefault();
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
};

canvas.onmouseout = function () {
    mouse.reset(1000, 1000);
}

canvas.ontouchend = function () {
    e.preventDefault();
    mouse.reset(1000, 1000);
}