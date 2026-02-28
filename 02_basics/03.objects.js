
// singleton object
// object create()

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shraddha",
    "fullname" : "Shraddha More",
    [mySym]: "value1",
    age: 25,
    location: "India",
    isloggedin: true,
    lastLoginDays: ["Monday", "Friday"],
    email: "shradha@gmail.com"

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["fullname"])
console.log(JsUser[mySym]) 

JsUser.email = "shrad.gmail.com"
// Object.freeze(JsUser) // to make object immutable
JsUser.email = "hghgdshdg@hj.com" // will not work
console.log(JsUser.email)

JsUser.greeting = function(){
    console.log("Hello JsUser");
}

JsUser.greeting2 = function(){
    console.log(`Hello ${this.name}  , you are ${this.age} years old`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());