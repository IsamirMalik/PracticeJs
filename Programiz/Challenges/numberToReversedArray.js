// convet a numbet into an Array of its digits into reverse order .


function numberToReversedArray(num) {
    
    let arr = [];

    while(num>0){
   let rem = num%10;
    num = Math.floor(num/10);
    arr.push(rem)

    }
    return arr;
}