/*  Title: L0 - Greet User With Prompt Input

Problem Statement: Write a function called greetUser that prompts the user to enter their name using the prompt() function. If the user enters a name, greet them with the message: "Hello, !". If no name is provided (i.e., the user presses "Cancel" or enters an empty string), the function should use a default name "Guest" and greet them with: "Hello, Guest!".

Requirements:

Use a function expression. Ensure the function handles cases where the user cancels or leaves the input empty.  */


let greetUser = function  (){
    let Name = prompt("Please enter your name here");
    if ( Name==null || Name == " "){
      return alert (`Hello , Guest !`);
    } else {
      return alert (`Hello , ${Name} !`);
    }
   
  }
  greetUser();