const Textbox = document.getElementById("textbox");
const ToCel = document.getElementById("ToCel");
const ToFah = document.getElementById("ToFah");
const output = document.getElementById("output");
let temp = Number(Textbox.value);

function convert(){
    if(ToCel.checked){
        temp = Number(Textbox.value);
        temp = 5/9*(temp-32);
        output.textContent = temp.toFixed(1) + "C";
    }
    else if(ToFah.checked){
        temp = Number(Textbox.value);
        temp = (temp* 9/5 ) + 32;
        output.textContent = temp.toFixed(1) + "F";
    }
    else{
        output.textContent = "Please Select one option above";
    }
}