// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt (call by value)
// 

const score = 100;
const scoreValue = 100.33;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;  //(it means undefined)

const id = Symbol('01');
const anotherId = Symbol('01');
console.log(id === anotherId);


const bigNumber = 345678998765n;

// Reference type(non-primitive) - Arrays, Objects, Functions (call by reference).

const heros = ["varun", "siddarth", "shahid"]

let myObj = {
    name: "sejal",
    age: 24
}

const myFunction = function(){
    console.log("My function");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);


//++++++++++++++++++++++++++++++++++++++++

// Stack (primitive type) - here we get copy 
// Heap (non-primitive type) - here we get reference of original value

let myName = "sejaljain"
let anotherName = myName
anotherName = "chaiorcode"

console.log(myName)

console.log(anotherName)

let userOne = {
    email: "sejaljain@gmail.com",
    name: "sejal"
}

let userTwo = userOne

userTwo.email = "sejal@gmail.com"

console.log(userOne)
console.log(userTwo)
