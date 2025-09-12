
// 

// for (var i = 1; i <= 5; i++) {

// function outer(i){
    
//   setTimeout(function() {
//     console.log(i); 
//   }, i * 1000);
// }
// outer(i)

// }


// 

console.log(1)

new Promise((res, rej)=>{
    console.log(2)
    res()
}).then(()=> {console.log(3)})

setTimeout(
    ()=> {console.log(4)
  
}, 0)

console.log(5)


//1 
// 5
// 2
// 3
// 4
    
