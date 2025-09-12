//  let, const & var in JS 

// console.log(a); // ReferenceError
let a = 1;

// console.log(b); // ReferenceError
const b = 7;

// console.log(c); // undefined
var c = 10;


console.log(a);


/*
Both 'a' and 'c' are actually initialized as 'undefined' in hoisting stage.
But var 'c' is inside the storage space of Global, and let 'a' is in a separate
memory object called script, where it can only be accessed after some value is 
assigned to it first.  i.e. one can access 'a' & 'b' only it is assigned. 

that's why when trying to access the a and b before initialization is giving error.

*/



// * Temporal Dead Zone

/*
Time since when the let variable was hoisted until it is initailized some value.

ReferenceError: are thrown when variable are in temporal dead zone

syntax error: doesn't even let us run single line of code.


*/

/*
Additional, 

'let' is a stricter version of 'var'. 'const' is even more stricter than 'let'

Recommendations:

* Try using const, if not use let.

* Avoid using var

*/

// * Block Scope in JS

/*
 Block - {...}

 let and const are hoisted in Block scope, while var is hoisted in Global scope

* let and const are BLOCK SCOPED, they can't be accessed outside the block {}
* Whereas, var can be accessed outside the block as it's stored in global scope

*/


{
    var i = 1;
    let j = 2;
    const k = 3;
}
console.log(i); // 1
// console.log(j); // ReferenceError
// console.log(k); // ReferenceError


//* Shadowing in JS

var val = 10;
let j = 3;

{
    var val = 20;
    let j = 30;
    const k = 50;

    console.log(val); // 20
    console.log(j); // 30
    console.log(k); // 50
}

console.log(val); // 20 instead of 10 
console.log(j); // 3 (same as declared on line:79)

/*
So, If one has same named variable outside the blocak, the variable inside the block shadows the outside variable.

This happens only for 'var'



*/


// * Illegal Shadowing


let val_a = 20;

{
    // var val_a = 30; // SyntaxError: Identifier 'val_a' has already been declared
}

// * We cannot shadow let with var. But it is valid to shadow a let using a let. However, we can shadow var with let.


// since 'var' is function scoped

let val_b = 10;

function abc(){
    var val_b = 20; // allowed since var is function scoped
    console.log(val_b); // 20 
}
abc();

// * 'var' is global & function scoped but not block scoped

