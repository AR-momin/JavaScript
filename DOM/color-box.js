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





let std = document.querySelectorAll(".student")

function getRandomMarks() {
  let m = Math.floor(Math.random() * 100) + 1
  return m;
}

function getRandomBackgroundColor() {
  let v1 = Math.ceil(Math.random() * 255)
  let v2 = Math.ceil(Math.random() * 255)
  let v3 = Math.ceil(Math.random() * 255)
  return `rgb(${v1},${v2},${v3})`
}


function checkResult(mark){
  if(mark>=40){
    return "Pass"
  }
  else{
    return "Fail"
  }
}

std.forEach(e=>{
  e.style.backgroundColor = getRandomBackgroundColor()
  e.innerHTML = 
})