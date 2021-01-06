




 
function mainBanner() {
	 var swiper = new Swiper('.main-wrapper.swiper-container', {
		loop: true,
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	   });

 }  
function Product() {
	 var swiper = new Swiper('.product-wrap.swiper-container', {
	   slidesPerView: 4,
	   slidesPerGroup: 4,
	   loop: true,
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
 }



Product ();
mainBanner();








