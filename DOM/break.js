// let name = prompt("Enter Your Name")
// let marks = Number(prompt("Enter Your Marks"))

// function getGrade(mark){
//   if(mark>=80){
//     return "A"
//   }
//   else if(mark>=60){
//     return "B"
//   }
//   else if(mark>=40){
//     return "C"
//   }
//   else{
//     return "Fail"
//   }
// }

// let result = getGrade(marks)
// alert(`${name} scored ${marks} marks and got grade ${result}`)







// let student = {
//   name: "Akhtar",
//   age: 19,
//   course: "BCA",
//   marks: 91
// }
// console.log(student)

// for (const key in student) {
//   const element = student[key];
//   console.log(key,":",element)
// }


// for (const character of student.name) {
//   console.log(character)
// }





// for (let i = 1; i <= 10; i++) {
//   console.log(i)
// }
// let n = 10
// while (n>0) {
//   console.log(n)
//   n--;
// }

// let sum = 0
// for (let i = 0; i <= 10; i++) {
//   sum = sum + i 
// }
// console.log(sum)







// function checkResult(name,mark){
//   if(mark>=40){
//     return `${name} : Pass`
//   }
//   else{
//     return `${name} : Fail`
//   }
// }

// let result = checkResult("Akhtar",94)
// console.log(result)







// function checkOperation(a,b,opt){
// if(opt == "+"){
//   return a+b
// }
// else if(opt == "-"){
//   return a-b
// }
// else if(opt == "*"){
//   return a*b
// }
// else if(opt == "/"){
//   return a/b
// }
// else{
//   return "Invalid Operator"
// }
// }
// let operation = checkOperation(7,9,"*")
// console.log(operation)








// function faultyCalci(a,b,opt){
//   let rand = Math.random()
//   if(rand<0.1){
//     if(opt == "+"){
//       return a-b
//     }
//     else if(opt == "-"){
//       return a+b
//     }
//     else if(opt == "*"){
//       return a/b
//     }
//     else if(opt == "/"){
//       return a*b
//     }
//     else{
//     return "Invalid Operator"
//   }
//   }
//   else{
//     if(opt == "+"){
//     return a+b
//   }
//   else if(opt == "-"){
//     return a-b
//   }
//   else if(opt == "*"){
//     return a*b
//   }
//   else if(opt == "/"){
//     return a/b
//   }
//   else{
//     return "Invalid Operator"
//   }
//   }
// }

// let operation = faultyCalci(9,5,"*")
// console.log(operation)





// function convertTemp(value, type){
//   let rand =Math.random()

//   if(rand<0.3){
//     if(type == "c"){
//       return value+20
//     }
//     else if(type == "f"){
//       return value-20
//     }
//     else{
//       return "Invalid type"
//     }
//   }
//   else{
//     if(type == "c"){
//       return (value * 9/5) + 32
//     }
//     else if(type == "f"){
//       return (value - 32) * 5/9
//     }
//     else{
//       return "Invalid type"
//     }
//   }
// }

// let temp = convertTemp(40,"c")
// console.log(temp)







// let price = 2500
// let quantity = 4


// let total = price*quantity

// let discount = 0
// if(total>=10000){
//   discount = 15
// }
// else if(total>=5000){
//   discount = 10
// }
// else{
//   discount = 0
// }

// function checkBill(total,discount){
//   return total - (total*discount/100 )
// }

// let finalPrice = checkBill(total,discount)

// console.log(`Original Price: ${total}`)
// console.log(`Discount: ${discount}%`)
// console.log(`After Applying Discount: ${finalPrice}`)








// let products = ["Laptop", "Mouse", "Keyboard", "Monitor"]
// let stocks = [3, 0, 12, 5]
// let prices = [55000, 1200, 3500, 18000]

// function checkStocks(stk) {
//   if (stk >= 6) {
//     return "In Stock"
//   }
//   else if (stk >= 1) {
//     return "Low Stock"
//   }
//   else {
//     return "Out Of Stock"
//   }
// }
// let totalInventoryValue = 0
// for (let i = 0; i < products.length; i++) {
//   let stock = checkStocks(stocks[i])

//   console.log(`${products[i]} - ${stock} - ${prices[i]}`)

//   let inventoryvalue = stocks[i] * prices[i]
//   totalInventoryValue =  totalInventoryValue + inventoryvalue 
// }

// console.log(`Total Inventory Value: ${totalInventoryValue}`)








let products = ["Laptop", "Mouse", "Keyboard", "Monitor"]
let prices = [55000, 1200, 3500, 18000]

let newPrices = prices.map(e=>{
  return e+(e*10/100)
})

let updatedPrices = (e=>{
  if(e>=5000){
    return true
  }
  else{
    return false
  }
})
let filter = newPrices.filter(updatedPrices)

let total = ((a,b)=> a+b)
let sum = newPrices.reduce(total,0)

console.log(`Updated Prices: ${newPrices}`)
console.log(`Premium Prices: ${filter}`)
console.log(`Total Updated Value: ${sum}`)

for (let i = 0; i < products.length; i++) {
  console.log(`${products[i]} - ${newPrices[i]}`)
}