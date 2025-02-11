
// write a program to check if the given string is pallindrome or not

// A string is a pallindrome if it is read the same forward or backward. ex. 'dad' , 'Racecar' , 'Madam' etc ..

function checkPallindrome (string){

    let newString=''; // declared an empty string to store the string in reverse order 
     
    let length = string.length
    for ( let val = 0 ; val <length ; val++){
        newString+=val
    }

    let output = (newString===string) ? `${string} is a Pallindrome` : `${string} is not a Pallindrome` ;

    return output ;

}

const string = prompt('Enter the string to check wheater it is a pallindrome or not' )

console.log(checkPallindrome(string))