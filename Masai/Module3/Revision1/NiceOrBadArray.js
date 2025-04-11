/*
if the count of even elements in the array is greater than the value stored in K , print 'Nice Array' , else print 'Bad Array' .
*/

function niceArray(N, array, K) {
  //write code here
  
  let count = 0 ;
  for ( let i = 0 ; i < N ; i++){
    if (array[i]%2==0){
      count++;
    }
  } ;
  
  if ( count > K) {
    console.log('Nice Array')
  } else {
    console.log('Bad Array')
  }
}
