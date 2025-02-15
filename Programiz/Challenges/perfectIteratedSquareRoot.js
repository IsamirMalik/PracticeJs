/* A perfect square root is an integer that is also a perfect square .*/

function perfectIteratedSquares(n) {
    let array = [];
    
    while(Number.isInteger(Math.sqrt(n))){
    
        n=Math.sqrt(n);
        array.push(n)
    } return array;

}