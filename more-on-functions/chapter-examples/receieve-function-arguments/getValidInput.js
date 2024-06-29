const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"

let isValidPrompt = function(inputPrompt) {
  if (inputPrompt[0].toLowerCase() != "a") {
    return false;
  }
  return true;
}

console.log(getValidInput('Enter a phrase that begins with the letter "a": ', isValidPrompt));

// TODO 2: write a validator 
// that ensures input is a vowel

isVowel = function(userInput) {
  let vowels = ["a","e","i","o","u"];
  if (vowels.includes(userInput.toLowerCase())) {
    return true;
  } 
  return false;
}

console.log(getValidInput('Please enter a vowel: ', isVowel));
// Be sure to test your code!
