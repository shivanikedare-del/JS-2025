let myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());


// let myNewDate = new Date(2025,1,18)                 // month starts from '0' same as array
let myNewDate = new Date(2025,1,18,14,2)
console.log(myNewDate.toLocaleString());

let anotherDate = new Date("2025-01-18")               // for string month will start from 1
console.log(anotherDate.toDateString());
