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







function recieveUsername(name){
  console.log(`login Succesful: ${name}`)
}

function checkLogin(callback){
  console.log(`Checking Login...`)
  setTimeout(() => {
    callback("Akhtar")
  }, 2000);
}
checkLogin(recieveUsername)