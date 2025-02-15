/* the iterated square root of a number is the number of times we need to find the square root of the given number until the number is strictly less than 2.
*/

function iteratedSquareRoot(n) {
    
    let count = 0 ;
    while (n>=2){
        n=Math.sqrt(n);
        count++;
    }
    return count;
}