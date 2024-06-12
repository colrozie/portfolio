jQuery(document).ready(function(){
		
	var $messages = $('#chat .messages-content'),
		d, h, m,
		i = 0;
		
	 $(window).load(function() {
	  $messages.mCustomScrollbar();
	  setTimeout(function() {
		fakeMessage();		
	  }, 100);
	});

	function updateScrollbar() {
	  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
		scrollInertia: 10,
		timeout: 0
	  });
	}
	 
	function setDate(){
	  d = new Date()
	  if (m != d.getMinutes()) {
		m = d.getMinutes();
		$('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('#chat .message:last'));
	  }
	}

	function insertMessage() {
	  msg = $('#chat .message-input').val();
	  if ($.trim(msg) == '') {
		return false;
	  }
	  $('<div class="message message-personal">' + msg +'</div>').appendTo($('#chat .mCSB_container')).addClass('new');
	  setDate();
	  $('#chat .message-input').val(null);
	  updateScrollbar();

	  setTimeout(function() {
		fakeMessage();
	  }, 1000 + (Math.random() * 20) * 100);	    
	}

	$('#chat .message-submit').click(function() {
	  insertMessage();
	});

	$(window).on('keydown', function(e) {
	  if (e.which == 13) {
		insertMessage();
		return false;
	  }
	})

	var Fake = [
	  '안녕하세요 배달 같이 시켜먹어요.',
	  '나도 배달시켜 먹을줄 알아요.',
	  '두부유부초밥에 라면 어때요?.',
	  '원래 살 찌는게 제일 맛있어요.',
	  '어디서 만날까요?.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',

	]	
	function fakeMessage() {
	  if ($('#chat .message-input').val() != '') {
		return false;
	  }
	  $('<div class="message loading new"><figure class="avatar"><img src="images/profile2.png" /></figure><span></span></div>').appendTo($('#chat .mCSB_container'));
	  updateScrollbar();

	  setTimeout(function() {
		$('.message.loading').remove();
		$('<div class="message new"><figure class="avatar"><img src="images/profile2.png" /></figure>' + Fake[i] + '</div>').appendTo($('#chat .mCSB_container')).addClass('new');
		setDate();
		updateScrollbar();
		i++;
	  }, 1000 + (Math.random() * 20) * 100);

	}

// 22222222222222222222222222222--------------------------------------------------------
	var $messages2 = $('#chat2 .messages-content'),
		d2, h2, m2,
		j = 0;
		
	 $(window).load(function() {
	  $messages2.mCustomScrollbar();
	  setTimeout(function() {
		fakeMessage2();		
	  }, 100);
	});

	function updateScrollbar2() {
	  $messages2.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
		scrollInertia: 10,
		timeout: 0
	  });
	}
	
	function setDate2(){
	  d2 = new Date()
	  if (m2 != d2.getMinutes()) {
		m2 = d2.getMinutes();
		$('<div class="timestamp">' + d2.getHours() + ':' + m2 + '</div>').appendTo($('#chat2 .message:last'));
	  }
	}

	function insertMessage2() {
	  msg = $('#chat2 .message-input').val();
	  if ($.trim(msg) == '') {
		return false;
	  }
	  $('<div class="message message-personal">' + msg +'</div>').appendTo($('#chat2 .mCSB_container')).addClass('new');
	  setDate2();
	  $('#chat2 .message-input').val(null);
	  updateScrollbar2();

	  setTimeout(function() {
		fakeMessage2();
	  }, 1000 + (Math.random() * 20) * 100);	    
	}

	$('#chat2 .message-submit').click(function() {
	  insertMessage2();
	});

	$(window).on('keydown', function(e) {
	  if (e.which == 13) {
		insertMessage2();
		return false;
	  }
	})

	var Fake2 = [
	  '안녕하세요 화장품 같이 사고 싶어요.',
	  '21호 쿨바닐라 색상을 구매하고 싶은데요.',
	  '언제쯤 받아볼 수 있을까요?',
	  '네 그럼 주문하고 말해주세요.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  
	]	
	function fakeMessage2() {
	  if ($('#chat2 .message-input').val() != '') {
		return false;
	  }
	  $('<div class="message loading new"><figure class="avatar"><img src="images/profile3.png" /></figure><span></span></div>').appendTo($('#chat2 .mCSB_container'));
	  updateScrollbar2();

	  setTimeout(function() {
		$('.message.loading').remove();
		$('<div class="message new"><figure class="avatar"><img src="images/profile3.png" /></figure>' + Fake2[j] + '</div>').appendTo($('#chat2 .mCSB_container')).addClass('new');
		setDate2();
		updateScrollbar2();
		j++;
	  }, 1000 + (Math.random() * 20) * 100);

	}

	
