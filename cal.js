const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;


const operate = (a, b, c) => {
    switch (c) {
        case '+':
            add(a, b);
            break;

        case '-':
            sub(a, b);
            break;

        case '*':
            mult(a, b);
            break;
        case '/':
            div(a, b);
            break;

        default:
            console.log("input error");
            return "OOPS";

    }
}


//display





const buttons = document.getElementsByClassName("num");

// const display = function (e){

//     const display = document.getElementById("sc").innerText;
//     console.log(typeof(display))

// }




for (let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener("click", function () {

        console.log("clicked", buttons[i].value);
        var cont = document.getElementById("sc").innerText+=buttons[i].value;
    })
}

