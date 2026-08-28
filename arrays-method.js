// let fruits = ["Apple", "Mango", "Banana", "Orange"];

// console.log(fruits[0])
// console.log(fruits[3])

// fruits[2]="Grapes"

// console.log(fruits.length)
// console.log(fruits)






// let items = ["Milk", "Bread", "Eggs"];

// items.push("Butter")
// console.log(items)

// items.unshift("Rice")
// console.log(items)

// items.pop()
// console.log(items)

// items.shift()
// console.log(items)




// let technologies = ["HTML", "CSS", "JavaScript"];
// console.log(technologies.toString())
// console.log(technologies.join(" - "))





// let numbers = [10, 20, 30, 40, 50, 60];
// numbers.splice(1,2,25,35,45)
// console.log(numbers)

// console.log(numbers.slice(1,4))






// let students = ["Aman", "Sara", "Rahul", "Zoya"];
// students.push("Kabir");
// students.unshift("Ali");
// console.log(students.length);
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i])
// }
// console.log(students.join(" | "))






// let cart = ["Mouse", "Keyboard", "Monitor", "Headphones"];
// cart.unshift("Laptop");
// cart.push("Webcam");
// cart.splice(2,2,"Mechanical Keyboard");
// console.log(cart.length)
// console.log(cart.slice(1,4))

// for (let i = 0; i < cart.length; i++) {
//   console.log(cart[i]);
// }

// console.log(cart.join(" -> "))






// let courses = ["HTML", "CSS", "JavaScript", "Bootstrap", "React"];
// courses.unshift("Git");
// courses.push("Node.js");
// courses.splice(4,1,"Tailwind CSS","GitHub")
// console.log(courses.length)
// console.log(courses.slice(2,5))

// for (let i = 0; i < courses.length; i++) {
//   console.log(courses[i])
// }

// console.log(courses.join(" => "))





// let numbers = [12, 25, 8, 40, 17];

// numbers.forEach((e,index) => {
//   console.log(index,e)
// });






// let numbers = [12, 25, 8, 40, 17];
// for (const num of numbers) {
//   console.log(num, num*2)
// }





// let numbers = [12, 25, 8, 40, 17];
// let newNum = numbers.map((e)=>{
//   return e*2
// })

// console.log("Original:", numbers);
// console.log("Doubled:", newNum);





// let numbers = [12, 25, 8, 40, 17, 30, 5];

// const greaterThan20 = (e)=> {
//   if(e>20){
//     return true
//   }
//     return false
// }
// let greater20 = numbers.filter(greaterThan20)

// console.log("original:",numbers)
// console.log("Greater Than Twenty:",greater20)





// let numbers = [10, 20, 30, 40, 50];
// let Total = (a,b)=>{
//   return a+b
// }

// let sum = numbers.reduce(Total)
// console.log(numbers)
// console.log(sum)





// let numbers = [5, 12, 20, 7, 30, 9];
// console.log("origoinal array:",numbers)
// // using map()
// let double = numbers.map(e=> e*2)
// console.log("doubled Array:",double)

// // using filter()
// const greater20 = (e)=>{
//   return e>20
// }
// let greaterThan20 = double.filter(greater20)
// console.log("Greater Than 20 in Doubled Array:",greaterThan20)

// // using reduce()
// let total = (a,b)=>{
//   return a+b
// }
// let sum = greaterThan20.reduce(total)
// console.log("sum of Greater Than 20:",sum)





// let prices = [500, 1200, 2500, 700, 3000, 450];
// console.log("original Array:",prices)
// let newPrices = prices.map((e)=>{
//   return e+e*10/100
// })
// console.log("prices increased by 10%:",newPrices)

// const greaterThan1000 = (e)=>{
//   return e>1000
// }
// let greater1000 = newPrices.filter(greaterThan1000)
// console.log("Greater Than 1000 in increased Prices:",greater1000)

// let total = (a,b)=>{
//   return a+b
// }
// let sum = greater1000.reduce(total)
// console.log("total sum:",sum)






let salaries = [12000, 18000, 25000, 9000, 32000, 15000];
console.log("Original Array:",salaries)

let increasedSalary = salaries.map((e)=>{
  return e+e*20/100
})
console.log("Salaries After Increment:",increasedSalary)

const filteredsalary = (e)=>{
  return e>20000
}
let salaryGreaterThan20000 = increasedSalary.filter(filteredsalary)
console.log("salaries Greater Than 20000:",salaryGreaterThan20000)

let total = (a,b)=>{
  return a+b
}
let sum = salaryGreaterThan20000.reduce(total)
console.log("total sum of salaries Greater Than 20000:",sum)

for (const salary of increasedSalary) {
  console.log(salary)
}