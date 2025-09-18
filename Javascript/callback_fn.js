// *Callback fn*

/*
* A callback function is a function that is passed as an argument to another function
* It is executed later by that function

*/

// Example 1:

function a(fn_b) {
  fn_b();
}

// calling a() - in argument passing another fn b()
a(function b() {
  console.log("b called");
});

// Above, b() is callback fn
// In simple words, a() can callback b() when needed

// Example 2:
// Asynchronous setTimeout fn
let delay = 1000; // 1 second
setTimeout(function () {
  console.log(`called after ${delay}`);
}, delay);

//* EventListeners

// usual vanilla JS usage

// document
//   .getElementById("clickMe")
//   .addEventListener("click", function click_fn() {
//     console.log("click button is pressed");
//   });


// using closures

function outerFn(){
    let count = 0;
document
  .getElementById("clickMe")
  .addEventListener("click", function click_fn() {

    console.log("click button is pressed", ++count);
  });

};
outerFn();


//* Garbage collection & removeEventListeners

function outerFn2(){
    let count = 0;
document
  .getElementById("clickMe2")
  .addEventListener("click", function click_fn2() {
    //* conditional for removeEventListeners
    if(count === 3){
        document.getElementById('clickMe2').removeEventListener('click', click_fn2);
        console.log("Event listener removed after 3 clicks");
    }
    else {
    console.log("click button is pressed", ++count);
    }
  });

};
outerFn2();



//* WHY IS IT IMPORTANT TO REMOVE Event Listeners?

/*

* # Prevent Memory Leaks -
* As event listeners is a closure, it keeps references to variables from its outer scope.
* As long as listener exists, those variables cannot be garbage collected.
*/

/* 
*# Avoid Duplicate Event Handling -
* If you attach the same listener multiple times without removing it, you'll get multiple executions for one event
* This can cause 'bugs' like API calls firing multiple times
*/

// EXAMPLE

// function handler() {
//   console.log("Clicked");
// }

// const btn = document.getElementById("btn");
// btn.addEventListener("click", handler);
// btn.addEventListener("click", handler); // added twice

// btn.click();
// Output: "Clicked"
//         "Clicked"

/*
*# Improve Performance - 
* they consume memory & CPU
* over time, leads to sluggish performance.

*# Ensure Predictable Lifecycle
* In a SPA (single-page applications using React, Angular, Vue):
* When you navigate away from a view/component, you want its event listeners removed.
* Otherwise, they might still react to events even though the UI is gone - causing 'hard to debug bugs'

* ** GOLDEN RULE **
* Always remove listeners when they're no longer needed.
* Especially when: 
* DOM element is removed
* component is unmounted 
* event is only relevant for a limited time 


*/

