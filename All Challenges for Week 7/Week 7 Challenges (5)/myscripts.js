var expression = Number(prompt("Simple Calculator", "Insert First Number"))
var expressionTwo = prompt("Simple Calculator", "Insert Operator Here")
var expressionThree = Number(prompt("Simple Calculator", "Insert Second Number"))


if(expressionTwo === "+"){
    add(expression, expressionThree)
    alert(expression + "+" + expressionThree + "=" + add(expression, expressionThree))
}

if(expressionTwo === "-"){
    subtract(expression, expressionThree)
    alert(expression + "-" + expressionThree + "=" + subtract(expression, expressionThree))
}

if(expressionTwo === "*"){
    multiply(expression, expressionThree)
    alert(expression + "*" + expressionThree + "=" + multiply(expression, expressionThree))
}

if(expressionTwo === "/"){
    divide(expression, expressionThree)
    alert(expression + "/" + expressionThree + "=" + divide(expression, expressionThree))
}


    function add(numberOne, numberTwo){
    var sum = numberOne + numberTwo;
    return sum;
    }
    
    function subtract(numberOne, numberTwo){
    var difference = numberOne - numberTwo;
    return difference;
    }
    
    function multiply(numberOne, numberTwo){
    var product = numberOne * numberTwo;
    return product;
    }
    
    function divide(numberOne, numberTwo){
    var quotient = numberOne/numberTwo;
    return quotient;
    }