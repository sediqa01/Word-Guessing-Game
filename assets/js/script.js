const inputs = document.querySelector(".game-inputs"),
  resetBtn = document.querySelector(".btn"),
  hint = document.querySelector(".hint span"),
  guessLeft = document.querySelector(".guess-left span"),
  wrongLetters = document.querySelector(".wrong span"),
  typingInput = document.querySelector(".typing");

let word, maxGuesses , corrects = [] , incorrects = [];

function randomWords() {

  //getting random object from wordList
  let objFirst = wordDetails[Math.floor(Math.random() * wordDetails.length)];

  word = objFirst.word; //getting word from random object
  maxGuesses = 6;
  console.log(word);

  hint.innerHTML = objFirst.hint;
  guessLeft.innerHTML = maxGuesses;

  let html = "";
  for (let i = 0; i < word.length; i++) {

    html += `<input type="text" disabled>`;

  }
  inputs.innerHTML = html;
}
randomWords();

function initGame(e) { //Geeting user pressed key

  let key = e.target.value;

  if (key.match(/^[A-Za-z]+$/) && !incorrects.includes(`  ${key}`) && !corrects.includes(key)) {
      
     console.log(key);

    if(word.includes(key)){ //if user letter found in the word

      for (let i = 0; i < word.length; i++) {

        //showing matched letter in the input value
        if (word[i] === key) {
          corrects.push(key);
          inputs.querySelectorAll("input")[i].value = key;
        }
      }
    } 
    else {
      maxGuesses--; //decrement by 1
      incorrects.push(`  ${key}`);
    }
    guessLeft.innerHTML = maxGuesses;
    wrongLetters.innerText = incorrects;
  }
      typingInput.value = "";
}

resetBtn.addEventListener("click", randomWords);
typingInput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typingInput.focus());