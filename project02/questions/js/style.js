$(function(){
	//alert('hi');
	// comm 탭메뉴
	var commTab = $('#commWrap nav ul li');	
	commTab.click(function(e){
		e.preventDefault();
		var tg = $(this);
		var i = tg.index();
		commTab.removeClass('active');
		tg.addClass('active');
	});
	
	// board 탭메뉴
	var boardTab = $('#commWrap .boardHeader li');	
	boardTab.click(function(e){
		e.preventDefault();
		var tg = $(this);
		var i = tg.index();
		boardTab.removeClass('active');
		tg.addClass('active');
	});	
	
	// 페이지 탭메뉴
	var pageTab = $('#commWrap #page .pageNumber div');	
	pageTab.click(function(){
		var tg = $(this);
		var i = tg.index();
		pageTab.removeClass('active');
		tg.addClass('active');
	});		
	// 어사이드메뉴 호버
	$('#asideL > ul > li').each(function(){
		var menu = $(this);
		var sub = menu.find('.sub');

		menu.hover(
			function(){
				sub.stop(true, true).slideDown(500);
			},
			function(){
				sub.stop(false, false).slideUp(500);
			}
		);
	});
});