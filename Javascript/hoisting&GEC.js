// Hoisting 

/*
Hoisting is a concept which enables us to extract values of variables
and functions even before initialising/assigning value without getting
error and this is happening due to the 1st phase (memory creation phase)
of the Execution Context.

The execution context gets created in 2 phases -
1) memory creation phase
2) Code execution

so even before code execution happens, memory is created 
In case of 'variables', they're initialized as 'undefined' 
In case of 'functions', whole function code is placed in the memory.

*/

 
console.log(i); // undefined
var i = 7;

getName(); // namaste javascript

function getName(){
    console.log('namaste javascript');
}


// Functions & Variable Environment

var x = 1;
a();
b(); // we are calling the functions before defining them. This will work properly, as seen in Hoisting.
console.log(x); // 3

function a() {
  var x = 10; // localscope because of separate execution context
  console.log(x); // 1
}

function b() {
  var x = 100;
  console.log(x); // 2
}

/*

Whenever we executed JS code
GEC - Global Execution Context is created and pushed into the Call Stack

first phase - (memory phase)
variable x: undefined and 'a' and 'b' have their entire function code as value initialized

second phase - (execution phase)
after x = 1 initialization,
when a function is called, a new local execution context (EC)is created inside code portion of GEC

STATUS -
Call Stack: [GEC, a()]

For local EC, a totally different variable with same name 'x' assigned undefined(x inside a()) in memory phase
in execution phase of local EC it is assigned with value 10 and printed in console log statement.

once whole function a() body is executed. local EC for a() is removed from both GEC & from Call Stack.

STATUS -
Call Stack: [GEC]

Same happens when function b() is called and executed

Once the complete js file is executed, GEC is deleted and also removed from call stack.

* Program ends.

*/


