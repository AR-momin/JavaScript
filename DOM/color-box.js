// let boxes = document.querySelectorAll(".boxes")

// function getRandomColor(){
//   let v1 = Math.ceil(0 + Math.random()*255)
//   let v2 = Math.ceil(0 + Math.random()*255)
//   let v3 = Math.ceil(0 + Math.random()*255)
//   return `rgb(${v1},${v2},${v3})`
// }

// Array.from(boxes).forEach(e=>{
//   e.style.backgroundColor = getRandomColor()
//   e.style.color = getRandomColor()
// })





// let fonts = document.querySelectorAll(".text")

// function getRandomFontSize(){
//   let value = Math.ceil(Math.random()*19)+12
//   return `${value}px`
// }

// fonts.forEach(e=>{
//   e.style.fontSize = getRandomFontSize()
// })





// let paragraph = document.querySelectorAll(".para")

// function getRandomColor(){
//   let v1 = Math.ceil(Math.random()*255)
//   let v2 = Math.ceil(Math.random()*255)
//   let v3 = Math.ceil(Math.random()*255)
//   return `rgb(${v1},${v2},${v3})`
// }

// function getRandomFontSize(){
//   let fs = Math.floor(Math.random()*21)+15
//   return `${fs}px`
// }

// paragraph.forEach(e=>{
//   e.style.color = getRandomColor()
//   e.style.fontSize = getRandomFontSize()
// })





// let boxes = document.querySelectorAll(".box")

// function getRandomBackgroundColor() {
//   let v1 = Math.ceil(Math.random()*255)
//   let v2 = Math.ceil(Math.random()*255)
//   let v3 = Math.ceil(Math.random()*255)
//   return `rgb(${v1},${v2},${v3})`
// }

// function getRandomNumber(){
//   let num = Math.floor(Math.random()*100)+1
//   return num
// }

// boxes.forEach(e=>{
//   e.style.backgroundColor = getRandomBackgroundColor()
//   e.innerHTML = `Random Number:${getRandomNumber()}`
// })





// let std = document.querySelectorAll(".student")

// function getRandomMarks() {
//   let m = Math.floor(Math.random() * 100) + 1
//   return m;
// }

// function getRandomBackgroundColor() {
//   let v1 = Math.ceil(Math.random() * 255)
//   let v2 = Math.ceil(Math.random() * 255)
//   let v3 = Math.ceil(Math.random() * 255)
//   return `rgb(${v1},${v2},${v3})`
// }


// function checkResult(marks){
//   if(marks>=40){
//     return "Pass"
//   }
//   else{
//     return "Fail"
//   }
// }

// std.forEach(e=>{
//   let marks = getRandomMarks()
//   let result = checkResult(marks)
//   e.style.backgroundColor = getRandomBackgroundColor()
// e.innerHTML = `Marks:${marks} - ${result}`

//   if(result == "Pass"){
//     e.style.color = "green"
//   }
//   else{
//     e.style.color = "red"
//   }

// })






// let products = document.querySelectorAll(".product")

// function getRandomRating(){
//   let rate = Math.floor(Math.random()*5)+1
//   return rate;
// }

// function getRandomBackgroundColor(){
//   let v1 = Math.ceil(Math.random()*255)
//   let v2 = Math.ceil(Math.random()*255)
//   let v3 = Math.ceil(Math.random()*255)
//   return `rgb(${v1},${v2},${v3})`
// }

// function checkRating(r){
//   if(r>=4){
//     return "Recommended"
//   }
//   else{
//     return "Normal"
//   }
// }

// products.forEach(e=>{
//   let rating = getRandomRating()
//   let result = checkRating(rating)
//   e.style.backgroundColor = getRandomBackgroundColor()
//   e.innerHTML = `Rating: ${rating} - ${result}`

//   if(result == "Recommended"){
//     e.style.color = "green"
//   }
//   else{
//     e.style.color = "red"
//   }
// })







let cities = document.querySelectorAll(".city")

function getRandomTemp() {
  let temp = Math.floor(Math.random() * 36) + 10
  return temp;
}

function getRandomBackgroundColor() {
  let v1 = Math.ceil(Math.random() * 255)
  let v2 = Math.ceil(Math.random() * 255)
  let v3 = Math.ceil(Math.random() * 255)
  return `rgb(${v1},${v2},${v3})`
}

function checkTemp(t) {
  if (t >= 30) {
    return "Hot"
  }
  else {
    return "Normal"
  }
}

cities.forEach(e => {
  let temp = getRandomTemp()
  let result = checkTemp(temp)
  e.style.backgroundColor = getRandomBackgroundColor()
  e.innerHTML = `Temperature: ${temp}°c - ${result} `

  if (result == "Hot") {
    e.style.color = "red"
  }
  else {
    e.style.color = "blue"
  }
})