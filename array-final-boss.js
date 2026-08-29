// let products = ["Demo Product", "Laptop", "Mouse", "Keyboard", "Monitor", "Headphones", "Old Product"];

// let prices = [0, 55000, 800, 2500, 18000, 4200, 0];

// products.shift()
// prices.shift()
// products.pop()
// prices.pop()

// products.unshift("phone")
// prices.unshift(25000)
// products.push("webcam")
// prices.push(3000)

// products.splice(3, 1, "mechanical keyboard")
// prices.splice(3, 1, 4500)

// prices[2] = 1000

// console.log(products.length)
// console.log(products[0],products[products.length-1])

// console.log(products.toString())
// console.log(products.join(" | "))

// console.log(products.slice(2, 5))

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i], prices[i])
// }

// prices.forEach((value, index) => {
//   console.log(index, value)
// });

// for (const other of products) {
//   console.log(other)
// }

// let newPrices = prices.map(e=>{
//   return e+(e*10/100)
// })

// const greaterThan5000 = (e)=>{
//   return e>=5000
// }
// let filtered = newPrices.filter(greaterThan5000)

// let total = (a,b)=>{
//   return a+b
// }
// let sum = filtered.reduce(total)

// console.log("Final products:",products)
// console.log("Final prices:",prices)
// console.log("10% increased prices:",newPrices)
// console.log("5000+ prices:",filtered)
// console.log("Total of 5000+ Prices:",sum)









let students = ["Demo","Aman","Sara","Rahul","Zoya","Kabir","Old Student"];
let marks = [0, 72, 38, 91, 64, 47, 0];

students.shift()
marks.shift()
students.pop()
marks.pop()

students.unshift("Ali")
marks.unshift(81)
students.push("Nida")
marks.push(55)

students.splice(3,1,"Rehan")

marks.splice(5,1,52)

console.log(students.length)
console.log(students[0])
console.log(students[students.length-1 ])
console.log(students.toString())
console.log(students.join(" -> "))
console.log(students.slice(2,5))

for (let i = 0; i < students.length; i++) {
  console.log(students[i],marks[i])
}

marks.forEach((e,index) => {
  console.log(index,e)
});

for (const element of students) {
  console.log(element)
}

let newMarks = marks.map((e)=>{
  return e+5
})

const greaterThan60 = (e)=>{
  return e>=60
}
let greater60 = newMarks.filter(greaterThan60)

let total = (a,b)=>{
  return a+b
}
let sum = greater60.reduce(total)

console.log("final students:",students)
console.log("final marks:",marks)
console.log("bonus marks:",newMarks)
console.log("60+ marks:",greater60)
console.log("Total of 60+ Marks:",sum)
console.log(students.join(" | "))