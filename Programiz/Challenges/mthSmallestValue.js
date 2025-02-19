// write a function to find the mth smallest value in an array .

function findMthSmallest(arr, m) {
    
    let sortedArray = arr.sort();

    return sortedArray[m-1]
}