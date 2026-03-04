// These loops are array specific loops


// forof

// Used to iterate over values of iterable objects (arrays, strings).

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const iterator of object) {   
// }

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings){
    console.log(`Each char is ${greet}`)
}

// Maps --> Holds key value pair and remembers the original insertion order of the keys.

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India')

console.log(map);

// for (const key of map){
//     console.log(key);
// }

for (const [key, value] of map){
    console.log(key, ':-', value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
    // game1: 'NFS',
    // game2: 'Spiderman'
}

// Objects not iterable
// for (const [key, value] of myObj){
//     console.log(key, ':-', value);
// }


