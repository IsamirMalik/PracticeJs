// find the N traversal of the matrix 

function nTraversal(matrix) {
  
    let string = '';
  for ( let i = 0 ; i < matrix.length ; i++){
    
    if (i == 0){
    for ( let j = matrix.length-1 ; j >= 0 ; j--){
      string+=matrix[j][i]+' '
      } 
    }else if (i == matrix.length-1){
    for ( let j = matrix.length-1 ; j >= 0 ; j--){
      string+=matrix[j][i] +' '
      } 
    } else {
      for (let j = 0 ; j < matrix.length ; j++){
        if (i!=0 && i!=matrix.length-1 && i==j){
          string+=matrix[i][j]+' '
        }
      }
    }
  }
   console.log(string)
}

/* 

code given below doesn't give the desired output 
  let result = [];
for (let i = matrix.length-1 ; i>=0 ; i--){
    result.push(matrix[i][0])
}

for ( let i = 1 ; i < matrix.length-1 ; i++){
    result.push(matrix[i][i])
};

for (let i = matrix.length-1 ; i>=0 ; i--){
    result.push(matrix[i][matrix.length-1])
}

console.log(result.join(' '))
  
*/