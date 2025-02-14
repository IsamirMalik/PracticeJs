// You are given a number , you need to return the reverse og its digits in an array.

function numberToReversedArray(num) {
    
    let arr = [];

    while(num>0){
   let rem = num%10;
    num = Math.floor(num/10);
    arr.push(rem)

    }
    return arr;
}