$(window).on('load resize scroll',function(){	
    gsap.registerPlugin(ScrollTrigger);
});

//fade in
gsap.set(".js-anime-c", { 
    opacity: 0,
    y: 60
}); 
ScrollTrigger.batch(".js-anime-c", {
    onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, }),
});

//下からテキスト順番に出てくるjs
//MV ttl
ScrollTrigger.create({
    trigger: ".l-main",
    markers: false,
    start: "-=50px center",
    toggleClass: {
        targets: ".c-mainVisual__inner__heading__text01",
        className: "-visible"
    },
    once: true
});
//footer JOIN
ScrollTrigger.create({
    trigger: ".c-heading02",
    markers: false,
    start: "-=50px center",
    toggleClass: {
        targets: ".join",
        className: "-visible"
    },
    once: true
});
