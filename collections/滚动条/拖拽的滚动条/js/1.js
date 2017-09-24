/**
 * Created by 杨凯凯 on 2015/9/10.
 */
$(function(){
    //添加内容
    addContent();

    //添加事件
    bindDrop();
});

//添加内容
function addContent(){
    var _div = '';
    for(var i = 0;i<20;i++){
        _div += '<div class="smallDiv">'+i+'</div><hr/>';
    }
    $('.scrollDiv').eq(0).append(_div);
}

function bindDrop(){
    bindMouse('scrollDiv','smallDiv');
}
//下拉的鼠标的事件
function bindMouse(parentClass,childClass) {
    //添加鼠标的悬停事件
    $('.' + parentClass).hover(function (e) {
        e.stopPropagation();
        var _parent = $(this);
        var _block = _parent.find('.' + childClass);
        var _hr = _parent.find('hr').eq(0).outerHeight(true);
        //需要每一个都去计算, _allDrop就是内容比容器多出的长度
        var _allDrop = _parent.height();
        for(var i = 0;i<_block.size();i++){
            _allDrop -= (_block.eq(i).height() + _hr);
        }
        //内容长度不够，怎么不显示滚动条
        if (_allDrop < 0) {
            //创建div,之前先移除
            $('body').find('.dropDown').remove();
            var _dropDown = '<div class="dropDown"><div></div></div>';
            $(this).append(_dropDown);
            var _obj = _parent.find('.dropDown').eq(0);
            var _dropDiv = _obj.find('div').eq(0);
            var _wheel = 0;//鼠标滚动的临时变量
            //设置高度
            _obj.height(_parent.height());
            //设置鼠标滚动事件
            _parent.bind('mousewheel', function(event) {
                event.preventDefault();
                //滚动向下是负
                _wheel = event.deltaY * event.deltaFactor;
                var _dropHeight = _parent.height() - _dropDiv.height();
                //滚动条高度和内容高度的比例
                var _percent = _allDrop / _dropHeight;
                dropDownContent(_block.eq(0), _dropDiv ,_allDrop,_percent,_wheel,_dropHeight);
            });
            //设置更换滚动条的图片
            _dropDiv.hover(function(e){
                e.stopPropagation();
                $(this).addClass('dropDownCenter');
            },function(e){
                e.stopPropagation();
                //判断元素是否在被拖拽
                if(!$(this).hasClass('ui-draggable-dragging')) {
                    $(this).removeClass('dropDownCenter');
                }
            });
            //可以拖拽,限制y轴 父类运动
            _dropDiv.draggable({
                axis: "y",
                containment: "parent",
                drag: function () {
                    //根据比例设置大小
                    var _percent = _allDrop / (_parent.height() - $(this).height());
                    dropDownContent(_block.eq(0), $(this),_allDrop,_percent);
                },
                start:function(){
                    $(this).addClass('dropDownCenter');
                },
                stop:function(){
                    $(this).removeClass('dropDownCenter');
                }
            });
        }
    }, function (e) {
        e.stopPropagation();
        $(this).parent().find('.' + childClass).eq(0).stop(true).animate({
            'margin-top': 0
        }, 200);
        //$(this).find('.dropDown').remove();
        $(this).unbind('mousewheel');
    });
}
//内容滚动的计算
function dropDownContent(block,dropObj,allDrop,percent,wheel,dropHeight){
    var _topA = dropObj.position().top;
    var _top = parseInt(block.css('margin-top'));
    if(wheel){
        //控制滚动的范围
        var dropH = _topA - wheel;
        var blockH = _top - wheel* percent;
        if((_topA-wheel) <= 0){ //不超过顶部
            dropH = 0;
            blockH = 0;
        }
        if((_topA-wheel) >= dropHeight){ //不在底部出去
            dropH = dropHeight;
            blockH = allDrop;
        }
        //鼠标滚动
        dropObj.css('top',dropH);
        block.css('margin-top',blockH);
    }else {
        //拖拽移动的top值
        if (_top < allDrop) {
            return;
        } else {
            block.animate({
                'margin-top': _topA * percent
            }, 10);
        }
    }
}