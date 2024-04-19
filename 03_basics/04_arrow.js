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


