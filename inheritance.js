class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const coffee = new Teacher("coffee", "cade@347", "257")


coffee.addCourse();
const masalaTea = new User("masalaTea")
masalaTea.logMe();
// console.log(coffee === masalaTea);
console.log(coffee instanceof User);
