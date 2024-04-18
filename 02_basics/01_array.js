//array
 const myArr = [1, 4, 3, 2, 4, 3, 2, 2, 2]
 console.log(myArr[6]);


 // Array methods

 console.log("******************************* Array methods ***********************");

 const myHeroes = ["shaktiman", "thor"]
const myArr2 = new Array(1, 2, 3, 3, 4)


myArr.push(7)
myArr.push(9)
myArr.pop()
myArr.unshift(7) // it is not preferable
myArr.shift()
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(4));

const newArr = myArr.join()    // it converts array into string.
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


// slice and splice 



console.log("******************************* Array methods ***********************");


console.log("A ", myArr);


const myNewArr = myArr.slice(1, 4) // It is not manipulated original array.
console.log(myNewArr);
console.log("B ", myArr);

const myNewArr2 = myArr.splice(1, 4)    // It manipulates original array.
console.log(myNewArr2);
console.log("c ", myArr);