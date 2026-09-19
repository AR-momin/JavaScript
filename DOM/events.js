// // let btn = document.getElementById("btn")
// // btn.addEventListener("click", ()=>{
// //   document.body.style.backgroundColor = "red"
// // })

// // btn.addEventListener("click", ()=>{
// //   document.querySelector(".box").innerHTML = "Shyt I was Clicked <b>By You</b>"
// // })

// // btn.addEventListener("dblclick", ()=>{
// //   document.querySelector(".box").style.color = "Green"
// // })

// // btn.addEventListener("mouseenter", ()=>{
// //   document.querySelector(".box").style.color = "Green"
// // })

// // btn.addEventListener("mouseleave", ()=>{
// //   document.querySelector(".box").style.color = "blue"
// // })

// // btn.addEventListener("contextmenu", ()=>{
// //   alert("Don't Try To Right Click Here")
// // })

// // btn.addEventListener("keydown", (e)=>{
// //   console.log(e)
// // })





// let btn = document.getElementById("btn")
// let para =  document.getElementById("text")
// btn.addEventListener("click",()=>{
//   para.innerHTML = "Button Clicked"
//   para.style.backgroundColor = "blue"
// })

// let text = document.getElementById("box")
// text.addEventListener("dblclick",()=>{
//   text.innerHTML = "Double Clicked!"
//   text.style.color = "red"
//   text.style.backgroundColor = "yellow"
// })







// let mouse = document.getElementById("hoverBox")
// mouse.addEventListener("mouseover",()=>{
//   mouse.style.backgroundColor = "green"
//   mouse.innerHTML ="Mouse Iside"
// })

// mouse.addEventListener("mouseout",()=>{
//   mouse.style.backgroundColor = "gray"
//   mouse.innerHTML ="Mouse Outside"
// })






// let input = document.getElementById("nameInput")
// let output = document.getElementById("output")
// input.addEventListener("keydown",()=>{
//   output.innerHTML = "Key Pressed!"
//   output.style.backgroundColor = "beige"
// })






// let msg = document.getElementById("message")
// setTimeout(() => {
//   msg.innerHTML = "Welcome to the website!"
// }, 3000);





// let count = 0 
// let interval = setInterval(() => {
//   count = count + 1
//   console.log(count)
//   if (count == 15){
//     clearInterval(interval)
//   }
// }, 1000);









// let parent = document.getElementById("parent")
// let child = document.getElementById("child")

// parent.addEventListener("click",e=>{
//   console.log("Parent Clicked")
// })

// child.addEventListener("click",e=>{
//   console.log("Button Clicked")
//   e.stopPropagation()
// })








function getRandomBgColor(){
  let v1 = Math.ceil(Math.random()*255)
  let v2 = Math.ceil(Math.random()*255)
  let v3 = Math.ceil(Math.random()*255)
  return `rgb(${v1},${v2},${v3})`
}
let card = document.getElementById("product")
let button = document.getElementById("buyBtn")
let msg = document.getElementById("message")

card.addEventListener("click",e=>{
  card.style.backgroundColor = getRandomBgColor()
})

button.addEventListener("click",e=>{
  msg.innerHTML = "Product Added!"
  e.stopPropagation()
  setTimeout(() => {
    msg.innerHTML = ""
  }, 3000);
})







let offer = document.getElementById("timer")
let count = 10
let interval = setInterval(() => {
  count = count - 1
  if(count == 0){
    offer.innerHTML = "Offer Expired"
    clearInterval(interval)
  }
  else{
    offer.innerHTML = `Offer Ends In: ${count}`
  }
}, 1000);
