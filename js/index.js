/**
 * Created by Administrator on 2016/9/5.
 */

$(function(){
    var clientH=document.documentElement.clientHeight;
    var clientW=document.documentElement.clientWidth;
    $(".concet").css("height",clientH);
    $(".biaoq li").click(function(){
        var index=$(".biaoq li").index(this);
        $(".biaoq li").css("height",108);
        $(".biaoq li img").css("marginTop","20%");
        $(".biaoq li img").eq(index).css("marginTop","80%");
        $(this).css("height", 158);
        $(".concet").finish();
        $(".concet").fadeOut().css("z-index",1);
        $(".concet").eq(index).fadeIn().css("z-index",3)
    });




    $(document).ready(function() {
        $('#fullpage').fullpage({
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],

        });
    });
//画圆
    function drawCircle(options){
        var options = options || {};    //获取或定义options对象;
        options.angle = options.angle || 1;    //定义默认角度1为360度(角度范围 0-1);
        options.color = options.color || '#fff';    //定义默认颜色（包括字体和边框颜色）;
        options.lineWidth = options.lineWidth || 10;    //定义默认圆描边的宽度;
        options.lineCap = options.lineCap || 'square';    //定义描边的样式，默认为直角边，round 为圆角

        var oBoxOne = document.getElementById(options.id);
        var sCenter = oBoxOne.width / 2;    //获取canvas元素的中心点;
        var ctx = oBoxOne.getContext('2d');
        var nBegin = Math.PI / 2;    //定义起始角度;
        var nEnd = Math.PI * 2;    //定义结束角度;
        var grd = ctx.createLinearGradient(0, 0, oBoxOne.width, 0);    //grd定义为描边渐变样式;
        grd.addColorStop(0, 'red');
        grd.addColorStop(0.5, 'yellow');
        grd.addColorStop(1, 'green');

        ctx.textAlign = 'center';    //定义字体居中;
        ctx.font = 'normal normal bold 20px Arial';    //定义字体加粗大小字体样式;
        ctx.fillStyle = options.color == 'grd' ? grd : options.color;    //判断文字填充样式为颜色，还是渐变色;
        ctx.fillText((options.angle * 100) + '%', sCenter, sCenter);    //设置填充文字;
        /*ctx.strokeStyle = grd;    //设置描边样式为渐变色;
         ctx.strokeText((options.angle * 100) + '%', sCenter, sCenter);    //设置描边文字(即镂空文字);*/
        ctx.lineCap = options.lineCap;
        ctx.strokeStyle = options.color == 'grd' ? grd : options.color;
        ctx.lineWidth = options.lineWidth;

        ctx.beginPath();    //设置起始路径，这段绘制360度背景;
        ctx.strokeStyle = '#D8D8D8';
        ctx.arc(sCenter, sCenter, (sCenter - options.lineWidth), -nBegin, nEnd, false);
        ctx.stroke();

        var imd = ctx.getImageData(0, 0, 240, 240);
        function draw(current) {    //该函数实现角度绘制;
            ctx.putImageData(imd, 0, 0);
            ctx.beginPath();
            ctx.strokeStyle = options.color == 'grd' ? grd : options.color;
            ctx.arc(sCenter, sCenter, (sCenter - options.lineWidth), -nBegin, (nEnd * current) - nBegin, false);
            ctx.stroke();
        }

        var t = 0;
        var timer = null;
        function loadCanvas(angle) {    //该函数循环绘制指定角度，实现加载动画;
            timer = setInterval(function(){
                if (t > angle) {
                    draw(options.angle);
                    clearInterval(timer);
                }else{
                    draw(t);
                    t += 0.02;
                }
            }, 20);
        }
        loadCanvas(options.angle);    //载入百度比角度  0-1 范围;
        timer = null;

    }
var flg=true;
$(".biaoq").on("click",".dian",function(){
    if(flg==true){
        drawCircle({
            id: 'can1',
            color: '#0581E5',
            angle: 0.95,
            lineWidth: 12
        });

        drawCircle({
            id: 'can2',
            angle: 0.95,
            color: '#0581E5',
            lineWidth: 12
        });

        drawCircle({
            id: 'can3',
            angle: 0.85,
            lineWidth: 12,
            color: '#0581E5'
        });
        drawCircle({
            id: 'can4',
            color: '#0581E5',
            angle: 0.85,
            lineWidth: 12
        });

        drawCircle({
            id: 'can5',
            angle: 0.85,
            color: '#0581E5',
            lineWidth: 12
        });

        drawCircle({
            id: 'can6',
            angle: 0.80,
            lineWidth: 12,
            color: '#0581E5'
        });
        flg=false;
    }


})

/*swiper3D轮播*/
    var mySwiper = new Swiper('.swiper-container',{
        keyboardControl : true,
        effect : 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        coverflow: {
            rotate: 30,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows : true
        }
    })


    /*首页随鼠标移动*/
    $("body").on("mousemove",".concet",function(e){
        var er=e|| window.event
        var movex=er.offsetX;
        var movey=er.offsetY;
        $(".close1").css({"top":movey/40,"left":movex/40});
        $(".close").css({"top":movey/50,"left":movex/50});
        $(".far").css({"top":movey/60,"left":movex/60});
        $(".skills").css({"top":movey/70,"left":movex/70});
        $(".print").css({"top":movey/80,"left":movex/80});
        $(".person").css({"top":movey/90,"left":movex/90});
        $(".blue1").css({"top":movey/100,"left":movex/100});
        $(".blue").css({"top":movey/110,"left":movex/110});
        $(".zise").css({"top":movey/120,"left":movex/120});
        $(".guanyu").css({"top":movey/130,"left":movex/130});

    })




//第三屏
    $(document).mousemove(function(e){
        var x = e.clientX + $(this).scrollLeft();
        var y = e.clientY + $(this).scrollTop();
        //$(".hand").offset({left: x + 3, top: y});
        $(".bubble-menu.hover").removeClass("hover");
        $(".bubble-menu").each(function(){
            var bubble = $(this);
            var top = bubble.offset().top;
            var left = bubble.offset().left;
            var w = bubble.width();
            var h = bubble.height();
            if ((x >= left && y >= top) && (x <= (left + w) && y <= (top + h)) && !bubble.hasClass("bubble-here")){
                $('[class^="bubble-"]').each(function(){
                    $(this).removeClass("hover");
                });
                bubble.addClass("hover");
            }
        });
    });
/*雨滴*/

    var clientH=document.documentElement.clientHeight;
    var clientW=document.documentElement.clientWidth;
    var arr=[]
    for(var i=0;i<100;i++){
        var div=document.createElement("div");
        div.className="yudi"
        div.style.cssText="width:2px;height:"+(5+10*Math.random())+"px;bottom:-20px;left:"+(100+(clientW-200)*Math.random())+"px;transition: bottom 5s ease "+(2.7*Math.random()+0.3)+"s";
        arr.push(div);
        document.body.appendChild(div)
    }
    var tme=setTimeout(function(){
        for(var i=0;i<arr.length;i++){
            arr[i].style.bottom=clientH+"px";
            arr[i].addEventListener("webkitTransitionEnd",function(){
                this.style.transition="none";
                this.style.bottom="-20px"
                var that=this;
                setTimeout(function(){
                    that.style.transition="bottom 5s ease "+(2.7*Math.random()+0.3)+"s"
                    that.style.bottom=clientH+"px";
                },0)
            });
        }
    },0)
    clearInterval(tme)


    /**************/
    $(".back").click(function(){
        var index=$(".back").index(this);
        $(".biaoq li").css("height",108);
        $(".biaoq li img").css("marginTop","20%");
        $(".biaoq li img").eq(index).css("marginTop","80%");
        $(".biaoq li").eq(index).css("height", 158);
        $(".concet").finish();
        $(".concet").fadeOut().css("z-index",1);
        $(".concet").eq(index).fadeIn().css("z-index",3)
    });
    $(".lianxiwo").click(function(){
        $(".contact").css("transform"," scale(1,1)")
        tme=setTimeout(function(){
            for(var i=0;i<arr.length;i++){
                arr[i].style.bottom=clientH+"px";
                arr[i].addEventListener("webkitTransitionEnd",function(){
                    this.style.transition="none";
                    this.style.bottom="-20px"
                    var that=this;
                    var xiayu=setTimeout(function(){
                        that.style.transition="bottom 5s ease "+(2.7*Math.random()+0.3)+"s"
                        that.style.bottom=clientH+"px";
                    },0)
                });
            }


        },0)


    })

    $(".huitui").click(function(){
        $(".contact").css("transform"," scale(0,0)")
    })
});

/*第二屏3D轮播*/
var $slicebox; $(function() {
    $slicebox = $('#sb-slider').slicebox({
        interval:6000,
        orientation : "r", //表示幻灯片的切换方向，可取 (v)垂直方向, (h)水平方向 or (r)随机方向
        perspective : 800, //透视点距离，可以通过改变其值查看效果
        cuboidsCount : 5, //幻灯片横向或纵向被切割的块数，切割的每一块将会以3D的形式切换
        cuboidsRandom : true, //是否随机 cuboidsCount 参数的值
        maxCuboidsCount : 5, //设置一个值用来规定最大的 cuboidsCount 值
        colorHiddenSides : "#333", //隐藏的幻灯片的颜色
        sequentialFactor : 150, //幻灯片切换时间（毫秒数）
        speed : 600, //每一块3D立方体的速度
        autoplay : true, //是否自动开始切换
        onBeforeChange : function(position) { return false; },
        onAfterChange : function(position) { return false; }
    });
});