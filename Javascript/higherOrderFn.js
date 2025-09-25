// Higher Order function

/*

Either or both:
* Takes another function as an argument
* Returns a function as its result

* since in js fns are first-class citizens
(they can be stored in variables, passed around, and returned)


*/

const radius = [3, 1, 2, 4];
const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
// console.log(calculateArea(radius));

const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};
// console.log(calculateCircumference(radius));

//* Making above code 'Modular'

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

//* Higher order fn
const calculateForCircle = function (radius, logic) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculateForCircle(radius, area));
// map fn works same as above line of code
console.log(radius.map(area));

console.log(calculateForCircle(radius, circumference));
console.log(calculateForCircle(radius, diameter));

// Polyfill for map function

/*
* Polyfill in JS - is a piece of code (usually a function) that implements a feature that isn't natively supported
* in some older browsers or environments.

* In Simple words, it 'fills in' missing functionality so that your code can run consistently across different environment.

* Polyfills are commonly used to add modern Javascript feature - 
* Promise, Array.prototype.map, fetch, etc. to older browsers.

* " They check if the feature exists, and if not, define it "

*/

// check for Array.prototype.map exists
if (!Array.prototype.map) {
  Array.prototype.calculateForCircle2 = function (logic) {
    const output = [];
    if(this == null){
        throw new TypeError('Array.prototype.map called on null');
    }
    if(typeof logic !== 'function'){
        throw new TypeError(`${logic} is not a function`);
    }

    //* 'this' below points to the "radius" - an array (line:97)
    for (let i = 0; i < this.length; i++) {
      output.push(logic(this[i]));
    }
    return output;
  };
}
console.log(radius.calculateForCircle2(area));
