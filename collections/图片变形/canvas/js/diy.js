/**
 * Created by 杨凯凯 on 2015/7/29.
 */
function doIt(id){
    var canvas = document.getElementById(id);

    if (canvas == null) {
        return false;
    }
    var context2D =canvas.getContext("2d");
    var pic = new Image();
    pic.src ="./img/login.jpg";
    context2D.drawImage(pic, 50, 50, 115, 250);



    context2D.beginPath();
    context2D.strokeStyle= "#ff0000";
    context2D.moveTo(50,300);
    context2D.lineTo(50,50);
    context2D.arcTo(100,100, 200, 50, 100);
    context2D.lineTo(165,300);

    context2D.closePath();
    context2D.stroke();
    context2D.clip();
    //var bg = context2D.createPattern(pic,'repeat');
    //context2D.fillStyle = bg;
    //context2D.fill();

}
