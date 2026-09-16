// let name = prompt("Enter Your Name")
// let marks = Number(prompt("Enter Your Marks"))

// function getGrade(mark){
//   if(mark>=80){
//     return "A"
//   }
//   else if(mark>=60){
//     return "B"
//   }
//   else if(mark>=40){
//     return "C"
//   }
//   else{
//     return "Fail"
//   }
// }

// let result = getGrade(marks)
// alert(`${name} scored ${marks} marks and got grade ${result}`)







// let student = {
//   name: "Akhtar",
//   age: 19,
//   course: "BCA",
//   marks: 91
// }
// console.log(student)

// for (const key in student) {
//   const element = student[key];
//   console.log(key,":",element)
// }


// for (const character of student.name) {
//   console.log(character)
// }





// for (let i = 1; i <= 10; i++) {
//   console.log(i)
// }
// let n = 10
// while (n>0) {
//   console.log(n)
//   n--;
// }

// let sum = 0
// for (let i = 0; i <= 10; i++) {
//   sum = sum + i 
// }
// console.log(sum)







function checkResult(name,mark){
  if(mark>=40){
    return `${name} : Pass`
  }
  else{
    return `${name} : Fail`
  }
}

let result = checkResult("Akhtar",94)
console.log(result)