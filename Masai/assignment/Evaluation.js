function createOrderManager (){
    
    let orders = [];
    
    function addOrder(order){
        orders.push(order);
        return orders;
    }
    
    function updateOrder(id,newStatus){
      
     let result = orders.map((ele)=>{
      if (ele[id]==this.id){
        ele.status = newStatus;
        return ele;
        }
      }) 
     return result
    } ;
    
    function filterOrders(status){
      let result = orders.filter((ele)=>{
        return ele.status == status
      })
      return result
    };
    
    function sorting (by){
      
      if (by=='status'){
     let result = orders.map((ele)=>{
       return ele.status
     }).sort((a,b)=>{
      return a.localeCompare(b)
     });
     
      } else if ( by == 'date'){
         
     let result = orders.map((ele)=>{
       return ele.createdAt
     }).sort((a,b)=>{
      return a.localeCompare(b)
     });
      }
     
     return orders ; 
     
    }
    
    function getTotalRevenue(){
      let revenue = orders.map((ele)=>{
         return ele.items[0].price * ele.items[0].quantity
      }).reduce((acc,curr)=>{
        acc+=curr;
        return acc
      },0)
      return revenue
    }
    
    function exportOrders(){
      return JSON.stringify(orders)
    }
    
    return {
        addOrder ,
        updateOrder ,
        filterOrders ,
        sorting ,
        getTotalRevenue ,
        exportOrders
    }
}
// const manager = createOrderManager();
// manager.addOrder();
// manager.addOrder(;
// console.log(manager.filterOrders("pending"));


let order1 = { id: 1, customerName: "Alice", items: [{ name: "Laptop", price: 1000, quantity: 1 }], status: "pending", createdAt: new Date("2024-03-01") };
let order2 = { id: 2, customerName: "Bob", items: [{ name: "Phone", price: 500, quantity: 2 }], status: "shipped", createdAt: new Date("2024-03-02") } ;


let manager = createOrderManager();
console.log(manager.addOrder(order1));
console.log(manager.addOrder(order2));

// console.log(manager.updateOrder(1,'shipped')) ;

let status = 'pending'
// console.log(manager.filterOrders(status));


// console.log(manager.sorting(status))

// console.log(manager.getTotalRevenue());
// console.log(manager.exportOrders())
