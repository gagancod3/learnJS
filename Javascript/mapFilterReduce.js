//* map() -

/*

* Creates a new array by applying a function to every element of an existing array
* Original array is not modified.

const newArray = Array.map((element, index, array)=> {
    return the transformed element
});

*/

// element - current item | index - position of item | array - original array

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);

console.log(squared); // [1, 4, 9, 16, 25]
console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)


//* filter() -

/*
* Creates a new array containing only the elements that pass a test.
* Original array is not modified.
*/

const numbers2 = [1, 2, 3, 4, 5];
const evens = numbers2.filter(num => num % 2 === 0);

console.log(evens);   // [2, 4]
console.log(numbers2); // [1, 2, 3, 4, 5] (unchanged)


//* reduce() - 

/*

* Reduces an array to a single value by applying a reducer function to each element.
* Can also produce objects or arrays.

const result = array.reduce((accumulator, currentValue, index, array) => {
   return updated accumulator
}, initialValue);


* accumulator → accumulates the result across iterations

* currentValue → current element being processed

* initialValue → starting value of accumulator (optional but recommended)

*/


const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((acc, num) => acc + num, 0);

console.log(sum); // 15
