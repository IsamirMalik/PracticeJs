// three numbers are given , check whether the sum of two smaller numbers is equal to the largest number or not ?

function sumOfTwoSmallestEqualsLargest(num1, num2, num3) {
    
    let sumOfTwo = 0;

    let largest = (num1>num2 && num1>num3) ? num1 :
                  (num2>num1 && num2>num3) ? num2 :
                  num3;

       sumOfTwo = ( largest == num1) ? num2 + num3 :
                  ( largest == num2) ? num1 + num3 :
                  num1 + num2 ;

     let output = ( sumOfTwo == largest) ? true : false;

    return output;
}