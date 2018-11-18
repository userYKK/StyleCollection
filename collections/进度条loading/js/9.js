/**
 * Created by kk on 2018/3/17.
 */

var _loopNum = 0;
var _tempLoop = 0;
var _temp_imgWidth = 0;
var _temp_imgHeight = 0;
var _temp_ok = false;

var _temp_img;

$(function () {
    var _width = $(window).width();
    var _height = $(window).height();

    $('#personal_content').css({
        width: _width,
        height: _height
    });


    // 图片
    var num = 6000;

    $('.word').text(num);

    _temp_img = new Image();
    _temp_img.src = "imgs/9/wheel2.png";

    var _temp_img2 = new Image();
    _temp_img2.src = "imgs/9/wheel1.png";

    _temp_img.onload = function () {

        _temp_img2.onload = function () {

            // 加载 img
            $('#content').find('img').get(0).src = '/StyleCollection/collections/进度条loading/imgs/9/wheel1.png';

            var _imgWidth = $('#content').find('img').eq(0).width();
            var _imgHeight = $('#content').find('img').eq(0).height();

            _loopNum = num;
            _temp_imgWidth = _imgWidth;
            _temp_imgHeight = _imgHeight;

            $('#mycanvas').css({
                'width': _imgWidth,
                'height': _imgHeight
            });

            _temp_ok = true;

            loop();
            //draw(_temp_imgWidth, _temp_imgHeight, _loopNum);

        };
    };


});
var requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame || setAnimationFuns;
})();


function loop(){
    requestAnimFrame( loop );
    if(_temp_ok){
        if(_tempLoop < _loopNum){
            _tempLoop += 100;
            draw(_temp_imgWidth, _temp_imgHeight, _tempLoop);
        }else{
            _temp_ok = false;
        }
    }

}

// 绘制
function draw(width, height,num) {
    var _canvas = document.getElementById("mycanvas");

    _canvas.width = width;
    _canvas.height = height;
    var _context = _canvas.getContext("2d");
    //裁剪画布从(0，0)点至(50，50)的正方形
    /*    _context.beginPath();
     _context.moveTo(0,0);
     _context.lineTo(100, 0);
     _context.lineTo(100, 200);
     _context.lineTo(200, 200);
     _context.lineTo(0,200);
     _context.closePath();
     _context.lineWidth=5;       //线条宽度
     _context.strokeStyle="red";   //线条颜色
     _context.clip();
     _context.save();*/


    getPoint(width, height, _context,num);

    /*

     var yImg = new Image();
     yImg.src = "/outerproject/AudiPage/images/personal/wheel2.png";
     */
    _context.drawImage(_temp_img, 0, 0, width, height);

    /*  _temp_ok = false;
     _temp_img.onload = function () {
     //插入图片
     // _context.drawImage(yImg,0,0,width,height);

     _context.drawImage(yImg, 0, 0, width, height);


     /!*给某一个区域插入背景图片,并设置平铺方式*!/
     // var bg=_context.createPattern(yImg,"repeat");
     // var bg=_context.createPattern(yImg,"contain");
     // _context.fillStyle=bg;
     // _context.fillRect(0,0,width,height);

     _context.save();
     _temp_ok = true;
     };*/

}

// 根据比例获取点的信息
function getPoint(width, height, context, num) {
    var total = 9999.0;
    // 计算半径
    var r = width / 2;
    console.info(r);

    // 计算圆心
    var radina = Math.acos((width / 2 - (width - height)) / (width / 2));
    console.info(radina);


    var angle = Math.floor(180 / (Math.PI / radina));//将弧度转换成角度
    console.info(angle);


    // 总弧长
    var all = Math.PI * width;
    // 当前的度数
    var currentRadian = num;
    var a1 = (currentRadian / total) * 2 * Math.PI;
    var angle1 = Math.floor(180 / (Math.PI / a1));//将弧度转换成角度
    console.info(angle1);


    // 绘制弧度
    // 计算圆心
    var x = width / 2;
    var y = width / 2;


    context.lineWidth = 5;
    context.strokeStyle = "green";

    /*    var startRadian = 2 * Math.PI - (Math.PI / 2 - radina);
     var endRadian = Math.PI;*/



    var startRadian = getRads(-90);
    //var endRadian = getRads(408);  // + 48

    var totalRadian = 276;
    var _end1 = totalRadian * currentRadian / total;
    var _start1 = 132;
    var endRadian = getRads(_start1 + _end1);

    context.arc(x, y, x + 60, -startRadian, endRadian);
    context.stroke();
    context.lineTo(x, y);

    context.clip();
    context.save();
}
// 角度换成 弧度
function getRads(degrees) {
    return (Math.PI * degrees) / 180;
}
// 弧度换成角度
function getDegrees(rads) {
    return (rads * 180) / Math.PI;
}
