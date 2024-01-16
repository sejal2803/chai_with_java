let score = "23"
let age = "44tgd"
let num = null
let amount = undefined
let boolNum = true

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
let ageInNumber = Number(age)
let numInNumber = Number(num)
let amountInNumber = Number(amount)
let boolInNumber = Number(boolNum)


console.log(typeof valueInNumber);
console.log(valueInNumber);

console.log(typeof ageInNumber);
console.log(ageInNumber);  // it give NaN because value of age is not a number

console.log(typeof numInNumber);
console.log(numInNumber);

console.log(typeof amountInNumber);
console.log(amountInNumber);


console.log(typeof boolInNumber);
console.log(boolInNumber);




//when we do number conversion  
// "33" => 33
// "33asc" => NAN
// true => 1, false => 0



