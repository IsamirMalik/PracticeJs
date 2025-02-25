// write code to print stars in the form of right angles triangle .

//              PATTERN    

/*
                  *
                  * *
                  * * *
                  * * * * 
                  * * * * *
*/

function printStars (n){

    // outer loop decides how many rows or line
    for (let line = 1 ; line <= n ; line++) {

/*declare a empty string inside the outer loop so that whenever we start a new line 
string becomes empty , and we can decide how many stars we want in the new line */  

    let str = ''

/* run a loop for deciding the number of stars in a line , number of stars in a line is
 equal to the number of line in which we are in .*/

       for ( let star = 1 ; star <= line ; star++){

           str+="* ";

       }   console.log(str)
    } 
}

printStars(5);



/* write code for printing stars in the form of inverted right angled triangle */

//       PATTERN    
/* 
            * * * * *
            * * * *
            * * *
            * *
            * 
*/

function invertedTrianglePattern (n){

    // outer loop for number of line or rows 

    for ( let line = 1 ; line <=n ; line++){

        str='' // empty string for deciding number of stars in a line 

        for (  star=1 ; star <= n-line+1 ; star++ ) {
            str+="* "
        } console.log(str)
    } 
}

invertedTrianglePattern(5)
