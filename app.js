// const maxValue = 5;

// const solution = Math.floor(Math.random() * maxValue) + 1;
// let isCorrect = false;

// while (!isCorrect) {
//   let userGuess = parseInt(prompt(`Enter a number between 1 and ${maxValue}:`));

//   if (userGuess === solution) {
//     isCorrect = true;
//     alert(`Congratulations! You guessed the correct number: ${solution}`);
//   } else if (userGuess > solution) {
//     alert('Too high! Try a lower number.');
//   } else if (userGuess < solution) {
//     alert('Too low! Try a higher number.');
//   }
// }


// Step 1
const maxValue = 5;

// Step 2
const solution = Math.floor(Math.random() * maxValue) + 1;
// Uncomment the line below for development to see the solution
// console.log("Solution:", solution);

// Step 3
let isCorrect = false;

// Step 4
do {
  // Step 5
  let userGuess = Number(prompt(`Enter a number between 1 and ${maxValue}:`));

  if (userGuess === solution) {
    isCorrect = true;
    console.log("Congratulations! Your guess is correct!");
  } else if (userGuess < solution) {
    console.log("Too low. Try again!");
  } else {
    console.log("Too high. Try again!");
  }

} while (!isCorrect);

alert(console.log)