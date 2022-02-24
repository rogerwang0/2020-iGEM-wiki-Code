$(document).ready(function () {
    //获取屏幕长宽
    if (window.innerHeight) {
        screenHeight = window.innerHeight;
    } else {
        //IE
        screenHeight = window.clientHeight;
    }
    if (window.innerWidth) {
        screenWidth = window.innerWidth;
    } else {
        //IE
        screenWidth = window.clientWidth;
    };

    //console.log("屏幕可用宽和高分别为："+screenWidth+" "+screenHeight);

    //回到顶部按钮
    $(".topbtn").click(function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    //侧边栏显示按钮
    $(".side-btn").click(function () {
        if ($(".side-wrapper").css("display") == "none") {
            $(".side-wrapper").css("display", "block");
            $(".side-wrapper").animate({ right: '0px' }, 'slow', function () {

            });
        } else {
            $(".side-wrapper").animate({ right: '-300px' }, 'slow', function () {
                $(".side-wrapper").css("display", "none");
            });

        };
    });
    //发生滚动时判断页面是否在顶部
    $(window).scroll(function () {//若选取.globalwrapper则会因高度为100%无法触发事件
        //获取文档长度
        htmlHeight = $("body").css("height").slice(0, 4);
        htmlHeight = parseInt(htmlHeight);
        Yaxis = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//获取scroll位置
        if (Yaxis < screenHeight / 2) { $(".topbtn").css("display", "none") } else { $(".topbtn").css("display", "block") };
        //显示进度效果
        $(".processbar").css("width", Yaxis / (htmlHeight - screenHeight) * 100 + "%");
        //console.log(Yaxis/(htmlHeight-screenHeight)*100+"%"+" "+Yaxis+" "+htmlHeight+" "+screenHeight);
    });
    //var bh = parseInt(document.getElementById("topBanner").offsetTop) + parseInt($(".topBanner").css("height")) + 50;
    //主页翻页按钮
    $(".down-icon").click(function () {
        Yaxis = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//获取scroll位置
        window.scrollTo({ top: Yaxis + screenHeight, behavior: "smooth" });
    });
    //设置poster高度
    $(".poster").css("height", screenHeight - 96 + "px");
})