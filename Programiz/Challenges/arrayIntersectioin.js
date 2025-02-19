// An intersection is the collection of only common elements of two arrays .

function arrayIntersection(arr1, arr2) {
    
    let intersection = [];

    for (let val of arr1){
        for ( let num of arr2){
            if ( val == num){
                intersection.push(val)
            } else {
                continue;
            }
        }
    } return intersection;
}