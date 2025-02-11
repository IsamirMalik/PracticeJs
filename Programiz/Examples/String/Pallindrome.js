
// write a program to check if the given string is pallindrome or not

// A string is a pallindrome if it is read the same forward or backward. ex. 'dad' , 'Racecar' , 'Madam' etc ..

function checkPallindrome(string){

    let newString=''; // declared an empty string to store the string in reverse order 
     
  
    for ( let i =string.length-1 ; i >=0 ; i--){
        newString+=string[i]
    }


    let output = (newString===string) ? `Given string "${string}" is a Pallindrome` : `Given string "${string}" is not a Pallindrome` ;

    return output ;

}

// take output from user
const string = prompt('Enter the string to check wheater it is a pallindrome or not :' );

console.log(checkPallindrome(string));