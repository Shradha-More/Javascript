
// const tinderUser = new Object()

const { use } = require("react")

const tinderUser = {}
tinderUser.id = "64735"
tinderUser.name = "Shraddha"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUse = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Shraddha",
            lastname: "More"
        }
    }
}

// console.log(regularUse.fullname.userFullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
    },
    {
        id: "2345",
        email: "shrad@gmail.com"
    },
    {
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));


const course = {
    coursename: "JS",
    price: 999,
    courseInstructor: "Shraddha"
}

// course.courseInstructor

const {courseInstructor: istructor} = course

console.log(istructor);

// const navbar = ({company}) => { }
// navbar(company = "Shraddha Tech")

// ******* API **********

// {
// "name": "Shraddha",
// "age": 25,
// "location": "India",
// "followers": 1000,
// "following": 100,
// "dateJoined": "Aug 15, 2020"
// }

[
    {},
    {},
    {}
]