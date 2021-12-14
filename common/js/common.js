$(function(){
    //スムーススクロール
    $('a[href^="#"]').click(function() {
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

    //SPバーガーメニュー開閉制御
    $('.c-headerSpmenuButton').on('click',function(){
        $(this).toggleClass('is-active');
        $('.c-spGlobalNav').slideToggle();
    });

    //SPグローバルナビ開閉制御
    $('.c-spGlobalNav__list__item__inner__button').on('click',function(){
        $(this).toggleClass('is-active');
        $(this).parents('.c-spGlobalNav__list__item').children('.c-spGlobalNav__list__item__list').slideToggle();
    });

    //コンテンツのスライドイン
    AOS.init()
})