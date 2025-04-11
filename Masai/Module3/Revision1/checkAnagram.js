/* 
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase , typically using all the original letters exactly once .
*/

function solve(str1, str2) {
    // write your code
        // let secondArray = str2.split('').sort().join('').trim();
        // let firstArray = str1.split('').sort().join('').trim() ;
        
        // let result = ( firstArray == secondArray) ? console.log('True') : console.log('False');
        
        let obj1 = {};
              
        for (let key of str1){
          if (key==' ') continue 
          else obj1[key]=(obj1[key]||0)+1
        }
        
        for (let key of str2){
          if (key==' ') continue 
          else obj1[key]-=1
        }
        
        let flag ='True'
      for ( let key in obj1){
        if (obj1[key]!=0 )  flag = 'False'
          }
    
    console.log(flag)
    } 