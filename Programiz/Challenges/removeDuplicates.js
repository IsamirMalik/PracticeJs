// An array is given , remove all the duplicate elements from the array

function removeDuplicates(nums) {
    
    let newarr = [];
    for (let val of nums ){
    
    if ( newarr.indexOf(val)===-1){
     newarr.push(val)
    }
   
    } return newarr;
}