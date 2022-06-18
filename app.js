const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const resetButton = document.querySelector('#reset')
const p1Text = document.querySelector('#playerOne')
const p2Text = document.querySelector('#playerTwo')

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

//the gameOver state applies to both sets of buttons.
//so that if gameOver is true on either of the button events, the game will stop and neither button will add to the scores.

p1Button.addEventListener('click', function (e) {
    if (!isGameOver) { //recall that ! is not
        p1Score += 1; 
    }
    if (p1Score === winningScore) {
        isGameOver = true; //once this is true, the entire block of code will no longer run.
        //thus, the code cannot be incremented anymore.
    }
    p1Text.textContent = p1Score;
})

p2Button.addEventListener('click', function (e) {
    if (!isGameOver) { // see above
        p2Score += 1;
    }
    if (p2Score === winningScore) {
        isGameOver = true;
    }
    p2Text.textContent = p2Score;
})

function resetScores() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Text.textContent = p1Score;
    p2Text.textContent = p2Score;
}

//resetButton.addEventListener('click', resetScores());
resetButton.addEventListener('click', function() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Text.textContent = 0;
    p2Text.textContent = 0;
})