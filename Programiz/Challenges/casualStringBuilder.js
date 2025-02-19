// Given two arrays 'chars' and 'frequencies' ,  return a string where each character in chars appears as many times as its corresponding integer in frequencies .

function buildString(chars, frequencies) {
    

    let string = ""
    for ( i=0,j=0; i<chars.length , j<frequencies.length ; i++,j++){
       string +=chars[i].repeat(frequencies[j])
    } return string;
}