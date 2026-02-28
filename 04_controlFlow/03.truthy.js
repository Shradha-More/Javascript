const userEmail  = "Shraddha@gmail.com"
// const userEmail  = ""
// const userEmail  = []

if (userEmail) {
    console.log(`You have logged in with the email: ${userEmail}`);
} else {
    console.log("Please provide your email");
}

// Truthy values: values that evaluate to true in boolean context
// Falsy values: values that evaluate to false in boolean context
// Falsy values in JavaScript: false, 0, -0, "", null, undefined, NaN, BigInt(0)  
// Everything else is Truthy
// Other truthy Values: "0", "false", " ", [], {}, function(){}, 42, -42, 3.14, -3.14, Infinity, -Infinity, BigInt(1)

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// false == 0          // true
// false === 0         // false
// "" == 0             // true

// Nullish Coalescing Operator (??): null or undefined

let val1;
// val1 = 5 ?? 10; // val1 will be 5
// val1 = null ?? 10; // val1 will be 10
// val1 = undefined ?? 10; // val1 will be 10
// val1 = 0 ?? 10; // val1 will be 0
// val1 = null ?? 10 ?? 20; // val1 will be 10
val1 = "" ?? "default"; // val1 will be ""

console.log(val1);

//  Ternary Operator

// condition ? exprIfTrue : exprIfFalse

const iceTea = 100;
iceTea >= 50 ? console.log("Ice tea is expensive") : console.log("Ice tea is affordable");