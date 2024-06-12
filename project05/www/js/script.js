jQuery(document).ready(function(){
	//card slide
	var swiper = new Swiper('.swiper-container.first', {
		slidesPerView: 'auto',
		slidesPerColumn: 1,
		loopAdditionalSlides : 10,
		spaceBetween: 5,
		observer: true,
		observeParents: true,
		loop : true
	});
	
	//recent slide
	var swiper = new Swiper(".mySwiper.second", {
/* 		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
			observer: true,
			observeParents: true
        }, */
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
			return '<span class="' + className + '"></span>';
			},
		},
		observer: true,
		observeParents: true,
		loop : true
	});
	
	//#page, #location modal
	$('#location .filterBtn').click(function(){
		$('#location #locaModal').show();
	});
	$('#locaModal .setBtn, .locaBg').click(function(){
		$('#location #locaModal').hide();
	});
	
	//#post focus
	setTimeout(function(){
		$('.postCon #title').focus();
	});

	//#pay tab menu
	var tab = $('#pay1 .cardHistory li');
	var tabCon = $('#pay1 .historyWrap');
	
	tab.click(function(){
		var i = $(this).index();
		tab.removeClass('show');
		tabCon.removeClass('show');
		tab.eq(i).addClass('show');
		tabCon.eq(i).addClass('show');
	});
	
	//#main button
	$('#main .subBtn, #recent .subBtn, #set .subBtn, #world .subBtn').click(function(){
		var moreCon = $('.con3 ul li.box.more, .con2 ul li.box.more');
		$(this).parent().find(moreCon).stop().slideDown(300);
	});

	//like 클릭 시 좋아요 변경
	$(".box .like").click(function(){
		if($(this).hasClass("on") === true){
			$(this).removeClass('on');
			$(this).find('img').attr('src','images/heart2.png');
		}else{
			$(this).addClass("on");
			$(this).find('img').attr('src','images/heart.png');
		};
	});
	
	//chat modal
	$('.chatMore').click(function(){
		$('.chatBg, .chatModal').show();
	});
	$('.chatBg, .chatModal ul li').click(function(){
		$('.chatBg, .chatModal').hide();
	});
	
	// send 버튼 누르기 전 거르기
	$('#post ul li.send').click(function(){
		var postInput1 = $('.postCon input#title').val();
		var postInput2 = $('.postCon input#price').val();
		var postArea = $('.postCon textarea').val();
		if(postInput1=="" || postInput2=="" || postArea==""){
			$('.postCancel').show();
		}else{
			$('.postSucess').show();
		};
	});
	
	$('.postAlert .button').click(function(){
		$('.postAlert').hide();
	});
	
	// 글작성 누르면 안의 input 비우기
	$('.postSucess .button').click(function(){
		$('.postCon input').val("");
		$('.postCon textarea').val("");
	});	
});








