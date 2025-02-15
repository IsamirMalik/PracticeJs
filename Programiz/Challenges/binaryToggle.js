// flip each bit from 0 to 1 and from 1 to 0 .


function toggleBinaryString(binaryString) {

    let output = ''
    for (let el of binaryString) {
        if (el == '1') {
            output += 0
        } else if (el == '0') {
            output += 1
        }
    }
    return output;

}