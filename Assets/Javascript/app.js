$(document).ready(function(){

var number = 60;

var intervalId;

var gcount = 0;

var wcount = 0;

var unanswered = 0;

function run() {
	intervalID = setInterval(decrement, 1000);

}

$(window).on("load", hide);

$('#start').on('click', function(){
	$(this).hide();
	show();
	run();

});

$('#done').on('click', function(){
	$('#start').hide();
	hide();
	rSummary();
	stop();

});

function rSummary(){
	var allDone = $('<h2>').html('All Done!');
	var canswers = $('<p>').html('Correct Answers: ' + gcount);
	var wanswers = $('<p>').html('Incorrect Answers: ' + wcount);
	var cunanswered = $('<p>').htmll('Unanswered: ' + cunanswered);
	var newclass = $
	newclass.append(allDone);
	newclass.append(canswers);
	newclass.append(wanswers);
	newclass.append(cunanswered);
	$('.row:nth(2)').append(newclass);

}

function decrement(){
	number--;
	$("#timer").html(" " + number + "seconds");

	if (number === 1){
		$("#timer").html(" " + number + "second");

	}
	else if (number === 0){
		$('#start').hide();
		hide();
		rSummary();
		stop();

	}

}
function stop(){
	clearInterval(intervalID);



}
function hide(){
	$('.form-group').hide();
	$('#time').hide();
	$('#done').hide();

}
	function show(){
	$('.form-group').show();
	$('#time').show();
	$('#done').show();


	}
	$('input[type=radio]').on("change", function(){
	gcount = $('input[value=goodanswer]:checked').length;
	wcount = $('input[value=wrong]:checked').length;
	unanswered = (5-(gcount + wcount));

	});

});




















