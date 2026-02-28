
function myName(){
    console.log("H");
    console.log("I");
    console.log("J");
    console.log("K");
    console.log("L");
    console.log("M");
    console.log("N");
}

// saymyName()

// function addTwoNumbers(num1, num2){
//    console.log(num1 + num2);
// }

// addTwoNumbers(5, 7);
// addTwoNumbers(10, 15);
// addTwoNumbers(20, 25);
// addTwoNumbers(20, "a");
// addTwoNumbers(20, null);

function addTwoNumbers(num1, num2){
//     let result = num1 + num2;
//     console.log("Inside the function: " + result);
//     return result;
//     console.log("This line will never be executed");    

    return num1 + num2;

}

const result = addTwoNumbers(5, 10);
// console.log("Result is: " + result);

function loginUserMessage(username){
    // if(!username){
    //     console.log("Please enter a valid username");
    //     return;
    if (username === undefined || username === null || username === "") {
        console.log("Please enter a valid username");
        return;
    }
    return `${username} just logged in`;

}

// console.log(loginUserMessage("john_doe"));
// console.log(loginUserMessage());

// rest/spread operator
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice(500, 700, 600, 100, 200, 400));

const user = {
    username: "Shraddha",
    price: 5000,
    // prices: 5000
}

function heandleObject(obj){
    console.log(`Username is ${obj.username} and price is ${obj.price}`);
}

heandleObject(user);
heandleObject({
    username: "Alex",
    price: 7000
})

const myNewArray = [1, 2, 3, 4, 5, 6];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));