function showMessage(name){
  console.log(`how are you ${name}`)
}

function processUser(akhtar){
  akhtar("Akhtar Raza")
}

processUser(showMessage)





function cehckResult(mark){
  if(mark>=40){
    return "Pass"
  }
  else{
    return "Fail"
  }
}

function processMarks(callbak){
  let result =  callbak(72)
  console.log(result)
}

processMarks(cehckResult)





function calculatePrice(price){
  return price+(price*10/100)
}

function processPrice(callback){
  let result = callback(5000)
  console.log(result)
}

processPrice(calculatePrice)






function showSuccess(msg){
  console.log(`order successful : ${msg}`)
}

function processOrder(callback){
  callback("laptop")
}

processOrder(showSuccess)






function applyDiscount(price){
  return price - (price * 20/100)
}

function processPayment(callback){
  let result = callback(5000)
  console.log(result)
}
processPayment(applyDiscount)