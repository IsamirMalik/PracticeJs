/* find the index+1 of the number which is different from all the other elements in the array */

function detectSpy(n,A){
    // Write Code Here
   let freq = {} ;
   let index = 0
   for ( let key of A){
     freq[key]=(freq[key]||0)+1
   }
   
   for (let key in freq){
     for (let i = 0; i < n ; i++){
       if (freq[key] == 1){
         index = (A.indexOf(key)+1)
         
       }
     }
   }
   
  console.log(index)
  }
