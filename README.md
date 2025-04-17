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


## Naming Conventions

Giving a name to Variables and Functions is one of the most important tasks in coding , yet it doesn’t get the attention of many of us . It doesn’t affect out code’s efficiency , but it certainly make our code more readable and easily understandable . Here is a comprehensive guide about naming conventions , specially in context of JavaScript but i don’t doubt that it is equally helpful in other languages too .

### Common Naming Conventions

1. Camel Case
2. Pascal Case
3. Snake Case
4. Kebab Case

Let’s discuss each of them briefly .

### camelCase : -

It is a variable naming convention used almost everywhere .

Description : - first word starts with lowercase letter and then every upcoming word starts with Uppercase letter without  any space between them .

- Use camelCase for naming variable .
- Use prefix like is , has or can to indicate Boolean .
- To declare a private variable use underscore ( “_” ) as prefix .
- Function name should be prefixed with verb like getData , calculateTotal etc …

<aside>
Examples :- firstName , phoneNumber , totalSum , isAvailable , isPrime , _accountBalance etc …
</aside>

**Note : -** *Always prefer meaningful names that clarify the role of variable , avoid starting a name with special characters and Numbers .*

### PascalCase :-

Description : - Similar to ***camelCase*** with a slight  difference , every word starts with UpperCase letter including first word . 

- Also known as “ Upper Camel Case “
- This is mostly used in namig Classes and Constructor functions , it dfferentiates them from variables and functions .

<aside>
Examples : - FirstName , PhoneNumber , TotalSum etc …
</aside>

### snake_case :-

 Descriptioin :- In this naming convention , all the  words are written in lowercase and are separated by  underscore ( ”_” ) instead of spaces .

- For naming constants UPPER_SNAKE_CASE  is widely followed convention . [ upper snake case indicates immutability . ]
- This naming convention and kebab-case convention is widely used for naming files [ Avoid upperCase letter in filenames . ]

<aside>
Examples : - first_name , phone_number , total_sum  , DAYS_IN_A_WEEK etc …
</aside>

### kebab-case :-

Description :- this is almost similar to snake_case , the only thing which differentiate it from snake_case is that in kebab-case we use Hyphen ( ”-” ) instead of underscore ( ”_” ) .

<aside>
Examples : - first-name , phone-number , total-sum etc …
</aside>

### Concise Table :-

|                           camelCase |                           firstName |
| --- | --- |
|                           **PascalCase** |                           **FirstName** |
|                           **snake_case** |                           **first_name** |
|                           **kebab-case** |                           **first-name** |

 

> Following these naming conventions ensures  readability , consistency , maintainability , aligning with widely accepted community .

