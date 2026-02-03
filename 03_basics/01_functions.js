// function is a packet of code

function addTwo(num1,num2){
    // console.log(num1 + num2)
    return num1 + num2
}
console.log(addTwo(1,9))


function username(name){
    if(!name){
        console.log(`Enter a valid username`);
        return
    }
    return `Welcome ${name}!`
}
console.log(username());


function numbers(num,...num1){
    return num1
}
console.log(numbers(1,2,3,4));


const productDetails = {
    product: "Pack of 10",
    price: "149"
}

function handleObject(anyobject){
    return `${anyobject.product} will cost ${anyobject.price}`
}
console.log(handleObject(productDetails));

const newArray =  [3,7,1,9]

function fetchNumber(getArray){
    return getArray[1]
}
console.log(fetchNumber(newArray));
console.log(fetchNumber([66,33,88]));
