
var compAnswer ="";
var userAnswer ="";
var rounds = 0;
var userScore = 0;
var compScore = 0;

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

function isItOver() {
	if (rounds === 5) {
		if (userScore > compScore) {
			alert("User Wins!")
		}
		else if (userScore < compScore) {
			alert("Computer Wins!")
		}
		else if (userScore == compScore) {
			alert("It's a tie!")
		}
		compScore = 0;
		userScore = 0;
		rounds = 0;
	}
}


function getUserScore() {
	userScore += 1;
	rounds += 1;
	// if (rounds === 5) {
	// 	if (userScore > compScore) {
	// 		alert("User Wins!")
	// 	}
	// 	else if (userScore < compScore) {
	// 		alert("Computer Wins!")
	// 	}
	// 	else if (userScore == compScore) {
	// 		alert("It's a tie!")
	// 	}
	// 	compScore = 0;
	// 	userScore = 0;
	// 	rounds = 0;
	// }
}

function getCompScore() {
	compScore += 1;
	rounds += 1;
	// if (rounds === 5) {
	// 	if (userScore > compScore) {
	// 		alert("User Wins!")
	// 	}
	// 	else if (userScore < compScore) {
	// 		alert("Computer Wins!")
	// 	}
	// 	else if (userScore == compScore) {
	// 		alert("It's a tie!")
	// 	}
	// 	compScore = 0;
	// 	userScore = 0;
	// 	rounds = 0;
	// }
}


function winnerIsFunction() {
	if (compAnswer === userAnswer) {
		rounds += 1
		return 'tie'
	}
	else if (
		compAnswer == 'rock' && userAnswer == 'scissor' ||
		compAnswer == 'paper' && userAnswer == 'rock' ||
		compAnswer == 'scissor' && userAnswer == 'paper'
	) {
		getCompScore()
		return 'Computer'
	}
	else {
		getUserScore()
		return 'User'
	}

}


var rock = document.getElementById('rock').addEventListener('click', function() {
	compAnswer = computerAnswer()
	userAnswer = 'rock';
	winnerIs = winnerIsFunction();
	document.getElementById("youSaid").innerHTML = '<h3>'+'You said: '+'rock'+'</h3>';
	document.getElementById("compSaid").innerHTML = '<h3>'+'Computer said: '+ compAnswer+'</h3>';
	document.getElementById("theWinner").innerHTML = '<h3>'+'This Round Winner is: '+ winnerIs +'</h3>';
	console.log('userAnswer: ', userAnswer)
	console.log('compAnswer: ', compAnswer)
	document.getElementById("rounds").innerHTML = '<h3>'+'Rounds: '+ rounds +'</h3>';
	document.getElementById("userScore").innerHTML = '<h3>'+'User Score: '+userScore+'</h3>';
	document.getElementById("compScore").innerHTML = '<h3>'+'Computer Score: '+compScore+'</h3>';
	isItOver();
}	
)
	


var paper = document.getElementById('paper').addEventListener('click', function(){
	compAnswer = computerAnswer()
	userAnswer = 'paper';
	winnerIs = winnerIsFunction();
	document.getElementById("youSaid").innerHTML = '<h3>'+'You said: '+'paper'+'</h3>';
	document.getElementById("compSaid").innerHTML = '<h3>'+'Computer said: '+ compAnswer+'</h3>';
	document.getElementById("theWinner").innerHTML = '<h3>'+'This Round Winner is: '+ winnerIs +'</h3>';
	console.log('userAnswer: ', userAnswer)
	console.log('compAnswer: ', compAnswer)
	document.getElementById("rounds").innerHTML = '<h3>'+'Rounds: '+ rounds +'</h3>';
	document.getElementById("userScore").innerHTML = '<h3>'+'User Score: '+userScore+'</h3>';
	document.getElementById("compScore").innerHTML = '<h3>'+'Computer Score: '+compScore+'</h3>';
	isItOver();
})

var paper = document.getElementById('scissor').addEventListener('click', function(){
	compAnswer = computerAnswer()
	userAnswer = 'scissor';
	winnerIs = winnerIsFunction();
	document.getElementById("youSaid").innerHTML = '<h3>'+'You said: '+ userAnswer +'</h3>';
	document.getElementById("compSaid").innerHTML = '<h3>'+'Computer said: '+ compAnswer+'</h3>';
	document.getElementById("theWinner").innerHTML = '<h3>'+'This Round Winner is: '+ winnerIs +'</h3>';
	console.log('userAnswer: ', userAnswer)
	console.log('compAnswer: ', compAnswer)
	document.getElementById("rounds").innerHTML = '<h3>'+'Rounds: '+ rounds +'</h3>';
	document.getElementById("userScore").innerHTML = '<h3>'+'User Score: '+userScore+'</h3>';
	document.getElementById("compScore").innerHTML = '<h3>'+'Computer Score: '+compScore+'</h3>';
	isItOver();
})


document.getElementById("youSaid").innerHTML = '<h3>'+'You said: '+ userAnswer +'</h3>';
document.getElementById("compSaid").innerHTML = '<h3>'+'Computer said: '+ compAnswer+'</h3>';
document.getElementById("theWinner").innerHTML = '<h3>'+'The Winner is: '+ winnerIs +'</h3>';
console.log('userAnswer: ', userAnswer)
console.log('compAnswer: ', compAnswer)





