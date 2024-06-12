$(function(){
	//alert('hi');
	// comm 탭메뉴
	var faqTab = $('#faqBoard .faqBoardHeader li');	
	faqTab.click(function(e){
		e.preventDefault();
		var tg = $(this);
		var i = tg.index();
		faqTab.removeClass('active');
		tg.addClass('active');
	});	
	// qna json
	var faqSection = $('.faqSection');
	$.getJSON('data.json',function(faq){
		$.each(faq, function(i,con){
			var text_faqTitle = con.faqTitle;
			var text_title = con.title;
			var faqContentWrap = $('<div class="faqContentWrap"></div>');
			var faqTitle = $('<div class="faqTitle"></div>').text(text_faqTitle);
			var title = $('<div class="faqContent"></div>').text(text_title);
			faqContentWrap.append(faqTitle);
			faqContentWrap.append(title);
			faqSection.append(faqContentWrap);
		});
	});		
	// qna 슬라이드다운
 	$('.faqSection').each(function(){
		var faqCon = $(this);
		var allTit = faqCon.find('.faqTitle');
		var allCon = faqCon.find('.faqContent');
		allCon.hide();
		$(document).on("click",".faqTitle",function(){
			var title = $(this);
			var content = title.parent('.faqContentWrap').find('.faqContent');
			$('.faqSection .faqContent').hide();
			content.stop().slideDown(500);
		});
	});		
});