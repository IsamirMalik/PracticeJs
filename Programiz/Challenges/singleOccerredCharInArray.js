
function singleOccurrence(arr) {
    let freq = {
    
};

    for (let val of arr) {
        freq[val] = (freq[val] || 0) + 1;

    }
    
    for (let key of arr) {
        if (freq[key] === 1) {
            return key
        }
    } return -1;
}

