$(window).on('load scroll', function() {
    add_class_in_scrolling($('.mv2'));
    add_class_in_scrolling($('.mv-title'));
    add_class_in_scrolling($('.mv-subtitle'));
    add_class_in_scrolling($('.js-anime-c'));
    add_class_in_scrolling($('.company'));
    add_class_in_scrolling($('.work'));
    add_class_in_scrolling($('.member'));
    add_class_in_scrolling($('.movie'));
    add_class_in_scrolling($('.data'));
    add_class_in_scrolling($('.join'));
});

// スクロールで要素が表示された時にclassを付与する
function add_class_in_scrolling(target) {
    var winScroll = $(window).scrollTop();
    var winHeight = $(window).height();
    var scrollPos = winScroll + winHeight;

    if (target.offset().top < scrollPos) {
        target.addClass('-visible');
    }
}

window.onload = function() {
    endLoading();
}

//ローディング非表示処理
function endLoading() {
    $("#loading").delay(500).fadeOut(800);
}