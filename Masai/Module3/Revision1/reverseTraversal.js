// Print the reverse traversal of the array 

function reverseArrayTraversal(n, arr){
    //write code here
    
    let output = "";
    
    for (let i = n-1 ; i >=0 ; i--){
      output+=arr[i]+' ';
    }
    console.log(output)
}