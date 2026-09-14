let names = ["Aman", "Sara", "Rehan", "Zoya", "Arman"];
let marks = [78, 35, 91, 46, 62];

function checkResult(mark){
  if(mark>=40){
    return "Pass"
  }
  else{
    return "Fail"
  }
}

function checkPerformance(mark){
  if(mark>=80){
    return "Excellent"
  }
  else if(mark>=60){
    return "Good"
  }
  else if(mark>=40){
    return "Average"
  }
  else{
    return "Poor"
  }
}

function getRandomBackgroundColor(){
  let v1 = Math.ceil(Math.random()*255)
  let v2 = Math.ceil(Math.random()*255)
  let v3 = Math.ceil(Math.random()*255)
  return `rgb(${v1},${v2},${v3})`
}

function getRandomAttendance(){
  let a = Math.floor(Math.random()*41)+60
  return a;
}


for (let i = 0; i < names.length; i++) {
  let bgColor = getRandomBackgroundColor()
  let result = checkResult(marks[i])
  let performance = checkPerformance(marks[i])
  let Attendance = getRandomAttendance()

  let div = document.createElement("div")
  div.innerHTML = `Name: ${names[i]} <br>
  Marks: ${marks[i]} <br>
  Result: ${result} <br>
  Performance: ${performance} <br>
  Attendance: ${Attendance}%`

  div.style.backgroundColor = bgColor
  document.querySelector(".students").append(div)

  if(result == "Pass"){
    div.style.color = "green"
  }
  else{
    div.style.color = "red"
  }
}


let newMarks = marks.map(e=>{
 return  e+5
})
console.log(newMarks)


function marksGreaterThan40(m){
  if(m>=40){
    return true
  }
  else{
    return false
  }
}

let greater40 = marks.filter(marksGreaterThan40)
console.log(greater40)


let total = ((a,b)=>{
 return a+b
})

let sum = marks.reduce(total,0)
console.log(sum)




let passStd = 0
let failStd = 0
let highest = marks[0]
let lowest = marks[0]
for (let i = 0; i < marks.length; i++) {
  if(marks[i]>=40){
    passStd = passStd + 1
  }
  else{
    failStd = failStd + 1
  }

  if(marks[i]>highest){
    highest = marks[i]
  }
  
  if(marks[i]<lowest){
    lowest = marks[i]
  }
}
console.log("Passed Students:",passStd)
console.log("Failed Students:",failStd)
console.log("Highest Mark:",highest)
console.log("Lowest Mark:",lowest)