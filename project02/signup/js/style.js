$(function(){
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