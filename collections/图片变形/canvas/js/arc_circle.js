/**
 * Created by 杨凯凯 on 2015/7/29.
 */
function draw0(id) {
    var canvas = document.getElementById(id);

    if (canvas == null) {
        return false;
    }
    var context = canvas.getContext('2d');
    context.beginPath();
    //context.arc(200, 150, 100, 0, Math.PI * 2, true);
    //context.arc(200, 150, 100, 0, Math.PI, false);
    context.arc(400,400,20,Math.PI*2/4,Math.PI*2+Math.PI);

    //不关闭路径路径会一直保留下去，当然也可以利用这个特点做出意想不到的效果
    context.closePath();
    context.fillStyle = 'rgba(0,255,0,0.25)';
    context.fill();

}