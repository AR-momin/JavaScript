let rand = Math.random();

let first;
let second;
let third;

if(rand<0.33){
  first = "Tech";
}
else if(rand>=0.33 && rand<0.66){
  first= "Code";
}
else{
  first = "Digital";
  }
  
let rand1 = Math.random();
if(rand1<0.33){
  second = "Master";
}
else if(rand1>=0.33 && rand1<0.66){
  second= "World";
}
else{
  second = "Zone";
}

let rand2 = Math.random();
if(rand2<0.33){
  third = "Hub";
}
else if(rand2>=0.33 && rand2<0.66){
  third= "Point";
}
else{
  third = "Studio";
}

console.log(`${first} ${second} ${third}`);