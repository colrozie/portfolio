$(function(){

	//동네설정 페이지 이동시 맵 리사이징
	$('a[href="#location"]').click(function(){
	var relayout=setTimeout(function(){
		map.relayout();
		map.setCenter(new kakao.maps.LatLng(37.39979, 126.92099))
		}, 500);
	});

	// 지도에 표시할 원을 생성합니다
	var circle = new kakao.maps.Circle({
		center : new kakao.maps.LatLng(37.39979, 126.92099),  // 원의 중심좌표 입니다
		radius: 70, // 미터 단위의 원의 반지름입니다
		strokeWeight: 0, // 선의 두께입니다

		fillColor: '#000000', // 채우기 색깔입니다
		fillOpacity: 0.2  // 채우기 불투명도 입니다
	});
	
	// 지도에 원을 표시합니다
	circle.setMap(map);

	var positions = [
		{
			title: '안양',
			latlng: new kakao.maps.LatLng(37.39979, 126.92099)
		},
		{
			title: '안양 롯데시네마',
			latlng: new kakao.maps.LatLng(37.39959, 126.92035)
		},
		{
			title: '안양 중앙시장 약국',
			latlng: new kakao.maps.LatLng(37.39913, 126.92077)
		}
	];

	// 마커 이미지의 이미지 주소입니다
	var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

	for (var i = 0; i < positions.length; i ++) {

		// 마커 이미지의 이미지 크기 입니다
		var imageSize = new kakao.maps.Size(24, 35);

		// 마커 이미지를 생성합니다
		var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

		// 마커를 생성합니다
		var marker = new kakao.maps.Marker({
			map: map, // 마커를 표시할 지도
			position: positions[i].latlng, // 마커를 표시할 위치
			title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
			image : markerImage // 마커 이미지
		});
	};

	// 지도 스크롤 확대 축소 막기
	map.setZoomable(false);

	// 지도 확대 축소
	progress();
	// level +1
	$('.locaBtn .minus').click(function(){
		var level = map.getLevel();
		if(level == 5){return false};
		map.setLevel(level + 1);
		progress();
	});
	// level -1
	$('.locaBtn .plus').click(function(){
		var level = map.getLevel();
		map.setLevel(level - 1);
		progress();
	});
	// map level progress bar
	function progress(){
		var bar = (map.getLevel()-1)*25;
		document.getElementById("locaBar2").style.width = bar+"%";
	};

});