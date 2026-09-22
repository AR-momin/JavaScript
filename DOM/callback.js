// function showMessage(name){
//   console.log(`how are you ${name}`)
// }

// function processUser(akhtar){
//   akhtar("Akhtar Raza")
// }

// processUser(showMessage)





// function cehckResult(mark){
//   if(mark>=40){
//     return "Pass"
//   }
//   else{
//     return "Fail"
//   }
// }

// function processMarks(callbak){
//   let result =  callbak(72)
//   console.log(result)
// }

// processMarks(cehckResult)





// function calculatePrice(price){
//   return price+(price*10/100)
// }

// function processPrice(callback){
//   let result = callback(5000)
//   console.log(result)
// }

// processPrice(calculatePrice)






// function showSuccess(msg){
//   console.log(`order successful : ${msg}`)
// }

// function processOrder(callback){
//   callback("laptop")
// }

// processOrder(showSuccess)






// function applyDiscount(price){
//   return price - (price * 20/100)
// }

// function processPayment(callback){
//   let result = callback(5000)
//   console.log(result)
// }
// processPayment(applyDiscount)






// function showProduct(name){
//   return `Product Loaded: ${name}`
// }

// function loadProduct(callback){
//   let result = callback("Laptop")
//   console.log(result)
// }
// loadProduct(showProduct)







// function showProduct(name){
//   console.log(`Order Confirmed: ${name}`)
// }

// function processProduct(callback){
//   console.log("Processing Order...")
//   setTimeout(() => {
//     callback("Laptop")
//   }, 2000);
// }
// processProduct(showProduct)






// function recievedAmount(amount){
//   console.log(`Payment Successful: ${amount}`)
// }

// function processPayment(callback){
//   console.log(`Processing Payment...`)
//   setTimeout(() => {
//     callback(2500)
//   }, 3000);
// }
// processPayment(recievedAmount)







// function recieveUsername(name){
//   console.log(`login Succesful: ${name}`)
// }

// function checkLogin(callback){
//   console.log(`Checking Login...`)
//   setTimeout(() => {
//     callback("Akhtar")
//   }, 2000);
// }
// checkLogin(recieveUsername)







// function fileUploaded(name){
//   console.log(`Upload Complete: ${name}`)
// }

// function procesFile(callback){
//   console.log(`Uploading File...`)
//   setTimeout(() => {
//     callback("resume.pdf")
//   }, 4000);
// }
// procesFile(fileUploaded)







// function receiveUserData(name,age){
//   console.log(`User Loaded: ${name} - Age: ${age}`)
// }

// function loadedUserData(callback){
//   console.log(`Loading User...`)
//   setTimeout(() => {
//     callback("Akhtar",19)
//   }, 2000);
// }
// loadedUserData(receiveUserData)








// function receivePayment(amount,status){
//   console.log(`Payment Status: ${amount} - ${status}`)
// }

// function verifyingPayment(callback){
//   console.log(`Verifying Payment...`)
//   setTimeout(() => {
//     callback(2500,"Success")
//   }, 3000);
// }
// verifyingPayment(receivePayment)








// function shoeDelivery(product,status){
// console.log(`Delivery Update: ${product} - ${status}`)
// }
// function checkOrderStatus(callback){
//   console.log(`Checking Order Status...`)
//   setTimeout(() => {
//     callback("Laptop","shipped")
//   }, 2000);
// }
// checkOrderStatus(shoeDelivery)





// function showResult(product,stock){
//   if(stock>0){
//     console.log(`${product} is available. Order Confirmed!`)
//   }
//   else{
//     console.log(`${product} is Out of Stock`)
//   }
// }
// function processOrder(callback){
//   console.log(`Checking Product...`)
//   setTimeout(() => {
//     callback("Laptop",3)
//   }, 2000);
// }
// processOrder(showResult)







// function showPayment(amount,status){
//  console.log(`Payment of ${amount} ${status}`)
// }
// function processPayment(callback){
//   console.log(`Verifying Payment...`)
//   let rand = Math.random()
//   let status 
//   if(rand>0.2){
//     status = "Successful"
//   }
//   else{
//     status = "Failed"
//   }
//   setTimeout(() => {
//     callback(5000,status)
//   }, 2000);
// }
// processPayment(showPayment)








// function loadScript(src,callback){
//   let script = document.createElement("script")
//   script.src = src
//   script.onload = ()=>{
//     callback(src)
//   }
//   document.head.append(script)
// }
// function loaded(name){
//   console.log(`Script Loaded Successfully! ${name}`)
// }

// loadScript("extra.js",loaded)







// function loadScript(src,callback){
//   let script = document.createElement("script")
//   script.src = src
//   script.onload = ()=>{
//     callback(src)
//   }
//   document.head.append(script)
// }

// function showStatus(name){
//   document.getElementById("status").innerHTML = `${name} loaded successfully!`
// }
// loadScript("extra.js",showStatus)







// function loadScript(src,callback){
//   let script = document.createElement("script")
//   script.src = src
//   script.onload = ()=>{
//     callback(src)
//   }
//   document.head.append(script)
// }

// function showName(name){
//   document.getElementById("title").innerHTML = `Theme Ready`
//   document.getElementById("status").innerHTML = `${name} load successfully!`
//   document.getElementById("status").style.backgroundColor = "lightgreen"
// }
// loadScript("theme.js",showName)







// function loadScript(src,callback){
//   let script = document.createElement("script")
//   script.src = src
//   script.onload = ()=>{
//     callback(src)
//   }
//   document.head.append(script)
// }

// function showAppStatus(name){
//   document.getElementById("heading").innerHTML = `App Ready`
//   document.getElementById("message").innerHTML = `${name} is ready`
//   document.getElementById("message").style.color = "green"
// }
// loadScript("app.js",showAppStatus)







// function loadScript(src,callback){
//   let script = document.createElement("script")
//   script.src = src
//   script.onload = ()=>{
//     callback(src)
//   }
//   document.head.append(script)
// }

// function showStatus(name){
//   document.getElementById("status").insertAdjacentHTML("beforeend", `${name} loaded successfully<br>`)
// }
// loadScript("navbar.js",showStatus)
// loadScript("footer.js",showStatus)







// function loadScript(src,callback){
//   let script = document.createElement("script")
//   script.src = src
//   script.onload = ()=>{
//     callback(src)
//   }
//   document.head.append(script)
// }
// function checkStatus(name){
//   document.getElementById("title").innerHTML = `Checkout Ready`
//   document.getElementById("status").innerHTML = `${name} loaded successfully`
//   document.getElementById("status").style.backgroundColor = "green"
//   document.getElementById("status").style.Color = "lightgray"
// }
// loadScript("checkout.js",checkStatus)








// function loadScript(src, callback) {
//   let script = document.createElement("script")
//   script.src = src
//   script.onload = () => {
//     callback(src)
//   }
//   document.head.append(script)
// }
// let count = 0
// function updateStatus(name) {
//   if (name == "analytics.js") {
//     document.getElementById("analyticsStatus").innerHTML = `Analytics: Ready`
//   }
//   else {
//     document.getElementById("ordersStatus").innerHTML = `Orders: Ready`
//   }
//   count = count + 1
//   if (count == 2) {
//     document.getElementById("heading").innerHTML = "Admin Panel Ready"
//     document.getElementById("heading").style.backgroundColor = "lightgreen"
//   }
// }

// loadScript("analytics.js",updateStatus)
// loadScript("orders.js",updateStatus)








