// take an integer "n" and return a string that alternates between "Loves Me" and "Loves me not".


function lovesMe(n) {
    
    let output =``;
   
   for ( let i = 1 ; i <= n ; i++){
      if(i%2==1){
       output+="Loves me" 
      }else {
       output+="Loves me not"
      }
      if (i!==n){
       output+= ", "
      }
   }

 return output
}