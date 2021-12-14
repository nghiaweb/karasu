//ローディング非表示処理
// function endLoading() {
//     $("#loading").delay(500).fadeOut(800);
// }

// loading
// window.onload = function() {
//     const spinner = document.getElementById('loading');
//     // Add .loaded to .loading
//     spinner.classList.add('loaded');
// }
window.addEventListener('load', function() {
    var msM = 1000;
    var spinner = document.getElementById('loading');
    var wrapper = document.querySelector('.wrapper');
    var header = document.querySelector('.header');
    var mv01 = document.querySelector('.mv-title');
    var mv02 = document.querySelector('.mv-subtitle');
    var mv03 = document.querySelector('.mv-title.line03');
    var mv04 = document.querySelector('.mv-title.line04');
    wrapper.style.opacity = 0;
    header.style.opacity = 0;
    header.style.zIndex = -1;

    var loadingDisplay = function() { //非表示にする関数を定義
        spinner.classList.add('loaded');

    }
    setTimeout(loadingDisplay, 1000); //画像読み込み後、１秒後に透過を開始
    wrapper.style.opacity = 1;
    header.style.opacity = 1;
    header.style.zIndex = 100;
    setTimeout(function() {
        mv01.classList.add('-visible');
        mv02.classList.add('-visible');
        mv03.classList.add('-visible');
        mv04.classList.add('-visible');
    }, 1000 + msM);
});


// gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.create({
//     trigger: ".mv",
//     markers: false,
//     start: "-=50px center",
//     toggleClass: {
//         targets: ".mv-title,.mv-subtitle",
//         className: "-visible"
//     },
//     once: true
// });
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
// gsap.set(".js-anime-c", { opacity: 0, y: 50 }); //初期状態をセット
// ScrollTrigger.batch(".js-anime-c", {
//     onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, }),
//     start: "-=60 50%",
//     once: true, //この指定によって１度だけアニメーションされる
//     stagger: {
//         from: "start", //左からアニメーション start、center、edges、random、endが指定できる
//         amount: 0.5 //0.1秒ズラしてアニメーション
//     }
// });
$('.js-anime-c').on('inview', function(event, isInView) {
    if (isInView) {
        $(this).stop().addClass('-visible');
    }
});

// function scroll_effect() {
//     $('.effect-fade, .effect-fadeleft, .effect-faderight').each(function() {
//         var elemPos = $(this).offset().top;
//         var scroll = $(window).scrollTop();
//         var windowHeight = $(window).height();
//         if (scroll > elemPos - windowHeight) {
//             $(this).addClass('effect-scroll');
//         }
//     });
// }

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
    start: "-=100px center",
    toggleClass: {
        targets: ".company-title",
        className: "-visible"
    },
    once: true
});
ScrollTrigger.create({
    trigger: ".work",
    markers: false,
    start: "-=100px center",
    toggleClass: {
        targets: ".work-title",
        className: "-visible"
    },
    once: true
});
ScrollTrigger.create({
    trigger: ".member",
    markers: false,
    start: "-=100px center",
    toggleClass: {
        targets: ".member-title",
        className: "-visible"
    },
    once: true
});
ScrollTrigger.create({
    trigger: ".movie",
    markers: false,
    start: "-=100px center",
    toggleClass: {
        targets: ".movie-line01,.movie-line02",
        className: "-visible"
    },
    once: true
});
ScrollTrigger.create({
    trigger: ".data",
    markers: false,
    start: "-=100px center",
    toggleClass: {
        targets: ".data-title",
        className: "-visible"
    },
    once: true
});
ScrollTrigger.create({
    trigger: ".join",
    markers: false,
    start: "-=100px center",
    toggleClass: {
        targets: ".join-title,.join-btn-title01, .join-btn-title02",
        className: "-visible"
    },
    once: true,
    stagger: {
        from: "start", //左からアニメーション start、center、edges、random、endが指定できる
        amount: 0.5 //0.1秒ズラしてアニメーション
    }
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
$(".openbtn1").click(function() { //ボタンがクリックされたら
    $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
    $("#sp-nav").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
    $(".main").toggleClass('none');
});

$(".sp-nav-item a").on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass("active"); //追加部分
});