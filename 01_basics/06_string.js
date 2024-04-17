const name = "sejal"
const repoCount = 20

console.log(name + repoCount + "value")
console.log(`Hello my name is ${name} and repo count is ${repoCount}`) // string interpolation


const myString = new String("sejal-jain-mahi-jain-game")
console.log(myString[0])
console.log(myString.__proto__)
console.log(myString.length)
console.log(myString.toLowerCase())
console.log(myString[0].toUpperCase())
console.log(myString.charAt(4))
console.log(myString.indexOf('j'))

const newString = myString.substring(0, 5)
// const newStringAgain = myString.substring(-2, 2)
const anotherString = myString.slice(-8, 4)


console.log(newString)
// console.log(newStringAgain)

console.log(anotherString)

const newStringOne = "       sejal    jain    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://sejal.com/sejal%28jain"
const newUrl = url.replace('%28', '-')
console.log(newUrl)
console.log(url.includes('sejal'))

console.log(myString.split('-'))  //convert string into array by using split on the basis of anything like -, spaces, any letter

