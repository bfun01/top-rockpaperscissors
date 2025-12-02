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
// 5. Call 5 rounds of the game. Have a message at the end declaring the winner.

let round = 1

// Computer Choice
let compchoice //Pass function result to a variable so I can call the result later.

function getComputerChoice() {
    // Below was the first version. However I keep calling math.random() multiple times and therefore, if I want to update this with more choices later
    // i'll need to redfine the ranges and adjust each condition. LAME.

    // if (Math.random() <= 0.33) {
    //     compchoice = "rock";
    // } else if ((Math.random() >= 0.33) && (Math.random() <= 0.66)) {
    //     compchoice = "paper";
    // } else {
    //     compchoice = "scissors"; 
    // }

    // After feedback, this is the second version. Whereas v1 was "Pick a number between 0 and 1 and split the ranges", 
    // the below is saying "Just roll a dice with 3 sides and use the result"
    const numOfPossibleOutcomes = 3;
    const selection = Math.floor(Math.random() * (numOfPossibleOutcomes)); // Give random number between 0 and 1, but then multiply by number of choices and round down to a whole number. 
    if (selection === 0) {
        compchoice = "rock";
    } else if (selection === 1) {
        compchoice = "paper"; 
    } else if (selection === 2) {
        compchoice = "scissors";
    }
}
    
// Human Choice
let choice //Pass function result to a variable so I can call the result later.

function getHumanChoice() {
    choice = prompt("Round "+round+"/5"+": Rock, paper or scissors?");
}

// Round logic
let humanScore = 0; // Variables to keep track of score
let computerScore = 0;

function playRound() {

    getComputerChoice();
    console.log("Computer chooses: "+compchoice);

    getHumanChoice();
    console.log("You chose: " +choice);

    humanChoice = choice.toLowerCase(); //If getHumanChoice function is called here, it reruns the prompt, hence passing the result to the "choice" variable instead
    computerChoice = compchoice; //If getComputerChoice function is called here, it rerolls the result. hence passing the result to "compchoice" variable
   
    if (humanChoice === computerChoice) {
        console.log("Round "+round+": It's a draw!!!");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("Round "+round+": You are the winner!!!")
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("Round "+round+": You are the winner!!!")
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("Round "+round+": You are the winner!!!")
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("Round "+round+": You lose, loser!!!")
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("Round "+round+": You lose, loser!!!")
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("Round "+round+": You lose, loser!!!")
    } else { 
        console.log("Oh god, something went wrong - do you know how to spell?")
    }
    console.log("You: "+humanScore+" Computer: "+computerScore);
    round++;
}

// Step 5: Oh god here we go

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore > computerScore) {
        console.log("FINAL SCORE - "+"You: "+humanScore+" Computer: "+computerScore+" YOU WIN!");
    } else if (humanScore < computerScore) {
        console.log("FINAL SCORE - "+"You: "+humanScore+" Computer: "+computerScore+" YOU LOSE!");
    } else {
        console.log("FINAL SCORE - "+"You: "+humanScore+" Computer: "+computerScore+" It was a draw. How boring")
    }
}

playGame();