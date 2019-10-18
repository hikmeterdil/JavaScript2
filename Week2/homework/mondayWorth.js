'use strict';

const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30,
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

function calculateEarnings(value) {
  //returns a number array of duration values.
  const dura = value.map(arr => {
    const blea = arr.duration;
    return blea;
  });
  console.log(dura);

  const result = dura.reduce(function(sum, item) {
    //sums up that array of numbers
    return (sum = sum + item);
  }, 0);

  console.log(result);
  //calculates the money
  const money = (result / 60) * 25;

  console.log('€' + money);
}

calculateEarnings(mondayTasks);
