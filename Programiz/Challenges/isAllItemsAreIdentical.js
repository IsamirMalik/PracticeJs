// You are given an array , check whether all elements of the array are identical or not ?

function checkIdenticalItems(arr) {
    let output="Identical"
    for ( let val of arr ){
        if ( val !== arr[0]){
            output = "Not Identical"
        } 
    } return output;
}