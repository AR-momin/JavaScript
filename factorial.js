// let num = 6
// let fact = 1

// for (let i = 1; i <= num; i++) {
//   fact = fact * i
// }
// console.log(fact)


// let num = 8
// let array = []
// for (let i = 1; i <= num; i++) {
//   array.push(i)
// }

// let fact = (a,b)=>{
//   return a*b
// }
// let factorial = array.reduce(fact)
// console.log(factorial)





// let n = 5;
// let arr = []
// for (let i = 1; i <= n; i++) {
//   arr.push(i)
// }

// let factorial = ((a,b)=>a*b)
// let fact = arr.reduce(factorial)
// console.log(fact)



// let num = 7;
// let a = []

// for (let i = 1; i <= num; i++) {
//   a.push(i)
// }
// console.log("Array:",a)

// let factorial = (a,b)=>a*b
// let fact = a.reduce(factorial)
// console.log("Factorial",fact)




let num = 6;  
let arr = []

for (let i = 1; i <= num; i++) {
  arr.push(i)
}

let newArr = arr.map((e)=>{
  return e*2
})

let fact1 = (a,b)=>a*b
let factorial1 = arr.reduce(fact1)

let total = (a,b)=>a+b
let sum = newArr.reduce(total)

console.log("Original Array:",arr)
console.log("Doubled Array:",newArr)
console.log("Factorial:",factorial1)
console.log("Doubled Sum:",sum)