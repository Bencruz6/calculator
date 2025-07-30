const add = (op1, op2) => op1 + op2;
const subtract = (op1, op2) => op1 - op2;
const multiply = (op1, op2) => op1 * op2;
const divide = (op1, op2) => op2 !== 0 ? op1 / op2 : 'Cannot divide by zero';

let operand1 = "", operand2 = "", operator = "";

const operate = (op1, op, op2) => {

    switch (op) {
        case '+':
            return add(op1, op2);


        case '-':
            return subtract(op1, op2);


        case '*':
            return multiply(op1, op2)


        case '/':
            return divide(op1, op2);


        default:
            console.log("something went wrong as you didnt choose right operator");
            return null;
    }
}

const buttons = document.getElementsByClassName("num");
let disp = document.getElementById("sc");
let dispTxt = "";
//console.log(buttons)

for (let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener("click", function () {
        const value = buttons[i].value;
        console.log("Clicked", value);
        disp.innerText += value;

        if (operator === "") {
            operand1 += value;  // Assign value to operand1
        } else {
            operand2 += value;  // Assign value to operand2
        }

    });
}


const ops = document.getElementsByClassName("op");

for (let i = 0; i < ops.length; ++i) {
    ops[i].addEventListener("click", function () {
        const value = ops[i].value;
        
        if (operand1 !== "") {
            operator += value;
            disp.innerText += value;
            

        }
        else {
            alert("You have to enter a number first!");
        }



    })
}


//evaluate

const equal =document.getElementById("evaluate");

if(equal){
    equal.addEventListener("click",function(){

        if(operand1 && operand2  && operator){
            const result = operate(parseInt(operand1),operator,parseInt(operand2));
            console.log("the computation is",result);
            disp.innerText=result
        }

        else{
            alert("please enter tho numbers to perform arithmetic magic")
        }

    })
}



//clear

const clear =document.getElementById("clr");

if(clear){
    clear.addEventListener("click", function(){
        disp.innerText="";
        dispTxt="";
        operand1="";
        operand2="";
        operator="";
    });
}


