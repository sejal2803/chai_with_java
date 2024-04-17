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
