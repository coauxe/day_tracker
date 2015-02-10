$(document).ready(function () {
	var d = new Date();
	var	day = d.getDay();
	var	msg = ["Sunday Funday!",
			   "Back to the grind!",
			   "Got the club goin' up",
			   "Hump Dayyyyy!",
			   "Thor's Day",
			   "Chillin' out maxin' relaxin' all cool",
			   "It's the freaking weekend!"];

	$('#' + day).attr('id', 'today');
	$("#message").text(msg[day]);
	
});