let arr1 = new Array(1,2,3,4,5)

console.log(arr1);
console.log(arr1.length);
console.log(arr1.includes(2));
console.log(arr1.indexOf(1));

arr1.push(10)               // will add 10 at the end
console.log(arr1);
arr1.pop()                  // removes last element
console.log(arr1);

arr1.unshift(11)            // will add 11 at start
console.log(arr1);
arr1.shift()                // removes first element
console.log(arr1);

console.log(arr1.slice(2,4));   // only gives the asked part as result
console.log(arr1);
console.log(arr1.splice(2,4));  // gives asked part as result & also removes it from original array
console.log(arr1);
