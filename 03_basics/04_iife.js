// Immediately Invoked Function Expression (IIFE)

(function one(){
    // named IIFE
    console.log("Hello User!");
})();

(function two(name){
    console.log(`Hello ${name}!`);
})("Shivani")