// let a = 10
// const b = 20;;
// var c = 30;


var c = 300;
let a = 100;

if (true) {
    let a = 40;
    const b = 50;
    // var c = 60;
    // c = 60;
    console.log("INNER BLOCK: ", a);
}

// for (let i = 0; i < array.length ; i++) {
//     const element = array[i];   
// }

console.log(a);
// console.log(b);
console.log(c);


function one(){
    const username = "Shraddha"

    function two(){
        const website = "www.example.com"
        console.log(username);
    }
    // console.log(website);
    two();
}
one();

if (true) {
    const username = "John Doe"
    if (username === "John Doe") {
        const website = "www.johndoe.com"
        console.log(username + website)
        console.log(`Hello ${username}, welcome back!`);
    }
    // console.log(website)
}
// console.log(username);

// ******** Interesting part of scopes ******** //

console.log(addOne(5)); // ReferenceError: result is not defined

function addOne(num){
    return num + 1
}
addOne(5);
// console.log(result); // ReferenceError: result is not defined

// addTwo(5) 
const addTwo = function(num){
    return num + 2;
}
addTwo(10);
// console.log(result2); // ReferenceError: result2 is not defined