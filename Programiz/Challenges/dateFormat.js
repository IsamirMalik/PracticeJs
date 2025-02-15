// convert the date from "dd-mm-yyyy" to "mm-dd-yyyy".

function convertDateFormat(date) {
    
    let array = [];
    array = date.split("-")
    
   for ( let i = 0; i<array.length - 1 ; i+=2){
    [array[0],array[1]]=[array[1],array[0]]
   }
    
    return array.join("-");
}