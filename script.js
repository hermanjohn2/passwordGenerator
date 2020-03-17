// Assignment Code
//
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // generatePassword function will be stored as password when called
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
// writePassword func is called when generateBtn is click
generateBtn.addEventListener("click", writePassword);

var randomFunctions = {
  number: getRandomNumber,
  symbol: getRandomSymbol,
  uppercase: getRandomUppercase,
  lowercase: getRandomUppercase
};

// Functions that Generate Random outputs --------------------------------------------------------------------------------------------------

// Generates a random number between 0-9 -- String.fromCharCode takes a string from the browser character set values of letters, numbers and symbols on the keyboard.-- Math random generates random number between 0-1; multiply that by 10 so we get a number between 0-9; math floor rounds down to whole number; add 48 so it generates an output between 48 and 57. 48-57 represents the value of numbers 0-9 on the browser character set.
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Generates a random symbol from the symbols variable by using Math.floor and Math.random
function getRandomSymbol() {
  var symbols = "!@#$%&";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Generates a random lowercase letter by using same method as getRandomNumber. 26 represents the amount of possible letters. 97 represents where the alphabet starts on the browser character set.
function getRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Generate a random lowercase letter by using same method as getRandomLowercaser. 26 represents the amount of possible letters. 65 represents where the alphabet starts on the browser character set.
function getRandomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Console Testing
console.log(getRandomNumber());
console.log(getRandomSymbol());
console.log(getRandomLowercase());
console.log(getRandomUppercase());
