/**
 * Created by ykk on 2016/8/25.
 */
var _interval;
var _left = 0;
var all;
var _width;
;(function ($) {
    $.extend({
        'run':function(){
            _interval = setInterval(function(){
                $.move();
                _left -= 14;
            },100);
        },
        'move':function(){
            console.info('move..');
            all = $('.scroll').eq(0).find('div');
            all.css('left',_width + _left);
            if(Math.abs(all.eq(0).offset().left) >= all.eq(0).width()){
                $('.scroll').eq(0).append(all.eq(0).clone(true));
                all.eq(0).remove();
                _left = 0;
            }
        }
    });
    $.fn.extend({
        'create':function(){ // 创建个数
            _width = $(this).width() * 0.98;
            var _height = $(this).height() * 0.98;
            var div1 = $('<div></div>');
            div1.css({
                width:_width ,
                height:_height,
                border:'1px solid blue',
                position:'relative',
                'margin':'1px',
                float:'left',
                left:_width
            });
            var div2 = $('<div></div>');
            div2.css({
                width: _width,
                height: _height,
                border:'2px solid green',
                position:'relative',
                'margin':'1px',
                float:'left',
                left:_width
            });

            var parent = $('<div class="scroll"></div>');
            parent.css({
                width:_width * 3 ,
                height:_height,
                position:'relative',
                left:-_width
            });
            //absolute
            parent.append(div1);
            parent.append(div2);

            $(this).append(parent);
        }
    })
})(jQuery);