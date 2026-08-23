// exercise 1
// let fruits =["apple","banana","mango","kiwi","watermelon"]
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[4]);



// exercise 2
// let a = [10,20,30,40,50];
// a[1]=25;
// a[3]=45;
// console.log(a);



// exercise 3
// let std = ["vishal","angad","Rahul","rohini","raju"];
// console.log(std[0]);
// console.log(std[2]);
// console.log(std[4]);



// exercise 4
// let subs = ["HTML", "CSS", "JavaScript", "Python", "C++"];
// subs[2]="JavaScript Basics";
// subs[3]="Python Basics";
// console.log(subs)



// exercise 5
// let num = [10,20,30,40,50];
// num[0]=num[0]+10;
// num[1]=num[1]+20;
// num[2]=num[2]+30;
// num[3]=num[3]+40;
// num[4]=num[4]+50;
// console.log(num)




// exercise 6
// let movie  = ["3 Idiots","Interstellar","Inception","Dangal","War"];
// let r = Math.random();

// if(r < 0.20){
//   console.log(movie[0])
// }
// else if (r<0.40 && r>=0.20){
//   console.log(movie[1]);
// }
// else if(r < 0.60 && r>=0.40){
//   console.log(movie[2]);
// }
// else if(r<0.80 && r>=0.60){
//   console.log(movie[3]);
// }
// else{
//   console.log(movie[4]);
// }




// exercise 7
// let mark=[34,76,84,32,59,93,45,67];
// console.log(mark);

// let b = mark[0];

// if(b<mark[1]){
//   b=mark[1];
// }
//  if(b<mark[2]){
//   b=mark[2];
// }
//  if(b<mark[3]){
//   b=mark[3];
// }
//  if(b<mark[4]){
//   b=mark[4];
// }
//  if(b<mark[5]){
//   b=mark[5];
// }
//  if(b<mark[6]){
//   b=mark[6];
// }
// if(b<mark[7]){
//   b=mark[7];
// }

// console.log("your biggest number in the array is:",b);

// let s = mark[0];
// if(s>mark[1]){
//   s=mark[1];
// }
// if(s>mark[2]){
//   s=mark[2];
// }
// if(s>mark[3]){
//   s=mark[3];
// }
// if(s>mark[4]){
//   s=mark[4];
// }
// if(s>mark[5]){
//   s=mark[5];
// }
// if(s>mark[6]){
//   s=mark[6];
// }
// if(s>mark[7]){
//   s=mark[7];
// }

// console.log("your smallest number in the array is:",s);

// if(mark[0]>=40){
//   console.log("PASS");
// }
// else {
//   console.log("FAIL");
// }

// if(mark[1]>=40){
//   console.log("PASS");
// }
// else {
//   console.log("FAIL");
// }

// if(mark[2]>=40){
//   console.log("PASS");
// }
// else {
//   console.log("FAIL");
// }

// if(mark[3]>=40){
//   console.log("PASS");
// }
// else {
//   console.log("FAIL");
// }

// if(mark[4]>=40){
//   console.log("PASS");
// }
// else {
//   console.log("FAIL");
// }

// if(mark[5]>=40){
//   console.log("PASS");
// }
// else {
//   console.log("FAIL");
// }

// if(mark[6]>=40){
//   console.log("PASS");
// }
// else {
//   console.log("FAIL");
// }

// if(mark[7]>=40){
//   console.log("PASS");
// }
// else {
//   console.log("FAIL");
// }




// // exercise 8
// let prices = [500, 1200, 800, 1500, 700];
// console.log(prices)
// let total;
// total = prices[0]+prices[1]+prices[2]+prices[3]+prices[4]
// console.log("total price of the whole array is:",total)

// let FinalPrice;
// if(total>5000){
//   FinalPrice = (total-(total*10/100));
// }
// else{
//   FinalPrice = (total-(total*5/100));
// }
//  console.log("Final price of your product after discount is:",FinalPrice);




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
let name = ["akhtar","fazal","zaid","umar","tihami"];
let mark = [94,33,76,69,97];
let rand = Math.random();
let index;

if(rand < 0.20){
 index=0;
}
else if (rand >= 0.20 && rand < 0.40){
 index=1;
}
else if(rand>=0.40 && rand <0.60){
  index=2;
}
else if(rand >=0.60 && rand <0.80){
  index=3;
}
else{
  index=4;
}

let student = {
    name:name[index],
    mark:mark[index],
    course:"BCA"
  };

  function grade (m){
    if(m>=90){
      return "Grade A";
    }
    else if(m>=75 && m<=89){
      return "Grade B";
    }
    else if(m>=60 && m<=74){
      return "Grade C";
    }
    else if(m>=40 && m<=59){
      return "Grade D"
    }
    else{
      return "FAIL";
    }
  }

  let result = grade(student.mark)
  console.log(student);
  console.log(result);