// write a function to check if the array is Arithmetic or not . Arithmetic sequence is a sequence of numbers such that the difference between any two consecutive terms is constant .

function checkArithmetic(arr) {
    
    let flag = false ;

    for ( let i=0; i<arr.length; i++){
     if (arr[i+1]-arr[i]==arr[i]-arr[i-1]){
                flag = true;
                
            }
    }

    if (flag){
        return "Arithmetic"
    } else if (!flag) {
        return "Not Arithmetic"
    }
}