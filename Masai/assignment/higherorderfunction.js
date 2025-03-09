


let tasks = [
    { title : 'Checking Inventory' , status : "Completed" },
    { title : "Calling Customer" ,  status :'Pending'},
    { title : 'Confirming Order' ,  status :"Pending" } ,
    { title : "Meeting" , status : "Pending" } ,
    { title : "Visiting Factory" , status : 'Completed'} ,
];

function addTask ( title , status='Pending'){
tasks.push({title : `${title}` , status : `${status}`});
return tasks ;
};



let completed = tasks.map((ele)=>{
 ele.status = 'Completed';
 return ele;
})

let filtered = tasks.filter((ele)=>{
return ele.status='Completed'
})



let listing = tasks.forEach((ele)=>{
console.log(ele)
});


let sorting = tasks.sort(function(a,b){
return a.title-b.title;
});

let counting = tasks.reduce((freq,val)=>{
freq[val.status] = (freq[val.status]||0)+1;
return freq ;
},{})





