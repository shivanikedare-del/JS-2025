let a = 20

if(true){
    let a = 1
    const b = 2
    console.log(`Inner value is ${a}`);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

if(true){
        const username = "Shivani"
        if(username === "Shivani"){
            const website= "Youtube"
            console.log(username + website);  
        }
        // console.log(website);     
    }

// console.log(username);


console.log(addOne(5));

function addOne(num){
    return num + 1
}

// hoisting does not work with function expressions
console.log(addTwo(5));

const addTwo = function(num){
    return num + 2
}  