let score = "33abc"

// let score = null
// let score = undefined
// let score = true
// let score = "querty"

console.log(score);
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) // conversion
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN => "Not a Number
// null => 0
// undefined => NaN
// true => 1 , false => 0
// "querty" => NaN

let isLoggedIn = 1

// let booleanIsLoggedIn =  Boolean(isLoggedIn)
let booleanIsLoggedIn =  Boolean(0) // false
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);






// Operations

let value = 34
let negValue = -value   
// console.log(negValue);

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(10/2)
console.log(10%3) // remainder      

let str1 = "Hiii"
let str2 = " Shraddha"

let str3 = str1 + str2
console.log(str3);

console.log("2" + 2) // "22"
console.log("2" - 2) // 0
console.log("2" * 2) // 4
console.log("2" / 2) // 1
console.log("1" + 2 + 3) // "123"
console.log(1 + 2 + "3") // "33"

console.log((3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");
console.log(+"34abc");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

console.log(num1, num2, num3);

let gameCounter = 100
gameCounter++
console.log(gameCounter);
gameCounter--
console.log(gameCounter);