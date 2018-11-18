/**
 * Created by kk on 2018/5/7.
 */
$(function () {
    // 百度地图API功能
    var map = new BMap.Map("allmap");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(118.871327,32.151263), 12);  // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.addControl(new BMap.NavigationControl({enableGeolocation:true}));
    map.addControl(new BMap.OverviewMapControl());
    map.setCurrentCity("南京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

    //===================
    var xy = [
        {'x':118.777882,'y':32.059839},
        {'x':118.777882,'y':32.059839},
        {'x':118.457882,'y':32.049839},
        {'x':118.62882,'y':32.039839},
        {'x':118.3882,'y':32.029839},
        {'x':118.6666,'y':32.019839},
        {'x':118.577882,'y':32.051839},
        {'x':118.377882,'y':32.052839},
        {'x':118.277882,'y':32.053839},
        {'x':118.177882,'y':32.054839},
        {'x':118.077882,'y':31.055839},
        {'x':118.795394,'y':32.027002}
    ];
    var markers = [];
    var pt = null;
    for (var i in xy) {
        pt = new BMap.Point(xy[i].x , xy[i].y);
        markers.push(new BMap.Marker(pt));
    }
    //最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
    var markerClusterer = new BMapLib.MarkerClusterer(map,
        {
            markers:markers,
            girdSize : 100,
            styles : [{
                url:'./img/red.png',
                size: new BMap.Size(92, 92),
                backgroundColor : '#E64B4E'
            }],
        });
    markerClusterer.setMaxZoom(13);
    markerClusterer.setGridSize(100);

});