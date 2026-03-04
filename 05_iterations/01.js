// for


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];  
// }


for (let index = 0; index < 10; index++) {
    const element = index;  
    if (index == 5) {
        console.log('Five!');
    }
    console.log(element);
}

for (let i = 0; i < 5; i++) {
    console.log(`Outer loop i: ${i}`);
    for (let j = 0; j < 5; j++) {
        // console.log(`Inner loop j: ${j} and i: ${i}`);
        console.log(i + '*' + j + '=' + (i * j));
    }
}
// console.log(element);

let myArray = ['flash', 'batman', 'wonderwoman', 'aquaman', 'cyborg'];
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];  
    console.log(element);
}


// break and continue

for (let i = 0; i < 10; i++) {
    if (i === 6) {
        console.log('Breaking the loop at i = 6');
        break;
    }   
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log('Skipping even number: ' + i);
        continue;
    }   
    console.log(i);     
}
