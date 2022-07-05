function randomWords() {
    //getting random object from wordList
    let objFirst = wordDetails[Math.floor(Math.random() * wordDetails.length)];
    let word = objFirst.word;  //getting word from random object
    console.log(word);
}
randomWords();