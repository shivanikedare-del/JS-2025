const accId = 554260  // value can't be changed
let accName = "Naam"
var accPwd = 12345678 // var not used now because of block scope issue
accCity = "Mumbai"

console.log(accName)
console.table([accName, accPwd, accId, accCity])
console.table(typeof accName)
