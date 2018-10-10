let inputDisplay = document.querySelector('.display-input');
const userNumInput = document.querySelectorAll('.num');
const clearButton = document.querySelector('.clear');
const plus = document.querySelector('.plus');
const subtract = document.querySelector('.minus')
const equalBtn = document.querySelector('.equal-sign')


let num1;
let num2;
let currentOperator;

for (let i = 0; i < userNumInput.length;i++){
  userNumInput[i].addEventListener('click', function(){
    if (userNumInput[i].innerText != '='){
    inputDisplay.innerText += userNumInput[i].innerText
  }
  })
}

const clearOut = ()=> {
  if (inputDisplay){
  inputDisplay.innerText = '';
}
}

clearButton.addEventListener('click', function(){
  clearOut();
})


function add(number1, number2){
  let result = number1 + number2
  inputDisplay.innerText = result;
}

function minus(number1, number2){
let result = number1 - number2;
inputDisplay.innerText = result;
}

plus.addEventListener('click', function(){
  num1 = inputDisplay.innerText;
  inputDisplay.innerText = '+';
  currentOperator = 'plus';
})

subtract.addEventListener('click', function(){
  num1 = inputDisplay.innerText;
  inputDisplay.innerText = '-';
  currentOperator = "minus";

})


equalBtn.addEventListener('click', function(){
  num2 = inputDisplay.innerText;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  console.log(num2)
  if (currentOperator === "minus"){
    minus(num1, num2);
  } else if (currentOperator === "plus"){
   add(num1, num2);
  }
  currentOperator = '';
})
