//the value of x doesn't change because it's passed by value

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);


//on the other hand we pass 'x' by a reference. When you pass a reference value to a function, you are passing the reference to the object, not the object. Therefore, the function can modify the properties of the object.
//console will log the new value 10
const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
