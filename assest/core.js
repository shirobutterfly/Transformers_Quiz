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
myAudio = new Audio('assest/s3song.mp3'); 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();

//Below hides all the questions
$('.questionForm').hide();

//show 1st question
$('#q1').show();

//Going to one q to the next q

$('#q1 #go').click(function(){
	$('.questionForm').hide();
	process('q1');
	$('#q2').fadeIn(500);
	return false;

});

$('#q2 #go').click(function(){
	$('.questionForm').hide();
	process('q2');
	$('#q3').fadeIn(500);
	return false;

});

$('#q3 #go').click(function(){
	$('.questionForm').hide();
	process('q3');
	$('#q4').fadeIn(500);
	return false;

});

$('#q4 #go').click(function(){
	$('.questionForm').hide();
	process('q4');
	$('#q5').fadeIn(500);
	return false;

});

$('#q5 #go').click(function(){
	$('.questionForm').hide();
	process('q5');
	$('#q6').fadeIn(500);
	return false;

});

$('#q6 #go').click(function(){
	$('.questionForm').hide();
	process('q6');
	$('#q7').fadeIn(500);
	return false;

});

$('#q7 #go').click(function(){
	$('.questionForm').hide();
	process('q7');
	$('#q8').fadeIn(500);
	return false;

});

$('#q8 #go').click(function(){
	$('.questionForm').hide();
	process('q8');
	$('#q9').fadeIn(500);
	return false;

});

$('#q9 #go').click(function(){
	$('.questionForm').hide();
	process('q9');
	$('#q10').fadeIn(500);
	return false;

});

//Last q goes to call in the results

$('#q10 #go').click(function(){
	$('.questionForm').hide();
	process('q10');
	$('#results').fadeIn(500);
	return false;

});




});


//Process the answers
function process(q){
	if(q == "q1"){
		var submitted = $('input[name=q1]:checked').val();

			if(submitted == sessionStorage.a1){
		score ++;
	}

	}

	if(q == "q2"){
		var submitted = $('input[name=q2]:checked').val();

			if(submitted == sessionStorage.a2){
		score ++;
	}

	}

	if(q == "q3"){
		var submitted = $('input[name=q3]:checked').val();

			if(submitted == sessionStorage.a3){
		score ++;
	}

	}


	if(q == "q4"){
		var submitted = $('input[name=q4]:checked').val();

			if(submitted == sessionStorage.a4){
		score ++;
	}

	}

	if(q == "q5"){
		var submitted = $('input[name=q5]:checked').val();

			if(submitted == sessionStorage.a5){
		score ++;
	}

	}


	if(q == "q6"){
		var submitted = $('input[name=q6]:checked').val();

			if(submitted == sessionStorage.a6){
		score ++;
	}

	}


	if(q == "q7"){
		var submitted = $('input[name=q7]:checked').val();

			if(submitted == sessionStorage.a7){
		score ++;
	}

	}


	if(q == "q8"){
		var submitted = $('input[name=q8]:checked').val();

			if(submitted == sessionStorage.a8){
		score ++;
	}

	}



	if(q == "q9"){
		var submitted = $('input[name=q9]:checked').val();

			if(submitted == sessionStorage.a9){
		score ++;
	}

	}


	if(q == "q10"){
		var submitted = $('input[name=q10]:checked').val();

			if(submitted == sessionStorage.a10){
		score ++;
	}

		$('#results').html('<h3> Your final score is:'+score+' out of 10</h3><a href="index.html"> Try Again</a>');

	}

	return false;	


}

//Event listener
window.addEventListener('load', init, false);