$(function(){	
	//팝업닫기
	if($.cookie('JQpop') != 'nop'){$('.Jpopup').show();};
	$('.Jpopup').css('cursor','move').draggable({containment:'window', scroll:false});
	
	$('.Jpopup .JpopCloseBtn').on('click',function(){
		$('.Jpopup').fadeOut();
		return false;
	});
	$('.Jpopup .Jpop1dayBtn').on('click',function(){
		$.cookie('JQpop','nop',{expire:1});
		$('.Jpopup').fadeOut();
		return false;
	});

	// 강의 호버
	var hTitle = $('.descCov > p.sub:first-child');
	hTitle.before('<p class="title"></p>');
	//동적생성
	
	$('.descCon > div').on('mouseenter focus',function(){
		var subT = $(this); // 마우스 올린 객체
		var con = subT.find('h3').text(); // 객체의 h3을 con에 저장
		subT.find('.descCov').stop().fadeIn(200); // 올린 객체의 descCov 보이기
		subT.find('.descCov').css('cursor','grab') // 마우스 커서 바꾸기
		subT.find('.descCov .title').text(con);
	});
	$('.descCon > div').on('mouseleave blur',function(){
		$(this).find('.descCov').stop().fadeOut(150);
	});
	//  강의 하단 아이콘 호버하면 이미지 바뀌는거
 	$(function(){
		$('.descCovIc span').each(function(){
			var icon = $(this);
			var img = icon.find('img');
			var src_off = img.attr('src');
			// src_off = images/desc_off.png
			var src_on = src_off.replace('_off','_on');
			// src_on = images/desc_on.png
			
			$('<img />').attr('src',src_on);
			// 동적생성으로 미리 메모리에 갖고 있기 때문에 엑박 X
			
			icon.mousedown(function(){
				img.css('cursor','grabbing');
			});
			icon.mouseup(function(){
				img.css('cursor','grab');
			});
			icon.on('mouseenter focus',function(){
				img.attr('src',src_on);
				img.css('cursor','grab');
			});
			icon.on('mouseleave blur',function(){
				img.attr('src',src_off);
			});
		});
	});
	// 로드맵 이미지 올라오기
 	$('.roadmapWrap > div > div figure').each(function(){
		var img = $(this);
		img.hover(
			function(){
				img.find('.on').stop(true, true).animate({'margin-top':'-203px'},280).animate({'margin-top':'-184px'},200);
			},
			function(){
				img.find('.on').stop(false, false).animate({'margin-top':'0'},400);
			}
		);
	});
	// 읽어보기 이미지 hover
	var slides = $('.readWrap > div');

	slides.hover(
		function(){
			close();
			var tg = $(this);
			if(tg != tg.find('img').eq(0))
			{tg.find('img').eq(0).stop(true, true).fadeIn(250);
			 tg.find('img').eq(1).stop(false, false).fadeOut(300);			
			 tg.animate({width:810},{duration:1000, queue:false, easing:'easeOutCubic'});
			}
		},
		function(){
			var tg = $(this);
			if(tg != tg.find('img').eq(0))
			{tg.find('img').eq(1).stop(true, true).fadeIn(250);
			 tg.find('img').eq(0).stop(false, false).fadeOut(300);
			 tg.animate({width:145},{duration:1000, queue:false, easing:'easeOutCubic'});
			}
			open();
		}
	);	
	function open(){
		var tg = $('.readWrap > div').eq(0);
		tg.find('img').stop(false, false).fadeIn(250);
		tg.find('img').eq(1).stop(false, false).fadeOut();
		tg.animate({width:810},{duration:1000, queue:false, easing:'easeOutCubic'});
	};
	function close(){
		var tg = $('.readWrap > div').eq(0);
		tg.find('img').eq(1).stop(true, true).fadeIn(250);
		tg.animate({width:145},{duration:1000, queue:false, easing:'easeOutCubic'});
	};
	open();
	
	// 메인 슬라이드
	var main_sli_img = $('.slideWrap li');
	var control_btn = $('.slideBannerWrap li');
	var mcurr = 0;
	var i = mcurr;
	var main_timer;
	
	control_btn.click(function(){
		var tg = $(this);
		i = tg.index();
		if(mcurr == i){return};
		control_btn.removeClass('active');
		tg.addClass('active');
		tg.find('img').stop(true, true).animate({'margin-top':'-4px'},280).animate({'margin-top':'0'},200);;
		move_slide(i);
		return false;
	});	
	
	function move_fun(){
		main_timer=setInterval(function(){
			var i = mcurr+1;
			if(i == main_sli_img.size()){i=0;};
			control_btn.eq(i).trigger('click');
		},3000);
	};
	move_fun();
	
	function move_slide(i){
		var prev_img = main_sli_img.eq(mcurr);
		var next_img = main_sli_img.eq(i);
		
		prev_img.css('left','0%').stop().animate({left:'-100%'},400);
		next_img.css('left','100%').stop().animate({left:'0%'},400);
		mcurr = i;
	};

	ej = true;
	function slide_play_func(){
		if(ej == true){
			clearInterval(main_timer);
			ej = false;
			$('.bannStop').find('img').attr({src: 'images/whiteplay.png'});
		} else if(ej == false){
			move_fun();
			ej = true;
			$('.bannStop').find('img').attr({src: 'images/whitestop.png'});
		}
	};
	$('.bannStop').click(function(){
		slide_play_func();
	});
	$('.bannLeft').click(function(){
		i--;
		var tg = $(this);
		if(mcurr == i){return};
		if(i<0){i=$('.control_button').size()-1;};
		control_btn.removeClass('active');
		control_btn.eq(i).addClass('active');
		move_slide(i);
		return false;
	});
	$('.bannRight').click(function(){
		i++;
		if(i==$('.control_button').size()){i=0};
		control_btn.removeClass('active');
		control_btn.eq(i).addClass('active');		
		move_slide(i);
		return false;
	});
	// welcome 슬라이드
	var current = 0; //현재 페이지 번호
	var thumbListSize = 2;
	var thumbnail = $('#welcomeRoot');
	var prev = $('#welcomeRoot .leftBtn');
	var next = $('#welcomeRoot .rightBtn');
	var container = thumbnail.find('.welcomeCon'); //움직일 대상
	var containWidth = thumbnail.find('.welcomeWrap > div > div').width()+5;

	var thumb = $('.descCon > div');
	var maxSize = thumb.size();
	var image = $('.descCon > div');
	
	
	next.on('click',function(){
		if(current<thumbListSize-1){current++;}
		if(current==thumbListSize-1){next.css('cursor','no-drop');}else{next.css('cursor','pointer');};
		listMove();
	});
	prev.on('click',function(){
		if(current>0){current--}
		if(current==0){prev.css('cursor','no-drop');}else{prev.css('cursor','pointer');};
		listMove();
	});
	next.on('mouseenter focus',function(){
		if(current==1){next.css('cursor','no-drop');}else{next.css('cursor','pointer');};
	});
	
	prev.on('mouseenter focus',function(){
		if(current==0){prev.css('cursor','no-drop');}else{prev.css('cursor','pointer');};
	});
	
	function listMove(){
		var tl = containWidth * current * 5;
		container.stop().animate({right:tl},{duration:400,easing:'easeOutCubic'});
	};
	
	listMove();
	
	// recent 슬라이드
	var Rcurrent = 0; //현재 페이지 번호
	var RthumbListSize = 2;
	var Rthumbnail = $('#recentRoot');
	var Rprev = $('#recentRoot .leftBtn');
	var Rnext = $('#recentRoot .rightBtn');
	var Rcontainer = Rthumbnail.find('.recentCon'); //움직일 대상
	var RcontainWidth = Rthumbnail.find('.recentWrap > div > div').width()+5;

	var Rthumb = $('.descCon > div');
	var RmaxSize = Rthumb.size();
	var Rimage = $('.descCon > div');
	
	Rnext.on('click',function(){
		if(Rcurrent<2-1){Rcurrent++};
		RlistMove();
	});
	Rprev.on('click',function(){
		if(Rcurrent>0){Rcurrent--};
		RlistMove();
	});
	
	function RlistMove(){
		var tl = RcontainWidth * Rcurrent * 5;
		Rcontainer.stop().animate({right:tl},{duration:400,easing:'easeOutCubic'});
	};
	RlistMove();
});

























