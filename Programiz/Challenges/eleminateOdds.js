

function eliminateOdds(arr) {
    let output =[];

    for (let val of arr){
        if ( val %2==0){
            output.push(val)
        }
    } return output;
}