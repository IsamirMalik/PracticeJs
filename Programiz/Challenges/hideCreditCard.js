// Replace first 12 digits of credit card number with asterisk '*' and keep the last four digits as it is .

function hideCreditCard(cardNumber) {
    
    let hiddenNumber ="";

    for (let i = 0 ; i<cardNumber.length ; i++){
        if (i<=11){
            hiddenNumber+='*';
        } else {
            hiddenNumber+=cardNumber[i]
        }
    } return hiddenNumber;
}