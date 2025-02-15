// A Valid pin must be of length 4 or 6 and there should be no alphabet in it .

function validatePin(pin) {
    
    if ( (pin.length==4 || pin.length==6) && (!isNaN(pin))){
       return "Valid"
    } else {
       return 'Invalid'
    }
}