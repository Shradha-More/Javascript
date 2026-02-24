const accountId = 123456
let accountEmail = "shraddha@google.com"
var accountPassword =  '123456'
accountCity = "Nashik"


// accountID = 2 // not allowed

accountEmail = "6352366"
accountPassword = "abcdef"
accountCity = "Pune"        
let accountState;

console.log(accountId);

/*
Prefer not to use 'var' because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);