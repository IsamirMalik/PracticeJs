

function sumOfSquareNumbers(arr) {

    let sum = 0;
    for (let val of arr) {
        let checkSquare = Number.isInteger(Math.sqrt(val));
        if (checkSquare) {
            sum += val;
        }
    }
    return sum;

}