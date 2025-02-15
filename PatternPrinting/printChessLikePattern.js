function printPattern(n){
    
    
    let output;
    for ( let i =1 ; i<=n ; i++){
        let pattern = '';
        
        for ( let j=1; j<=n; j++){
            
            if ( (i+j)%2==0){
                pattern+=" "
            }else if ( (i+j)%2==1){
                pattern+='#'
            } 
            
        } console.log(pattern); 
    } 
}
(printPattern(10))