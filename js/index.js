var scTop, topHeight, logoHeight, winWidth, navi = [];
 
function mainBanner() {
	 var swiper = new Swiper('.main-wrapper.swiper-container', {
		loop: true,
		effect: 'fade',
		autoplay: 3000,
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	   });

 };
function Product() {
	var swiper = new Swiper('.product-wrap.swiper-container', {
	   slidesPerView: 4,
	   slidesPerGroup: 4,
	   loopFillGroupWithBlank: true,
	   pagination: {
		el: '.swiper-pagination',
		clickable: true,
	   },
	   navigation: {
		nextEl: '.bt-next',
		prevEl: '.bt-prev',
	   },
	 });
	// if(winWidth >= 1199) {
	//  var swiper = new Swiper('.product-wrap.swiper-container', {
	//    slidesPerView: 4,
	//    slidesPerGroup: 4,
	//    loopFillGroupWithBlank: true,
	//    pagination: {
	// 	el: '.swiper-pagination',
	// 	clickable: true,
	//    },
	//    navigation: {
	// 	nextEl: '.bt-next',
	// 	prevEl: '.bt-prev',
	//    },
	//  });
	// } else (winWidth < 991) {
	// 	var swiper = new Swiper('.product-wrap.swiper-container', {
	// 		slidesPerView: 2,
	// 		slidesPerGroup: 2,
	// 		loopFillGroupWithBlank: true,
	// 		loop: true,
	// 		pagination: {
	// 		  el: '.swiper-pagination',
	// 		  clickable: true,
	// 		},
	// 		navigation: {
	// 		  nextEl: '.bt-next',
	// 		  prevEl: '.bt-prev',
	// 		},
	// 	   });
	// }
 };
 function Newdesigns() {
	var swiper = new Swiper('.newdesign-wrap.swiper-container', {
	  slidesPerView: 4,
	  slidesPerGroup: 4,
   //    loop: true,
	  loopFillGroupWithBlank: true,
	  pagination: {
	   el: '.swiper-pagination',
	   clickable: true,
	  },
	  navigation: {
	   nextEl: '.bt-next',
	   prevEl: '.bt-prev',
	  },
	});
};
function content () {
	var swiper = new Swiper('.content-wrap', {
		slidesPerView: 3,
		slidesPerGroup: 3,
		pagination: {
		  el: '.content-wrap > .swiper-pagination',
		  clickable: true,
		},
	   });
}


Product ();
Newdesigns ();
mainBanner();
content();

$(".header-wrapper > .free > button").click(Hbtclick);
$(".menu a").mouseenter(onNaviEnter);
$(".navi-wrapper").mouseleave(onNaviLeave);
$(".fam .lang a").mouseenter(onLangE);
$(".fam .lang .lang-r em").mouseleave(onLangL);


function onLangE() {
	$(this).parent().find("em").show();
};
function onLangL() {
	$(this).hide();
}



function Hbtclick() {
	$(".header-wrapper").hide();
};

function onNaviEnter() {
	$(".navi-wrapper").css({'background':'#fff', 'color':'#111'});
	$(".bars").css({'color':'#111'});
	$(".logo-b").css({'opacity':'1'});
	$(this).next(".navi-bg").stop().slideDown().css({'color':'#111'});
};

function onNaviLeave() {
	$(".navi-wrapper").css({'background':'none', 'color':'#fff'});
	$(".bars").css({'color':'#fff'});
	$(".logo-b").css({'opacity':'0'});
	$(".navi-bg").stop().slideUp().css({'color':'#fff'});
};

