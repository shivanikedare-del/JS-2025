const num = new Number(10000000)

console.log(num);
console.log(num.toString().length);
console.log(num.toFixed(2));                    // decimal position value
console.log(num.toPrecision(3));                // number of digits before decimal

// if a higher value is present, toPrecision will give result as an exponential value

// toLocaleString will convert the value representation to the given locale representation

console.log(num.toLocaleString('en-IN'));

// *****************MATH*********************
// Math is an object in itself

console.log(Math);
console.log(Math.abs(-7));                  // gives an absolute value i.e. whole +ve value
console.log(Math.round(4.3));               // rounds of the value to non decimal whole value
console.log(Math.ceil(7.1));                // will always take the bigger round off value
console.log(Math.floor(7.9));               // will always take the smaller round off value
console.log(Math.sqrt(441));
console.log(Math.max(3,6,7,8));
console.log(Math.min(3,6,7,8));

console.log(Math.random());                    // random value between 0 & 1


const min = 10
const max = 20
console.log(Math.floor(Math.random() * ( max - min + 1 )) + min);
