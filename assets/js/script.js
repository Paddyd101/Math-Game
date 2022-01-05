//Wait for the DOM to finish Loading before runing the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type")=== "submit"){
                checkAnswer();
            }else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType)
            }
        })
    }

    runGame("addition");


})

/** 
 * The main game 'loop', called when the script is first loaded
 * and after the user's answer has been processed
*/
function runGame(gameType) {

    //Creates 2 random numbers between 1 and 25
    let num1 =Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;

    if(gameType ==="addition"){
        displayAdditionQuestion(num1, num2);
    }else{
        alert(`unknown game type: ${gameType}`)
        throw `Unknown game type: ${gameType}. Aborting!`
    }
}

/**
 * Checks the answer against the first element in the 
 * returned calculateCorrectAnswer array
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer===calculatedAnswer[0];
    
    if(isCorrect){
        alert("Well done")
        incrementScore()
    }else{
        alert(`Incorrect. You answered ${userAnswer}. The Correct answer is ${calculatedAnswer[0]}!`)
        incrementWrongAnswer()
        throw `Incorrect. You answered ${userAnswer}. The Correct answer is ${calculatedAnswer[0]}!`
    }

    runGame(calculatedAnswer[1])

}

/**
 * Gets the operands and operators directly fromthe DOM, 
 * and returns the correct answer
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById("operand1").innerText)
    let operand2 = parseInt(document.getElementById("operand2").innerText)
    let operator = document.getElementById("operator").innerText

    if (operator === "+"){
        return[operand1 + operand2, "addition"]
    } else{
        alert(`Unimplemented opreator ${operator} `)
        throw `Unimplemented opreator ${operator}. Aborting! `
    }
}

/**
 * function called when user inputs correct score.
 * gets user score from DOM.
 * Score incremented and 
 * displayed on UI
 */
function incrementScore(){
    let score = parseInt(document.getElementById("score").innerText);
    score+=1;
    document.getElementById("score").innerHTML=score;
}

/**
 * function called when user inputs incorrect score.
 * gets user incorrect score from DOM.
 * incorrect score incremented and 
 * displayed on UI
 */
function incrementWrongAnswer(){
    let incorrect = parseInt(document.getElementById("incorrect").innerText);
    incorrect+=1;
    document.getElementById("incorrect").innerHTML=incorrect;
}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

function displayDivideQuestion(){

}