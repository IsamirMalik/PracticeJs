// https://app.programiz.pro/community-challenges/challenge/javascript-hit-jackpot/info

// in given array if all elements are same it means "Hitting the jackpot" . return true if it hits the jackpot otherwise false 

function hitTheJackpot(arr) {
    let freq = {
    
};

    for (i = 0; i < arr.length; i++) {
        freq[arr[i]] = (freq[arr[i]] || 0) + 1
    }
    for (let key in freq) {
        if (freq[key] === arr.length) {
            return true;
        } else {
            return false;
        }
    }
}
