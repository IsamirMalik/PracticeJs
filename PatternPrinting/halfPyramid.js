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

halfPyramid(5)