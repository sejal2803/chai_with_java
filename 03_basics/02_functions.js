function calculateCartPrice(val1, val2, ...num1){      //it is rest operator it is making array for all the values
    return num1
}

console.log(calculateCartPrice(2, 3, 4, 5, 8, 9, 10));



const user = {
    userName: "sejal",
    price: 199
}

function handleObject(anyobject) {
    console.log(`User name is ${anyobject.userName} and price is ${anyobject.price}`);
}

handleObject(user) // we can pass object by its name

handleObject({
    userName: "sejal",
    price: 399
}) // and also pass directly without define earlier


const myNewArray = [1, 2, 3, 4, 5]

function returnSecondVal(getarray) {
   return getarray[3]
}

console.log(returnSecondVal(myNewArray));

console.log(returnSecondVal([200, 4090, 500, 600, 200, 500, 400]));
