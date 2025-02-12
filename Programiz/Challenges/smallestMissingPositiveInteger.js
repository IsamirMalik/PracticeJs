

function findMissingPositive(arr) {
    let min = Infinity ;
    let secMin = Infinity;
 
    for ( let i =0 ; i<arr.length; i++){
        if (arr[i]>=0){
                if ( min>arr[i]){
                    secMin=min;
                    min=arr[i];
                }
                else if ( secMin>arr[i] && arr[i]<min ){
                    secMin=arr[i]
                }
        } 
    } 
    if ( min!==1){
        return 1;
    } if(min+1!==secMin){
        return min+1;
    }
    
}