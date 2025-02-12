

function isStringInOrder(str) {

    let array = str.split("");

     array = array.sort()

    let string1 = array.join("") ;

    if ( string1==str){

        return "Ordered";

    } else {

        return "Unordered";
    }

}
