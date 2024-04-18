const instaUser = Object() //singleton object
const instaUser1 = {} //literals object
console.log(instaUser1);
console.log(instaUser);

instaUser.id = 1
instaUser.name = "sejal"
instaUser.isLoggedIn = false

console.log(instaUser);


const regularUser = {
    name: "sejal",
    fullname: {
        userFullName: {
            firstname: "sejal",
            lastnamer: "jain"
        }
    }
}

console.log(regularUser.fullname.userFullName.lastnamer);


const obj1 = {
    1: "q",
    2: "d"
}


const obj2 = {
    3: "y",
    4: "r"
}

const obj6 = {
    5: "e",
    6: "f"
}

const obj3 = {obj1, obj2}

console.log(obj3);
const obj7 = Object.assign({}, obj1, obj2, obj6)

const obj4 = Object.assign({}, obj1, obj2)
const obj5 = Object.assign(obj1, obj2)


console.log(obj4);
console.log(obj5);
console.log(obj7);



const objFinal = {...obj1, ...obj2, ...obj6} //spread operator
console.log(objFinal);



const users = [
    {
        id: 1,
        name: "sejal"
    },
    {
        id: 2,
        name: "mahi"
    },
    {
        id: 3,
        name: "suvidh"
    },
    {
        id: 4,
        name: "bittu"
    }
]

console.log(users[1].email);


console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));

console.log(Object.entries(instaUser));
console.log(instaUser.hasOwnProperty("isLoggedIn"));

