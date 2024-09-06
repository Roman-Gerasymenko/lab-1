// Task 1: Calculator
function calculate() {
  let input = document.getElementById("calcInput").value;

  let allowedCharacters = "0123456789+-*/(). ";
  for (let i = 0; i < input.length; i++) {
    if (!allowedCharacters.includes(input[i])) {
      document.getElementById("calcResult").innerText =
        "Error: Invalid expression";
      return;
    }
  }

  let result = eval(input);
  document.getElementById("calcResult").innerText = "Result: " + result;
}

function checkDivisibility() {
  let num = parseInt(document.getElementById("numInput").value);
  let result = `Number ${num} is divisible by: `;
  if (num % 2 === 0) result += "2 ";
  if (num % 3 === 0) result += "3 ";
  if (num % 5 === 0) result += "5 ";
  if (num % 9 === 0) result += "9 ";
  if (num % 10 === 0) result += "10 ";
  document.getElementById("divResult").innerText = result;
}

function reverseString() {
  let str = document.getElementById("stringInput").value;
  let reversed = str.split("").reverse().join("");
  document.getElementById("reverseResult").innerText = "Reversed: " + reversed;
}

function generatePassword() {
  let chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let passwordLength = 12;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  document.getElementById("passwordResult").innerText =
    "Generated Password: " + password;
}
