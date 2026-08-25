// let productPrice = 15000;
// function checkPrice(p){
//   if (p>10000){
//     return "Expensive";
//   }
//   else if(p>5000 && p<=9999){
//     return "medium";
//   }
//   else{
//     return "budget";
//   }
// }
// let price = checkPrice(productPrice);
// console.log("your prduct is :",price)




// let num = Number(prompt("Enter your number here"));
// let divBy4 = 0;
// let oddSum = 0;

// for (let i = 1; i <=num; i++) {
//   console.log(i)

//   if(i%4==0){
//     divBy4 = divBy4 + 1;
//   }

//   if(i%2 !=0){
//     oddSum = oddSum+i;
//   }
// }

// console.log("divisible by 4:",divBy4)
// console.log("sum of all odd numbers is:",oddSum)




// let num = [12, 25, 8, 41, 30, 17];
// let count20 = 0;
// let evenSum = 0;
// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);

//   if(num[i]>20){
//     count20 = count20 + 1;
//   }

//  if(num[i]%2 !=0){
//   evenSum = evenSum + num[i];
//  }
// }

// console.log("greater than 20:",count20)
// console.log("Sum of the even numbers in the array is:",evenSum)




// let marks = [34, 76, 84, 32, 59, 93, 45, 67];
// let count40 = 0;
// let sum60 = 0;
// let biggest = marks[0];
// for (let i = 0; i < marks.length; i++) {
//   console.log(marks[i]);

//   if(marks[i]<40){
//     count40 = count40 + 1
//   }

//   if(marks[i]>=60){
//     sum60 = sum60 + marks[i];
//   }

// if (marks[i]>biggest){
//   biggest = marks[i];
// }
// }

// console.log("Marks less than 40:",count40)
// console.log("sum of marks greater than 60 is:",sum60)
// console.log("biggest marks in the array is:",biggest)




// let nums = [18, 7, 24, 11, 30, 5, 42, 16];
// let count15 = 0
// let sum20 = 0
// let smallest = nums[0]
// let even = 0

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i])

//   if (nums[i] < 15) {
//     count15 = count15 + 1;
//   }

//   if (nums[i] >= 20) {
//     sum20 = sum20 + nums[i]
//   }

//   if (nums[i] < smallest) {
//     smallest = nums[i]
//   }

//   if (nums[i] % 2 == 0) {
//     even = even + 1
//   }

// }


// console.log("smaller than 15:",count15)
// console.log("sum of numbers greater or equal to 20 is:",sum20)
// console.log("smallest number of tha array:",smallest)
// console.log("even numbers count:",even)




// let prices = [1200, 8500, 450, 15000, 3200];

// function checkPrice(price){
//   if(price>=10000){
//     return "premium"
//   }
//   else if(price>=5000){
//     return "expensive"
//   }
//   else if(price>=1000){
//     return "medium"
//   }
//   else{
//     return "budget"
//   }
// }

// for (let i = 0; i < prices.length; i++) {
//   let result = checkPrice(prices[i])
//   console.log(prices[i],result)
// }




// let marks = [91, 45, 72, 33, 88, 59];

// function checkResult(mark){
//   if(mark>=75){
//     return "Distinction"
//   }
//   else if(mark>=60){
//     return "First class"
//   }
//   else if(mark>=40){
//     return "pass"
//   }
//   else{
//     return "fail"
//   }
// }

// for (let i = 0; i < marks.length; i++) {
//   let result = checkResult(marks[i])
//   console.log(marks[i],result)
// }




// let employee = {
//   name: "Aman",
//   salary: 42000,
//   department: "IT"
// };

// function checkLevel(salary){
//   if(salary>=50000){
//     return "High salary"
//   }
//   else if(salary>=30000){
//     return "Medium salary"
//   }
//   else{
//     return "low salary"
//   }
// }

// let result = checkLevel(employee.salary)
// console.log("name:",employee.name)
// console.log("salary:",employee.salary)
// console.log("department:",employee.department)
// console.log("result:",result)




// let student = {
//   name: "Rahul",
//   marks: 82,
//   attendance: 76,
//   course: "BCA"
// };

// function checkScholarship(marks,attendance){
//   if(marks>=85 && attendance>=75){
//     return "full scholarship"
//   }
//   else if(marks>=70 && attendance>=65){
//     return "partial scholarship"
//   }
//   else{
//     return "no scholarship"
//   }
// }

// let result = checkScholarship(student.marks,student.attendance)
// console.log("name:",student.name)
// console.log("marks:",student.marks)
// console.log("attendance:",student.attendance)
// console.log("course:",student.course)
// console.log("scholarship:",result)




let scores = [45, 82, 67, 29, 91, 54];
let lessThan40 = 0
let sum60 = 0

 function checkResult(score){
  if(score>=40){
    return "pass"
  }
  else{
    return "fail"
  }
}

for (let i = 0; i < scores.length; i++) {
  console.log(scores[i])

  if(scores[i]<40){
    lessThan40=lessThan40+1
  }

  if(scores[i]>=60){
    sum60=sum60+scores[i]
  }



  let result = checkResult(scores[i])
  console.log(result)
}


console.log("less than 40 scores:",lessThan40)
console.log("sum of greater or equal to 60:",sum60)
