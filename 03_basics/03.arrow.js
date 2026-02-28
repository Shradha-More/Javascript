const user = {
    username: "Shraddha",
    price: 5000,

    welcomeMessage: function(){
        // return `Welcome back ${this.username}`;   // this is used to refer to the current object
        console.log(`Welcome back ${this.username}`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "SAM"
// user.welcomeMessage();

// console.log(this); // global object

// function chai(){
//     let username = "CHOCO"
//     console.log(this);
//     console.log(this.username);
// }
// chai();



const chai = () => {
    let username = "CHOCO"
    console.log(this);
    console.log(this.username);
}

chai();


// const addTwo = (num1, num2) => {
//      return num1 + num2;
// }
// console.log(addTwo(5, 10));

// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => (num1 + num2);

// console.log(addTwo(5, 10));

const addT = (num1, num2) => ({username: "Shraddha", price: num1 + num2});

// console.log(addT(5, 10));
// console.log(addT(5, 10).username);


const myArray = [1, 2, 3, 4, 5];

// myArray.forEach()