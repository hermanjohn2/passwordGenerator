// Global Variables linked to elements
var lengthElement = document.getElementById('length');
var numbersElement = document.getElementById('numbers');
var symbolsElement = document.getElementById('symbols');
var lowercaseElement = document.getElementById('lowercase');
var uppercaseElement = document.getElementById('uppercase');
// New Password text area
var passwordElement = document.getElementById('password');
// Generate Button
var generateBtn = document.getElementById('generate');

// Object that holds all random generator functions
var randomFunctions = {
	number: getRandomNumber,
	symbol: getRandomSymbol,
	lower: getRandomLowercase,
	upper: getRandomUppercase
};

// Sets variables to their result once set.
generateBtn.addEventListener('click', function () {
	// Gets value of length element and uses Unary plus(+) operator to change from string to number
	var length = +lengthElement.value;
	var hasNumbers = numbersElement.checked;
	var hasSymbols = symbolsElement.checked;
	var hasLowercase = lowercaseElement.checked;
	var hasUppercase = uppercaseElement.checked;

	// Takes write password function result and adds to password element. When writePassword is called, it sets length and checked boxes results as variables.
	passwordElement.innerText = writePassword(length, hasNumbers, hasSymbols, hasLowercase, hasUppercase);
});

const array = [];

// Beginning of function that writes the password. Sets first parameter to length & the remaining to match keys of randomFunctions object.
function writePassword(length, number, symbol, lower, upper) {
	// Initializes createdPassword variable
	var createdPassword = '';

	// Sets checkedCount to total of checked boxes
	var checkedCount = number + symbol + lower + upper;

	// An array of the selected character types
	var checkedArray = [{ number }, { symbol }, { lower }, { upper }].filter(item => Object.values(item)[0]);

	// If there are no boxes checked, returns empty string
	if (checkedCount === 0) {
		return '';
	}
	// Calls random functions in order. Adds random item, if checked, until length is met.
	for (var i = 0; i < length; i += checkedCount) {
		checkedArray.forEach(type => {
			// Takes object key from checkedArray and sets to functionName
			var functionName = Object.keys(type)[0];

			// Appends on the randomly generated item (symbol, number, lower, upper), to the createdPassword variable.
			createdPassword += randomFunctions[functionName]();
		});
	}
	// Returns created password outside of for loop, which is displayed in password element once writePassword() is called.
	return createdPassword;
}

// Generates a random number between 0-9. Math.floor(Math.random()) randomly selects from numbers variable
function getRandomNumber() {
	var numbers = '0123456789';
	return numbers[Math.floor(Math.random() * numbers.length)];
}

// Generates a random symbol from the symbols variable by using Math.floor and Math.random
function getRandomSymbol() {
	var symbols = '!@#$%&*<>+=';
	return symbols[Math.floor(Math.random() * symbols.length)];
}

// Generates a random lowercase letter from the alphabet. Math.floor(Math.random()) randomly selects from lowercase variable
function getRandomLowercase() {
	var lowercase = 'abcdefghijklmnopqrstuvwzyz';
	return lowercase[Math.floor(Math.random() * lowercase.length)];
}

// Generates a random uppercase letter from the alphabet. Math.floor(Math.random()) randomly selects from uppercase variable
function getRandomUppercase() {
	var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	return uppercase[Math.floor(Math.random() * uppercase.length)];
}
