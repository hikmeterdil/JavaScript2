/*There is an extra paranthesis in line 8 this means this function is Immediately Invoked Function Expression. THese functions stores return values to variables to our variable. A is now 12 and in browser it will alert as "12". */
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

 