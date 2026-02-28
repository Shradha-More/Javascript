const score = 400;

const balance = new Number (100);
console.log(typeof score);          // number
console.log(balance);                // [Number: 100]

console.log(balance.toString());     // "100"
console.log(balance.toFixed(2));    // "100.00"
console.log(balance.valueOf());     // 100      

const otherNumber = 23.8975
console.log(otherNumber.toPrecision(3)); // 23.9

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000



// ******************* Math Object in JavaScript *******************


console.log(Math);                    // Math {}
console.log(Math.PI);                 // 3.141592653589793
console.log(Math.E);                  // 2.718281828459045
console.log(Math.round(4.6));  // 5
console.log(Math.floor(4.9));  // 4
console.log(Math.ceil(4.1));   // 5  

console.log(Math.min(2,34,5,6,7,-23)); // -23
console.log(Math.max(2,34,5,6,7,-23)); // 34    

console.log(Math.random()); // random number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); // random number between 1 and 10


const min = 10;
const max = 20;
console.log( Math.floor( Math.random() * (max - min + 1) ) + min ); // random number between 10 and 20

console.log(Math.sqrt(16)); // 4
console.log(Math.abs(-55));
console.log(Math.pow(2,5)); // 32
console.log(Math.log(1));   // 0
console.log(Math.sin(0));   // 0
console.log(Math.cos(0));   // 1
console.log(Math.tan(0));   // 0

// console.log( userOne.email );
// console.log( userTwo.email ); // newemail@243
