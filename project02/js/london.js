$(function(){
	var weatherIcon = {
		'01' : 'wi wi-day-sunny',
		'02' : 'wi wi-day-cloudy', 
		'03' : 'wi wi-cloud',
		'04' : 'wi wi-snow',
		'09' : 'wi wi-day-hail',
		'10' : 'wi wi-night-rain',
		'11' : 'wi wi-lightning', 
		'13' : 'wi wi-snowflake-cold', 
		'50' : 'wi wi-cloudy-windy' 
	};	
	$.getJSON('http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=cac2157b1295a8f341f8c631127d3dbf&units=metric', function(data){
		//alert(data.city.name);
		//alert(data.list[0].main.temp_min);
		var $minTemp=data.main.temp_min;
		var $maxTemp=data.main.temp;
		var $cTemp=data.main.temp_max;
		var $wIcon=(data.weather[0].icon).substr(0,2);
		$('.Lctemp').text("현재 "+Math.floor($cTemp)+"°");
		$('.Lclowtemp').text("최저 "+Math.floor($minTemp)+"°");
		$('.Lchightemp').text("최고 "+Math.floor($maxTemp)+"°");
		$('.Lcicon>img').remove();
		$('.Lcicon').append('<i class="' + weatherIcon[$wIcon] +'"></i>');
	});
});








