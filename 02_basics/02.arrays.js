

const marvel_heros = ["superman", "batman", "ironman", "spiderman"];
const dc_heros = ["flash", "aquaman", "wonderwoman", "cyborg"];

marvel_heros.push("hulk");

marvel_heros.push(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros[5][1]);

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const anotherArr = [1,2,3,4,[5,897,44,345,576],5,6,[7,[8,9]]]
const real_another_arr = anotherArr.flat(Infinity)
console.log(real_another_arr);


console.log(Array.isArray("Shraddha"))  // false
console.log(Array.from("Shraddha"))  // [ 'S', 'h', 'r', 'a', 'd', 'd', 'h', 'a' ]
console.log(Array.from({name: "Shraddha"}))  // [ {} ]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]