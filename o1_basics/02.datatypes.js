"use strict"; // treat all JS code as newer version

// alert(3 + 3); // we can use alert, prompt etc in the browser // we are using node.js, not browser

console.log(3+3); 
// we can use console.log in node.js and browser both
console.log("Hello Shraddha");


let name = "Shraddha";
let age = 20
let isLoggedIn = false
let state = null
let city; // undefined

// Data types in JS

// number => 2 to pow 53
// bigint => larger than 2 to pow 53
let bigNumber = 1234567890123456789012345678901234567890n
// string => "", '', ``
// boolean => true/false
// null => standalone value
// undefined => standalone value
// symbol => unique value
// object

console.log(typeof bigNumber);
console.log(typeof isLoggedIn);
console.log(typeof name);
console.log(typeof age);
console.log(typeof null);