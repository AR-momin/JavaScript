// let div = document.createElement("div")
// div.innerHTML = "I am a new box"
// div.setAttribute("class","newBox")
// document.querySelector(".container").before(div)




// let div = document.createElement("div")
// div.innerHTML = "Start Inside"
// document.querySelector(".container").prepend(div)

// let div1 = document.createElement("div")
// div1.innerHTML = "End Inside"
// document.querySelector(".container").append(div1)

// let div2 = document.createElement("div")
// div2.innerHTML = "Before Continer"
// document.querySelector(".container").before(div2)

// let div3 = document.createElement("div")
// div3.innerHTML = "After Continer"
// document.querySelector(".container").after(div3)



// let container = document.querySelector(".container")

// container.insertAdjacentHTML("beforebegin","<p>Before Container</p>")
// container.insertAdjacentHTML("afterbegin","<p>Start Inside</p>")
// container.insertAdjacentHTML("beforeend","<p>End Inside</p>")
// container.insertAdjacentHTML("afterend","<p>After Container</p>")




let remove = document.querySelector(".removeMe")
console.log(remove)
remove.remove()
let remaining = document.querySelector(".container").children
console.log(remaining)