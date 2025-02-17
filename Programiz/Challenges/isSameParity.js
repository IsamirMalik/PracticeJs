/* Parity of a number means whether the number is even or odd .

if all the numbers of the given array has same parity then return true , otherwise flase .
*/

function isSameParity(arr) {
    
    let flag = true;

    for ( let i=0; i<arr.length-1; i++){
        if ( arr[i]%2==0 && arr[i+1]%2!==0 ){
            flag = false;
        } else if ( arr[i]%2!==0 && arr[i+1]%2==0 ){
            flag = false;
        }

        
    } return flag;
}