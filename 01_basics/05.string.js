const name = "Shraddha"
const repoCount = 12

// console.log(name + repoCount + " Choices");

console.log(`Hello ${name}, you have ${repoCount} choices.`);

const ganmer = new String("Shraddha")
console.log(ganmer);
console.log(typeof ganmer);

console.log(ganmer.toUpperCase());
console.log(ganmer[0])
console.log(ganmer.__proto__);          
console.log(ganmer.charAt(0));  // S
console.log(ganmer.indexOf("r")); // 2
console.log(ganmer.endsWith("a")); // true
console.log(ganmer.includes("dd")); // true
console.log(ganmer.split("r")); // [ 'Sh', 'addha' ]

const newString = ganmer.replace("Shraddha", "Codes of Shraddha")
console.log(newString); // Codes of Shraddha

const newstr = ganmer.substring(0,4)
console.log(newstr); // Shr 

const anoStr = ganmer.slice(-2,5)
console.log(anoStr); // ha

// Escape Sequences in Strings
const fullName = "Shraddha \"Writes\""
console.log(fullName);

const message = "Shraddha \nWrites \nCode"
console.log(message);

const newStrOne = "       Shraddha Here       "
console.log(newStrOne)
console.log(newStrOne.trim());

const url = "https://www.shraddha%20writes.com/"
console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));