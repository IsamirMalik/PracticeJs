function createFunctionList() {

    let functions = [];
    
    for (let i = 0; i < 5; i++) { // we need to change var with let ,coz var is function
                                   // scope when loop is over i becomes 5 and (i=5) can 
                                   // be accessed anywhereinside function scope , therefore function inside the functions array will be updted by the value of i = 5 .
    
    functions.push(function () {
    
    console.log("Index:", i);
    
    });
    
    }
    
    return functions; }
    
    const functionList = createFunctionList();
    
    functionList[0]();    // Expected Output: "Index: 0", Actual Output: "Index: 5"
    
    functionList[1]();   // Expected Output: "Index: 1", Actual Output: "Index: 5"
    
    functionList[2]();   // Expected Output: "Index: 2", Actual Output: "Index: 5"
    
    functionList[3]();   // Expected Output: "Index: 3", Actual Output: "Index: 5"
    
    functionList[4]();   // Expected Output: "Index: 4", Actual Output: "Index: 5"