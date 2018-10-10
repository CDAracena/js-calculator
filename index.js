let inputDisplay = document.querySelector('.display-input');
const userNumInput = document.querySelectorAll('.num');
const clearButton = document.querySelector('.clear');
const plus = document.querySelector('.plus');
const subtract = document.querySelector('.minus')
const multiplication = document.querySelector('.times')
const division = document.querySelector('.divide');
const equalBtn = document.querySelector('.equal-sign')

let num1;
let num2;
let currentOperator;

for (let i = 0; i < userNumInput.length; i++) {
  userNumInput[i].addEventListener('click', function() {
    if (inputDisplay.innerText === "+" || inputDisplay.innerText === "-" || inputDisplay.innerText === "*" || inputDisplay.innerText === "/") {
      inputDisplay.innerText = '';
    }
    if (userNumInput[i].innerText != '=') {
      inputDisplay.innerText += userNumInput[i].innerText
    }
  })
}

const clearOut = () => {
  if (inputDisplay) {
    inputDisplay.innerText = '';
  }
}

clearButton.addEventListener('click', function() {
  clearOut();
})

function add(number1, number2) {
  let result = number1 + number2
  inputDisplay.innerText = result;
}

function minus(number1, number2) {
  let result = number1 - number2;
  inputDisplay.innerText = result;
}

function multiply(number1, number2) {
  let result = number1 * number2;
  inputDisplay.innerText = result;
}

function divide(number1, number2) {
  let result = number1 / number2;
  inputDisplay.innerText = result;
}
plus.addEventListener('click', function() {
  num1 = inputDisplay.innerText;
  inputDisplay.innerText = '+';
  currentOperator = 'plus';
})

subtract.addEventListener('click', function() {
  num1 = inputDisplay.innerText;
  inputDisplay.innerText = '-';
  currentOperator = "minus";
})

multiplication.addEventListener('click', function() {
  num1 = inputDisplay.innerText;
  inputDisplay.innerText = "*";
  currentOperator = "times";
})

division.addEventListener('click', function() {
  num1 = inputDisplay.innerText;
  inputDisplay.innerText = "/";
  currentOperator = "divide";
})
equalBtn.addEventListener('click', function() {
  num2 = inputDisplay.innerText;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (currentOperator === "minus") {
    minus(num1, num2);
  } else if (currentOperator === "plus") {
    add(num1, num2);
  } else if (currentOperator === "times") {
    multiply(num1, num2);
  } else if (currentOperator === "divide") {
    divide(num1, num2);
  }
  currentOperator = '';
})
