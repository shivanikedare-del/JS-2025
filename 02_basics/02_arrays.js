let fam1 = ["sis", "bro"]
let fam2 = ["mom", "dad"]

// fam1.push(fam2)
// console.log(fam1);

let allFam = fam1.concat(fam2)
console.log(allFam);

let newArr = [...fam1, ...fam2]             // spread operator
console.log(newArr);

const deepArr = [1,4,7,[3,2,9],0,[6,[8,5]]]

const flatArr = deepArr.flat(1)             // opens all array elements as individual - upto specified level
console.log(flatArr);

console.log(Array.isArray("some name"))
console.log(Array.from("Kedare"));          // makes an array of the letters
console.log(Array.from({name: "some name"})); // cannot give array of an object

let a = 50
let b = 20
let c = 33
console.log(Array.of(a,b,c));
