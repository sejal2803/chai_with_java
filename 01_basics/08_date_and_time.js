let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());

console.log(typeof myDate);


let myCreatedDate = new Date(2023, 0 , 24)
let newCreatedDate = new Date(2023, 0 , 24 ,4 ,6)
let CreatedDate = new Date("2023-01-24")


console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleDateString());
console.log(newCreatedDate.toLocaleString());
console.log(CreatedDate.toLocaleString());
console.log(CreatedDate);



console.log("************************** TimeStamp *******************************")

let myTimeStamp =  Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMinutes());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));





