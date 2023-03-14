function add(a,b) {
  return a + b;
};

function subtract(a,b) {
  return a - b;
};

function multiply(a,b) {
  return a * b;
}

let divide = ((a,b) => a/b);

function operate(operator) {
  let a = parseFloat(screen.textContent);
  if (operator === 'x') {
    screen.textContent = multiply(a,b);
  }
  else if (operator === '/') {
    screen.textContent = divide(a,b);
  }
  else if (operator === '+') {
    screen.textContent = add(a,b);
  }
  else if (operator === '-') {
    screen.textContent = subtract(a,b);
  }
}

function display(number) {
    screen.append(number);
}

function clear() {
  screen.textContent = "";
}
  
let a = 0;
let b = 2;
let screen = document.querySelector('#screen');

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display(button.textContent);
    });
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    clear();
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        operate(button.id);
    });
});


// Currently - the first number is saved and used in the operate() function. The variable b is used in place of a user input
// Next - the second number needs to be entered for use in operate()

// Outstanding:

// Clear first number when entering the second number
// Make equals sign do something