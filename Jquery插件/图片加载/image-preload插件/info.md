>     功能

----

1. 实现了 image-preload插件，对图片进行了预加载，并且可以获取每张图片是否完成加载
   <small>---- 其中each遍历第一个参数的url数组或者直接是img对象</small>  
   <small>---- all 是全部加载完毕</small>  
   <small>---- $(this).data('loaded')?'success':'error' 判断是否加载成功</small>
   
>     问题
 
 ---
 
1. 对鼠标的滚动事件进行，来选择性质的预加载图片
2. 结合瀑布流实现