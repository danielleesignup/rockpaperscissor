let n = 5;
let total = 0;
let userTotal = 0;
let computerTotal = 0;

for (let i =1; i<=n; i++) {
    total += 1 
    console.log("Round",total)
    
var playerSelection = prompt("Rock..Paper..Scissors...Shoot!")

function convertPlayerSelection() {
    const converted = playerSelection.toLowerCase()
    return converted
}

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random()*3)
    if (computerChoice === 0) {
        return "rock"
    } 
    if (computerChoice === 1) {
        return "paper"
    }
    if (computerChoice === 2) {
        return "scissor"
    }
}

const converted = convertPlayerSelection();
console.log("You gave: ", converted);

const computerChoice = getComputerChoice();
console.log("Computer gave: ", computerChoice);

function compare() {
    if (converted === computerChoice) {
        console.log("tie")
    } 
    if (converted === "rock" && computerChoice === "paper") {
        console.log("Computer wins")
        computerTotal += 1;
        console.log("Current Score: User--", userTotal, " Computer--", computerTotal)
    }

    if (converted === "rock" && computerChoice === "scissor") {
        console.log("User wins")
        userTotal += 1;
        console.log("Current Score: User--", userTotal, " Computer--", computerTotal)
    }

    if (converted === "paper" && computerChoice === "rock") {
        console.log("User wins")
        userTotal += 1;
        console.log("Current Score: User--", userTotal, " Computer--", computerTotal)
    }

    if (converted === "paper" && computerChoice === "scissor") {
        console.log("Computer wins")
        computerTotal += 1;
        console.log("Current Score: User--", userTotal, " Computer--", computerTotal)
    }

    if (converted === "scissor" && computerChoice === "rock") {
        console.log("Computer wins")
        computerTotal += 1;
        console.log("Current Score: User--", userTotal, " Computer--", computerTotal)
    }

    if (converted === "scissor" && computerChoice === "paper") {
        console.log("User wins")
        userTotal += 1;
        console.log("Current Score: User--", userTotal, " Computer--", computerTotal)
    }  
}



compare()
}

console.log("Current Score: User--", userTotal, " Computer--", computerTotal)

if (userTotal == computerTotal) {
    console.log("It's a tie!")
}
if (userTotal > computerTotal) {
    console.log("User wins!")
}
if (userTotal < computerTotal) {
    console.log("Computer wins!")
}