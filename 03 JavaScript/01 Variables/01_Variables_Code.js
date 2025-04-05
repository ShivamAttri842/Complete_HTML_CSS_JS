const accountId = 144553; //const is for constant variables
let accountEmail = "shivamattri@gmail.com"; //let is for variables that are declared but not initialized
console.log(accountId);
console.log(accountEmail);


// var is not used now
// reason is issue in block scope and functonal scope

// Now what if we declare a variable without assigning its value?
let accountState;
console.log(accountState); // undefined

console.table([accountId, accountEmail, accountState]);

