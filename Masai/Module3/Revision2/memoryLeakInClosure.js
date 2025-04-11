function createHeavyDataHandler() {

    let largeData = new Array(1000000).fill(0); // Large data array
    
    return {
    
    processData: function () {
    
    console.log("Processing data of size:", largeData.length);},
    
    clearData: function () {
    
    console.log("Clearing data");
    
    largeData = null; // Attempt to free memory 
    } ,
    
    print(){
    console.log(largeData)
    }
    
    }; }
    
    const handler = createHeavyDataHandler();
    
    handler.processData(); // Output: Processing data of size: 1000000
    handler.clearData();    // Output: Clearing data
    handler.processData(); // error ( we can't acces the length of null)
    // console.log(handler.print())