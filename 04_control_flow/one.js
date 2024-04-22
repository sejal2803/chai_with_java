//if

const isUserLoggedIn = true

if (isUserLoggedIn) {
    console.log("User Logged in successfully");
}

if (2 == '2') {
    console.log("executed");
} 
 
// difference is == and === is type checking

if (2 === '2') {
    console.log("is executed");  
}

// < , > , <=, >=, ==  , !=, === (all the comparision)


const temperature = 49

if (temperature < 50){
    console.log("temp is 49");
}
console.log("temp is more than 50");


//with else how it works


if (temperature < 50){
    console.log("temperature is 49");
} else {
    console.log("temperature is more than 50");
}


const score = 200

if (score > 34) {
    let power = "fly"
    console.log(`user power is ${power}`);
}


//shorthand notation

const balance = 1000

if (balance > 680) console.log("execute balance shorthand.");


//else if


const val = 2000
if (val < 1000) {
    console.log("value is less than 1000");
}else if (val < 2300){
    console.log("value is less than 2300");
}else if (val < 500){
    console.log("value is less than 500");
}else if (val < 400){
    console.log("value is less than 400");
}
else{
    console.log("value is less than 1300");
}


const isUserLogIn = true
const debitCard = true
const userLoginFromGoogle = true
const userLoginFromEmail = false

if (isUserLogIn && debitCard){
    console.log("registration successfully");
}

if (userLoginFromEmail || userLoginFromGoogle && debitCard){
    console.log("user logged in and registered");
}


//******************** SWITCH CASE ****************************** */

// switch(key){
//     case value:
//         break;
//         default:              // syntax for switch case in javascript
//             break;
// }
    

const month = 3

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("nothing is match");
        break;
}