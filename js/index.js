/**
 * Created by Administrator on 2017/8/24.
 */

$(function () {

    // 购物车效果
    var cart = $(".header-nav-right li:last-of-type");
    var shopping = $(".shopping-cart");
    cart.hover(function () {
        shopping.slideDown();
    }, function () {
        shopping.slideUp();
    });

    // 商品选项卡切换
    var item = $(".goods-list>li");
    var isc = $(".goods-list>li section");
    item.each(function (index) {
        $(this).hover(function () {
            isc.removeClass("active");
            // $(this).find("section").slideDown("slow");
            $(this).find("section").addClass("active");
        }, function () {
            isc.removeClass("active");
            // $(this).find("section").slideUp();
        });
    });

    //搜索框
    var ins = $(".search input[type=text]");
    var search = $(".search");
    var ss = $(".search span");
    var menu = $(".container-nav-content .box");
    ins.on("click", function () {
        search.css({
            border: "1px solid coral"
        });
        $(this).css({
            border: "none"
        });
        ss.css({
            border: "1px solid coral"
        });

        //搜索框下拉菜单
        menu.toggle();
    });

    //轮播图块商品内容
    var scrolllist = $(".scroll-nav .scroll-nav-list>li");
    /*var scrollitem = $(".scroll-nav .scroll-nav-content li");*/
    var sec = $(".scroll-nav .scroll-nav-list>li>section");
    var scroll = $(".scroll-nav");
    scrolllist.each(function (index) {
        $(this).hover(function () {
            $(this).find("section").css({display: "block"});
        }, function () {
            sec.css({
                display: "none"
            });
        });
    });
    // 轮播图
    var sc = $(".scroll .photo-box li");
    var countnum = $(".scroll .count li");

    function showPho(i) {
        countnum.each(function (index) {
            if (index == i) {
                sc.removeClass("active");
                $(sc[index]).addClass("active");
                countnum.css({background: "#666"});
                $(this).css({background: "#fff"});
            }
        });
    }

    var num = 0;
    setInterval(function () {
        showPho(num);
        num++;
        num = num >= countnum.length ? 0 : num;
    }, 3000);

    // 小米明星单品
    var starcontent = $(".star-good-content-list");
    var starprev = $(".star-head .star-head-btn .star-prev");
    var starnext = $(".star-head .star-head-btn .star-next");
    var j = 0;
    setInterval(function () {
        j++;
        starcontent.css({marginLeft: -j * 100 + "%", transition: "all 0.5s ease"});
        starnext.css({color: "#eee"});
        starprev.css({color: "#555"});
        if (j >= 2) {
            starcontent.css({marginLeft: 0});
            j = 0;
            starnext.css({color: "#555"});
            starprev.css({color: "#eee"});
        }
    }, 6000);
    starprev.on("click", function () {
        starcontent.css({marginLeft: 0, transition: "all 0.5s ease"});
        $(this).css({color: "#eee"});
        starnext.css({color: "#555"});
    });
    starnext.on("click", function () {
        starcontent.css({marginLeft: -100 + "%", transition: "all 0.5s ease"});
        $(this).css({color: "#eee"});
        starprev.css({color: "#555"});
    });

    //推荐
    var recommendcon = $(".recommend-good-content-list");
    var recommendprev = $(".recommend-head .star-head-btn .star-prev");
    var recommendnext = $(".recommend-head .star-head-btn .star-next");
    var x = 0;
    recommendnext.on("click", function () {
        if (x < 3) {
            x++;
            recommendcon.css({
                marginLeft: -x * 100 + "%",
                transition: "all 0.5s ease"
            });
            if (x > 0) {
                recommendprev.css({
                    color: "#555"
                });
                if (x == 3) {
                    $(this).css({
                        color: "#eee"
                    });
                }
            }
        } else {
            recommendcon.css({
                marginLeft: -300 + "%",
                transition: "none"
            });
        }
        console.log(x);
        recommendprev.on("click", function () {
            if (x > 0) {
                x--;
                recommendcon.css({
                    marginLeft: -x * 100 + "%"
                });
            }
        });

    });


    var ahl = $(".Appliances-head li");
    var conr = $(".Appliances .section-box-content .section-content-right ul");
    var scrul = $(" .section-box-content .section-content-right ul li");
    var evaluate = $(".evaluate");

    //单项悬浮显示评价等效果
    scrul.each(function () {
        $(this).hover(function () {
                $(this).find(".evaluate").slideDown("fast");
                $(this).css({
                    "box-shadow": "0 0 10px #ccc",
                    transform: "scale(1.03)"
                });
            },
            function () {
                evaluate.slideUp("fast");
                $(this).css({
                    "box-shadow": "none",
                    transform: "scale(1)"
                });
            });
    });
    $(".section .section-box .section-box-content .section-content-right li:last-child").hover(function () {
        $(this).css({
            "box-shadow": "none",
            transform: "scale(1)"
        });
    });
    $(".section .section-box .section-box-content .section-content-right li:last-child").find("div").hover(function () {
        $(this).css({
            "box-shadow": "0 0 10px #ccc",
            transform: "scale(1.03)"
        });
    }, function () {
        $(this).css({
            "box-shadow": "none",
            transform: "scale(1)"
        });
    });

    // 家电等选项卡效果

    // 家电
    ahl.each(function (m) {
        $(this).on("mouseover", function () {
            ahl.css({color: "#000", border: "2px solid transparent"});
            $(this).css({
                cursor: "pointer",
                color: "coral",
                borderBottom: "2px solid coral",
                transition: "border 0.5s"
            });
            conr.removeClass("active");
            $(conr[m]).addClass("active");
        });
    });
    //智能
    var cal = $(".capacity-head li");
    var cacon = $(".capacity .section-box-content .section-content-right ul");
    cal.each(function (m) {
        $(this).on("mouseover", function () {
            cal.css({color: "#000", border: "2px solid transparent"});
            $(this).css({
                cursor: "pointer",
                color: "coral",
                borderBottom: "2px solid coral",
                transition: "border 0.5s"
            });
            cacon.removeClass("active");
            $(cacon[m]).addClass("active");
        });
    });
    //match
    //搭配
    var mal = $(".match-head li");
    var macon = $(".match .section-box-content .section-content-right ul");
    mal.each(function (m) {
        $(this).on("mouseover", function () {
            mal.css({color: "#000", border: "2px solid transparent"});
            $(this).css({
                cursor: "pointer",
                color: "coral",
                borderBottom: "2px solid coral",
                transition: "border 0.5s"
            });
            macon.removeClass("active");
            $(macon[m]).addClass("active");
        });
    });

    //配件

    var acc = $(".accessories-head li");
    var acccon = $(".accessories .section-box-content .section-content-right ul");
    acc.each(function (m) {
        $(this).on("mouseover", function () {
            acc.css({color: "#000", border: "2px solid transparent"});
            $(this).css({
                cursor: "pointer",
                color: "coral",
                borderBottom: "2px solid coral",
                transition: "border 0.5s"
            });
            acccon.removeClass("active");
            $(acccon[m]).addClass("active");
        });
    });

    //周边
    var hob = $(".hobby-head li");
    var hobcon = $(".hobby .section-box-content .section-content-right ul");
    hob.each(function (m) {
        $(this).on("mouseover", function () {
            hob.css({color: "#000", border: "2px solid transparent"});
            $(this).css({
                cursor: "pointer",
                color: "coral",
                borderBottom: "2px solid coral",
                transition: "border 0.5s"
            });
            hobcon.removeClass("active");
            $(hobcon[m]).addClass("active");
        });
    });

    var commentsl = $(".Comments ul li");
    commentsl.each(function () {
        $(this).hover(function () {
                $(this).css({
                    "box-shadow": "0 0 15px #aaa",
                    transform: "scale(1.01)"
                });
            },
            function () {
                $(this).css({
                    "box-shadow": "none",
                    transform: "scale(1)"
                });
            });
    });


    // 内容
    var deprev = $(".details .details-content-list>ul>li .details-check li.details-prev");
    var denext = $(".details-content-list>ul>li .details-check .details-next");
    console.log(denext);
    var detailsli = $(".details-content-list>ul>li ul li");
    var decounts = $(".details .details-content-list>ul>li .counts li");
    var delist = $(".details-content-list>ul>li");
        delist.each(function (ind) {
            function deRun(i) {
                $(delist[ind]).find(decounts).each(function (index) {
                    if (index == i) {
                        $(delist[ind]).find(detailsli).removeClass("active");
                        $(detailsli[index]).addClass("active");
                        decounts.removeClass("active");
                        $(this).addClass("active");
                    }
                });
            }
        });


    var d = 0;
    denext.on("click", function () {
        d++;
        deRun(d);
        if (d >= 2) {
            d = 2;
        }
    });
});