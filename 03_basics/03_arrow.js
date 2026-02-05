const user = {
    username: "Shivani",
    price: 999,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username}, your price is ${this.price}`);
        // console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "Shivani Kedare"
user.welcomeMessage()

console.log(this);


// const two = function (){
//     let username = "Shivani"
//     console.log(this.username);
// }

const two =  () => {            // arrow function does not have its own 'this' context, it takes 'this' from its surrounding lexical scope
    let username = "Shivani"
    console.log(this.username);
}

two()


const three = (num1, num2) => {
    return num1 + num2
}
const implicitReturn = (num1, num2) =>  (num1 + num2)

console.log(three(5, 10));
console.log(implicitReturn(2,5));
