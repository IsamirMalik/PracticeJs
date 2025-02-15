/* A leap year is a year that satisfies 
1. if a year is divisible by 4, it could be a leap year . 
2. However, if that year is also divisible by 100 , it must also be divisible by 400.
*/

function checkLeapYear(year) {
    
    let flag = false;

    if ((year%4==0 && year%100!==0) || ((year%100==0) && (year%400==0))){
        flag = true;
    }

    if(flag){
        return "Leap";
    } else if(!flag) {
        return "Noleap";
    }
}