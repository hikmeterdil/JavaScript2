'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

 function makeUnique  (arr) {
	return arr.filter(function(item, index){
		return arr.indexOf(item) >= index;
	});
};

const uniqueValues = makeUnique(values);
console.log(uniqueValues);


