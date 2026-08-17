// function greet(name){
//   console.log("hello " + name + " how are you")
// }

// greet("AKhtar")



// function add(x, y) {
//   return x + y;
// }

// sum=add(6,3)
// sum1=add(18,3)
// sum2=add(6,9)
// sum3=add(5,2)
// console.log("the sum of the above number is:",sum);
// console.log("the sum of the above number is:",sum1);
// console.log("the sum of the above number is:",sum2);
// console.log("the sum of the above number is:",sum3);



// function checkNum(s){
//   if(s>0){
//     console.log("positive");
//   }
//   else if(s<0){
//     console.log("negative");
//   }
//   else{
//     console.log("zero");
//   }
//   return s;
// }

// checkNum(9);
// checkNum(-19);
// checkNum(0);




// function calc(b,c,opt){
//   if(opt == "+"){
//     return b+c;
//   }
//   else if(opt == "-"){
//     return b-c;
//   }
//   else if(opt == "/"){
//     return b/c;
//   }
//   else if(opt == "*"){
//     return b*c;
//   }
//   else{
//     return "invalid operation";
//   }

// }

// let sum = calc(10,5,"+");
// console.log("the additon of the above number is: ",sum);

// let sub = calc(10,5,"-");
// console.log("the substraction of the above number is: ",sub);

// let div = calc(10,5,"/");
// console.log("the division of the above number is: ",div);

// let mult = calc(10,5,"*");
// console.log("the multiplication of the above number is: ",mult);




// function vote(age){
//   if(age>=18){
//     return "Eligible";
//   }
//   else{
//     return "not-Eligible";
//   }
// }

// console.log(vote(17));
// console.log(vote(35));
// console.log(vote(18));



// function big(a,b){
//   if(a>b){
//     return a;
//   }
//   else if(b>a){
//     return b;
//   }
//   else{
//     return "equal";
//   }
// }

// console.log(big(2,7));
// console.log(big(9,7));
// console.log(big(2,2));



// function grade(num) {
//   if (num >= 90) {
//     return "Grade A";
//   }
//   else if (num >= 75 && num < 89) {
//     return "Grade B";
//   }
//   else if (num >= 60 && num <= 74) {
//     return "Grade C";
//   }
//   else if (num >= 40 && num <= 59){
//     return "Grade D";
//   }
//   else{
//     return "FAIL";
//   }
// }

// console.log(grade(93));
// console.log(grade(79));
// console.log(grade(54));
// console.log(grade(32));
// console.log(grade(69));



// function tempStatus(temp){
//   if(temp>=60 ){
//     return "hot";
//   }
//   else if(temp>=40 && temp <=59){
//     return "Normal";
//   }
//   else{
//     return "low";
//   }
// }

// console.log(tempStatus(110));
// console.log(tempStatus(15));
// console.log(tempStatus(65));
// console.log(tempStatus(47));



function result(name, marks) {
  if (marks >= 90) {
    return name + " : " + "A";
  }
  else if (marks >= 75 && marks <= 89) {
    return name + " : " + "B";
  }
  else if (marks >= 60 && marks <= 74) {
    return name + " : " + "C";
  }
  else if (marks >= 40 && marks <= 59) {
    return name + " : " + "D";
  }
  else {
    return name + " : " + "FAIL";
  }
}

console.log(result("AKhtar", 93));
console.log(result("Kaif", 64));
console.log(result("Ab Rehman", 56));
console.log(result("Naufil", 43));
console.log(result("Arman", 19));
console.log(result("Anaab", 38));