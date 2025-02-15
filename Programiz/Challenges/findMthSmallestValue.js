/* Given an integer m and an array arr , return the mth smallest value in the arr .*/

function findMthSmallest(arr, m) {
    
    let sortedArray = arr.sort();

    return sortedArray[m-1]
}