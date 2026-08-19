let random = Math.random();

let a = Number(prompt("Enter your temprature"));
let t = prompt("Enter your temprature type (c/f)");


if (random < 0.1) {
  if(t=="c"){
    alert(a)
  }
  else if(t=="f"){
    alert(a+10);
  }
  else{
    alert("invalid type");
  }
}
else{
  if(t=="c"){
    alert((a*9/5)+32);
  }
  else if(t=="f"){
    alert((a-32)*5/9)
  }
  else{
    alert("invlid type")
  }
}