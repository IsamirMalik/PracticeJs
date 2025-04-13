


class Vehicle{
    constructor(model , type , status ){
        this.model = model ;
        this.type = type ;
        this.status = status
    }
    
    getRentedVehicles(list){
    let rented = list.filter((ele)=>{
        return ele.status=='rented'
    })
    return rented
    }

    rent (model , rentedBy,list){
        let rentedVehicle = list.map((ele)=>{
            if (ele.model == model){
                ele.status = 'rented'
            }
        })
        return `${this.model} is returned`
    }
  

    currentStatus (status){
        return `Current status : ${this.status}`
    }
    
    returnVehicle(returned){
        return `${this.model} is returned`
    }
}
class Car extends Vehicle {
        constructor(model , type , fuleType , number , status){
        super(model , type , status)
        this.fuleType = fuleType;
        this.number = number ;
        }      
} ;


class Bike extends Vehicle {
    constructor(model , type , number , status){
        super (model , type , status ) 
        this.number = number
    }
}

class Truck extends Vehicle {
    constructor(model , type , number , status ){
        super (model , type , status)
        this.number = number;
        this.status
    }
}

const car1 = new Car("Honda Civic", "Sedan", "Petrol", 5 , 'Rented');
const bike1 = new Bike("Yamaha R15", "Sports", 150 , 'rented');
const truck1 = new Truck("Tata Ace", "Mini Truck", 1200 , 'rented');
let list = [car1,bike1,truck1];



function getRentedVehicles(arr){
    let rented = arr.filter((ele)=>{
        return ele.status=='rented'
    })
    return rented
}
// function rentalSystem(model, rentedBy ){
// return {
//      getRentedVehicles(){
//     let rented = rentalSystem.list.filter((ele)=>{
//         return ele.status=='rented'
//     })
//     return rented
//     } ,

//     rent (model , rentedBy){
//         let rentedVehicle = rentalSystem.list.map((ele)=>{
//             if (ele.model == model){
//                 ele.status = 'rented'
//             }
//         })
//         return `${this.model} is returned`
//     }
// }
// }
// console.log(rentalSystem.getRentedVehicles())

console.log(car1.rent('Customer007'))
console.log(bike1.currentStatus())




