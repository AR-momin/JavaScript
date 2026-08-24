// exercise 9
// let i;

// let even=0;
// let odd=0;
// let num = Number(prompt("Enter your Number"));
// for (i = 1; i <= num; i++) {
//     console.log(i)
//   if(i % 2 == 0){
//   console.log("even");
//   even=even+1;
// }
// else{
//   console.log("odd")
//   odd=odd+1;
// }
// }

// let sum=0;
// for (let i = 1; i <= num; i++) {
//   sum = sum + i;
// }
//   console.log("sum of the above number is:",sum);
//   console.log("even number:",even);
//   console.log("odd number:",odd);




// // exercise 9.2
// let num = Number(prompt("Enter your number"));
// let divby3 = 0;
// let sumeven = 0;
// for (let i = 1; i <= num; i++) {
//   console.log(i);

//   if (i % 3 == 0) {
//     console.log("divisible by 3");
//     divby3 = divby3+1;
//   }
//   else{
//     console.log("not divisible by 3");
//   }

//   if(i % 2 == 0){
//     console.log("Even number");
//     sumeven = sumeven +  i;
//   }
// }

// console.log("divisible by 3 count is",divby3);
// console.log("sum of the even numbers are :",sumeven);





// // exercise 9.3
// let num = Number(prompt("Enter your number"));
// let oddsum = 0;
// let divby5 = 0;
// for (let i = 1; i <= num; i++) {
//   console.log(i);

//   if (i % 5 == 0) {
//     console.log("Divisible by 5");
//     divby5 = divby5 + 1;
//   }

//   if (i % 2 != 0) {
//     oddsum = oddsum + i;
//   }

// }

// console.log("count of the numbers which is divisible by 5 is:", divby5);
// console.log("Sum of the odd numbers is", oddsum);





// exercise 10
// let name = ["akhtar","fazal","zaid","umar","tihami"];
// let mark = [94,33,76,69,97];
// let rand = Math.random();
// let index,i;

// if(rand < 0.20){
//  index=0;
// }
// else if (rand >= 0.20 && rand < 0.40){
//  index=1;
// }
// else if(rand>=0.40 && rand <0.60){
//   index=2;
// }
// else if(rand >=0.60 && rand <0.80){
//   index=3;
// }
// else{
//   index=4;
// }

// let student = {
//     name:name[index],
//     mark:mark[index],
//     course:"BCA"
//   };

//   function grade (m){
//     if(m>=90){
//       return "Grade A";
//     }
//     else if(m>=75 && m<=89){
//       return "Grade B";
//     }
//     else if(m>=60 && m<=74){
//       return "Grade C";
//     }
//     else if(m>=40 && m<=59){
//       return "Grade D"
//     }
//     else{
//       return "FAIL";
//     }
//   }

//   let result = grade(student.mark)
//   console.log(student);
//   console.log(result);

//   console.log("student:",student.name)
//   console.log("mark:",student.mark)
//   console.log("course:",student.course)
//   console.log("grade:",result)

//   console.log((student.name).toUpperCase())
//   console.log((student.name).length)
//   console.log((student.name).slice(0,3))


//   let rand2 = Math.random();
//   if(rand2<=0.1){
//     console.log("Congratulations! You are the Lucky Student")
//   }
//   else{
//     console.log("Better luck next time")
//   }

//   for (i = 1; i <= 5; i++) {
//     console.log(i);    
//   }
//   console.log("total students",name.length)





// exercise 11
let names = ["Laptop", "Headphones", "Keyboard", "Mouse", "Monitor"];
let prices = [55000, 2500, 1800, 900, 12000];
let index;

let rand = Math.random();

if (rand < 0.20) {
  index = 0;
}
else if (rand < 0.40) {
  index = 1;
}
else if (rand < 0.6) {
  index = 2;
}
else if (rand < 0.80) {
  index = 3;
}
else {
  index = 4;
}


let obj = {
  name: names[index],
  price: prices[index],
  category: "electronics"
};


function type(t) {
  if (t >= 20000) {
    return "premium";
  }
  else if (t >= 5000) {
    return "expensive";
  }
  else if (t >= 1000) {
    return "mid Range";
  }
  else {
    return "budget";
  }
}

let result = type(obj.price)
console.log("name:", obj.name)
console.log("price:", obj.price)
console.log("category:", obj.category)
console.log("type:", result)
console.log((obj.name).toUpperCase());
console.log((obj.name).slice(0, 3));


let finalPrice;

if (obj.price >= 20000) {
  finalPrice = obj.price - (obj.price * 20 / 100)
  console.log("Final Price =", finalPrice)
}
else if (obj.price >= 5000) {
  finalPrice = obj.price - (obj.price * 10 / 100)
  console.log("Final Price =", finalPrice)
}
else if (obj.price >= 1000) {
  finalPrice = obj.price - (obj.price * 5 / 100)
  console.log("Final Price =", finalPrice)
}
else {
  finalPrice = obj.price - (obj.price * 2 / 100)
  console.log("Final Price =", finalPrice)
}


let rand2 = Math.random();
if (rand2 < 0.2) {
  finalPrice = finalPrice - 100
  console.log("congratulations! you got extra 100/- off, your final price is:", finalPrice);
}
else {
  console.log("sorry you got no extra discount")
}


for (let i = 1; i <= 5; i++) {
  console.log(i)
}
console.log("total products:", names.length)