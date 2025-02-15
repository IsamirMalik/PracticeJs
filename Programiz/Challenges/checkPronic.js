// Pronic number is the product of two consecutive integers .

function checkPronic(num) {
    
    let flag = false;

    for ( let i =2; i <=num; i++){
        if (((i+1)*i)==num){
            flag=true;
        } 
        
    } if ( flag){
        return "Pronic"
    } else {
        return "Not Pronic"
    }

}