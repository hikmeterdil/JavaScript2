'use strict';
const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];
  
  function sumReduce(arr, fn, cb) {
    return cb(fn(arr));
  }
  
  function sumArr(arr, sum = 0) {
    arr.map(el => (sum += el.age));
    return sum;
  }
  
  const sum = sumReduce(hackYourFutureMembers, sumArr, result => result);
  
  console.log(sum); 