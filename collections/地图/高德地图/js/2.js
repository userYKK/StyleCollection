var data1 = [];

var map;
var markers = [];
var cluster;

$(function(){
    map = new AMap.Map("allmap", {
        resizeEnable: true,
        center:[121.47939,31.231236],
        zoom: 12,
        zooms:[11,14]
    });

    bindEvent();

    var points = create1();
    console.info(points);
    createMarker(points);

    addCluster();
});

//  事件绑定
function bindEvent(){
    // 缩放
    map.on("zoomchange", function (data) {
        console.info('zoomchange');
        var _zoom = map.getZoom();
        var center = map.getCenter();
        var limit = map.getLimitBounds(); // 这个是 null
        var limit1 = map.getBounds();

        console.info(center);
        console.info(11);
        console.info(limit);
        console.info(22);
        console.info(limit1);
    });

    //拖拽结束
    map.on("dragend", function (data) {
        console.info('dragend');
        var center = map.getCenter();
        var limit = map.getLimitBounds(); // 这个是 null
        var limit1 = map.getBounds();

        console.info(center);
        console.info(11);
        console.info(limit);
        console.info(22);
        console.info(limit1);
    });
}

// 设置聚合点
function addCluster(){

    var count  = markers.length;

    var _renderCluserMarker = function (context) {
        var factor = Math.pow(context.count / count, 1 / 18);
        var div = document.createElement('div');
        var Hue = 180 - factor * 180;
        var bgColor = 'hsla(' + Hue + ',100%,50%,0.7)';
        var fontColor = 'hsla(' + Hue + ',100%,20%,1)';
        var borderColor = 'hsla(' + Hue + ',100%,40%,1)';
        var shadowColor = 'hsla(' + Hue + ',100%,50%,1)';
        div.style.backgroundColor = bgColor;
        var size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20);
        div.style.width = div.style.height = size + 'px';
        div.style.border = 'solid 1px ' + borderColor;
        div.style.borderRadius = size / 2 + 'px';
        div.style.boxShadow = '0 0 1px ' + shadowColor;
        div.innerHTML = context.count;
        div.style.lineHeight = size + 'px';
        div.style.color = fontColor;
        div.style.fontSize = '14px';
        div.style.textAlign = 'center';
        context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2));
        context.marker.setContent(div);

        //console.info(div.innerHTML);
    };
    cluster = new AMap.MarkerClusterer(map,markers,{
        gridSize:60,        // 聚合计算时网格的像素大小，默认100
        minClusterSize:5,  // 聚合的最小数量。默认值为2，即小于2个点则不能成为一个聚合
        averageCenter:true,  //聚合点的图标位置是否是所有聚合内点的中心点
        renderCluserMarker:_renderCluserMarker
    });
    AMap.event.addListener(cluster, 'click', function(data){
        alert('聚合点被点击了')
    });

}

// 创建标记点
function createMarker(points){
    for(var i=0;i<points.length;i+=1){
        var tempMarker = new AMap.Marker({
            position: points[i],
            content: '<div style="background-color: hsla(180, 100%, 50%, 0.7); height: 24px; width: 24px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;">屏</div>',
            offset: new AMap.Pixel(-15, -15),
            extData: {id:1}
        });
        AMap.event.addListener(tempMarker, 'click', function(data){
            alert('marker 被点击了')
        });


        console.info(tempMarker.getExtData());
        markers.push(tempMarker)
    }
}

// 生成 1级数据
function create1(){
    var center = [121.47939,31.231236];
    var size = 20;
    var points = [];
    for (var i = 0; i < size; i++) {

        var _tempPoint = [];
        if(parseInt(Math.random() * 10) % 2){
            _tempPoint.push(center[0] + Math.random() / 100);
        }else{
            _tempPoint.push(center[0] - Math.random() / 100);
        }

        if(parseInt(Math.random() * 10) % 2){
            _tempPoint.push(center[1] + Math.random() / 100);
        }else{
            _tempPoint.push(center[1] - Math.random() / 100);
        }
        points.push(_tempPoint);
    }

    // 添加10个相同的
    for (var i = 0; i < 5; i++) {
        points.push(center);
    }

    for (var i = 1; i < 11; i++) {
        var _tempPoint = [];

        _tempPoint.push(center[0] + Math.random() / 500 );
        _tempPoint.push(center[1] + Math.random() / 500 );
        points.push(_tempPoint);
    }

    return points;
}