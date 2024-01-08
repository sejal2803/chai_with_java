const accountId = 144553
var accountName = "sejal"
let accountEmail = "sejal@google.com"
accountCity = "Indore"
let accountState;

// accountId = 589494  // not allowed to change const value
accountEmail = "jain@google.com"
accountName = "jain"
accountCity = "mhow"
console.log(accountId);
console.log(accountEmail);
console.log(accountName);
console.log(accountCity);
console.table([accountEmail, accountName, accountCity, accountState]);

/*

prefer not to use var
because of issue in block scope and functional scope.
*/