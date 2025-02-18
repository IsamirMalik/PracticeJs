// two numbers and a mathematicla operator is given , perform mathematical operation on the given numbers on the basis of given opeator , if an error occurred during calculation return null .

function basicCalculator(num1, op, num2) {
    
    let result = (op== '+') ? num1 + num2 :
                 (op== '-') ? num1 - num2 :
                 (op== '*') ? num1 * num2 :
                 (op== '/' && num2!==0 ) ? num1 / num2 : null ;

                 return result
}