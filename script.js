console.log("Hello World");

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

function getComputerChoice(choice) {
    if (Math.random() <= 0.33) {
        choice = "Rock";
    } else if ((Math.random() >= 0.33) && (Math.random() <= 0.66)) {
        choice = "Paper";
    } else {
        choice = "Scissors"; 
    }
    console.log(choice);
} 
    
getComputerChoice();

// Step 2: Human Choice

function getHumanChoice(choice) {
    choice = prompt("Rock, paper or scissors?");
    console.log(choice);
} 

getHumanChoice();

// Step 3: Keep track of score

let humanScore = 0;
let computerScore = 0;

// Step 4: Round logic