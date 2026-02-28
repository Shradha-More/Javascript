// array

const myArr = [1, 2, 3, 4, 5];
console.log(myArr);
console.log(typeof myArr); // object

const myHerroes = ["Shakti", "Durga", "Krishna", "Arjun"];
console.log(myHerroes);

const myARR2 = new Array(10, 20, 30, 40);
console.log(myARR2);

// Array Methods and Properties

myArr.push(6); // adds 6 at the end
console.log(myArr);

myArr.pop(); // removes last element
console.log(myArr);

myArr.shift(); // removes first element
console.log(myArr);

myArr.unshift(0); // adds 0 at the beginning
console.log(myArr);

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9));

const newArrr = myArr.join()

console.log("A ", myArr);
console.log("B ", newArrr);

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ", myArr);

const myn2 = myArr.splice(1,2)
console.log(myn2)
console.log("B ", myArr);


// accessing values from array
console.log(myArr[0]);
console.log(myArr[2]);

// modifying values in array
myArr[3] = 100;
console.log(myArr);

// array can hold multiple data types
const mixedArr = [1, "Hello", true, null, undefined, {name: "Shraddha"}, [1,2,3]];
console.log(mixedArr);

// array methods
console.log(mixedArr.length); // 7
console.log(mixedArr.indexOf(true)); // 2   

mixedArr.push("New Value");
console.log(mixedArr);
mixedArr.pop();
console.log(mixedArr);
mixedArr.shift();
console.log(mixedArr);
mixedArr.unshift("First Value");
console.log(mixedArr);

console.log(mixedArr.slice(1,4)); // [ 'Hello', true, null ]

const anotherArr = [10, 20, 30];
const combinedArr = mixedArr.concat(anotherArr);
console.log(combinedArr);