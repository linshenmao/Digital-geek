// 极客圈
/**
 * debounce
 * @param {integer} milliseconds This param indicates the number of milliseconds
 *     to wait after the last call before calling the original function.
 * @param {object} What "this" refers to in the returned function.
 * @return {function} This returns a function that when called will wait the
 *     indicated number of milliseconds after the last call before
 *     calling the original function.
 */
Function.prototype.debounce = function (milliseconds, context) {
    var baseFunction = this,
        timer = null,
        wait = milliseconds;

    return function () {
        var self = context || this,
            args = arguments;

        function complete() {
            baseFunction.apply(self, args);
            timer = null;
        }

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(complete, wait);
    };
};

/**
* throttle
* @param {integer} milliseconds This param indicates the number of milliseconds
*     to wait between calls before calling the original function.
* @param {object} What "this" refers to in the returned function.
* @return {function} This returns a function that when called will wait the
*     indicated number of milliseconds between calls before
*     calling the original function.
*/
Function.prototype.throttle = function (milliseconds, context) {
    var baseFunction = this,
        lastEventTimestamp = null,
        limit = milliseconds;

    return function () {
        var self = context || this,
            args = arguments,
            now = Date.now();

        if (!lastEventTimestamp || now - lastEventTimestamp >= limit) {
            lastEventTimestamp = now;
            baseFunction.apply(self, args);
        }
    };
};
/*!
 * zA7n, v1.0, MIT License
 * bryzgalovd@gmail.com
 */
(function ($, window) {
    'use strict';
    function zA7n($ul, opt) {
        var ul_width,
            $li = $('li', $ul),
            li_length,
            start_width;

        li_length = $li.length;

        function setVars () {
            ul_width = $ul.width();
            start_width = ul_width / li_length;
            $li.css({'width': start_width + 'px'});
        }
        
        $li.each(function () {
            var $item = $(this),
                item_width;

            item_width = $item.width();

            $item.on({
                'mouseover': function (event) {
                    $li.css({'width': ((ul_width - item_width) / (li_length - 1)) + 'px'});
                    $item.css({'width': item_width + 'px'});
                },
                'mouseout': function (event) {
                    $li.css({'width': start_width + 'px'});
                }
            });
        });
        
        setVars();
        
        $(window).on('resize', function () {
            setVars();
        }.debounce(150));
    }

    $.fn.zA7n = function (o) {
        var opt = $.extend({}, o);
        return this.each(function () {
            var $ul = $(this);
            if ($ul.data('zAc6n')) {
                return;
            }
            zA7n($ul, opt);
            $ul.data('zAc6n', 1).addClass('_create');
        });
    };
}(jQuery, this));

$(window).load(function () {
    $('#zA7n').zA7n({});
});

// 返回顶部
window.onload=function()
{
    var obtn=document.getElementById('btn');
    var timer=null;
    var clientHeight=document.documentElement.clientHeight/2;
    window.onscroll=function()
    {
        var ostop=document.documentElement.scrollTop||document.body.scrollTop;
        if(ostop>=clientHeight)
        {
            obtn.style.display='block';
        }else       
        {
            obtn.style.display='none';
        }
    }
    obtn.onclick=function()
    {
        timer=setInterval(function()
        {
            var ostop=document.documentElement.scrollTop||document.body.scrollTop;
            var speed=ostop/5;
            document.documentElement.scrollTop=document.body.scrollTop=ostop-speed;
            if(ostop==0)
            {
                clearInterval(timer);
            }
        },20);
    }       
}

// 汉堡包按钮点击切换样式
$(function(){
      $(".navbar-toggle").click(function(){
        $(this).toggleClass("is-active");
      });
    });