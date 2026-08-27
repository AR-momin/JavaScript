let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"];
let prices = [55000, 800, 2500, 18000, 4200];
let ratings = [4.7, 3.8, 4.2, 4.6, 3.5];
let countBelow5000 = 0;
let sumAbove10000 = 0;
let highestPrice = prices[0];

function checkProduct(price,rating){
  if(price>=20000 && rating >=4.5){
    return "Premium product";
  }
  else if(price>=5000 && rating>=4){
    return "Good product";
  }
  else if(rating<4){
    return "Average product";
  }
  else{
    return "Regular product";
  }
}

for (let i = 0; i < products.length; i++) {

  if(prices[i]<5000){
    countBelow5000=countBelow5000+1
  }

  if(prices[i]>=10000){
    sumAbove10000=sumAbove10000+prices[i];
  }

  if(prices[i]>highestPrice){
    highestPrice=prices[i];
  }

  let result = checkProduct(prices[i],ratings[i])
  console.log("name:",products[i],"Price:",prices[i],"rating:",ratings[i],"type:",result)
}

let store = {
  name: "Tech Store",
  totalProducts: products.length
};


console.log("product below 5000:",countBelow5000)
console.log("total price of 10000+ products:",sumAbove10000)
console.log("highest price:",highestPrice)
console.log("store name:",store.name)
console.log("total products:",store.totalProducts)