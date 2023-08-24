// Selecting DOM elements
const inputs = document.querySelector(".game-inputs"),
  resetBtn = document.querySelector(".reset-btn"),
  hint = document.querySelector(".hint span"),
  guessLeft = document.querySelector(".guess-left span"),
  wrongLetters = document.querySelector(".wrong span"),
  typingInput = document.querySelector(".typing"),
  timerDisplay = document.querySelector(".timer span"),
  scoreDisplay = document.querySelector(".score span"),
  startBtn = document.querySelector(".start-btn");

let word, maxGuesses, corrects = [],
incorrects = [],
timeRemaining = 30, // Initial game time
playerScore = 0,
timerInterval,
gameStarted = false; // Keep track if the game has started or not
  
function randomWords() {
   // Stop and reset the timer before starting it again
   clearInterval(timerInterval);
   timeRemaining = 30;
   timerDisplay.textContent = timeRemaining;

  //getting random object from wordList
  let objFirst = wordDetails[Math.floor(Math.random() * wordDetails.length)];

  word = objFirst.word; //getting word from random object
  maxGuesses = 6;
  corrects = [];
  incorrects = [];

  hint.innerHTML = objFirst.hint;
  guessLeft.innerHTML = maxGuesses;
  wrongLetters.innerText = incorrects;
  let html = "";
  for (let i = 0; i < word.length; i++) {

    html += `<input type="text" disabled>`;
  }
  inputs.innerHTML = html;
  startTimer();
}

// Start the game timer
function startTimer() {
  clearInterval(timerInterval);
  timerDisplay.textContent = timeRemaining;

  timerInterval = setInterval(() => {
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      handleGameOver();
    } else {
      timeRemaining--;
      timerDisplay.textContent = timeRemaining;
    }
  }, 1000);
}

// Event listener for the "Start Game" button
startBtn.addEventListener("click", () => {
  if (!gameStarted) {
    gameStarted = true;
    startBtn.disabled = true; // Disable the button after starting the game
    startBtn.classList.add("disabled"); // Add the disabled class
    hint.style.display = "inline"; 
    randomWords();
    startTimer();
  }
});


// Update the player's score display
function updateScore() {
  scoreDisplay.textContent = playerScore;
}

// Initialize the game and set up event listeners
function initGame(e) { 
  let key = e.target.value;

  if (key.match(/^[A-Za-z]+$/) && !incorrects.includes(`  ${key}`) && !corrects.includes(key)) {
    if (word.includes(key)) { 
      // Update correct guesses
      for (let i = 0; i < word.length; i++) {
        if (word[i] === key) {
          corrects.push(key);
          inputs.querySelectorAll("input")[i].value = key;
        }
      }
    playerScore += 1; // Increment player score for a correct guess
    updateScore();    // Update the score display
  }else {
      maxGuesses--;
      incorrects.push(`  ${key}`);
      updateScore(); // Update the score display
    }
  guessLeft.innerHTML = maxGuesses;
  wrongLetters.innerText = incorrects;
  }
  typingInput.value = "";

// Check game status
setTimeout(() => {
      // Player wins
    if (corrects.length === word.length) {
      alert(`Congrast!! You found the word:  ${word.toUpperCase()}`);
      randomWords(); 
    } else if (maxGuesses < 1) {
      // Player loses
      handleGameOver();
    }
  }, 0);
}

// Handle game over
function handleGameOver() {
  alert(`Game Over!! the word was:  ${word.toUpperCase()}`);
  randomWords();
  startTimer();
  updateScore(); // Update the score display
  timeRemaining = 30; // Reset time remaining
  timerDisplay.textContent = timeRemaining; // Reset timer display
}

// Event listeners
resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval); // Clear existing timer interval
  randomWords();
  playerScore = 0; // Reset player score
  updateScore();   // Update the score display
});

typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());

// Initialize the game
updateScore();