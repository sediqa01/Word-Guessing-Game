const inputs = document.querySelector(".game-inputs"),
  resetBtn = document.querySelector(".btn"),
  hint = document.querySelector(".hint span"),
  typingInput = document.querySelector(".typing");

function randomWords() {
  //getting random object from wordList
  let objFirst = wordDetails[Math.floor(Math.random() * wordDetails.length)];
  let word = objFirst.word; //getting word from random object
  console.log(word);

  hint.innerHTML = objFirst.hint;

  let html = "";
  for (let i = 0; i < word.length; i++) {

    html += `<input type="text" disabled>`;

  }
  inputs.innerHTML = html;
}
randomWords();

resetBtn.addEventListener("click", randomWords);
document.addEventListener("keydown", () => typingInput.focus());