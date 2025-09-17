function outerFn() {
  let a = 7;
  function innerFn() {
    console.log(a);
  }
  return innerFn;
}

let res = outerFn();

console.log(res); // *holds the fn definition of y()

res();

/*
* CLOSURES *

* A closure is a function bundled together with references to its surrounding lexical environment,
* allowing it to access those outer variables even after the outer function has executed.

* A closure allows an inner function 'innerFn()' to access variable 'let a = 7' from its outer function 'outerFn()' 
* even after the outerFn() has returned. (line:8)

* Lexical Scope - means that the scope of a variable is determined by where it is physically written in the code.

* When an inner function is returned or passed around, it 'remembers' the variables of its outer function.

* 

*/

function delayMessage(message, delay) {
  // outer fn
  let userName = 'Gagan';
  setTimeout(function () {
    // inner fn
    console.log(`${userName} : ${message}`); // executed after 2 seconds
  }, delay);

  console.log("outer fn executed"); // executed first
}

let timer = 2000;
delayMessage(`inner fn executed after ${timer}`, timer);

/*

* Here, the inner function is not returned
* Instead, it is passed as a callback to the built-in function 'setTimeout'
* JS runtime keeps a reference to this function until the timer fires.
* Closure ensures that when the callback finally runs, it still has access to 'message'

* The callback function inside 'setTimeout' is still just an inner function,
* but instead of you invoking or returning it,
* you hand it over to the browser/Node.js runtime.
* Closure ensures it still 'remembers' the variable it needs.


*/

