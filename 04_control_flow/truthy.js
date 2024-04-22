const userEmail = "sejaljain@gmail.com"

if (userEmail) {
    console.log("Logged In");
}else{
    console.log("don't have user email");
}

// falsy values =  false, 0, -0, BigInt, 0n , "", null, undefined, Nan

// truthy values = "0", 'false', " ", [], {}, function(){}

//how check array is empty or not

const useremail = []

if (useremail.length === 0){
    console.log("array is empty");
}

//how to check empty object

const userobj = {}

if ((Object.keys(userobj)).length === 0){
    console.log("object is empty");
}
