/**
 * Created by zhaopenghodoman on 14-10-5.
 */

define(['jquery'],function($){
    function Mhwindow(){
        this.cfg ={
            title:'美婚照照',
            width:500,
            height:300,
            content:"",
            handler4AlertBtn:null,
            handler4CloseBtn:null,
            hasClosebBtn:false,
            hasMask:true
        }
    }
    Mhwindow.prototype={
        alert:function(cfg){
            var CFG = $.extend(this.cfg,cfg);
            var boundingBox = $('<div class="window_boundingBox">' +
                '<div class="window_header">'+CFG.title+'</div>' +
                '<div class="window_body">'+CFG.content+'</div>' +
                '<div class="window_footer"><input type ="button" value="确定"></div>'+
                '</div>');
            boundingBox.appendTo("body");
//            boundingBox.html(CFG.content);
            var btn =boundingBox.find('.window_footer input');
//            btn.appendTo(boundingBox);
            btn.click(function(){
                CFG.handler&&CFG.handler();
                boundingBox.remove();
            });

//            $.extend(this.cfg,cfg);
            boundingBox.css({
                width:CFG.width+'px',
                height:CFG.height+'px',
                left:(CFG.x||(window.innerWidth-this.cfg.width)/2)+'px',
                top:(CFG.y||(window.innerHeight-this.cfg.height)/2)+'px'
            });
            if(CFG.hasCloseBtn){
                var closeBtn =$('<span class="window_closeBtn">X</span>');
                closeBtn.appendTo(boundingBox);
                closeBtn.click(function(){
                    boundingBox.remove();
                })
            }
        }
    }

    return {
        Mhwindow:Mhwindow
    }
})