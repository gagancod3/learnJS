//* map() -

/*

* map → transforms every element

* Creates a new array by applying a function to every element of an existing array
* Original array is not modified.

const newArray = Array.map((element, index, array)=> {
    return the transformed element
});

*/

// element - current item | index - position of item | array - original array

const numbers = [1, 2, 3, 4, 5];

const squared = function (num) {
  return num * num;
};
const squared_output = numbers.map(squared);

console.log(squared_output); // [1, 4, 9, 16, 25]
// console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)

//* filter() -

/*

* filter → selects elements based on a condition

* Creates a new array containing only the elements that pass a test.
* Original array is not modified.

*/

const numbers2 = [1, 2, 3, 4, 5];
const is_even = function (num) {
  if (num % 2 === 0) {
    return num;
  }
};
const is_odd = function (num) {
  if (num % 2 !== 0) {
    return num;
  }
};
// const evens = numbers2.filter(num => num % 2 === 0);
const evens = numbers2.filter(is_even);
const odds = numbers2.filter(is_odd);

console.log(evens); // [2, 4]
console.log(odds); // [1, 3, 5]
// console.log(numbers2); // [1, 2, 3, 4, 5] (unchanged)

//* reduce() -

/*

* reduce → aggregates array to a single value

* Reduces an array to a single value by applying a reducer function to each element.
* Can also produce objects or arrays.

const result = array.reduce((accumulator, currentValue, index, array) => {
   return updated accumulator
}, initialValue);


* accumulator → accumulates the result across iterations

* currentValue → current element being processed

* initialValue → starting value of accumulator (optional but recommended)

*/

const arr_numbers = [7, 1, 5, 2, 3, 10, 4, 5];

const calculate_sum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

console.log(calculate_sum(arr_numbers));
// const sum = arr_numbers.reduce((acc, num) => acc + num, 0);

const sum = arr_numbers.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(sum);

//* Find Maximum value

// conventional fn()

const findMax = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(findMax(arr_numbers)); //5

// acc below is used with same logic of max in 'findMax()' 
const max_val = arr_numbers.reduce(function (acc, curr) {
  if (acc < curr) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(max_val);
