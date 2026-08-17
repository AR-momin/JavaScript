// exercise 1
// let a = 1;

// for (let i = 0; i < 10; i++) {
//   console.log(a+i);

// }



// exercise 2
// let a = 10;
// while (a > 0) {
//   console.log(a)
//   a--;
// }



// exercise 3
// let me = {
//   name:"Akhtar",
//   age:19,
//   course:"BCA"
// };

// for (const key in me) {
//   const element = me[key];
//   console.log(element,key);

// }



// exercise 4
// let me = "Akhtar";

// for (const element of me) {
//   console.log(element);
// }



// exercise 5

let student = {
  name: "Akhtar Raza",
  age: 19,
  course: "BCA",
  marks: 91
};

for (const key in student) {
  const element = student[key];
  console.log(key, element)
}

if (student.marks >= 40) {
  console.log("You Are PASS");
}
else {
  console.log("You Are FAIL");
}

if (student.marks > 90) {
  console.log("Grade A");
}
else if (student.marks >= 75 && student.marks <= 89) {
  console.log("Grade B");
}
else if (student.marks >= 60 && student.marks <= 74) {
  console.log("Grade C");
}
else if (student.marks < 60) {
  console.log("Grade D");
}

let a = 1;
for (let i = 0; i <= 10; i++) {
  console.log(i)
}

let b=10;
while (b>0) {
  console.log(b)
  b--;
}

for (const element of student.name) {
  console.log(element)
}
