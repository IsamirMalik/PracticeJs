// English : Hello , Spanish : Hola , French : Bonjour , Italian : Ciao .

function greetUser(language) {
    
    let output = (language=="English") ? "Hello"  :
                 (language=="Spanish") ? "Hola"   :
                 (language=="French")  ? "Bonjour":
                 "Ciao";

                 return output;
}
