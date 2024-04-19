(function chai(){
    // named IIFE
    console.log("DB CONNECTED");  // for remove the pollution of global scope we use IIFE 
})();       //when we want to write two IIFE then we have to end first IIFE with (;) semi colon.

((name) => {
    console.log(`DB CONNECTED TWO , ${name}`);
})("sejal")


