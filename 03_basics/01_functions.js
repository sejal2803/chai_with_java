
function sayMyName(){
console.log("h");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
console.log("h");

}

sayMyName()


function addTwoNumbers(number1, number2){          // parameters
   console.log( number1 + number2);
}
addTwoNumbers(3, 4)           //arguments


const result = addTwoNumbers(3, 4)

console.log(result);



function subTwoNumbers(number1, number2){          // parameters
   // let result = number1 - number2
   // return result

   return number1+number2
}

const newResult = subTwoNumbers(8, 4)

console.log("result: " , newResult);


console.log("************************* function login user **********************");


function loginUserMessage(username){
   return `${username} just Logged in`
}
console.log(loginUserMessage("sejal"));
console.log(loginUserMessage());


function loginUserMessages(username){
   if (username === undefined){
      console.log("please enter your name");
      return
   }
   return `${username} just Logged in`
}
console.log(loginUserMessages("sejal"));
console.log(loginUserMessages());



function loginUserMessages1(username){
   if (!username){
      console.log("please enter your name");
      return
   }
   return `${username} just Logged in`
}
console.log(loginUserMessages1("sejal"));
console.log(loginUserMessages1());

function loginUserMessages(username = "sam"){
   if (username === undefined){
      console.log("please enter your name");
      return
   }
   return `${username} just Logged in`
}
console.log(loginUserMessages("sejal"));
console.log(loginUserMessages());
