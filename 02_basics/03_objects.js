// singleton
//Object.create

// object literals

const mySym = Symbol("key1")


const myObj = {
    name: "sejal",
    age: "24",
   [mySym]: "mykey1", // it is symbol
    "full name ": "sejal jain",
    location: "indore",
    email: "sejaljain@gmail.com",
    isLoggedIn: "true",
    lastLogedIn: ["monday", "thursday"]
}


const myObj1 = {
    name: "sejal",
    age: "24",
   mySym: "mykey1", // it is normal key
    "full name ": "sejal jain",
    location: "indore",
    email: "sejaljain@gmail.com",
    isLoggedIn: "true",
    lastLogedIn: ["monday", "thursday"]
}
console.log(myObj.email);
console.log(myObj["email"]);
console.log(myObj["full name "]);
console.log(myObj[mySym]);

// how to change value of object elements

myObj.email = "mahimajain@gmail.com"

console.log(myObj["email"]);

Object.freeze(myObj)
myObj.email = "mahi2834@gmail.com"
console.log(myObj["email"]);

console.log(myObj);
console.log(myObj1);

console.log("*********************** functions ******************");
myObj1.greeting = function(){
    console.log("Hello my user!!");
}

myObj1.greeting2 = function(){
    console.log(`Hello my user!!, ${this.name}`);
}

console.log(myObj1.greeting2);
console.log(myObj1.greeting2());


