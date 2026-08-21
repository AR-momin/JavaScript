let a;
let b;
let c;
let d = 2026;

let r1 = Math.random();

if (r1 < 0.33) {
  a = "Nova";
}
else if (r1 >= 0.33 && r1 < 0.66) {
  a = "Alpha";
}
else {
  a = "Pixel";
}

let r2 = Math.random();
if (r2 < 0.33) {
  b = "Labs";
}
else if (r2 >= 0.33 && r2 < 0.66) {
  b = "Solutions";
}
else {
  b = "Systems";
}

let r3 = Math.random();
if (r3 < 0.33) {
  c = "Build the future";
}
else if (r3 >= 0.33 && r3 < 0.66) {
  c = "Think beyond";
}
else {
  c = "Power your ideas";
}

let r4 = Math.random();
if (r4 < 0.5) {
  console.log(`${a} ${b} ${d}`);
}
else {
  console.log(`${a} ${b}`);
}

console.log(`"${c}"`);