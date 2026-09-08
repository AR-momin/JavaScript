// let marks = [72, 35, 88, 41];
// function checkResult(m){
//   if(m>=40){
//     return "Pass"
//   }
//   else{
//     return "Fail"
//   }
// }

// for (let i = 0; i < marks.length; i++) {
//   let result = checkResult(marks[i])
//   console.log(result)
// }





// let prices = [1200, 4500, 9000, 22000];
// function checkType(p){
//   if(p>=20000){
//     return "Expensive"
//   }
//   else if(p>=5000){
//     return "Mid Range"
//   }
//   else{
//     return "Budget"
//   }
// }

// for (let i = 0; i < prices.length; i++) {
//   let type = checkType(prices[i])
//   console.log(prices[i],type)
// }





let names = ["Laptop", "Mouse", "Keyboard"];
let prices = [55000, 1200, 3500];

function getRandomBackgroundColor(){
  let v1 = Math.ceil(Math.random()*255)
  let v2 = Math.ceil(Math.random()*255)
  let v3 = Math.ceil(Math.random()*255)
  return `rgb(${v1},${v2},${v3})`
}

for (let i = 0; i < names.length; i++) {
let div = document.createElement("div")
let bgColor = getRandomBackgroundColor()
div.innerHTML = `<h3>${names[i]}</h3>
<p>Price:${prices[i]}</p>`
div.style.backgroundColor = bgColor
document.querySelector(".product").append(div)
}