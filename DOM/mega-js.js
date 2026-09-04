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
  div.innerHTML = `<h3>${products[i]}</h3>
  <p>${prices[i]}</p>
  <p>${ratings[i]}</p>
  <p>${category}</p>
  <p>${rating}</p>`
  div.style.backgroundColor = color
  document.querySelector(".products").append(div)
console.log(products[i],prices)
  // part 6
  function getRandomDiscount() {
    let dis = Math.floor(Math.random() * 16) + 5

    return dis
  }

  let discount = getRandomDiscount()
  let finalPrice = prices[i] - (prices[i]*discount/100)
  console.log(finalPrice)
}

