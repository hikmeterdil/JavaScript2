'use strict';

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

function filteredBasket(val) {
  const newBasket = val.filter(fruit => {
    return fruit !== 'Lemon';
  });

  return console.log('My mom bought me a fruit basket, containing ' + newBasket);
}
filteredBasket(fruitBasket);
