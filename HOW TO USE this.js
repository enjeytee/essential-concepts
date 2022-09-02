////// THIS - REFERENCE TO AN OBJECT //////

///// 4 RULES TO "this". HOW IS IT CALLED? /////

/// 1) IN THE GLOBAL CONTEXT - GLOBAL OBJECT, UNDEFINED IN STRICT MODE ///
function whatIsThis() {
    console.log(this);
    this.something = 2;
    console.log(something);
}
whatIsThis();
const user = {
    first: 'Reed',
    last: 'Barger',
    greetUser() {
        console.log(`Hi, ${this.first} ${this.last}`);  
    }  
}
/////////////////////////////////

/// 2) AS A METHOD ON AN OBJECT - OBJECT ON LEFT SIDE OF DOT ///
const userInfo = {
    title: "Programmer",
    user: {
        first: 'Reed',
        last: 'Barger',
        greetUser() {
        console.log(`Hi, ${this.first} ${this.last} ${userInfo.title}`);  
        }   
    }  
}
userInfo.user.greetUser()
///////////////////////////////////

/// 3) AS A CONSTRUCTOR FUNCTION OR CLASS CONSTRUCTOR - THE INSTANCE ITSELF WITH NEW ///
class User {
    constructor(first, age) {
        this.first = first;
        this.age = age;  
    }  
    getAge() {
        console.log(`${this.first}'s age is ${this.age}`);  
    }
}
const user = new User('Bob', 24);
user.getAge();

function User2(first, age) {
    this.first = first;
    this.age = age;
}
User2.prototype.getAge = function() {
    console.log(`${this.first}'s age is ${this.age}`);  
}
const user2 = new User2('Jane', 25);
user2.getAge();
//////////////////////////////////////////////////////////

/// 4) AS A 'DOM' EVENT HANDLER - THE ELEMENT ITSELF ///
const button = document.createElement("button");
button.textContent = "Click";
document.body.append(button);
button.addEventListener("click", function() {
    console.log(this);
});
///////////////////////////////////

/ call(), apply(), bind() ///
function whatIsThis2() {
    console.log(this);
};
console.log(whatIsThis2.apply({ name: "John"}));
const user = {
    name: "John",
    title: "Programmer"
};
function printUser() {
    console.log(`${this.name} is a ${this.title}.`)
};
printUser.call(user);
printUser.apply(user);
function printBio(city, country) {
    console.log(`${this.name} is a ${this.title} in ${city}, ${country}`)
}
printBio.call(user, "San Fernando, Pampanga", "Philipines");
printBio.apply(user, ["San Fernando, Pampanga", "Philipines"]);
const userDescription = printUser.bind(user);
userDescription();
///////////////////////////////
