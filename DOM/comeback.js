// let marks = [78, 32, 91, 45, 27];

// function checkResult(m){
//   if(m>=40){
//     return "pass"
//   }
//   else{
//     return "fail"
//   }
// }

// for (let i = 0; i < marks.length; i++) {
//   let result = checkResult(marks[i])
//   console.log(marks[i],result)
// }






// function getRandomMarks(){
//   let m = Math.floor(Math.random()*100)+1
//   return m;
// }

// function getRandomBackgroundColor(){
//   let v1 = Math.ceil(Math.random()*255)
//   let v2 = Math.ceil(Math.random()*255)
//   let v3 = Math.ceil(Math.random()*255)
//   return `rgb(${v1},${v2},${v3})`
// }

// function checkResult(mark){
//   if(mark>=40){
//     return "Pass"
//   }
//   else{
//     return "Fail"
//   }
// }

// for (let i = 0; i < 5; i++) {
//   let bgColor = getRandomBackgroundColor()
//   let mark = getRandomMarks()
//   let result = checkResult(mark)

//   let div = document.createElement("div")
//   div.innerHTML = `<p>Marks: ${mark} - ${result}</p>`
//   div.style.backgroundColor = bgColor

//   if(result == "Pass"){
//     div.style.color = "green"
//   }
//   else{
//     div.style.color = "red"
//   }

//   document.querySelector(".results").append(div)

// }






// function getRandomPrice() {
//   let p = Math.floor(Math.random() * 9001) + 1000
//   return p;
// }

// function getRandomBackgroundColor() {
//   let v1 = Math.ceil(Math.random() * 255)
//   let v2 = Math.ceil(Math.random() * 255)
//   let v3 = Math.ceil(Math.random() * 255)
//   return `rgb(${v1},${v2},${v3})`
// }

// function checkCategory(price) {
//   if (price >= 5000) {
//     return "Expensive"
//   }
//   else {
//     return "Budget"
//   }
// }

// for (let i = 0; i < 4; i++) {
//   let prices = getRandomPrice()
//   let category = checkCategory(prices)
//   let bgColor = getRandomBackgroundColor()

//   let box = document.createElement("div")
//   box.innerHTML = `Price: ${prices} - ${category}`
//   document.querySelector(".products").append(box)
//   box.style.backgroundColor = bgColor

//   if (category == "Expensive") {
//     box.style.color = "green"
//   }
//   else {
//     box.style.color = "blue"
//   }
// }








let products = ["Laptop", "Mouse", "Keyboard"];
for (let i = 0; i < products.length; i++) {
  let div = document.createElement("div")
  div.innerHTML = `${products[i]}`
  document.querySelector(".products").append(div)

  if(products[i] == "Mouse"){
    div.classList.add("remove")
  }
}

document.querySelector(".remove").remove()
console.log(products)