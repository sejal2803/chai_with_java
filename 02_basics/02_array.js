const marvel_heros = ["thor", "Ironman", "spider"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3]);
console.log(marvel_heros[3][0]);

const marvel_heros1 = ["thor", "Ironman", "spider"]


const allHeros = marvel_heros1.concat(dc_heros)
console.log(allHeros);


const allNewHeros = [...marvel_heros1, ...dc_heros]   // this is spread operator for using join arrays , by using this we can join multiple arrays
console.log(allNewHeros);

const anotherArr = [1, 2, 3, 4, [2, 3], 4, [5, 6, [6, 7]]] 
const realAnotherArr = anotherArr.flat(3)  //
console.log(realAnotherArr); 
console.log(Array.isArray("sejal"));

console.log(Array.from("sejal")); 
console.log(Array.from({name: "sejal"})); // interesting case for interview


let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3));


