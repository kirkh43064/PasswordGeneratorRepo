// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// create the arrays and variables
const number = [1,2,3,4,5,6,7,8,9,0];
const special = ["!", "@", "#", "$", "^", "&", "%", "*", "(", ")", "+", "=", "-", "[", "]", "{", "}", "|", ":", "<", ">", "?", ",",];
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let pwdArray = [];
let randomPass = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  let pwLength = prompt("Please enter the number of characters you want for you new password. It may be between 8 and 128 characters.");
  
  if (pwLength <= 7 || pwLength >= 129) {
    return alert("Error: you must choose between 8 and 128")
  }

  let useLower = confirm("Do you want your new password to include lowercase letters?");
    if (useLower === true) {
    pwdArray = pwdArray.concat(lower);
  }

  let useUpper = confirm("Do you want your new password to include uppercase letters?");
    if (useUpper === true) {
    pwdArray = pwdArray.concat(upper);
  }

  let useSpecial = confirm("Do you want your new password to include special character?");
    if (useSpecial === true) {
    pwdArray = pwdArray.concat(special);
  }

  let useNumb = confirm("Do you want your new password to include numbers?");
    if (useNumb === true) {
    pwdArray = pwdArray.concat(number);
  }

  for (let i = 0; i < pwLength; i++) {
    let generate = pwdArray[Math.floor(Math.random() * (pwdArray.length))];
    password += generate
    console.log(generate);
  }

  document.getElementById("password").innerHTML = password;
return password;
}