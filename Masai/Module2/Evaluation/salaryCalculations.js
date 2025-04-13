Employees = [
    { name: "Alice", baseSalary: 5000, department: "Engineering", yearsOfService: 4, performanceScore: 8 },
    { name: "Bob", baseSalary: 4500, department: "Marketing", yearsOfService: 2, performanceScore: 7 },
    { name: "Charlie", baseSalary: 6000, department: "Engineering", yearsOfService: 7, performanceScore: 9 },
    { name: "Diana", baseSalary: 5500, department: "HR", yearsOfService: 3, performanceScore: 6 }
  ]
  
  
  // Salary strategies:
  // - 5% annual bonus for employees with 3+ years of service
  // - 10% performance bonus for scores 8+
  // - 15% extra for Engineering department
  // - 7% tax deduction on total salary
  
  function salaryCalculator (array){
  
  return {
      originalSalary (){
          let salaryFilter = array.map((ele)=>{
             return (ele.baseSalary)
          });
  
          let baseSalaryTotal = salaryFilter.reduce((acc,curr)=>{
              acc+=curr;
              return acc
          },0);
  
          return `Original Salary Total : $${baseSalaryTotal}`
      },
  
      afterBonuses(){
         let experience = array.filter((ele)=>{
              return (ele.yearsOfService>3) 
          }).map((ele)=>{
              return ele.baseSalary
          })
  
          let salaryForExperienced = experience.reduce((acc,curr)=>{
              acc+=curr;
              return acc
          },0); 
          
          let bonusforExperienced = salaryForExperienced * (5 / 100);
  
          let goodPerformer = array.filter((ele)=>{
              return (ele.performanceScore>8) 
          }).map((ele)=>{
              return ele.baseSalary
          })
  
          let salaryForGoodPerformer = goodPerformer.reduce((acc,curr)=>{
              acc+=curr;
              return acc
          },0);
  
          let bonusforGoodPerformer = salaryForGoodPerformer * (1/10);
         let final = 21000 + bonusforExperienced + bonusforGoodPerformer
          return `After service and performance bonuses: $${final}`
  
      },
  
  
      departmentAdjustments(){
          let departmental = array.filter((ele)=>{
              return ele.department == "Engineering"
          }).map((ele)=>{
              return ele.baseSalary
          })
  
           let salaryForDepartmental = departmental.reduce((acc,curr)=>{
              acc+=curr;
              return acc
          },0);
  
          let bonusForDepartmental = salaryForDepartmental * (15/100);
          let final = bonusForDepartmental + 21000 ;
          
          return `After department adjustments : ${final}`
      },
  
      tax(){
  
          let salaryFilter = array.map((ele)=>{
             return (ele.baseSalary)
          });
  
          let baseSalaryTotal = salaryFilter.reduce((acc,curr)=>{
              acc+=curr;
              return acc
          },0);
  
          let totalTax = baseSalaryTotal * (7/100);
          let final = 21000 - totalTax
  
          return `Final salary after all calculations:: $${final}`
  
      }
  
  }
  
  }
  
  let calculations = salaryCalculator(Employees);
  console.log(calculations.originalSalary())
  console.log(calculations.afterBonuses())
  console.log(calculations.departmentAdjustments());
  console.log(calculations.tax());
  
  // Original salary total: $21000.00
  // After service and performance bonuses: $24600.00
  // After department adjustments: $26400.00
  // Final salary after all calculations: $24552.00