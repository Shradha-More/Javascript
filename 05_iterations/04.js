// for in

// Used to iterate over keys (indexes / properties) of an object or array.

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in Object){
    // console.log(myObject[key]);
    console.log(`${key} shoetcut is for ${myObject[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming){
    console.log(programming[key]);
}

const map = new Map()        // Map is not iterable and does not beiterated by below method
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India')

for (const key in map){
    console.log(key);
}