/**
 * Created by Administrator on 2015-09-05.
 * 用于css3 实现的缓冲加载的样式
 */
;(function($){
    //全局
    $.extend({
        'loading':function(){
            //加载遮罩层
            var _loading = '<div class="loading">';
            //加载loading
            _loading += '<div class="spinner">';
            _loading += '<div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div>';
            _loading += '</div>';
            _loading += '</div>';
            $('body').append(_loading);
            //加载样式
            var _width = $(document).width();
            var _height = $(document).height();
            $('.loading').eq(0).css('width',_width);
            $('.loading').eq(0).css('height',_height);
        },
        'unloading':function(){
            $('.loading').eq(0).remove();
        }
    })
})(jQuery);