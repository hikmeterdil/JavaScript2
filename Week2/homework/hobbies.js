'use strict';

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

const ul = document.createElement('ul');

document.querySelector('body').appendChild(ul);

myHobbies.map(hobby => {
  const li = document.createElement('li');
  li.textContent = hobby;
  ul.appendChild(li);
});
