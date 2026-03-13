

const display = document.getElementById("display");

function append(value){

if(display.value === "0"){
display.value = value;
}else{
display.value += value;
}

}

function append(value){
display.value += value;
}

function clearDisplay(){
display.value = "";
}

function deleteLast(){
display.value = display.value.slice(0,-1);
}

function calculate(){

try{

let expression = display.value.replace(/^0+(\d)/, '$1');
display.value = eval(expression);
display.value = eval(display.value);

}

catch{

display.value = "Error";

}

}