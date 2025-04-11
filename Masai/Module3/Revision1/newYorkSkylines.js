/*
if the building is smaller than the building to its left and to the building to its right , it gets 0 point , if the building is higher than one of the buildings to its left or right , it gets 1 point , if the building is higher than the building to its left and right , it gets 2 points .
*/

function newYorkSkylines(N,arr){
    //write your code here
    let score = ''
    for ( let i =0 ; i < N ; i++){
      
      let ans = (arr[i]>arr[i-1] && arr[i]>arr[i+1]) ? 2 :
                (arr[i]>arr[i-1] || arr[i]>arr[i+1]) ? 1 : 0 ;
                score+=ans+' ';
    }
    console.log(score)
  }
