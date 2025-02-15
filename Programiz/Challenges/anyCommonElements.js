// take two arrays and return "Yes" if there is any common element , else retrun "No".

function haveCommonElements(arr1, arr2) {
    
    let flag = 'No' ;
    
    for (let val of arr1){
        for (let digits of arr2){
            if ( val == digits){
                flag = 'Yes';
            }
        }
    } return flag;
}