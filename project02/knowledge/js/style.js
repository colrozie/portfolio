$(function(){
	//메인 배너 페이드인/아웃
	var interval = 2000;
	$('#mainBanner').each(function(){
		var timer;
		var container = $(this);
		function switchImg(){
			var imgs = container.find('.mainBody');
			var first = imgs.eq(0);
			var second = imgs.eq(1);
			first.fadeOut().appendTo(container);
			second.fadeIn();
		};
		function startTimer(){
			timer = setInterval(switchImg,interval);
		};
		function stopTimer(){
			clearInterval(timer);
		};
		startTimer();
 		container.find('.mainBody').hover(
			function(){
				stopTimer();
			},
			function(){
				startTimer();
			}
		);
	});
	
	//탭메뉴
	$('.tabSet').each(function(){
		var topDiv = $(this);
		var anchors = topDiv.find('ul.tabs a');
		var panelDivs = topDiv.find('.panel');	
		var lastAnchor;
		var lastPanel;
		
		anchors.show();
		lastAnchor = anchors.filter('.on');
		lastPanel = $(lastAnchor.attr('href'));
		panelDivs.hide();
		lastPanel.show();
		
		anchors.click(function(e){
			e.preventDefault();
			var currentAnchor = $(this);
			var currentPanel = $(currentAnchor.attr('href'));
			if(currentAnchor.get(0)===lastAnchor.get(0)){return;};

			lastPanel.stop(false).slideUp(280,function(){
				lastAnchor.removeClass('on');
				currentAnchor.addClass('on');
				currentPanel.stop(true).slideDown(350);
				lastAnchor = currentAnchor;
				lastPanel = currentPanel;				
			});
		});
	});
	// why hover
	var why = $('#why .whyCon');
	why.hover(
		function(){
			$(this).stop().animate({'margin-top':'-4px'},200);
			$(this).find('img').stop().animate({'width':'108px'},200);
		},
		function(){
			$(this).stop().animate({'margin-top':'0px'},300);
			$(this).find('img').stop().animate({'width':'100px'},300);
		}
	);
});













