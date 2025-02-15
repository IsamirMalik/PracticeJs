// if any element is not equal to the first one , return "Not identical" otherwise return "Identical".

function checkIdenticalItems(arr) {
    let output="Identical"
    for ( let val of arr ){
        if ( val !== arr[0]){
            output = "Not Identical"
        } 
    } return output;
}