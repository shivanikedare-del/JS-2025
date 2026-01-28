// singleton --> from constructor
// Object.create

// object literals

const mySym = Symbol("Sym1")

const JsUser = {
    name: "Shivani",
    email: "shivani@gmail.com",
    [mySym]: "key"
}

console.log(`Hello JS user`);
console.log(JsUser["email"]);

JsUser.email = "kedare@gmail.com"
console.log(JsUser);

JsUser.greeting = function() {
    console.log(`Welcome to JS, ${JsUser.name}`);
}

console.log(JsUser.greeting());
