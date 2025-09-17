//* Function statement / Function Declaration 

function a(){
    console.log('fnStatement: hello');
}

a();

//* function expression

//b(); // TypeError

let b = function(){
    console.log('fnExpression: hello');
};

b();

//* Difference between statement & expression - 'function statement is hoisted'


//* Anonymous Function

// function (){ console.log('anonymous') } // this gives syntax error

//* Named Function Expression

let c = function abc(){
    console.log('b called');
}
c(); // b called
// abc();  // Uncaught ReferenceError: abc is not defined



//* Parameters vs Arguments

//* label/identifiers are parameters
//* values passed inside function call

let d = function(parameter1, parameter2) {
    res = parameter1 + parameter2;
    console.log(res);
};

let argument1 = 10;
let argument2 = 90;

d(argument1, argument2); 


//* First Class Function aka 'First Class Citizens'

/*
* In JavaScript, functions are first-class citizens
* Means Functions are treated like any other value in language

* You can store them in variable (Function Expression)
* Pass them as arguments to other functions
* Return them from functions
* Assign them as properties of objects

* In simple words: functions are values, just like numbers, strings, or objects.

*/

//* Passing functions as an argument

function processUserInput(callback) {
  const name = "Singh";
  console.log(callback(name));
}

processUserInput(function(name) {
  return `Hi, ${name}`;
});

//* More examples 

var ab = function (param1) {
  console.log(param1); // prints " f() {} "
};
ab(function () {});

// Other way of doing the same thing:
var bd = function (param1) {
  console.log(param1);
};
function xyz() {}
bd(xyz); // same thing as prev code

// we can return a function from a function:
var ef = function (param1) {
  return function () {};
};
console.log(ef()); //we log the entire fun within b.

