
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Map is a function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

// Calls a defined callback function on each element of an array, and returns an array that contains the results.

// const newNums = myNumbers.map ( (num) => num + 10)
// console.log(newNums);

const newNums = myNumbers
                .map((num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);