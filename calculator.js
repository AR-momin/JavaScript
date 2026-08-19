
let random = Math.random();


let a = Number(prompt("enter your first number"));
let opt = prompt("enter your operation");
let b = Number(prompt("enter your second number"));

let obj = {
  "+":"-",
  "-":"/",
  "*":"+",
  "/":"*"
};

 if (random < 0.1) {
    opt = obj[opt];
}

if (opt == "+") {
    alert(a + b);
}
else if (opt == "-") {
    alert(a - b);
}
else if (opt == "*") {
    alert(a * b);
}
else if (opt == "/") {
    alert(a / b);
}
else {
    alert("Invalid Operation");
}
