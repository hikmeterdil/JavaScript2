'use strict';

function doubleEvenNumbers(numbers) {
  const evenNum = numbers.filter(number => {
    if (number % 2 === 0) return number;
  });

  const doubleEven = evenNum.map(numero => {
    return numero * 2;
  });

  return doubleEven;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(myNumbers));
