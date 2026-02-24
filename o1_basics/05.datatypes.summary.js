
// Primitive Data Types Summary
// 1. Number: Represents numeric values (integers and floating-point numbers)
// 2. String: Represents textual data enclosed in quotes
// 3. Boolean: Represents true or false values
// 4. Undefined: Represents a variable that has been declared but not assigned a value
// 5. Null: Represents an intentional absence of any object value
// 6. Symbol: Represents a unique identifier (ES6+)
// 7. BigInt: Represents large integers (ES2020+)


const score = 100
const scorevalue =  100.50
const isLoggedIn = false
const outsideTemp = null
let userEmail;            // undefined
const id = Symbol("12345")
const anotherId = Symbol("12345")
console.log(id === anotherId); // false
const bigNumber = 9007199254741991n
console.log(typeof score);
console.log(typeof scorevalue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);


// Non-Primitive Data Types Summary
// 1. Object: A collection of key-value pairs, can store multiple values and complex data structures
// 2. Array: A special type of object used to store ordered collections of values
// 3. Function: A callable object that encapsulates a block of code

const heroes = ["Shakti", "Durga", "Krishna", "Arjun"]
let myObj = {
    name: "Shraddha",
    age: 20
}

const myFunct = function(){
    console.log("Hello World");
}

console.log(typeof heroes);  // object
console.log(typeof myObj);  // object
console.log(typeof myFunct);  // function

// Stack (Primitive Data Types) vs Heap (Non-Primitive Data Types)

let myYoutubename = "Shraddha Writes"
let anothername = myYoutubename
anothername = "Codes of Shraddha"
console.log( myYoutubename ); // Shraddha Writes
console.log( anothername ); // Codes of Shraddha

let userOne = {
    email: "yeuud@243",
    upi: "ghdfh"
}

let userTwo = userOne

userTwo.email = "newemail@243"

console.log(userOne.email);