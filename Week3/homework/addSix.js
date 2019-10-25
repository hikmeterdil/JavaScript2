'use strict';

const createBase = number => {
  const example = something => {
      return number + something;
  };

  return example;
};

const addFive = createBase(5);

console.log(addFive(10));
console.log(addFive(19));
console.log(addFive(31));