// 333333333333333333333333333333333333--------------------------------------------------------
	var $messages3 = $('#chat3 .messages-content'),
		d3, h3, m3,
		k = 0;
		
	 $(window).load(function() {
	  $messages3.mCustomScrollbar();
	  setTimeout(function() {
		fakeMessage3();		
	  }, 100);
	});

	function updateScrollbar3() {
	  $messages3.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
		scrollInertia: 10,
		timeout: 0
	  });
	}
	
	function setDate3(){
	  d3 = new Date()
	  if (m3 != d3.getMinutes()) {
		m3 = d3.getMinutes();
		$('<div class="timestamp">' + d3.getHours() + ':' + m3 + '</div>').appendTo($('#chat3 .message:last'));
	  }
	}

	function insertMessage3() {
	  msg = $('#chat3 .message-input').val();
	  if ($.trim(msg) == '') {
		return false;
	  }
	  $('<div class="message message-personal">' + msg +'</div>').appendTo($('#chat3 .mCSB_container')).addClass('new');
	  setDate3();
	  $('#chat3 .message-input').val(null);
	  updateScrollbar3();

	  setTimeout(function() {
		fakeMessage3();
	  }, 1000 + (Math.random() * 20) * 100);	    
	}

	$('#chat3 .message-submit').click(function() {
	  insertMessage3();
	});

	$(window).on('keydown', function(e) {
	  if (e.which == 13) {
		insertMessage3();
		return false;
	  }
	})

	var Fake3 = [
	  '해외직구 영양제 사고 싶어요.',
	  '아이허브에서 구매하시는거 맞으신가요.',
	  '비타민이랑 프로폴리스 구매하고 싶어요.',
	  '인원 몇명이나 모였나요?',
	  '콜라겐도 하나 추가할게요.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  
	]	
	function fakeMessage3() {
	  if ($('#chat3 .message-input').val() != '') {
		return false;
	  }
	  $('<div class="message loading new"><figure class="avatar"><img src="images/profile4.png" /></figure><span></span></div>').appendTo($('#chat3 .mCSB_container'));
	  updateScrollbar3();

	  setTimeout(function() {
		$('.message.loading').remove();
		$('<div class="message new"><figure class="avatar"><img src="images/profile4.png" /></figure>' + Fake3[k] + '</div>').appendTo($('#chat3 .mCSB_container')).addClass('new');
		setDate3();
		updateScrollbar3();
		k++;
	  }, 1000 + (Math.random() * 20) * 100);

	}

	
