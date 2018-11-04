

// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the // character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js) 


var Letter = require("./letter.js")

function Word(word) {

    this.word = word;

    this.letters = []


    this.letterArr = this.word.split("");

}


Word.prototype.wordCheck = function () {

       for (var i = 0; i < this.letterArr.length; i++) {

        this.letters.push(new Letter(this.letterArr[i])) 

        this.letters[i].letterGuess()
    }

}

Word.prototype.wordGuess = function (userGuess) {

    for (var j = 0; j < this.letterArr.length; j++){

        this.letters[j].letterCheck(userGuess)



    }



}

module.exports = Word


// var wword = new Word("dog")

// console.log(wword)
// wword.wordCheck()
// console.log(wword.letters)
// wword.wordGuess("o")
// console.log("----------")
// console.log(wword.letters)
