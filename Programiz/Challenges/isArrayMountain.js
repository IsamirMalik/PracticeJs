/* Array mountain is an array that increases scrictly for some time , reaches a peak and then decreases . no repeatition of elements .*/


function isMountainArray(arr) {
    let maxElement = -Infinity;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == arr[index + 1]) {
            return false;
        } else {
            if (arr[index] > maxElement) {
                (maxElement = arr[index])
            }
        }
    }
    if (maxElement == arr[(arr.length - 1) / 2]) {
        return true;
    } else if (maxElement == arr[0] || maxElement == arr[arr.length - 1]) {
        return false;
    }
}