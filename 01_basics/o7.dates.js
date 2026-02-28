// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.getFullYear());
console.log(myDate.getMonth()); 
console.log(typeof myDate);


// let mycreatedDate = new Date(2026,0,23,5,3)
// let my createdDate = new Date("2026-01-14")
let myCreatedDate = new Date(2026, 0, 14)
let myTimestamp = Date.now()
console.log(myCreatedDate.getDate());
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

console.log(Math.floor(Date.now()/1000)); // seconds since epoch time
console.log(myTimestamp); // milliseconds since epoch time

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString("default",{
    weekday: "long",
    timeZone: "Asia/Kolkata"
})

