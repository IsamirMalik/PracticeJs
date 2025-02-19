// write a function to count the numbers of even and odd digits in an integer . Return one array in which first element is the count of even digits and second element is the count of odd numbers .

function countEvenOddDigits(numStr) {

    let even = 0;
    let odd  = 0;
  
    let countArray = []
  
    for ( let digit of numStr){
  
      (digit%2==0) ? even++ : odd++
    }
  
    countArray.push(even);
    countArray.push(odd);
  
    return countArray;
  }