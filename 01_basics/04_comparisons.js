console.log(null == 0);
console.log(null > 0);
console.log(null >= 0); 
// in JS equality check (==) and comparison(< , > , <= , >=) works differently
// comparisons convert null to a number
// here null is converted to 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);

console.log("2" == 2);              // converts string to num
console.log("2" === 2);             // checks datatype as well