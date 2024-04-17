const score = 400
console.log(score)


const balance = new Number(100)
console.log(balance)
console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(4))


const otherNumber = 290.09889

console.log(otherNumber.toPrecision(2))
console.log(otherNumber.toPrecision(1))
console.log(otherNumber.toPrecision(3))
console.log(otherNumber.toPrecision(4))


const hundreds = 1000000
const hundredsOne = 100000

console.log(hundreds.toLocaleString())
console.log(hundredsOne.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))


console.log("************************** Maths *******************************")
//+++++++++++++++++++++++++ //Maths// ++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-23))
console.log(Math.round(23.7))
console.log(Math.round(23.3))
console.log(Math.ceil(23.2))

console.log(Math.floor(23.8))
console.log(Math.min(2, 3, 8, 7, 9))
console.log(Math.max(2, 3, 8, 7, 9))
console.log((Math.random()*10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min +1)) + min);  // most important formula



