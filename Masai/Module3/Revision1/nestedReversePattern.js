/* Given a number with name num , print num lines , and each line from num to 1 . */

function nestedReversePattern(num) {
    // Write code here
    
    for ( let i = 1 ; i <= num ; i++){
      let output = '';
      for ( let j = num ; j >= 1 ; j--){
        output+= j + ' '
      }
      console.log(output)
    }
}