$(document).ready(function(){  	
	$('.btnMenu').click(function(){
		$('#gnbMo').fadeIn();
	});
	$('#gnbMo > a').click(function(){
		$('#gnbMo').fadeOut();
	});
	
	var card = $('.designWrap .contents .conL ul li');
	var cardImg = $('.designWrap .contents .conR ul li');
	var cardTxt = $('.designWrap .contents .textFlow p');
	
	card.on('mouseenter focus', function(){
		var i = $(this).index();
		card.removeClass();
		card.eq(i).addClass('hoverL');
		cardImg.removeClass('db');
		cardImg.eq(i).addClass('db');
		cardTxt.removeClass('db');
		cardTxt.eq(i).addClass('db');
	});
});

















