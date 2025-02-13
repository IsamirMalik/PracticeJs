
function findMostCommonChar(str) {
    let freq = {};
    let maxFreq = 0;
    let mostCommonChar = "";

    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;

        if (freq[char] > maxFreq) {
            maxFreq = freq[char];
            mostCommonChar = char
        }
    } return mostCommonChar
}
