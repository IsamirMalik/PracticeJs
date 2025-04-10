const people = [ 
    { name: "Alice", 
      address: { city: "New York",
                 street: { name: "Broadway",
                           number: 123 
                        } 
                } 
    }, 
    
    { name: "Bob",
      address: { city: "Los Angeles",
                 street: { name: "Sunset Boulevard",
                           number: 456 
                        } 
                } 
    } 
];

//OutPut
// ["Alice lives in New York on Broadway", "Bob lives in Los Angeles on Sunset Boulevard"]

let [firstPerson,secondPerson] = people ;

let {name : firstPersonName ,  address : {city : firstPersonCityName , street : { name : firstPersonStreetName , number : firstPersonStreetNumber}} } = firstPerson ;

let {name : secondPersonName ,  address : {city : secondPersonCityName , street : { name : secondPersonStreetName , number : secondPersonStreetNumber}} } = secondPerson ;

let finalOutput = [`"${firstPersonName} lives in ${firstPersonCityName} on ${firstPersonStreetName}" ,"${secondPersonName} lives in ${secondPersonCityName} on ${secondPersonStreetName}"`] ;

console.log(finalOutput);