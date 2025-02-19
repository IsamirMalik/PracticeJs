function fibonacci(n) {
    

    let sequence = [];
    sequence[0] = 0;
    sequence[1] = 1;

    for ( let i=2; i <=n ; i++){
             
         sequence[i]=sequence[i-1] + sequence[i-2] 
    }    
    return sequence[n];
}