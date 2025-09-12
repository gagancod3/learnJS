//  Scope chain, Scope and Lexical Environment


/*

Scope in JS is directly related to Lexical Environment

*/

// Example 1

function a() {
    console.log(i); // 7
}

var i = 7;
a();


// Example 2

function d(){
    c();
    function c(){
        console.log(j); // 10
    }
}
var j = 10;
d();


// Example 3

function e(){
    c();
    function c(){
        var k = 100;
        console.log(k); // 100
    }
}
var k = 5;
e();


// Example 4

function f(){
    var m = 1000;
    c();

    function c(){
        console.log(m); // 100
    }
}
var m = 5;
f();


/*

* Lexical Environment = local memory + lexical env. of its parent

Whenever an Execution Context is created, a Lexical environment is also
created and referenced in the local Execution context (in memory space).

* Scope chain / Lexical environment chain

The process of going one by one to parent and checking for values



 */


function outter(){

    function inner(){
        // logic here
    }
    inner(); // 'inner' is lexically inside 'outter'
} // 'outter' is lexically inside global execution




