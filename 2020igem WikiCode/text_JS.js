
$(function () {
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
    //top-banner高度设置
    $(".text-banner").css("height", screenHeight - 96 + "px");
    //设置文字蒙版位置
    var count4 = 0;
    $(".text-subsection").each(function () {
        count4++;
        $(this).attr("id", "text-subsetion" + count4);
        $(this).after("<div class=\"text-bg\" id=\"text-bg" + count4 + "\"></div>");
    });
    var tsYaxis = new Array();
    var tsLeft = new Array();
    var tsWidth = new Array();
    var tsHeight = new Array();
    $(window).scroll(function () {//若选取body则会因高度为100%无法触发事件
        for (i = 1; i <= count4; i++) {
            tsYaxis[i] = $("#text-subsetion" + i).offset().top;
            tsLeft[i] = $("#text-subsetion" + i).offset().left;
            tsWidth[i] = parseInt($("#text-subsetion" + i).css("width")) + parseInt($("#text-subsetion" + i).css("padding-left")) + parseInt($("#text-subsetion" + i).css("padding-right"));
            tsHeight[i] = parseInt($("#text-subsetion" + i).css("height")) + parseInt($("#text-subsetion" + i).css("padding-top")) + parseInt($("#text-subsetion" + i).css("padding-bottom"));
            $("#text-bg" + i).css("left", tsLeft[i] + "px");
            $("#text-bg" + i).css("top", tsYaxis[i] - 16 + "px");
            $("#text-bg" + i).css("width", tsWidth[i] + "px");
            $("#text-bg" + i).css("height", tsHeight[i] + "px");
        };
    });
    //获取文档长度
    htmlHeight = $("body").css("height").slice(0, 4);
    htmlHeight = parseInt(htmlHeight);
    Yaxis = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//获取scroll位置
    //产生侧边指示标题
    title = $(".sector-title");
    var titleContent = new Array(title.length);
    var count1 = 1;
    title.each(function () {
        titleContent[count1] = $(this).text();//这里this是dom元素
        count1++;
    });
    $(".title-indicator").append("<h1 class=\"indicator-banner-title\" >" + $(".banner-title").text() + "</h1>");
    for (var i = 1; i <= title.length; i++) {
        $(".title-indicator").append("<h1 class=\"indicator-title\" id=\"indicator-title" + i + "\" >" + titleContent[i] + "</h1>");
    };


    titleI = $(".indicator-title");
    var viewState = new Array();
    var titleYaxis = new Array();
    var count2 = 1;
    title.each(function () {
        titleYaxis[count2] = parseInt($(this).offset().top);
        count2++;
    });

    titleYaxis[count2] = htmlHeight;//此时count2已经加1

    //控制当前分区指示标题样式
    $(window).scroll(function () {//若选取body则会因高度为100%无法触发事件


        var count3 = 1;
        titleI.each(function () {
            //$(this).css("font-size","1.2rem");
            //$(this).css("color","#000");
            $(this).css("box-shadow", "");
            $(this).css("background-color", "transparent");
            if (Yaxis + 200 >= titleYaxis[count3]) {
                if (Yaxis + 200 < titleYaxis[count3 + 1]) {
                    //$(this).css("font-size","1.3rem");
                    //$(this).css("color","#bdc3c7");
                    $(this).css("box-shadow", "0 .3rem .5rem rgba(0,0,0,.15)");
                    $(this).css("background-color", "#aeeff8");
                };
            };
            count3++;
        });

    });

    //控制侧边指示栏位置


    //初始化侧边栏位置
    originLeftHeight = $(".title-indicator").offset().top;
    tbYaxis = $(".text-banner").offset().top;
    tbYaxis += parseInt($(".text-banner").css("height"));
    $(".title-indicator").css("top", tbYaxis + "px");

    //实时控制侧边栏位置
    $(window).scroll(function () {//若选取.globalwrapper则会因高度为100%无法触发事件
        Yaxis = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//获取scroll位置
        tbYaxis = $(".text-banner").offset().top;
        //csYaxis = $(".clearspace").offset().top;
        twYaxis = $(".text-wrapper").offset().top;
        twHeight = parseInt($(".text-wrapper").css("height"));
        csYaxis = twHeight + twYaxis;
        tiHeight = parseInt($(".title-indicator").css("height"));
        tbHeight = parseInt($(".text-banner").css("height"));
        tiYaixs = $(".title-indicator").offset().top;
        //tbYaxis += tbHeight-Yaxis;
        leftYaxis = $(".text-banner").css("top");
        leftMargin = parseInt($(".title-indicator").css("margin-top"));
        if (tbYaxis + tbHeight - Yaxis >= 0) {
            $(".title-indicator").css("top", tbYaxis + tbHeight - Yaxis + "px");
        } else if (Yaxis + tiHeight + leftMargin > csYaxis) {//120是.title-indicator的margin-top值
            $(".title-indicator").css("top", csYaxis - tiHeight - Yaxis - leftMargin + "px");
        } else {
            $(".title-indicator").css("top", 0 + "px");
        };
        //console.log(tiHeight+Yaxis+" "+csYaxis);
        //console.log(tiYaixs+tiHeight);
    });

    //top-banner高度设置
    $(".top-banner").css("height", screenHeight - 96 + "px");

    //背景图片位置控制
    Yaxis = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//获取scroll位置
    tbHeight = parseInt($(".text-banner").css("height"));
    tbRatio = Yaxis * 0.7 - 4 + "px";
    $(".text-banner").css("background-position", "center " + tbRatio);
    $(window).scroll(function () {//若选取.globalwrapper则会因高度为100%无法触发事件
        Yaxis = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//获取scroll位置
        tbHeight = parseInt($(".text-banner").css("height"));
        tbRatio = Yaxis * 0.7 - 4 + "px";
        $(".text-banner").css("background-position", "center " + tbRatio);
        //console.log("center "+tbRatio);
    });


    //点击跳转
    var scrollTitle = function (e) {
        var mark = $(e.target).attr("id").slice(15, 16);
        mark = parseInt(mark);
        window.scrollTo({ top: titleYaxis[mark] - 95, behavior: "smooth" });
    };

    for (var i = 1; i <= title.length; i++) {
        clickedTitle = $("#indicator-title" + i);
        clickedTitle.on("click", function (e) { scrollTitle(e); });
    };

    //HP图片显隐控制
    count5 = 1;
    $(".img-switch-btn").each(function () {
        count5++;
        temp = count5 - 1;
        var mark = $(this).attr("id", "img-switch-btn" + temp);
    });
    count6 = 1;
    $(".HP-img-box").each(function () {
        count6++;
        temp = count6 - 1;
        var mark = $(this).attr("id", "HP-img-box" + temp);
    });
    for (i = 1; i <= count6; i++) {
        $("#img-switch-btn" + i).on("click", function (e) {
            mark = parseInt($(e.target).attr("id").slice(14, 15));
            console.log(mark);
            if ($("#HP-img-box" + mark).css("display") == "flex") {
                $("#HP-img-box" + mark).css("display", "none");
            } else if ($("#HP-img-box" + mark).css("display") == "none") {
                $("#HP-img-box" + mark).css("display", "flex");
            };
        });
    };
});