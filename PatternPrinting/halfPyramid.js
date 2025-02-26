// Write code to print half pyramid pattern as shown below .

/*  PATTERN
      1
      1 2 
      1 2 3
      1 2 3 4 
      1 2 3 4 5
*/

/* Outer loop decides number of lines and inner loop decides how many char in a line . */

function halfPyramid (n) {

    for ( let line = 1 ; line <= n ; line++){

        let str = "";

        for (let char = 1 ; char <= line ; char++){

            str+=char+' ';
        }  console.log(str)
    } 
}

// halfPyramid(5) ;


/* Print a pattern of pyramid 


 row         star           space
 0             1              4
 1             2              3
 2             3              2
 3             4              1
 4             5              0

 stars = row + 1 ;  spaces = Num-row-1


                *
              *   *
            *   *   *
          *   *   *   *
        *   *   *   *   *
    
*/


function printPyramid(n) {

    
    for ( let row = 0 ; row < n ; row++){
        
        let str = '';

        for ( let space = 0 ; space<(n-row)-1; space++){  
            str+=" "
        }
            for ( let star = 0 ; star < row + 1 ; star++){
                str+="* "
            }
                console.log(str)  
    }
}

// printPyramid(5);

/* inverted full pyramid 

     Pattern

* * * * *
 * * * *
  * * *
   * *
    *     
    

row     star   space

0         5      0
1         4      1
2         3      2
3         2      3
4         1      4

star = num - row ;
space = row 

*/

function invertedPyramid (n) {

    for ( let row = 0 ; row < n ; row++){

        let str = ''; 

        // to print spaces
        for ( space = 0 ; space < row ; space++){
            str+=" "
        }

        // to print stars
        for (let star = 0 ; star < n - row ; star++){
            str+='* '
        }

         console.log(str)
    } 
}

// invertedPyramid(5)


/* Diamond Pattern

same as the pyramid , but make sure the number of rows are taken care of .

                *
              *   *
            *   *   *
          *   *   *   *
        *   *   *   *   *
        *   *   *   *   *
          *   *   *   *
            *   *   *
              *   *
                * 
                
*/


function printDiamond ( num ) {

    let n = num/2 ;

    for ( let row = 0 ; row < n ; row++){
        
        let str = '';

        for ( let space = 0 ; space<(n-row)-1; space++){  
            str+=" "
        }
            for ( let star = 0 ; star < row + 1 ; star++){
                str+="* "
            }
                console.log(str)  
    }


    for ( let row = 0 ; row < n ; row++){

        let str = ''; 

        // to print spaces
        for ( space = 0 ; space < row ; space++){
            str+=" "
        }

        // to print stars
        for (let star = 0 ; star < n - row ; star++){
            str+='* '
        }

         console.log(str)
    } 
}


// printDiamond(8);

/* Print Hollow pyramid

    * 
   * * 
  *   * 
 *     * 
*       * 

*/

function hollowPyramid ( num ) {
    
    for ( let row = 0 ; row < num ; row++ ){
    let str = '';
    
     for ( let space = 0 ; space < num-row -1; space++){
        str+=" "
    }
    
    for ( let star = 0 ; star < row+1; star++){  // think of star variable as column
        if ( star == 0 || star == row){   // important condition 
            str+='* '
        } else {
            str+="  " // double spaces 
        }
    }  console.log(str)
   
   } 
}

hollowPyramid(5) ;
