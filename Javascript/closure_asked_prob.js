//  Interview problem

//variables

let n = 5;
let delay = 1000;

function outerFn(n, delay) {
  console.log(`n: ${n}`);
  for (var i = 1; i <= n; i++) {
    // console.log(i);
    setTimeout(function () {
      console.log(i);
    }, delay);
  }
  console.log("outerFn: Hello ji");
}

outerFn(n);

/* output: 
outerFn: Hello ji 
6
6
6
6
6

*/

// with let 'i'

function outerFn2(n, delay) {
  for (let i = 1; i <= n; i++) {
    setTimeout(function () {
      console.log(i);
    }, delay);
  }
  console.log("outerFn2: Hello again");
}

outerFn2(n, delay);

/* output: 
outerFn: Hello again 
1
2
3
4
5

*/

/*

* We can observe the difference in the output when we use variable with 'var' and 'let'

* In case of 'let', a new variable 'i' is created for each iteration since it's block scoped

* Whereas, In case of 'var', it's function scoped & global scope but not block scope, so in all iterations
* 'i' is refering to the same reference (memory location) i.e. no new variable is created for each iteration


* Now since the 'var' is not block scoped but function & global scope
* we can try declaring the variable outside the for loop as function's local variable

*/

// with var i declared outside the loop 'i'

function outerFn3(n, delay) {
  for (var i = 1; i <= n; i++) {
    // *using IIFE
    // (function (val) {
    //   setTimeout(function () {
    //     console.log(val);
    //   }, delay);
    // })(i); // passing the current value of i

    // OR

    // *using conventional function
     function close(val) {
      setTimeout(function () {
        console.log(val);
      }, delay);
    }
    close(i); // passing the current value of i
  }
  console.log('outerFn3: Here we\'re again') 
}

outerFn3(n, delay);

/* output: 
outerFn: Here we're again 
1
2
3
4
5

*/

/*

In the console window, we can see that all console.log statments outside setTimeout()
are printed first as they're synchronous code

closure_asked_prob.js:16 outerFn: Hello ji
closure_asked_prob.js:39 outerFn2: Hello again
closure_asked_prob.js:79 outerFn3: Here we're again

setTimeout code block/statements are asynchronous code

*/



