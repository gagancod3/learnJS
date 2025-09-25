
console.log('start');

setTimeout(function a(){
    console.log('callback after 0 seconds*')
},0);

setTimeout(function a(){
    console.log('callback after 5 seconds*')
},5000);

console.log('end');

// block main thread/Call Stack for 10 seconds

let startDate = new Date().getTime();
// console.log(startDate ,startDate + 10000);
let endDate = startDate;

while(endDate <= startDate + 10000){
    endDate = new Date().getTime();
}
console.log('while ended');

