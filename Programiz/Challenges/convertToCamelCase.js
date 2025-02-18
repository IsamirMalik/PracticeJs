// convert to 'camelCase' from "Normal case" .


function convertToCamelCase(str) {
    
    let camelCase = '';

    for ( let i = 0 ; i<str.length ; i++){
        if ( str[i-1]==' '){
            camelCase+=str[i].toUpperCase();
        }else if (str[i]==' '){
            continue;
        } else {
            camelCase+=str[i]
        }
    } return camelCase;
}
