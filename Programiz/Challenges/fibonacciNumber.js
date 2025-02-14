// fibonacci series is a sequence in which first numberr is 0 and second number is 1 and then every next numbert is calculated by adding two previous numbers like third number will be number one plus number two and so on.


function fibonacci(n) {

    let array = [];
    array[0]=0;
    array[1]=1;
    for ( let i=2; i<=n; i++){
     array[i]=array[i-2]+array[i-1]
    } 
    return array[n];
 }