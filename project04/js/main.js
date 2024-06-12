$(function(){

	$('#map_wrap p.map_btn').click(function(){
		// $('.shop_find').css('display','block');
		$('.shop_find').stop().slideDown(500);
	});

	/* ���κ��־��� */
	window.mySwipe = $('#mySwipe').Swipe({
		auto: 3000, //banner 3s move
		continuous: true, // interval rolling
		callback: function(index, element){
			$('.touch_bullet .active').attr('src',$('.touch_bullet .active').attr('src').replace('on.png','off.png')).removeClass('active');
			$('.touch_bullet img').eq(index).attr('src',$('.touch_bullet img').eq(index).attr('src').replace('off.png','on.png')).addClass('active');
		}
	}).data('Swipe');
    
	/* ���־� ����, ���� ��ư */
	$('.touch_left_btn a').on('click',function(){
		mySwipe.prev();
		return false;
	});
 	$('.touch_right_btn a').on('click',function(){
		mySwipe.next();
		return false;
	});
  
	/*  */
	$('#roll_banner_wrap dd').not(':first').hide();
	var onBtn = $('#roll_banner_wrap dt a:first');
	$('#roll_banner_wrap dt a').on('click',function(){
		$('#roll_banner_wrap dd:visible').hide();
		$('img', onBtn).attr('src',$('img', onBtn).attr('src').replace('over.png','out.png'));
		var num = $('#roll_banner_wrap dt a').index(this);
		$('#roll_banner_wrap dd').eq(num).show();
		$('img',this).attr('src',$('img',this).attr('src').replace('out.png','over.png'));
		onBtn = $(this);
		btnNum = num;
		return false;
	});
	
	btnNum = 0; // 
	function autoPlay(){
		btnNum++;
		if(btnNum>=7){btnNum=0;}
		$('#roll_banner_wrap dt a').eq(btnNum).trigger('click');
		auto1 = setTimeout(autoPlay,3000);
	};
	autoPlay();
	
	$('.playBtn').on('click',function(){
		clearTimeout(auto1);
		auto1 = setTimeout(autoPlay,2000);
		$('img', this).attr('src',$('img',this).attr('src').replace('off.gif','on.gif'));
		$('.stopBtn img').attr('src',$('.stopBtn img').attr('src').replace('on.gif','off.gif'));
		return false;
	});
	$('.stopBtn').on('click',function(){
		clearTimeout(auto1);
		$('img', this).attr('src',$('img',this).attr('src').replace('off.gif','on.gif'));
		$('.playBtn img').attr('src',$('.playBtn img').attr('src').replace('on.gif','off.gif'));
		return false;
	});
	
	/* �Ǹ޴� */
	var onTab = $('#tabmenu dt a:first');
	
	$('#tabmenu dt a').on('mouseover focus click',function(){
		$('#tabmenu dd:visible').hide();
		$('img',onTab).attr('src',$('img', onTab).attr('src').replace('over.jpg','out.jpg'));
		$(this).parent().next().show();
		$('img',this).attr('src',$('img',this).attr('src').replace('out.jpg','over.jpg'));
		onTab = $(this);
		return false;
	});
	
	/* �Ű�����ǰ �����̴� */
	var mySlider = $('#best_bg ul').bxSlider({
		mode: 'horizontal', //����
		speed: 300,
		pager:false, //����¡ ǥ�� ����(���� �Ǵ� ����)
		moveSlides: 1,
		slideWidth: 170,
		minSlides: 6, //���� �����̵� �ּ� ����
		maxSlides: 6, //���� �����̵� �ִ� ����
		slideMargin: 50,
		auto: true,
		autoHover: true,
		controls: false //���� ���� ��ư ����
	});
	$('.prev_btn').on('click',function(){
		mySlider.goToPrevSlide();
		return false;
	});
	$('.next_btn').on('click',function(){
		mySlider.goToNextSlide();
		return false;
	});
	
	/* pop */
	if($.cookie('colpoppop') != 'no'){$('#pop_wrap').show()};
	$('#pop_wrap').css('cursor','grab').draggable();
	$('#pop_wrap .bottom_news .close').on('click',function(){
		$('#pop_wrap').fadeOut('fast');
		return false;
	});
	$('#pop_wrap .day_close').on('click',function(){
		$.cookie('colpoppop','no',{expires:1}); //expires = ��ȿ�Ⱓ
		$('#pop_wrap').fadeOut('fast');
		return false;
	});
	
	/* �̺�Ʈ�����̵��� */
	var visual = $('#brandVisual > ul > li');
	var button = $('#buttonList > li');
	var current = 0;
	var setIntervalId;
	button.on({
		click:function(){
			var tg = $(this);
			var i = tg.index();
			if(current===tg.index()){return;}; //�ߺ� ����
			button.removeClass('on');
			tg.addClass('on');
			move(i);
			return false;
		}
	});
	function move(i){
		var currentEl = visual.eq(current);
		var nextEl = visual.eq(i);
		currentEl.css({left:0}).stop().animate({left:'-100%'});
		nextEl.css({left:'100%'}).stop().animate({left:0});
		current = i;
	};
	function timer(){
		setIntervalId = setInterval(function(){
			var n = current + 1;
			if(n==visual.size()){n=0;};
			button.eq(n).trigger('click');
		},1500);
	};
	timer();
	
	$('#event_wrap').on({
		mouseover:function(){
			clearInterval(setIntervalId);
		},
		mouseout:function(){
			timer();
		}
	});

	// $('.care_menu_right').eq(0).css('display','block');
	$('.event_middle_right ul li').on('mouseenter focus',function(){
		var tg = $(this);
		var tgi = tg.index();
		$('.care_menu_right').css('display','none');
		$('.care_menu_right').eq(tgi).css('display','block');
	});

	
	/* ������ �����̵� */
	var rw = $('#recipe .slider_panel a img').width();
	function moveSlider(index){
		var willMoveLeft = -(index*rw);
		var willMoveRight = +(index*rw);
		
		$('.slider_panel').animate({left:willMoveLeft},'500');
		
		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']').removeClass('active');
		
 		$('.slider_text[data-index='+index+']').show().animate({left:0},'slow');
		$('.slider_text[data-index!='+index+']').hide('slow', function(){$(this).animate({left:-100},'slow')});
		
		randomNumber = index;		
	};
	$('.slider_text').css('left','-100%').each(function(index){
		$(this).attr('data-index', index); // data-index
	});
	$('.control_button').each(function(index){
		$(this).attr('data-index', index);
	}).click(function(){
		var index = $(this).attr('data-index');
		moveSlider(index);
	});
	
	var recipe;
	function recipeslider(){
		recipe = setInterval(function(){
			randomNumber++;
			if(randomNumber==$('.control_button').size()){randomNumber=0};
			moveSlider(randomNumber);
		},2000);
	};	
	recipeslider();
	var randomNumber =Math.round(Math.random()*5);
	moveSlider(randomNumber);
	
	$('.slider_panel a img, .slider_text').hover(
		function(){
			clearInterval(recipe);
		},
		function(){
			recipeslider();
		}
	);
});









