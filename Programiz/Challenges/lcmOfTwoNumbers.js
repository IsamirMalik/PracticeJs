// least common multiple of two numbers is the smallest multiple that is divisible by both of the numbers .



function findLCM(num1, num2) {
    
    let LCM = 1;

    for (let i=1; i<=num1*num2 ; i++){
        if (i%num1==0 && i%num2==0){
            return i;
        }
    }
}