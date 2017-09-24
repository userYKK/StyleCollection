/**
 * Created by ykk on 2015-11-23.
 */
;(function($){
    //生成全局的计数变量
    cca_loading_num = 0;
    $.extend({
        //img的loading效果
        'cca_loading_img':function(date,op,obj){ //stamp是时间戳 obj是遮罩的父类,op--1是全局的，0表示局部
            var _stamp = date.getMilliseconds();
            cca_loading_num++;
            var _id = 'cca_loading_img'+cca_loading_num;
            switch(op){
                case 0:
                    break;
                case 1:
                    var _imgHref = 'imgs/loading.gif';
                    var _contain = $('<div id="'+_id+'"><div class="spinner"><div><img src="'+_imgHref+'" width="30px" height="30px"/>加载中，请稍候...</div></div></div>');
                    //计算高度和位置
                    var _width = $(document).width();
                    var _height = $(document).height();
                    _contain.css({
                        'width':_width,
                        'height':_height,
                        'background': 'none repeat scroll 0 0 rgba(255,255,255,0.5)',
                        'position':'fixed',
                        'top':0,
                        'left':0,
                        'z-index':1051
                    });
                    //给loading设定位置
                    _contain.find('.spinner').eq(0).css({
                        'border':'1px solid #8CBEDA',
                        'color':'#37a',
                        'font-size':'12px',
                        'font-weight':'bold',
                        'opacity':0.1,
                        'width':'183px',
                        'margin':'0 auto'
                    }).find('div').eq(0).css({
                        'width':'181px',
                        'height':'50px',
                        'line-height':'50px',
                        'border':'2px solid #D6E7F2',
                        'background':'#fff',
                        'padding-left':'5px'
                    }).find('img').eq(0).css({
                        'margin-right':'15px'
                    });
                    $('body').append(_contain);
                    //出现加特效
                    _contain.find('.spinner').eq(0).animate({
                        'margin-top':'300px',
                        'opacity':'1'},300);
                    var _result = {'id':_id,'stamp':_stamp};
                    return _result;
                default :
                    break;
            }
        },
        'cca_close_img':function(date,result){ //stamp是时间戳, 对制定的id进行删除
            var _stamp = date.getMilliseconds()-result.stamp;
            if(_stamp <= 1000){
                _stamp = 800;
            }else{
                _stamp = 0;
            }
            $('#'+result.id).find('.spinner').eq(0).delay(_stamp).animate({
                'margin-top':'0px',
                'opacity':'0'
            },200).queue(function(next) {
                $(this).parent().remove();
            });
        }
    });
})(jQuery);