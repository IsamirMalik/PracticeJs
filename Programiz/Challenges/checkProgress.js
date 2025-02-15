/* jhonny lifts weights everyday and now he needs to find out if he is making progress. 
jhonny can do so by checking if the weights he has been ligting each day are gradually increasing. if so , Jhonny is making progress. Otherwise , Jhonny needs to work harder.
*/

function checkProgress(weights) {
    
    let output = "Making Progress"
  for (let i=1; i<weights.length ; i++){
      if ( weights[i-1]==weights[i] ){
          output="Work Harder"
      }
  } return output;
}