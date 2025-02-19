// Median is the middle value in a sorted integer list .

function findMedian(arr) {

    let median = 0 ;
 
    if ( arr.length%2!==0){
         median = arr[(arr.length-1)/2]
    } else if ( arr.length==2){
     median = (arr[0] + arr[1])/2
    }
    else if ( arr.length%2==0){
     median = (arr[(arr.length-1)/2] + arr[(arr.length+1)/2])/2;
    }
 
    return median;
 }