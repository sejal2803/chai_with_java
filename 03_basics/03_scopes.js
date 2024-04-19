let a = 20
const b = 30
var c = 30


console.log(`${a}, ${b}, ${c}`);
  

//checking the scope of var, let, const

if (true) {
    let a = 21
    const b = 31
    var c = 90
}

console.log(`${a}, ${b}, ${c}`);


// Nested scopes

function one(){
    const userName = "sejal"

    function two(){                        //child function can access the property of parent function
    const websiteName = "youtube"         //but parent function cannot access the property of chlid function.

        console.log(userName);
    }
    // console.log(websiteName);
    two()
}


one()



if (true) {
    const username = "sejal jain"
    if (username === "sejal jain") {
        const websiteName = " Youtube.com"
        console.log(`${username} is active on ${websiteName}`);
    }
    // console.log(websiteName);
}

// console.log(username);



//+++++++++++++++++++++++++ interested ++++++++++++++++

console.log(addOne(5));  // it can be accessable here

function addOne(num){
   return num+1
}

addOne(5)

console.log(addTwo(6));  //it cannot be accessable before declaration

const addTwo = function(num){
    return num+2
}

addTwo(6)