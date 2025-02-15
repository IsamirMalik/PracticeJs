/* Given an array and an integer x , find out if there is any element that repeats x times . if yes , return true otherwise , return false .*/

function xOfAKind(arr, x) {


    let freq = {
    
};
    output = false;

    for (let val of arr) {
        freq[val] = (freq[val] || 0) + 1;

    } for (let key in freq) {
        if (freq[key] == x) {
            output = true;
        } else {
            output = false;
        }
    } return output;
}