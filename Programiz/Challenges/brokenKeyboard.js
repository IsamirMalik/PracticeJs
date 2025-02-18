// Given a string and a letter ( which is not working in the keyboard) , if this letter is present in any of the word of given string , then we can not type it . so we need to find out how many word of the given string we can type .


function maxWordsCanType(str, brokenLetter) {
    
    let array = str.split(' ');
    let count=0;

    for ( let word of array ){
        let flag = false;
        for ( let i = 0 ; i < word.length ; i++){
            if ( word[i]==brokenLetter.toUpperCase() || word[i]==brokenLetter.toLowerCase() ){
                flag = true ;
            }
        } if ( !flag ){
            count++;
        }
    } return count;
}