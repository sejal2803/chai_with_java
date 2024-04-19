// this keyword is used to referig current context

const user = {
    userNAme: "sejal jain",
    price: 394,

    welcomeMessage: function(){
        console.log(`${this.userNAme}, welcome to website.`);
        console.log(this);
    }

}

user.welcomeMessage()

user.userNAme = "mahima"
user.welcomeMessage()
console.log(this);

//Arrow function..


function oneForArrow(){
    let userNAme = "sejal"
    console.log(this.userNAme);        // cannot use this keyword inside function , it can use in objects.
}

oneForArrow()

const oneArrow = function(){
    let userNAme = "sejal"
    console.log(this.userNAme);  
}

oneArrow()

const oneArrowfun = () => {
    let userNAme = "sejal"
    console.log(this);  
}

oneArrowfun()

const addTwo = (num1, num2) => {
     return num1+num2
}

console.log(addTwo(18 , 2));


const addThree = (num1, num2) =>  num1+num2

console.log(addThree(1,6));

const addFour = (num1, num2) => ( num1+num2 )
console.log(addFour(4, 7));
