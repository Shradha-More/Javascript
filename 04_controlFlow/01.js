// if

// if (condition){
//     // code to be executed if condition is true
// }

const isUserLoggedIn = true;
const temperature = 25;

if (isUserLoggedIn) {
    console.log("Welcome back, user!");
}

if (temperature > 20) {
    console.log("It's a warm day!");
} else {
    console.log("It's a bit chilly today.");
}
console.log("Enjoy your day!");

// <, >, <=, >=, ==, ===, !=, !==

const score = 200

if (score >= 100) {
    const power = 'fly'
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);

const balance = 10000

// if (balance >= 5000) console.log("You have a high balance!"); // Implicit scope
// if (balance >= 5000) console.log("You have a high balance!"), console.log("test"); // Implicit scope

if (balance > 5000) {
    console.log("You have a high balance!");
} else if (balance < 1000) {
    console.log("Your balance is average.");
} else {
    console.log("Your balance is low.");
}

const userLoggedIn = true
const debitcARD = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcARD && 2==2) {
    console.log("User is logged in and has a debit card.");
}

if (userLoggedIn || debitcARD) {
    console.log("User is logged in or has a debit card.");
}

if ((userLoggedIn && loggedInFromGoogle) || loggedInFromEmail) {
    console.log("User is logged in via Google or Email.");
}

