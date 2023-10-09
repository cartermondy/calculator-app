// Variables
const display = document.getElementById('display');
const button = document.querySelectorAll("button");

// Function to append number / operation to display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear display
function clearDisplay() {
    display.value = '';
}

// Function to calculate
function calculate() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = 'Error';
    }
}

// Function to change sign
function changeSign() {
    display.value = -parseFloat(display.value);
}

// Function to make number a decimal
function decimalNum() {
    display.value = parseFloat(display.value) / 100;
}

button.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === 'AC') {
            clearDisplay();
        } else if (button.textContent === '=') {
            calculate();
        } else if (button.textContent === '(+/-)') {
            changeSign();
        } else if (button.textContent === '%') {
            decimalNum();
        } else {
            appendToDisplay(button.textContent);
        }
    })
});

