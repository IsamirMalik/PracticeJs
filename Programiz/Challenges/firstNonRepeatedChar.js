// find the first non reprated character in the string 

function findFirstNonRepeatedCharacter(str) {
    
    let freq={
    
};

    for ( let letter of str){
        
        freq[letter]=(freq[letter]||0)+1

        }
    
     for ( let key in freq){
        if ( freq[key]==1){
        return key;
     }
}
    //   return freq;
}