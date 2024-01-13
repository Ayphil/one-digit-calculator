let numberBefore = false
let _operator = null;
let number1 = null;
const defaultCalculateText = "Let's calculate !";

function Testing(number) {
    document.getElementById("defaultText").innerHTML = number;
    numberBefore = true;

    if(_operator != null){
        document.getElementById("defaultText").innerHTML = number1 + _operator + number;
        document.getElementById("answer").innerHTML = " = ";
        switch (_operator){
        case " + ":
            document.getElementById("answer").innerHTML += number1 + number;
            break;
        case " - ":
            document.getElementById("answer").innerHTML += number1 - number;
            break;
        case " x ":
            document.getElementById("answer").innerHTML += number1 * number;
            break;
        case " / ":
            document.getElementById("answer").innerHTML += number1 / number;
            break;
        default:
            document.getElementById("answer").innerHTML = "error";
            break;
        }
        _operator = null;
        number = null;
        numberBefore = false;
    }
    else{
        document.getElementById("answer").innerHTML = "";
    }

    number1 = number;
}

const Operators = {
    ADDITION: " + ",
    SUBSTRACTION: " - ",
    MULTIPLICATION: " x ",
    DIVISION: " / "
}
function Operator(operator){
    if(numberBefore){
        document.getElementById("defaultText").innerHTML += operator;
        _operator = operator;
        numberBefore = false;
    }
}