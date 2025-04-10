JavaScript Notes 

## Variables :- 
A VARIABLE IS A " NAMED STORAGE " FOR DATA .

Declaration :- 1.LET 2.CONST & 3.VAR

let and const were introduced in 2015 ( ES6 ) 

### VAR :
it is function ( if declared inside a function ) or Global scoped ( if declared globally ) . it allows variable to be both Reassigned and redefined . Allows Hoisting . 
> scope : Function .
> Reassignable : Yes .
> Mutable : Yes .
> Temporal dead zone : No .

### LET :
Block scoped . Allows Reassignment . 
> scope : Block .
> Reassignable : Yes .
> Mutable : Yes .
> Temporal dead zone : Yes .

### CONST :
used to decalare constant . Once a value is assigned to a constant using const , it cannot be changed or reassigned throughout the execution of the script . it is important to note that if the value is in the form of array or object , its elements or properties can still be modified .
> scope : Block .
> Reassignable : No .
> Mutable : Yes .
> Temporal dead zone : Yes .

### Hoisting :
**var** _declarations , wherever they occur in a script , are processed before any code within the script is executed . Declaring a variable anywhere in the ocde is equivalent to declaring it at the top ( in its block ) . this also means that a variabole can appear to be used before it is declared . this behaviour is called **HOISTING** ._ 

[ if we try to access var declared variable before their declaration we get undefined , not an error . But in case of let and const , if we try to access them before their declaration we get a reference error , this is known as Temporal dead zone . ]

### Scope :
**The context in which values and expressions are 'visible' or can be referenced . if a  variable or other expression is not 'in the current scope' then it is unavailable for use .**

### Variable mutation :
**A variable is said to have been mutated when its initial value has been chaned afterward . A variable is said to be immutable if it can't be mutated .**

