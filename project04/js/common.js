jQuery(document).ready(function(){
	/* 로그인 */
	$('.login_wrap > a').on('click',function(){
		$('#login_f').animate({top:'45px'},500);
		return false;
	});
	$('.login_wrap .login_close_btn, input[alt="login"]').on('click',function(){
		$('#login_f').animate({top:'-500px'},500);
		return false;
	});
	
	/* top event */
	$('#top_event .event .close_btn').on('click',function(){
		$('#top_event').stop(false, false).slideUp(500);
	});
	
	/* zoom in */
	var base = 100; //�ʱⰪ
	var mybody = $('body');
	$('#zoom a').on('click',function(){
		var zNum = $('#zoom a').index(this);
		if(zNum==0){
			base+=10;
		}else if(zNum==1){
			base=100;
		}else{
			base-=10;
		};
		mybody.css('overflow-x','auto')
			.css('transform-origin','50% 0')
			.css('transform','scale('+base/100+')')
			.css('zoom',base+'%');
	return false;
	});
	
	/* print */
	$('.print_btn').on('click',function(){
		window.print();
		return false;
	});
	
	/* input search */
	$('#keyword').on('focus',function(){
		$(this).css('background-position','0 -500px');
	}).on('blur',function(){
		if($(this).val()=='') $(this).css('background-position','0 0');
	});
	
	/* ��ü�޴� */
	// bb = true;
	// $('#total_btn').on('click',function(){
	// 	if(bb==true){
	// 		$('#total_menu').stop(true, true).slideDown(500);
	// 		bb = false;
	// 	}else{
	// 		$('#total_menu').stop(false, false).slideUp(500);
	// 		bb = true;
	// 	}
	// 	return false;
	// });

	$('#gnb_wrap #gnb > li > a').on('mouseenter focus', function(){
			$('#gnb_wrap #gnb > li ul').stop(true, true).slideDown(500);
			$('.ul_menu_bg').stop(true, true).slideDown(500);
			$('.imgbox > a').stop(true, true).slideDown();
		});
		
	$('#gnb_wrap #gnb').on('mouseleave blur',function(){
		$('.imgbox > a').stop(false, false).slideUp();
		$('#gnb_wrap #gnb > li ul').stop(false, false).slideUp(500);
		$('.ul_menu_bg').stop(false, false).slideUp(500);
		});
		

	/* all menu */
	$('#total_close').on('click',function(){
		$('#total_menu').stop(false, false).slideUp(500);
		bb = true;
		return false;
	});
	
	/* date math() */
	var t = new Date();
	var y = t.getFullYear();
	var m = t.getMonth();
	var d = t.getDate();
	$('#date_wrap .year').text(y);
	$('#date_wrap .month').text(m+1);
	$('#date_wrap .date').text(d);

	/* href */
	$('form[name=rel_f]').on('submit',function(){
		var url = $('select',this).val();
		window.open(url);
		return false;
	});

	/* quick menu */
	var defaultTop = parseInt($('#quick_menu').css('top')); //176px;
	$(window).on('scroll',function(){
		var scv = $(window).scrollTop();
		if(scv<465){scv = 465};
		$('#quick_menu').stop().animate({top:scv+defaultTop+'px'},1000);
	});
	$('#quick_menu').css({top:'345px'},1000);
	
});











