// part 1
document.querySelector(".heading").innerHTML = "TechZone Store Dashboard"

let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones", "Webcam"]
let prices = [55000, 1200, 3500, 18000, 4200, 3000]
let ratings = [4.7, 3.8, 4.2, 4.6, 3.6, 4.1]


// part 2
products.unshift("Demo Product")
prices.unshift(0)
ratings.unshift(0)

products.shift()
prices.shift()
ratings.shift()

products.push("Smartwatch")
prices.push(6500)
ratings.push(4.3)

prices[1] = 1500

products.splice(2, 1, "Mechanical Keyboard")

console.log(products.length)
console.log(products[0])
console.log(products[products.length - 1])
console.log(products.toString())
console.log(products.join(" | "))
console.log(products.slice(2, 5))


// part 3
for (let i = 0; i < products.length; i++) {
  console.log("Product:", products[i], "Price:", prices[i], "Rating:", ratings[i])
}


// part 4
function checkCategory(price) {
  if (price >= 20000) {
    return "Premium"
  }
  else if (price >= 5000) {
    return "Mid Range"
  }
  else {
    return "Budget"
  }
}

function checkRating(rating) {
  if (rating >= 4.5) {
    return "Excellent"
  }
  else if (rating >= 4) {
    return "Good"
  }
  else {
    return "Average"
  }
}

function getRandomColor() {
  let v1 = Math.ceil(Math.random() * 255)
  let v2 = Math.ceil(Math.random() * 255)
  let v3 = Math.ceil(Math.random() * 255)
  return `rgb(${v1},${v2},${v3})`
}

for (let i = 0; i < products.length; i++) {
  let category = checkCategory(prices[i])
  let rating = checkRating(ratings[i])
  let color = getRandomColor()

  console.log(products[i], category, rating, color)

  // part 5
  let div = document.createElement("div")
  div.innerHTML = `
  <h3>${products[i]}</h3>
  <p>Price: ₹${prices[i]}</p>
  <p>Rating: ${ratings[i]}</p>
  <p>Category: ${category}</p>
  <p>Review: ${rating}</p>
`;
  div.style.backgroundColor = color
  document.querySelector(".products").append(div)
  console.log(products[i], prices[i], ratings[i])

  let discount = getRandomDiscount()
  let finalPrice = prices[i] - (prices[i] * discount / 100)
  div.insertAdjacentHTML(
    "beforeend",
    `<p>Discount: ${discount}%</p>
   <p>Final Price: ${finalPrice}</p>`
  );

}

function getRandomDiscount() {
  let dis = Math.floor(Math.random() * 16) + 5

  return dis
}




let increasedPrices = prices.map(e => {
  return e + (e * 10 / 100)
})
console.log("original prices:", prices)
console.log("increased prices:", increasedPrices)




let greaterThan10000 = increasedPrices.filter(e => {
  return e >= 10000
})
console.log("Increased Prices More Than 10000:", greaterThan10000)



let sumOfGreaterThan10000 = greaterThan10000.reduce((a, b) => {
  return a + b
})
console.log("Total of 10000+ Prices:", sumOfGreaterThan10000)



let lessThan5000 = 0
let rating4Plus = 0
let totalPrices = 0
let highestPrice = prices[0]
let lowestPrice = prices[0]
for (let i = 0; i < products.length; i++) {
  if (prices[i] < 5000) {
    lessThan5000 = lessThan5000 + 1
  }

  if (ratings[i] > 4) {
    rating4Plus = rating4Plus + 1
  }

  totalPrices = totalPrices + prices[i]

  if (prices[i] > highestPrice) {
    highestPrice = prices[i]
  }

  if (prices[i] < lowestPrice) {
    lowestPrice = prices[i]
  }
}

console.log("less than 5000 products:", lessThan5000)
console.log("greater than 4 ratings:", rating4Plus)
console.log("Total price of original array:", totalPrices)
console.log("highest price in the original array", highestPrice)
console.log("lowest price in the original array", lowestPrice)




prices.forEach((price, index) => {
  console.log(index, price)
});




for (const element of products) {
  console.log(element)
}



let store = {
  name:"TechZone",
  totalProducts:products.length,
  owner:"Admin",
  totalValue:totalPrices
}

console.log(store)






console.log(store.name.toUpperCase())
console.log(store.name.toLowerCase())
console.log(store.name.length)
console.log(store.name.slice(0,4))
console.log(store.name.slice(store.name.length-3))




let div = document.createElement("div")
div.innerHTML = `
<p>Total Products:${products.length}</p>
<p>Budget Products:${lessThan5000}</p>
<p>4+ Rated Products:${rating4Plus}</p>
<p>Total Inventory Value:${totalPrices}</p>
<p>Highest Price:${highestPrice}</p>
<p>Lowest Price:${lowestPrice}</p>`

document.querySelector(".stats").append(div)



document.querySelector(".products").prepend("Featured Products")
document.querySelector(".products").append("End of Products")
document.querySelector(".products").before("Product Section Starts")
document.querySelector(".products").after("Product Section Ends")




let stats = document.querySelector(".stats")
stats.insertAdjacentHTML("afterbegin",
  "<p>Store Statistics</p>"
)
stats.insertAdjacentHTML("beforeend",
  "<p>Statistics Complete</p>"
)