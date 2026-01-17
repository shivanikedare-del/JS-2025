const name = "Shivani"
const empId = "464646"

console.log(`Hey ${name}, your employee id is ${empId}`);       //string interpolation

const newName = new String('Shivani Kedare')
console.log(newName);
console.log(typeof newName);


console.log(newName[1]);
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(4));
console.log(newName.indexOf('K'));
console.log(newName.indexOf('e'));
console.log(newName.substring(1,6));    // (start value, end value) end value is not displayed
console.log(newName.slice(-9,10));      // starts count from behind for -ve value

//  only slice takes negative value

const sentence = new String("     SSK   ")
console.log(sentence.trim());           // will remove whitespace at start and end


const url = "something.okay%387-ssk"
console.log(url.replace("%","-"));      // (search item, new item)
console.log(url.includes('kye'));
console.log(url.split('-', 1));