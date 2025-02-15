// Convert each UpperCase letter to LowerCase and each LowerCase letter to UpperCase .

function swapCase(str) {
    
    let string = '';

    for ( let i =0; i<str.length; i++){

        if ( str[i]==str[i].toUpperCase()){
            string+=str[i].toLowerCase();
        } else if ( str[i]==str[i].toLowerCase()){
            string+=str[i].toUpperCase();
        } else {
            string+=str[i]
        }
    } return string;
}