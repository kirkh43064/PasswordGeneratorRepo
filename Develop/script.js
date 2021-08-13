// Assignment Code
var generateBtn = document.querySelector("#generate");

// create the arrays and variables
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let passwordLength;
let confirmLower;
let confirmUpper;
let confirmNumber;
let confirmSpecial;
let userChoices;

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start function
function generatePassword() {
  // get user input
  passwordLength = prompt("How many character would you like in your password? Choose between 8 and 128")
  console.log("Password length = " + passwordLength);

  if(!passwordLength) {
    alert("Required Value!");
  }

  else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("you must choose between 8 and 128");
  }

  else {
    confirmLower = confirm("Do you want lower case letters?");
    console.log("Lower case = " + confirmLower);
    confirmUpper = confirm("Do you want Upper Case letters?");
    console.log("Upper case = " + confirmUpper);
    confirmNumber = confirm("Do you want numbers?");
    console.log("Numbers = " + confirmNumber);
    confirmSpecial = confirm("Do you want special character?");
    console.log("Special Characters = " + confirmSpecial);
  }

  //if no confirmation
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = alert("You must choose at least one criteria");
  }

  // for 4 true answers (they picked all 4)
  else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = (lower, upper, number, special);
    console.log(userChoices);
  }

  // for 3 true (they picked 3)
  else if ( confirmLower && confirmUpper && confirmNumber) {
    userChoices = (lower, upper, number);
    console.log(userChoices);
  }

  else if (confirmLower && confirmUppe && confirmSpecial) {
    userChoices = (lower, upper, special);
    console.log(userChoices);
  }

  else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = (lower, upper, special);
    console.log(userChoices);
  }

  else if (confirmNumber && confirmUpper && confirmSpecial) {
    userChoices = (lower, upper, special);
    console.log(userChoices);
  }

  // for 2 true answers (they picked 2)
  else if (confirmLower && confirmUpper) {
    userChoices = (lower, upper);
    console.log(userChoices);
  }

  else if (confirmLower && confirmSpecial) {
    userChoices = (lower, special);
    console.log(userChoices);
  }

  else if (confirmLower && confirmNumber) {
    userChoices = (lower, upper);
    console.log(userChoices);
  }

  else if (confirmNumber && confirmSpecial) {
    userChoices = (number, special);
    console.log(userChoices);
  }

  else if (confirmSpecial && confirmUpper) {
    userChoices = (special, upper);
    console.log(userChoices);
  }

  else if (confirmNumber && confirmUpper) {
    userChoices = (number, upper);
    console.log(userChoices);
  }

  // 1 true (they only picked 1)
  else if (confirmLower) {
    userChoices = lower;
  }

  else if (confirmUpper) {
    userChoices = upper;
  }

  else if (confirmNumber) {
    userChoices = number;
  }

  else if (confirmSpecial) {
    userChoices = special;
  }

}

// create variable for password length
let passwordBlank = [];

// run loop for each random item
for (let i = 0; i < passwordLength; i++) {
  let finalChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordBlank.push(finalChoices);
  console.log(finalChoices);
}

// combine and return password
let password = passwordBlank.join("");
console.log("our password is: " + password);

document.getElementById("password").innerHTML = passwordBlank;