// Shortest JS code, window & 'this' keyword


/*

JS Engine like Google's V8 engine

The shortest JS program is empty file. Because even then, 
JS engine does a lot of things. As always, even in this case, 
it creates the GEC which has memory space and the execution context.

JS Engine creates a 'window' object in the global space.

This contains lots of functions & variables which can be accessed from anywhere
in the program.

JS Engine also creates 'this' keyword, which points to this 'window' object at the global level.

To sum-up, we can say that when along with GEC, a global object and a 'this' variable is created.

In different engines, the name of the global object changes. 
'window' in browsers, 'global' in nodeJS

At global level, this === window

If we create any variable in th global scope, then the variables get 
attached to the global object.

*/

console.log('start')

console.log(this); // object
console.log(window); // object

console.log(this === window) // true

var x = 10;
console.log(x); // 10
console.log(this.x); // 10
console.log(window.x); // 10


// undefined vs not defined 

/*
undefined - is a placeholder assigned to each variable by JS 
in the memory allocation phase.

not defined - A variable has not been declared at all in the current scope.
Result: Accessing it will throw a 'ReferenceError'

Addtional points:
JS is loosely typed / weakly typed langauge. It doesn't attached any datatype.
We can say var a = 5  then change it to boolean value 'a = true' or string 'a = 'hello'

*Never assign 'undefined' to a variable manually. Let it happen on it's own.

*/


