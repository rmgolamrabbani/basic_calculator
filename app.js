// calculator program


const display = document.getElementById('display');

function oppendToDisplay(input) {

    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function deleteLastEntry() {
    display.value = display.value.slice(0, -1);
}


function calculate() {

      try {
        display.value = eval(display.value);
      }
     catch (error) {
        display.value = "Error";
      }
    display.value = eval(display.value);
}

