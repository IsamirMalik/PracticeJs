// You are given a number , find its factorial 

function calculateFactorial(num) {
    let factorial = 1;
    for ( i = num ; i >=1; i--){
        factorial*=i;
        
    } return factorial ;
}