// Write password to the #password input
function writePassword() {
  // generatePassword function will be stored as password when called
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Variables linked to elements of form
var lengthElement = document.getElementById("length");
var numbersElement = document.getElementById("numbers");
var symbolsElement = document.getElementById("symbols");
var lowercaseElement = document.getElementById("lowercase");
var uppercaseElement = document.getElementById("uppercase");
// New Password text area
var passwordElement = document.getElementById("password");
// Generate Button
var generateBtn = document.getElementById("generate");

// Object that holds all random generator functions
var randomFunctions = {
  number: getRandomNumber,
  symbol: getRandomSymbol,
  uppercase: getRandomUppercase,
  lowercase: getRandomUppercase
};

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  // Gets value of element and uses Unary plus(+) operator to change from string to number
  var length = +lengthElement.value;
  var hasNumbers = numbersElement.checked;
  var hasSymbols = symbolsElement.checked;
  var hasLowercase = lowercaseElement.checked;
  var hasUppercase = uppercaseElement.checked;

  console.log(hasLowercase, hasNumbers, hasSymbols, hasUppercase);
});

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
