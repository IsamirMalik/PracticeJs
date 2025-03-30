function createFunctionRegistry (){
    let registry = {};
    
    function registerFunction (name,fn){
      registry[name] = fn
      return registry
    }
    
    function executeFuntion(name , args){
     return registry[name](args);
      
    }
    
    return {
      registerFunction ,
      executeFuntion ,
    }
  }
  
  let diary = createFunctionRegistry();
  
  function double(num){
    return num * 2
  }
  console.log(diary.registerFunction('double' , double));
  console.log(diary.executeFuntion('double' , 5 ))