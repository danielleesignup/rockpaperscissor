
var compAnswer ="";
var userAnswer ="";

function computerAnswer() {
	random = Math.floor(Math.random()*3+1)
	switch(random) {
		case 1:
			return 'rock';
			break;
		case 2:
			return 'paper';
			break;
		case 3: 
			return 'scissor'
			break;
	}
	
}

function winnerIsFunction() {
	if (compAnswer === userAnswer) {
		return 'tie'
	}
	else if (
		compAnswer == 'rock' && userAnswer == 'scissor' ||
		compAnswer == 'paper' && userAnswer == 'rock' ||
		compAnswer == 'scissor' && userAnswer == 'paper'
	)
		return 'Computer'
	else 
		return 'User'
}


var rock = document.getElementById('rock').addEventListener('click', function() {
	compAnswer = computerAnswer()
	userAnswer = 'rock';
	winnerIs = winnerIsFunction();
	document.getElementById("youSaid").innerHTML = '<h3>'+'You said: '+'rock'+'</h3>';
	document.getElementById("compSaid").innerHTML = '<h3>'+'Computer said: '+ compAnswer+'</h3>';
	document.getElementById("theWinner").innerHTML = '<h3>'+'The Winner is: '+ winnerIs +'</h3>';
	console.log('userAnswer: ', userAnswer)
	console.log('compAnswer: ', compAnswer)
}	
)
	


var paper = document.getElementById('paper').addEventListener('click', function(){
	compAnswer = computerAnswer()
	userAnswer = 'paper';
	winnerIs = winnerIsFunction();
	document.getElementById("youSaid").innerHTML = '<h3>'+'You said: '+'paper'+'</h3>';
	document.getElementById("compSaid").innerHTML = '<h3>'+'Computer said: '+ compAnswer+'</h3>';
	document.getElementById("theWinner").innerHTML = '<h3>'+'The Winner is: '+ winnerIs +'</h3>';
	console.log('userAnswer: ', userAnswer)
	console.log('compAnswer: ', compAnswer)
})

var paper = document.getElementById('scissor').addEventListener('click', function(){
	compAnswer = computerAnswer()
	userAnswer = 'scissor';
	winnerIs = winnerIsFunction();
	document.getElementById("youSaid").innerHTML = '<h3>'+'You said: '+'scissor'+'</h3>';
	document.getElementById("compSaid").innerHTML = '<h3>'+'Computer said: '+ compAnswer+'</h3>';
	document.getElementById("theWinner").innerHTML = '<h3>'+'The Winner is: '+ winnerIs +'</h3>';
	console.log('userAnswer: ', userAnswer)
	console.log('compAnswer: ', compAnswer)
})




// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
