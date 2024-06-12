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
	$.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=cac2157b1295a8f341f8c631127d3dbf&units=metric', function(data){
		//alert(data.city.name);
		//alert(data.list[0].main.temp_min);
		var $minTemp=data.main.temp_min;
		var $maxTemp=data.main.temp;
		var $cTemp=data.main.temp_max;
		var $wIcon=(data.weather[0].icon).substr(0,2);
		$('.Sctemp').text("현재 "+Math.floor($cTemp)+"°");
		$('.Sclowtemp').text("최저 "+Math.floor($minTemp)+"°");
		$('.Schightemp').text("최고 "+Math.floor($maxTemp)+"°");
		$('.Scicon>img').remove();
		$('.Scicon').append('<i class="' + weatherIcon[$wIcon] +'"></i>');
	});
	var nowTime= new Date();
    var dayTime=nowTime.getHours();
	//dayTime = 1;
	if (dayTime >= 0 && dayTime <= 7)
	{
		$('.days').find('img').attr({src: 'images/night.png'})
	}else if (dayTime >= 8 && dayTime <= 16)
	{
		$('.days').find('img').attr({src: 'images/sunny.png'})
	}else if (dayTime >= 17 && dayTime <= 21)
	{
		$('.days').find('img').attr({src: 'images/sunset.png'})
	}else if (dayTime >= 22 && dayTime <= 24)
	{
		$('.days').find('img').attr({src: 'images/night.png'})
	};
	
	$('.getMin').text(nowTime.getMinutes()); // 분
	$('.getHours').text(nowTime.getHours()); // 시간

    var day=nowTime.getDay();

    switch(day)
    {
        case 0 : week="Sun"
        break
        case 1 : week="Mon"
        break
        case 2 : week="Tue"
        break
        case 3 : week="Wed"
        break
        case 4 : week="Thu"
        break
        case 5 : week="Fri" 
        break
        case 6 : week="Sat" 
        break
    };
	$('.week').text(week);
});








