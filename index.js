var Word = require("./word")
var inquirer = require("inquirer")

var randomWords = ["theshining", "scarface", "thegodfather", "jaws", "forrestgump", "thedarkknight", "titanic"];




var wins = 0;

function resetGame() {

  console.log("Wins = " + wins)

  var pickedWord = randomWords[Math.floor(Math.random() * randomWords.length)]

  var wordSplit = [...pickedWord];
     
  var guessline = [];

     for (var q = 0; q < pickedWord.length; q++) {
         guessline[q] = " _ ";
     }
     console.log(guessline.join(" "))

  var wordLength = pickedWord.length

  var hangman = new Word(pickedWord)

  var counter = 0

  var guessedletters = [];

  var isGuessed = false;

  var tries = 7;

  console.log(pickedWord)
  
  hangman.wordCheck()


  function inquirerr() {

    if (tries > 0) {


      inquirer
        .prompt([

          {
            type: "input",
            message: "Guess a letter",
            name: "letter"
          }

        ])
        .then(function (inquirerResponse) {
          
          console.log(inquirerResponse.letter)

            if (guessedletters.includes(inquirerResponse.letter)){

              isGuessed = false;
              console.log("aleady guessed")
              console.log(guessedletters);
              inquirerr()

            }

            else {
              isGuessed = true;
              guessedletters.push(inquirerResponse.letter);
              saveUpdates()

            }

          console.log(guessedletters)

        

          function saveUpdates() {

              hangman.wordGuess(inquirerResponse.letter)

            
              var conditions = []
              
              
              for (var a = 0; a < hangman.letters.length; a++) {
                
                conditions.push(hangman.letters[a].letterGuessed)
                
              }
              
              function checkTrue(value) {
                return value === true;
              }
              
              if (conditions.every(checkTrue) === true) {
                console.log("you win")
                
                // setTimeout(resetGame(), 5000)
                
              }
              
              else {

                
                if (conditions.filter(Boolean).length > 0){
                  counter = counter + conditions.filter(Boolean).length

                  for (var e = 0; e < wordLength; e++){

                    if (inquirerResponse.letter === wordSplit[e]){

                      guessline[e] = inquirerResponse.letter;

                      console.log(guessline.join(""))
                    }

                  }

                }
                
                else {
                  tries--
                  console.log("Tries= " + tries)
                }
                
               
                
                if (counter != wordLength){
                  inquirerr()
                }
                
                else {
                  console.log("you win!")
                  wins++
                  resetGame()
                }
                
                
                
                
                
              }
              
           
          }

        })


    }

    else {
      console.log("You ran out of tries!")
      resetGame()
    }

  }

  inquirerr()
  


}






resetGame()










