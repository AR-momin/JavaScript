// let fruits = ["Apple", "Mango", "Banana", "Orange"];

// console.log(fruits[0])
// console.log(fruits[3])

// fruits[2]="Grapes"

// console.log(fruits.length)
// console.log(fruits)






// let items = ["Milk", "Bread", "Eggs"];

// items.push("Butter")
// console.log(items)

// items.unshift("Rice")
// console.log(items)

// items.pop()
// console.log(items)

// items.shift()
// console.log(items)




// let technologies = ["HTML", "CSS", "JavaScript"];
// console.log(technologies.toString())
// console.log(technologies.join(" - "))





// let numbers = [10, 20, 30, 40, 50, 60];
// numbers.splice(1,2,25,35,45)
// console.log(numbers)

// console.log(numbers.slice(1,4))






// let students = ["Aman", "Sara", "Rahul", "Zoya"];
// students.push("Kabir");
// students.unshift("Ali");
// console.log(students.length);
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i])
// }
// console.log(students.join(" | "))






// let cart = ["Mouse", "Keyboard", "Monitor", "Headphones"];
// cart.unshift("Laptop");
// cart.push("Webcam");
// cart.splice(2,2,"Mechanical Keyboard");
// console.log(cart.length)
// console.log(cart.slice(1,4))

// for (let i = 0; i < cart.length; i++) {
//   console.log(cart[i]);
// }

// console.log(cart.join(" -> "))






// let courses = ["HTML", "CSS", "JavaScript", "Bootstrap", "React"];
// courses.unshift("Git");
// courses.push("Node.js");
// courses.splice(4,1,"Tailwind CSS","GitHub")
// console.log(courses.length)
// console.log(courses.slice(2,5))

// for (let i = 0; i < courses.length; i++) {
//   console.log(courses[i])
// }

// console.log(courses.join(" => "))





let numbers = [12, 25, 8, 40, 17];

numbers.forEach((e,index) => {
  console.log(index,e)
});