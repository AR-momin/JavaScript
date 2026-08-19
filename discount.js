let random = Math.random();

let a = Number(prompt("Enter your product price"));
let dis = Number(prompt("Enter your product discount"));

if (random < 0.1) {
  if (dis >= 20) {
    dis=dis-5;
    alert(a-(a*dis/100));
  }
  else{
    dis=dis+5
    alert(a-(a*dis/100));
  }
}
else{
  alert(a-(a*dis/100));
}
