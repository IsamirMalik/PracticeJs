/* 
print the given pattern 

* * * * *
* * * *  
* * *    
* *      
*  

*/

function patternPrinting(N){
    //write your code here
        
        for ( let i = 0 ; i < N ; i++){
          
          let string = '';
          for ( let j = 0 ; j < N-i-1 ;j++ ){
            string+='* '
          }
          string+='*'
          
          for ( let j = 1 ; j <= i ; j++){
            string+="  "
          }
          console.log(string)
        } 
        
    }