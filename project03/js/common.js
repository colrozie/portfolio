$(function(){
	//문의하기 버튼 누르면 나오기
	$('.inquire > img').click(function(){
		$('.inquire > div').fadeIn();
	});
	//문의하기 버튼 누르면 들어가기
	$('.inquire > .con > span.clo').click(function(){
		$('.inquire > div').fadeOut();
	});	
	//로그인 모달창 누르면 나오게
	$('.rightLnb .signIn').click(function(){
		$('.loginModalBg').show();
		//로그인 메일입력 창 포커스
		setTimeout(function(){
			$('.popCon form .userEmail').focus();
		});
	});
	//로그인 모달창 닫기
	$('.loginModalBg .loginPopup .btnX').click(function(){
		$('.loginModalBg').hide();		
	});
	//placeholder 대체
	var guideClass = 'gray';
	$('.guideText').each(function(){
		var guideText = this.defaultValue;
		var element = $(this);
		element.focus(function(){
			if(element.val()===guideText){
				element.val('');
				element.removeClass(guideClass);
			};
		});
		element.blur(function(){
			if(element.val()===''){
				element.val(guideText);
				element.addClass(guideClass);
			};
		});
		if(element.val()===guideText){
			element.addClass(guideClass);
		};
	});
	
	//quick hover / banner li hover
	$('.quick_icon > li').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		var src_on = src_off.replace('_off','_on');	
		$('<img />').attr('src',src_on);
		a.on('mouseenter focus',function(){
			img.attr('src',src_on);
		});
		a.on('mouseleave blur',function(){
			img.attr('src',src_off);
		});		
	});
	// quick click
	btn = true;
	$('.quick_toggle').click(function(){
		if(btn){
			$(this).addClass('quick_open');
			$('.quickmenu').stop(true, true).animate({'margin-left':'-100px'},300, function(){$('.quick_top').stop(true, true).animate({'margin-top':'-295px'},300, function(){btn = false;})});
			
		}else{
			$(this).removeClass('quick_open');
			$('.quick_top').stop().animate({'margin-top':'0'},300, function(){$('.quickmenu').stop().animate({'margin-left':'0'},300, function(){btn = true;})});			
		}
	});
	// topBar 눌렀을때 최상위로 이동
	$( '.quick_top' ).click( function() {
		$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
		return false;
	});
	// 스크롤 애니메이션
 	$(window).scroll(function(){
		var hT = $('#apply').offset().top,
			hH = $('#apply').outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();	
		if(wS > (hT+hH-wH)){
			$('.circle>img').addClass('ani');
		}
		else{
			$('.circle>img').removeClass('ani');
		};
	});
	// 아이콘 휘리릭
	$('#apply .icon > div').hover(
		function(){
			$(this).find('img').addClass('ani');
		},
		function(){
			$(this).find('img').removeClass('ani');
		}
	);
	
// media Query
	// 피씨버전일때 1024부터
	$(window).resize(function(){
		if($(window).width() > 1023){
			$('.inquire').show();
			$('.twoInnerMobile').hide();
 			$('.moreMenu').hide();
			// $('.Jpopup').hide();
			/*$('#footInMobile').hide();
			$('#footerMobile').hide(); */
		}else if($(window).width() > 767 && $(window).width() < 1024){
/* 			$('#footInMobile').hide();
			$('#footer').show();
			$('#footerMobile').show(); */
			$('.inquire').show();
			$('.Jpopup').hide();
		}else if($(window).width() < 768){
/* 			$('#footInMobile').show();
			$('#footerMobile').show();
			$('#footer').hide(); */
			$('.inquire').hide();
			$('.Jpopup').hide();
		};
	});

	$('#footerMobile ul li.moreMobile').click(function(){
		$('.moreMenu').stop().slideToggle(500);
	});
	
	$('#header li.allMobile').click(function(){
		$('.twoInnerMobile').slideToggle();
	});

	$('#footerMobile ul li').click(function(){
		$('#footerMobile ul li').removeClass('mobileOn');
		$(this).addClass('mobileOn');
	});
	
	$('.oneDepthMobile li').click(function(event){
		event.stopPropagation();
		$(this).find('>ul').stop().slideToggle(500);
	});

	$('#footInMobile > ul > li').removeClass(); // 푸터 아코디언
	$('#footInMobile > ul > li').click(function(){
		$(this).find('ul.sub').stop().slideToggle(500);
	});
});















