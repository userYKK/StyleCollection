/**
 * author: ykk
 * date: 2015-5-20
 *  对复选框的全选，反选等，进行了局部的插件
 */

//自定义插件
;(function($){
    $.extend({
        'checkBoxAll':function(divCheckbox,selectAll,inverseSel){ //divCheckbox是需要的复选框，selectAll是全选按钮,inverseSel是反选按钮
            //被选中的数量
            var count = 0;
            //对复选框的初始化
            $(".col-md-7 :checkbox").attr("checked", false);;
            //全选丶全不选
            selectAll.click(function() {
                if($(this).prop("checked")){
                    divCheckbox.not(':disabled').prop("checked", true);
                    count = divCheckbox.size();
                }else{
                    divCheckbox.not(':disabled').prop("checked", false);
                    count = 0;
                }
                inverseSel.attr("checked", false);
            });
            //反选
            inverseSel.click(function() {
                divCheckbox.each(function(i) {
                    $(this).not('disabled').prop("checked",!$(this).prop("checked"));
                });
                selectAll.attr("checked", false);
                inverseSel.attr("checked", true);
                count = divCheckbox.size() - count;
            });
            //所有筛选结果选中，让全选按钮选中

            divCheckbox.on('click',function(){
                if($(this).prop("checked")){
                    count++;
                    if(count == divCheckbox.size()){
                        selectAll.prop("checked", true);
                    }
                }else{
                    count--;
                    //让全选按钮取消
                    if(selectAll.prop("checked")){
                        selectAll.prop("checked", false);
                    }
                }
//				console.info("ykk111");
//				console.info(count);
            });
        }
    })
})(jQuery);