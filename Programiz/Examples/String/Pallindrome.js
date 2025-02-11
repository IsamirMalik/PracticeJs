
// write a program to check if the given string is pallindrome or not

// A string is a pallindrome if it is read the same forward or backward. ex. 'dad' , 'Racecar' , 'Madam' etc ..

let input = prompt('Enter the string to check wheater it is a pallindrome or not :');

 while(!input) { 
    input = prompt('Enter the string to check wheater it is a pallindrome or not :')
 }

function checkPallindrome(string){
   
    // first convert the input into array coz string is primitive and can't be updated

    let arrayOfWords = string.split("");
    

    for (let index=0; index<arrayOfWords.length; index++){
        arrayOfWords[index]=arrayOfWords[index].toLowerCase();
    }
     let newString = arrayOfWords.join('');

     let reverseArray=[];

     for (let index=arrayOfWords.length-1; index>=0; index--){
        reverseArray.push(arrayOfWords[index])
     }

     let reversestring = reverseArray.join("")  
    
  
    let output = (newString===reversestring) ? `Given string "${string}" is a Pallindrome` : `Given string "${string}" is not a Pallindrome` ;

    return output ;

    
}


console.log(checkPallindrome(input));



