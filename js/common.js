gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
    trigger: ".mv",
    markers: false,
    start: "-=50px center",
    toggleClass: {
        targets: ".mv-title,.mv-subtitle",
        className: "-visible"
    },
    once: true
});
ScrollTrigger.create({
    trigger: ".mv2",
    markers: false,
    start: "-=50px center",
    toggleClass: {
        targets: ".mv2-line01,.mv2-line02",
        className: "-visible"
    },
    once: true
});
//ScrollTrigger.create({
//    trigger: ".js-anime-c",
//    markers: false,
//    start: "-=50px center",
//    toggleClass: {
//        targets: ".js-anime-c",
//        className: "is-show"
//    },
//    once: true
//});
gsap.set(".js-anime-c", { opacity: 0, y: 100 }); //初期状態をセット
ScrollTrigger.batch(".js-anime-c", {
    onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, }),
    start: "-=50 50%",
    once: true, //この指定によって１度だけアニメーションされる
    stagger: {
        from: "start", //左からアニメーション start、center、edges、random、endが指定できる
        amount: 0.5 //0.1秒ズラしてアニメーション
    }
});
ScrollTrigger.create({
    trigger: ".mv2",
    markers: false,
    start: "top center",
    toggleClass: {
        targets: ".mv2",
        className: "-visible"
    },
    once: true
});
ScrollTrigger.create({
    trigger: ".company",
    markers: false,
    start: "-=50px center",
    toggleClass: {
        targets: ".company-title",
        className: "-visible"
    },
    once: true
});
ScrollTrigger.create({
    trigger: ".work",
    markers: false,
    start: "-=50px center",
    toggleClass: {
        targets: ".work-title",
        className: "-visible"
    },
    once: true
});
ScrollTrigger.create({
    trigger: ".member",
    markers: false,
    start: "-=50px center",
    toggleClass: {
        targets: ".member-title",
        className: "-visible"
    },
    once: true
});
ScrollTrigger.create({
    trigger: ".movie",
    markers: false,
    start: "top center",
    toggleClass: {
        targets: ".movie-line01,.movie-line02",
        className: "-visible"
    },
    once: true
});
ScrollTrigger.create({
    trigger: ".data",
    markers: false,
    start: "-=50px center",
    toggleClass: {
        targets: ".data-title",
        className: "-visible"
    },
    once: true
});
ScrollTrigger.create({
    trigger: ".join",
    markers: false,
    start: "-=50px center",
    toggleClass: {
        targets: ".join-title",
        className: "-visible"
    },
    once: true
});

$(function() {
    $(".movie-thumb").on("click", function() {
        if ($('.sp-spacer').is(':visible')) {
            window.open('https://www.youtube.com/embed/ZRCdORJiUgU?rel=0&autoplay=1', '_blank');
        } else {
            videoControl("playVideo", $(this).prev("iframe"));
            $(this).hide();
        }
    });

    function videoControl(action, tgt) {
        var $playerWindow = $(tgt)[0].contentWindow;
        $playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
    }
});

$(".tab_label").on("click", function() {
    var $th = $(this).index();
    $(".tab_label").removeClass("active");
    $(".tab_panel").removeClass("active");
    $(this).addClass("active");
    $(".tab_panel").eq($th).addClass("active");
});

$(".spirit-list-item").click(function(){
 $(this).toggleClass("active");
 $(this).siblings('.spirit-list-item').removeClass('active');
});

 // ページ内スクロール調整
 var headerHeight = 100;
 $('[href^="#"]').click(function(){
   var href= $(this).attr("href");
   var target = $(href == "#" || href == "" ? 'html' : href);
   var position = target.offset().top-headerHeight; 
   $("html, body").animate({scrollTop:position}, 400, "swing");
   return false;
 });