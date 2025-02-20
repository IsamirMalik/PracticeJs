/* Title: L1 - Validate and Calculate Discounted Price

Problem Statement: Write a function called calculatePrice that takes two inputs: price and discount. If the user doesn't provide a discount (i.e., leaves it blank), the function should apply a default discount of 10%. If the user provides an invalid price or discount (e.g., a negative number or non-numeric input), it should display an error message and prompt them to try again.

Finally, the function should calculate and return the final price after applying the discount.

Requirements:

Use default parameters for the discount. Validate both inputs to ensure they are positive numbers */

function CalculatePrice ( ) {

    let price = prompt("Please enter the price here");
    let discount = prompt ("please enter the discount here" );
    
      if (  price < 0 || discount < 0 || discount > 100 || !price){
        alert ("Error: Invalid input");
        price = prompt("Please enter the price here");
        discount = prompt ("please enter the discount here");
      } else if (!discount){
        discount = 10 ;
         let x = price - (price * discount / 100);
    
         return alert (`final price is ${x}`);
    }
}
CalculatePrice();



