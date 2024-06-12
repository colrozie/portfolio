$(function(){
	//alert('hi');	
	// 페이지 탭메뉴
	var pageTab = $('#coursesWrap #page .pageNumber div');	
	pageTab.click(function(){
		var tg = $(this);
		var i = tg.index();
		pageTab.removeClass('active');
		tg.addClass('active');
	});			
	//어사이드 메뉴 호버
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