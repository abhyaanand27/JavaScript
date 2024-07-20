// assigning to memory
const accountId = 15265; // can't be changed 
let accountEmail = "abhya123@gmail.com";
var accountPassword = "12345";
/*
prefer not to use var
becasue of issue in block scope and functional scope
*/ 
accountCity = "Delhi";

let accountState; // undefined 

// accountId = 2; (NOT ALLOWED)
//TypeError: Assignment to constant variable.

accountEmail = "abc123@gmail.com";
accountPassword = "121212";
accountCity = "Mumbai";
// console.log(accoundId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);