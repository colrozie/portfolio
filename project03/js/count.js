//자바스크립트 팝업
var popupWidth = 600;
var popupHeight = 314;


var popupX = (window.screen.width / 2) - (popupWidth / 8);
// 만들 팝업창 width 크기의 1/2 만큼 보정값으로 빼주었음

var popupY= (window.screen.height / 2) - (popupHeight / 10);
// 만들 팝업창 height 크기의 1/2 만큼 보정값으로 빼주었음

window.open('popup/popup.html', '', 'toolbar = no, location = no, directories = no, status = no, menubar = no, scrollbars = no, resizable = no, copyhistory = no, height=' + popupHeight  + ', width=' + popupWidth  + ', left='+ popupX + ', top='+ popupY);








