var score = 0; //Sets score to 0
var total = 10; // Total number of questions
var point = 1; //Points per right answer
var highest= total * point; //setting the scoring system


//Setting correct answers
function init(){
	sessionStorage.setItem("a1","b");
	sessionStorage.setItem("a2","c");
	sessionStorage.setItem("a3","a");
	sessionStorage.setItem("a4","d");
	sessionStorage.setItem("a5","a");
	sessionStorage.setItem("a6","c");
	sessionStorage.setItem("a7","b");
	sessionStorage.setItem("a8","a");
	sessionStorage.setItem("a9","c");
	sessionStorage.setItem("a10","d");

}

$(document).ready(function(){
 
//Audio below
/*myAudio = new Audio('assest/s3song.mp3'); 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();*/

//Below hides all the questions
$('.questionForm').hide();

//show 1st question
$('#q1').show();

$('#q1 #go').click(function(){
	$('.questionForm').hide();
	$('#q2').fadeIn(500);
	return false;

});

$('#q2 #go').click(function(){
	$('.questionForm').hide();
	$('#q3').fadeIn(500);
	return false;

});

$('#q3 #go').click(function(){
	$('.questionForm').hide();
	$('#q4').fadeIn(500);
	return false;

});

$('#q4 #go').click(function(){
	$('.questionForm').hide();
	$('#q5').fadeIn(500);
	return false;

});

$('#q5 #go').click(function(){
	$('.questionForm').hide();
	$('#q6').fadeIn(500);
	return false;

});

$('#q6 #go').click(function(){
	$('.questionForm').hide();
	$('#q7').fadeIn(500);
	return false;

});

$('#q7 #go').click(function(){
	$('.questionForm').hide();
	$('#q8').fadeIn(500);
	return false;

});

$('#q8 #go').click(function(){
	$('.questionForm').hide();
	$('#q9').fadeIn(500);
	return false;

});

$('#q9 #go').click(function(){
	$('.questionForm').hide();
	$('#q10').fadeIn(500);
	return false;

});

$('#q10 #go').click(function(){
	$('.questionForm').hide();
	$('#results').fadeIn(500);
	return false;

});




});


//Event listener
window.addEventListener('load', init, false);