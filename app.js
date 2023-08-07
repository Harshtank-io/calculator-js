let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
















// // This function clear all the values
// function clearScreen() {
//     document.getElementById("result").value = "";
// }
 
// // This function display values
// function display(value) {
//     document.getElementById("result").value += value;
// }
 
// // This function evaluates the expression and returns result
// function calculate() {
//     var p = document.getElementById("result").value;
//     var q = eval(p);
//     document.getElementById("result").value = q;
// }