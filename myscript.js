const calcDisplay = document.getElementById('calc-display');


const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const button3 = document.getElementById('btn-3');
const button4 = document.getElementById('btn-4');
const button5 = document.getElementById('btn-5');
const button6 = document.getElementById('btn-6');
const button7 = document.getElementById('btn-7');
const button8 = document.getElementById('btn-8');
const button9 = document.getElementById('btn-9');
const button0 = document.getElementById('btn-0');
const buttonDecimal = document.getElementById('btn-decimal');
const buttonAdd = document.getElementById('btn-add');
const buttonSubtract = document.getElementById('btn-subtract');
const buttonMultiply = document.getElementById('btn-multiply');
const buttonDivide = document.getElementById('btn-divide');
const buttonEqual = document.getElementById('btn-equal');
const buttonClear = document.getElementById('btn-clear');



let powerButton = document.querySelector('.power-btn');
let buttonDisplay = document.querySelector('.button-container');
buttonDisplay.style.display = 'none';
powerButton.addEventListener('click', function(){

  if(buttonDisplay.style.display == 'none'){
    buttonDisplay.style.display = 'grid';
    document.querySelector('.calc-heading').style.backgroundColor = 'rgb(10, 59, 39)';
    calcDisplay.style.display = 'block';
  }
  else{
    buttonDisplay.style.display = 'none';
    document.querySelector('.calc-heading').style.backgroundColor='black';
    calcDisplay.style.display = 'none';

  }
});




button0.addEventListener('click',btn0Display);
button1.addEventListener('click',btn1Display);
button2.addEventListener('click',btn2Display);
button3.addEventListener('click',btn3Display);
button4.addEventListener('click',btn4Display);
button5.addEventListener('click',btn5Display);
button6.addEventListener('click',btn6Display);
button7.addEventListener('click',btn7Display);
button8.addEventListener('click',btn8Display);
button9.addEventListener('click',btn9Display);


buttonDecimal.addEventListener('click', function(){
  const bv = buttonDecimal.textContent;
  formula(bv);
  buttonDecimal.disabled = true;
  buttonDecimal.style.backgroundColor = 'white';
});

buttonClear.addEventListener('click',clearScreen);
buttonAdd.addEventListener('click',btnAdd);
buttonSubtract.addEventListener('click',btnSubtract);
buttonMultiply.addEventListener('click',btnMultiply);
buttonDivide.addEventListener('click',btnDivide);
buttonEqual.addEventListener('click',displayResult);


function formula(bv) {
  let dv = getCalcDisplay();
  let nv = '';
  if(dv !== '0'){
  nv = `${dv}${bv}`;
  }
  else {
    nv = `${bv}`;
  }
  setCalcDisplay(nv);
};

function clearScreen(){
  calcDisplay.value = "0";
  buttonDecimal.disabled = false;
}

function getCalcDisplay(){
return calcDisplay.value;
}

function setCalcDisplay(value){
  calcDisplay.value = value;
}

// NUMBER BUTTONS
function btn0Display(){
  const bv = button0.textContent;
  setCalcDisplay(bv);
}

function btn1Display(){
  const bv = button1.textContent;
  formula(bv);
}

function btn2Display(){
  const bv = button2.textContent;
  formula(bv);
}

function btn3Display(){
  const bv = button3.textContent;
  formula(bv);
}

function btn4Display(){
  const bv = button4.textContent;
  formula(bv);
}

function btn5Display(){
  const bv = button5.textContent;
  formula(bv);
}

function btn6Display(){
  const bv = button6.textContent;
  formula(bv);
}

function btn7Display(){
  const bv = button7.textContent;
  formula(bv);
}

function btn8Display(){
  const bv = button8.textContent;
  formula(bv);
}

function btn9Display(){
  const bv = button9.textContent;
  formula(bv);
}


//OPERATORS
function btnAdd(){
  const bv1 = buttonAdd.value;
  const bv = `${bv1}`;
  formula(bv);
  buttonDecimal.disabled = false;
  
}

function btnSubtract(){
  const bv1 = buttonSubtract.value;
  const bv = `${bv1}`;
  formula(bv);
  buttonDecimal.disabled = false;
}

function btnMultiply(){
  const bv1 = buttonMultiply.value;
  const bv = `${bv1}`;
  formula(bv);
  buttonDecimal.disabled = false;
}

function btnDivide(){
  const bv1 = buttonDivide.value;
  const bv = `${bv1}`;
  formula(bv);
  buttonDecimal.disabled = false;
}

function displayResult(){
  let dv =getCalcDisplay();
  let result = eval(dv);
  setCalcDisplay(result);
}



