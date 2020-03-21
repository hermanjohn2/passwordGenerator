// Global Variables linked to elements
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
  lower: getRandomLowercase,
  upper: getRandomUppercase
};

// Adds event listener to generate button
generateBtn.addEventListener("click", function() {
  // Gets value of element and uses Unary plus(+) operator to change from string to number
  var length = +lengthElement.value;
  var hasNumbers = numbersElement.checked;
  var hasSymbols = symbolsElement.checked;
  var hasLowercase = lowercaseElement.checked;
  var hasUppercase = uppercaseElement.checked;

  console.log(length, hasLowercase, hasNumbers, hasSymbols, hasUppercase);

  // Takes result of the entered values and adds to password element
  passwordElement.innerText = writePassword(
    length,
    hasNumbers,
    hasSymbols,
    hasLowercase,
    hasUppercase
  );
});

// Function that writes password -- Takes in password element
function writePassword(length, number, symbol, lower, upper) {
  // Initializes password variable
  var createdPassword = "";

  // Adds up amount of parameters selected and assigns to checkedCount variable
  var checkedCount = number + symbol + lower + upper;

  console.log(checkedCount);

  // Array of objects that take parameter value as key
  // Removes unchecked values using filter function. Loops through the array and removes values that are false.
  var checkedArray = [{ number }, { symbol }, { lower }, { upper }].filter(
    item => Object.values(item)[0]
  );
  console.log(checkedArray);

  // If there are no boxes check, return out of function
  if (checkedCount === 0) {
    return;
  }
  // Calls random functions in order. Adds random item, if checked, until length is met.
  for (let i = 0; i < length; i += checkedCount) {
    checkedArray.forEach(type => {
      // Gets the function name key from randomFunction object
      var functionName = Object.keys(type)[0];

      console.log(functionName);
      debugger;
      // Changes created password to
      createdPassword = createdPassword + randomFunctions[functionName]();
    });
  }
  console.log(createdPassword);
}
// Functions that Generate Random outputs --------------------------------------------------------------------------------------------------

// Generates a random number between 0-9. Math.floor(Math.random()) randomly selects from numbers variable
function getRandomNumber() {
  var numbers = "0123456789";
  return numbers[Math.floor(Math.random() * numbers.length)];
}

// Generates a random symbol from the symbols variable by using Math.floor and Math.random
function getRandomSymbol() {
  var symbols = "!@#$%&";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Generates a random lowercase letter from the alphabet. Math.floor(Math.random()) randomly selects from lowercase variable
function getRandomLowercase() {
  var lowercase = "abcdefghijklmnopqrstuvwzyz";
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}

// Generates a random uppercase letter from the alphabet. Math.floor(Math.random()) randomly selects from uppercase variable
function getRandomUppercase() {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}
