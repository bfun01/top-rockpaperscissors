// PSEUDOCODE
// 1. Write a function that randomly selects 1 of three choices
//      1a. Randomly assign value between 0-1. If <0.33 then rock, if 0.33-0.66 then paper, if >0.66 then scissors
// 2. Write a function that takes a user's choice and returns it (assumes user will always enter correct choice)
// 3. Declare variables that keep track of computer and human score
// 4. Code a single round
//      4a. Take human and computer choices as arguments. 
//      4b. Make humanChoice parameter case-insensitive
//      4b. Check which is the winner, log message into console
//      4c. Increment human or computer score based on winner


// Step 1: Computer Choice
let compchoice //Pass function result to a variable so I can call the result later.

function getComputerChoice() {
    if (Math.random() <= 0.33) {
        compchoice = "rock";
    } else if ((Math.random() >= 0.33) && (Math.random() <= 0.66)) {
        compchoice = "paper";
    } else {
        compchoice = "scissors"; 
    }
} 
    
getComputerChoice();

console.log("Computer chooses: "+compchoice);
    
// Step 2: Human Choice

let choice //Pass function result to a variable so I can call the result later.

function getHumanChoice() {
    choice = prompt("Rock, paper or scissors?");
}

getHumanChoice();
console.log("You chose: " +choice);

// Step 3: Variables to keep track of score

let humanScore = 0;
let computerScore = 0;

// Step 4: Round logic

function playRound(humanChoice, computerChoice) {
    humanChoice = choice.toLowerCase(); //If getHumanChoice function is called here, it reruns the prompt, hence passing the result to the "choice" variable instead
    computerChoice = compchoice; //If getComputerChoice function is called here, it rerolls the result. hence passing the result to "compchoice" variable
    if (humanChoice === computerChoice) {
        console.log("It's a draw!!!");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("You are the winner!!!")
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("You are the winner!!!")
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("You are the winner!!!")
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("You lose, loser!!!")
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("You lose, loser!!!")
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("You lose, loser!!!")
    } else { 
        console.log("Oh god, something went wrong - do you know how to spell?")
    }
}

playRound();
console.log("You: "+humanScore+" Computer: "+computerScore);

// Step 5: Oh god her we go

playGame();
