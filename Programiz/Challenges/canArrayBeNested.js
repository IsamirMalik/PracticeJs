/* one array can be nested with in another if 
1. the minimum value of the first array is greater than the minimum value of the second array .
2. The maximum vlaue of the first array is less than the maximum value of the second array .
*/

function canBeNested(array1, array2) {
    
    let minOfArray1 = array1[0]
    let minOfArray2 = array2[0];

    let maxOfArray1 = array1[array1.length-1];
    let maxOfArray2 = array2[array2.length-1];

    if ( maxOfArray2 > maxOfArray1 && minOfArray2 < minOfArray1){
        return true;
    } else {
        return false;
    }
}