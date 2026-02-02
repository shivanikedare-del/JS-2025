// const user = new Object()
const user = {}

user.name = "Shivani"
user.age = 26
user.mail = "some@mail.com"

console.log(user);

const newUser = {
    name : {
        fullName: {
            firstName: "User",
            lastName: "Id"
        }
    },
    age : 22
}

console.log(newUser.name.fullName.firstName);

const obj1 = { a: "one", b: "two" }
const obj2 = { c: "three", d: "four" }

obj3 = {obj1, obj2}

console.log(obj3);

console.log(Object.assign(obj1, obj2));

console.log({...obj1, ...obj2});

console.log(Object.keys(user));
console.log(Object.entries(user));
console.log(Object.values(user));

console.log(Object.hasOwnProperty('name'));


const Course = {
    coursename : "JS Hindi",
    price : "1049",
    instructor : "HC"
}

const {coursename: name} = Course

console.log(name);

// json
// {
//     "name": "some name",
//     "start-date": "2nd Feb",
//     "end-date": "2nd March"
// }

