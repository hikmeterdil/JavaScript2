'use strict';

function threeFive(startIndex, stopIndex, callThree, callFive) {
  const numbers = [];

  for (let i = startIndex; i < stopIndex + 1; ++i) {
    numbers.push(i);
  }

  numbers.forEach(function(element) {
    if (element % 3 === 0) {
      callThree();
    } else if (element % 5 === 0) {
      callFive();
    } else if (element % 5 === 0 && element % 3 === 0) {
      callFive();
      callThree();
    } else {
      console.log(element);
    }
  });
}
function sayThree() {
  console.log('This numver is divisable by 3');
}
function sayFive() {
  console.log('This numver is divisable by 5');
}

threeFive(10, 25, sayThree, sayFive);
