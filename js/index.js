
 
function mainBanner() {
	 var swiper = new Swiper('.main-wrapper.swiper-container', {
		loop: true,
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


Product ();
Newdesigns ();
mainBanner();

$(".header-wrapper > .free > button").click(Hbtclick);
$(".menu a").mouseenter(onNaviEnter);
$(".navi-wrapper").mouseleave(onNaviLeave);



function Hbtclick() {
	$(".header-wrapper").hide();
}

function onNaviEnter() {
	$(".navi-wrapper").css({'background':'#fff', 'color':'#111'});
	$(".bars").css({'color':'#111'});
	$(this).next(".navi-bg").stop().slideDown().css({'color':'#111'});
	$(".logo-b").css({'opacity':'1'});
};

function onNaviLeave() {
	$(".navi-wrapper").css({'background':'none', 'color':'#fff'});
	$(".bars").css({'color':'#fff'});
	$(".navi-bg").stop().slideUp().css({'color':'#fff'});
	$(".logo-b").css({'opacity':'0'});
}