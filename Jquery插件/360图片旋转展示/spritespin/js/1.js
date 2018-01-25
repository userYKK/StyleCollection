/**
 * Created by kk on 2018/1/25.
 */

var fobj = null;
$(function () {
    initSprite();

});


// 初始化组件
function initSprite(){
    var frames = [
        "images/rad_zoom_001.jpg",
        "images/rad_zoom_002.jpg",
        "images/rad_zoom_003.jpg",
        "images/rad_zoom_004.jpg",
        "images/rad_zoom_005.jpg",
        "images/rad_zoom_006.jpg",
        "images/rad_zoom_007.jpg",
        "images/rad_zoom_008.jpg",
        "images/rad_zoom_009.jpg",
        "images/rad_zoom_010.jpg",
        "images/rad_zoom_011.jpg",
        "images/rad_zoom_012.jpg",
        "images/rad_zoom_013.jpg",
        "images/rad_zoom_014.jpg",
        "images/rad_zoom_015.jpg",
        "images/rad_zoom_016.jpg",
        "images/rad_zoom_017.jpg",
        "images/rad_zoom_018.jpg",
        "images/rad_zoom_019.jpg",
        "images/rad_zoom_020.jpg",
        "images/rad_zoom_021.jpg",
        "images/rad_zoom_022.jpg",
        "images/rad_zoom_023.jpg",
        "images/rad_zoom_024.jpg",
        "images/rad_zoom_025.jpg",
        "images/rad_zoom_026.jpg",
        "images/rad_zoom_027.jpg",
        "images/rad_zoom_028.jpg",
        "images/rad_zoom_029.jpg",
        "images/rad_zoom_030.jpg",
        "images/rad_zoom_031.jpg",
        "images/rad_zoom_032.jpg",
        "images/rad_zoom_033.jpg",
        "images/rad_zoom_034.jpg"
    ];


    /*
         在源码的 Spin.behaviors.drag 中添加  $this.spritespin("animate", true);  可以实现拖拽完图像以后图片继续旋转
     */
    fobj = $("#360frames").spritespin({
        width: 480,                  // 实际宽
        height: 327,                 // 实际高
        frames: frames.length,       // 帧总数
        behavior: "drag",
        module: "360",
        sense: -1,
        source: frames,
        animate: true,
        loop: true,
        frameWrap: true,
        frameStep: 1,
        frameTime: 60,
        enableCanvas: true,

        stopFrame: 0    //停止这个帧的动画,如果循环是禁用的
    });
}


// 事件绑定
function bindEvent(){
    $('#btn1').bind('click',function(){
        fobj.start();
    })
}

