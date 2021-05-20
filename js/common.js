$(document).ready(function () {
    
    //    풀페이지
    
    var myFullpage = new fullpage('#fullpage', {
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
            sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C', '#ffffff'],
            navigation: true,
            navigationPosition: 'right',
            //        navigationTooltips: ['First page', 'Second page', 'Third and last page', '4thPage'],
            responsiveWidth: 900,
            afterResponsive: function(isResponsive) {

            }
        
        });
    
    //    풀페이지 끝

    //    서브메뉴

    $(".menu > ul > li").mouseover(function () {
        $(".menu ul > li > ul").stop().show();
    });
    $(".menu > ul > li").mouseout(function () {
        $(".menu ul > li > ul").stop().hide();
    });

    //    서브메뉴 끝

    //    검색



    //    검색 끝


    //    탑버튼

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.top-btn').fadeIn();
        } else {
            $('.top-btn').fadeOut();
        }
    });

    $('.top-btn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //    탑버튼 끝

});
