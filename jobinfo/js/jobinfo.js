$(window).on('load resize scroll',function(){	
    gsap.registerPlugin(ScrollTrigger);
});

//下からテキスト順番に出てくるjs
ScrollTrigger.create({
    trigger: ".tab-wrap .ttl-area",
    markers: false,
    start: "-=50px center",
    toggleClass: {
        targets: ".tab-wrap .ttl-area .en",
        className: "-visible"
    },
    once: true
});
ScrollTrigger.create({
    trigger: ".l-main .flow",
    markers: false,
    start: "-=50px center",
    toggleClass: {
        targets: ".flow-text",
        className: "-visible"
    },
    once: true
});
ScrollTrigger.create({
    trigger: ".requirement",
    markers: false,
    start: "-=50px center",
    toggleClass: {
        targets: ".requirement-text",
        className: "-visible"
    },
    once: true
});


//tab
var searchItem = '.tab-btn li';   
var listItem = '.tab-wrap .item-area';       
var hideClass = 'hide';         
var activeClass = 'active';     

$(function() {
	$('[data="a"]').addClass(activeClass);

	$(searchItem).on('click', function() {
		$(searchItem).removeClass(activeClass);
		var group = $(this).addClass(activeClass).data('group');
		search_filter(group);
	});
});

function search_filter(group) {
	$(listItem).addClass(activeClass);
	$(listItem).removeClass(hideClass);
    
	for (var i = 0; i < $(listItem).length; i++) {
		var itemData = $(listItem).eq(i).data('group');

		if(itemData !== group) {
			$(listItem).eq(i).addClass(hideClass);
			$(listItem).eq(i).removeClass(activeClass);
		}
	}
}