// Declare our variables
const prompt = require('readline-sync')
let maxRange = ['red, blue, black, white']
const maxGuesses = [1,2,3]
let currentGuess = 0
// Generate random number
maxGuesses.forEach((colors) => {
    let randomColor = maxRange[Number(Math.floor(Math.random() * maxRange.length))]
    console.log(`${maxGuesses}, ${randomColor}`)
  })

// Get user name
const userName = prompt.question("Hello, YOU!!! what's your name?\n")
// Get users guess
// Interpolate the user guess into welcome prompt
let userGuess = prompt.question(
  `Hi ${userName}, Let me make your life easy ok? I have chose a door between the colors ${maxGuesses}, 
  you have ${maxGuesses} tries to find the correct door or YOU die jijiji.\n`
)

// // Handle the users guess to determine if they won, lost, or should guess again.
// const handleGuess = userGuess => {
//   // Loop through users guesses until they ``     f,ewmmqhave no guesses left.
//   for (let guesses = 0; guesses < maxGuesses; guesses++) {
//     if (userGuess == randomColor) {
//       console.log('You win! 🏆')
//       playAgain()
//     } else if (guesses === maxGuesses - 1) {
//       console.log('You lose! 💀')
//       playAgain()
//     } else if (userGuess > randomColor) {
//       console.log('Think lower')
//       currentGuess++
//       console.log('Guesses left: ', maxGuesses - currentGuess)
//       userGuess = prompt.question('Guess again...\n')
//     } else {
//       console.log('Think higher.')
//       currentGuess++
//       console.log('Guesses left: ', maxGuesses - currentGuess)
//       userGuess = prompt.question('Guess again...\n')
//     }
//   }
// }

// // Ask the user if they want to play again
// const playAgain = () => {
//   let playAgain = prompt.question('Do you want to play again? YEAH || NO\n')
//   playAgain = playAgain.toLowerCase()
//   if (playAgain === 'YEAH') {
//     // Reset our game variables
//     let randomColor= maxRange[Number(Math.floor(Math.random() * maxRange.length))]
//     let newGuess = prompt.question(
//         `Hi ${userName}, Let me make your life easy ok? I have chose a door between the colors ${maxRange} and purple, 
//         you have ${maxGuesses} tries to find the correct door or YOU die jijiji.\n`
//       )
//     currentGuess = 0
//     guesses = 0
//     handleGuess(newGuess)
//   } else {
//     console.log('Thanks for playing. \nSee you later.')
//   }
// }

// handleGuess(userGuess)
