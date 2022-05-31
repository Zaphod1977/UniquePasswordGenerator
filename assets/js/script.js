var generateBtn = document.querySelector("#generate");
// inputs to prompts
var upperCaseChar = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "1234567890";
var specialCharacters = "!@#$%^&*()_-+=[]{};:/?.>,<\|";
var passwordLength;
var lowerCaseCheck;
var upperCaseCheck;
var specialCheck;
var numberCheck;


// password length?
function length() {
  passwordLength = prompt("please enter a password length between 8 & 128");
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("please enter a password length between 8 & 128");
  }
}

// include lowerCase in the password?
function lowerCase() {
  var input = prompt("Would you like to include lowercase characters ('yes or no')");
  while (input != "yes" && input != "no") {
    input = prompt("Would you like to include lowercase characters ('yes or no')");
  }
  if (input == "yes") {
    lowerCaseCheck = true;
  }
  else {
    lowerCaseCheck = false;
  }
}

// include uppercase in the password?
function upperCase() {
  var input = prompt("Would you like to include uppercase characters ('yes or no')");
  while (input != "yes" && input != "no") {
    input = prompt("Would you like to include uppercase characters ('yes or no')");
  }
  if (input == "yes") {
    upperCaseCheck = true;
  }
  else {
    upperCaseCheck = false;
  }
}

// include numbers in password?
function numbers() {
  var input = prompt("Would you like to include numbers ('yes or no')");
  while (input != "yes" && input != "no") {
    input = prompt("Would you like to include numbers ('yes or no')");
  }
  if (input == "yes") {
    numberCheck = true;
  }
  else {
    numberCheck = false;
  }
}

// include special characters?
function special() {
  var input = prompt("Would you like to include special characters ('yes or no')");
  while (input != "yes" && input != "no") {
    input = prompt("Would you like to include special characters ('yes or no')");
  }
  if (input == "yes") {
    specialCheck = true;
  }
  else {
    specialCheck = false;
  }
}

function generatePassword() {
  // calling functions to set variables
  length();
  lowerCase();
  upperCase();
  numbers();
  special();
  while (!lowerCaseCheck && !upperCaseCheck && !numberCheck && !specialCheck) {
    alert("please select at least one type of character");
    lowerCase();
    upperCase();
    numbers();
    special();
  }

  // declaring variables to be used in compile function
  var characters = "";
  var password = "";

  // variable and concantination section
  if (lowerCaseCheck) {
    characters += lowerCaseChar;
  }
  if (upperCaseCheck) {
    characters += upperCaseChar;
  }
  if (numberCheck) {
    characters += numberChar;
  }
  if (specialCheck) {
    characters += specialCharacters;
  }

  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