// 444444444444444444444444444444--------------------------------------------------------
	var $messages4 = $('#chat4 .messages-content'),
		d4, h4, m4,
		l = 0;
		
	 $(window).load(function() {
	  $messages4.mCustomScrollbar();
	  setTimeout(function() {
		fakeMessage4();		
	  }, 100);
	});

	function updateScrollbar4() {
	  $messages4.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
		scrollInertia: 10,
		timeout: 0
	  });
	}
	
	function setDate4(){
	  d4 = new Date()
	  if (m4 != d4.getMinutes()) {
		m4 = d4.getMinutes();
		$('<div class="timestamp">' + d4.getHours() + ':' + m4 + '</div>').appendTo($('#chat4 .message:last'));
	  }
	}

	function insertMessage4() {
	  msg = $('#chat4 .message-input').val();
	  if ($.trim(msg) == '') {
		return false;
	  }
	  $('<div class="message message-personal">' + msg +'</div>').appendTo($('#chat4 .mCSB_container')).addClass('new');
	  setDate4();
	  $('#chat4 .message-input').val(null);
	  updateScrollbar4();

	  setTimeout(function() {
		fakeMessage4();
	  }, 1000 + (Math.random() * 20) * 100);	    
	}

	$('#chat4 .message-submit').click(function() {
	  insertMessage4();
	});

	$(window).on('keydown', function(e) {
	  if (e.which == 13) {
		insertMessage4();
		return false;
	  }
	})

	var Fake4 = [
	  '2+1 상품 보고 연락드립니다.',
	  '저 2개 사고 싶은데 가능할까요?',
	  '제가 2개를 사도 될까요?',
	  '어디쪽에 사세요?',
	  '네 주문해주세요.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	]	
	function fakeMessage4() {
	  if ($('#chat4 .message-input').val() != '') {
		return false;
	  }
	  $('<div class="message loading new"><figure class="avatar"><img src="images/profile5.png" /></figure><span></span></div>').appendTo($('#chat4 .mCSB_container'));
	  updateScrollbar4();

	  setTimeout(function() {
		$('.message.loading').remove();
		$('<div class="message new"><figure class="avatar"><img src="images/profile5.png" /></figure>' + Fake4[l] + '</div>').appendTo($('#chat4 .mCSB_container')).addClass('new');
		setDate4();
		updateScrollbar4();
		l++;
	  }, 1000 + (Math.random() * 20) * 100);

	}

// 55555555555555555555555555555555555555555555555555555555---------------------------
	var $messages5 = $('#chat5 .messages-content'),
		d5, h5, m5,
		o = 0;
		
	 $(window).load(function() {
	  $messages5.mCustomScrollbar();
	  setTimeout(function() {
		fakeMessage5();		
	  }, 100);
	});

	function updateScrollbar5() {
	  $messages5.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
		scrollInertia: 10,
		timeout: 0
	  });
	}
	
	function setDate5(){
	  d5 = new Date()
	  if (m5 != d5.getMinutes()) {
		m5 = d5.getMinutes();
		$('<div class="timestamp">' + d5.getHours() + ':' + m5 + '</div>').appendTo($('#chat5 .message:last'));
	  }
	}

	function insertMessage5() {
	  msg = $('#chat5 .message-input').val();
	  if ($.trim(msg) == '') {
		return false;
	  }
	  $('<div class="message message-personal">' + msg +'</div>').appendTo($('#chat5 .mCSB_container')).addClass('new');
	  setDate5();
	  $('#chat5 .message-input').val(null);
	  updateScrollbar5();

	  setTimeout(function() {
		fakeMessage5();
	  }, 1000 + (Math.random() * 20) * 100);	    
	}

	$('#chat5 .message-submit').click(function() {
	  insertMessage5();
	});

	$(window).on('keydown', function(e) {
	  if (e.which == 13) {
		insertMessage5();
		return false;
	  }
	})

	var Fake5 = [
	  '강아지 간식 구매하고 싶어요.',
	  '우리 아이가 소고기밖에 안먹어요.',
	  '저 하나만 구매하고 싶은데..',
	  '할인은 안되나요?',
	  '강아지 데리고 가도 되죠?',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  '알겠습니다. 감사합니다.',
	  
	]	
	function fakeMessage5() {
	  if ($('#chat5 .message-input').val() != '') {
		return false;
	  }
	  $('<div class="message loading new"><figure class="avatar"><img src="images/profile6.png" /></figure><span></span></div>').appendTo($('#chat5 .mCSB_container'));
	  updateScrollbar5();

	  setTimeout(function() {
		$('.message.loading').remove();
		$('<div class="message new"><figure class="avatar"><img src="images/profile6.png" /></figure>' + Fake5[o] + '</div>').appendTo($('#chat5 .mCSB_container')).addClass('new');
		setDate5();
		updateScrollbar5();
		o++;
	  }, 1000 + (Math.random() * 20) * 100);

	}

	


	
});