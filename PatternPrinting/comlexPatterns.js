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


/* print the below pattern 

1 
2 * 2 
3 * 3 * 3 
4 * 4 * 4 * 4 

*/

function triangle ( num ) {
    
    for ( let row = 0 ; row < num ; row++){
        
           let str = '';
        
          // for ( let col = 0 ; col < 2*row+1 ; col++){
        
            // if(col%2==0){
            //   str+= (row+1) + ' '  
            // } else {
            //     str+="* "
            // }


            for ( let col = 0 ; col < row+1 ; col++){

                if(col==row){
                    str+= row + 1 + ' '
                } else {
                    str+= row + 1 + ' ' + '* '
                }
            } console.log(str)
    }
}

// triangle(4);


/* print the pattern below 

1 
2 * 2 
3 * 3 * 3 
4 * 4 * 4 * 4 
3 * 3 * 3 
2 * 2 
1 

*/

function triangle ( num ) {
    
    for ( let row = 0 ; row < num ; row++){
        
        let str = '';
        
        for ( let col = 0 ; col < row+1 ; col++){
             if(col==row){
                 str+= row + 1 + ' '
             } else {
                 str+= row + 1 + ' ' + '* '
             }
         
        } console.log(str) ;
     
    }
    
    for ( let row = 1 ; row < num  ; row++){
        let str='';
        for ( let col = 0 ; col < num - row ; col++){
            if ( col == num-row-1){
                str+=num-row + ' '
            } else {
                str+= num-row +' '+'* '
            }
        } console.log(str)
    }
    
}

// triangle(4);


/* print the pattern below

* * * * * * 
*       * 
*     * 
*   * 
* * 
*

*/


function hollowHalfInvertedPyramid ( num ) {
    
    
    for ( let row = 0 ; row < num  ; row++){
        let str='';
        for ( let col = 0 ; col < num - row ; col++){
            if ( row==0){
                str+="* "
            } else if( col == num-row-1 || col == 0){
                str+= '* '
            } else  {
                str+="  "
            }
        } console.log(str)
    }
    
}

// hollowHalfInvertedPyramid(6);

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


function printDiamond(num) {
  if (num <= 0 || num % 2 !== 0) {
    console.error("Input must be a positive even number.");
    return;
  }

  const half = num / 2;

  // Upper half of the diamond
  for (let row = 0; row < half; row++) {
    let str = " ".repeat(half - row - 1) + "* ".repeat(row + 1);
    console.log(str);
  }

  // Lower half of the diamond
  for (let row = 0; row < half; row++) {
    let str = " ".repeat(row) + "* ".repeat(half - row);
    console.log(str);
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

// hollowPyramid(5) ;


// print inverted hollow pyramid 


function invertedHollowPyramid ( num ) {
    
    for ( let row = 0 ; row < num ; row++ ){
    let str = '';
    
     for ( let space = 0 ; space < row; space++){
        str+=" "
    }
    
    for ( let star = 0 ; star < num-row; star++){
        if ( star == 0 || star == num-row-1){
            str+='* '
        } else {
            str+="  "
        }
    }  console.log(str)
   
   } 
}

// invertedHollowPyramid(5);


/* print the pattern shown below 

* * * *   * * * * 
* * *       * * * 
* *           * * 
*               * 
*               * 
* *           * * 
* * *       * * * 
* * * *   * * * *

*/



function pattern ( num ){
    
    let n = num/2
    for ( let row = 0 ; row<n ; row++){
        
        let str='';
        
        for ( let col = 0 ; col<n-row ; col++){
            str+='* '
        } 
        for ( space = 0 ; space<2*row+1 ; space++){
            str+="  "
        }
        
        for( star=0; star<n-row ; star++){
            str+="* "
        }
        console.log(str)
    }


    for (let row = 0 ; row < n ; row++){
        
        let str=''
         for ( char = 0 ; char<row+1 ; char++){
            str+="* "
        } 
        
        for ( space = 0 ; space<(2*n)-(2*row)-1 ; space++){
            str+="  "
        }
        
        for ( star = 0 ; star < row+1 ; star++){
            str+="* "
        }
        console.log(str)
    }
}

// pattern(8);






