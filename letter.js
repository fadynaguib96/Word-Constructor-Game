function Letter(letter) {
    this.letter = letter;
    this.letterGuessed = false;

}



Letter.prototype.letterGuess = function () {
    if (this.letterGuessed) {
        console.log(this.letter)
    }
    else {
        return 
    }
}

Letter.prototype.letterCheck = function (userGuess) {
    if (userGuess === this.letter) {
        this.letterGuessed = true;
        // console.log("true")
    }
    else {
        this.letterGuessed = false;
        // console.log("false")
    }
}

// var randomLetter = new Letter("a")

// randomLetter.letterCheck("a")
// randomLetter.letterGuess()


module.exports = Letter
