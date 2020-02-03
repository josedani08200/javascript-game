// Declare our variables
const prompt = require('readline-sync')
// let allColors = ['red, blue, black, white']
let colorRed = "red"
let colorBlue = "blue"
let colorBlack = "black"
let colorWhite = "white"

// user have to insert their name
const userName = prompt.question("Hello, YOU!!! what's your name?\n")
// after insert name the next queston is 
let userGuess = prompt.question(
  `Hi ${userName}, Let me make your life easy ok? I have chose a door between the colors ${colorRed}, ${colorBlue}, ${colorBlack} and ${colorWhite}. 
  You have to open the door and answer the question correct or YOU will die.\n`
)

        const userColor1 = oneColor => {
            if (oneColor === colorRed){
                let answer1 = prompt.question("What is Javascript?\n A. a language\n B. a car\n C. an airplane\n D. a beast");
                winOrLose(answer1);
            }
        }
        const winOrLose = firstAnswer => {
            if (firstAnswer === "A") {
                console.log("YOU DID IT JOB GOOD")
            } else {
                console.log("DIE PAINFULLY, GAME OVER")
            }
        }

                    const userColor2 = oneColor => {
                        if (oneColor === colorBlue){
                            let answer2 = prompt.question("What is a string?\n A. line of caracters\n B. a bus\n C. fruit\n D. guacamole\n");
                            rightOrWrong(answer2)
                        }
                    }
                    const rightOrWrong = SecondAnswer => {
                        if (SecondAnswer === "A") {
                            console.log("YOU DID IT JOB GOOD")
                        } else {
                            console.log("DIE PAINFULLY, GAME OVER")
                        }
                    }


                                const userColor3 = oneColor => {
                                    if (oneColor === colorBlack){
                                        let answer3 = prompt.question("What is a array?\n A. a list\n B. an animal\n C. a key\n D. woah\n");
                                        correctOrWrong(answer3)
                                    }
                                }
                                const correctOrWrong = ThirdAnswer => {
                                    if (ThirdAnswer === "A") {
                                        console.log("YOU DID IT JOB GOOD")
                                    } else {
                                        console.log("DIE PAINFULLY, GAME OVER")
                                    }
                                }


                                        const userColor4 = oneColor => {
                                            if (oneColor === colorWhite){
                                                let answer4 = prompt.question("What is an object?\n A. a list\n B. an animal\n C. woof\n D. a link\n");
                                                maybeOrNot(answer4)
                                            }
                                        }
                                        const maybeOrNot = LastAnswer => {
                                            if (LastAnswer === "A") {
                                                console.log("YOU DID IT JOB GOOD")
                                            } else {
                                                console.log("DIE PAINFULLY, GAME OVER")
                                            }
                                        }
  //let they user play again 
  const playAgain = () => {
  let playAgain = prompt.question('Do you want to play again? YEAH || NO\n')
  playAgain = playAgain.toLowerCase()            
  if (playAgain === 'YEAH') {
    let newGuess = prompt.question(
        `Hi ${userName}, Let me make your life easy ok? I have chose a door between the colors ${colorRed}, ${colorBlue}, ${colorBlack} and ${colorWhite}. 
        You have to open the door and answer the question correct or YOU will die.\n`
      )
      userColor1(userGuess)
      userColor2(userGuess)
      userColor3(userGuess)
      userColor4(userGuess)  
  } else {
    console.log('Thanks for playing. \nSee you later.')
  }
}

    userColor1(userGuess)
    userColor2(userGuess)
    userColor3(userGuess)
    userColor4(userGuess)
