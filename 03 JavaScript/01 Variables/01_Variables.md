# Variable in JS

We have three types of variable in JavaScript
- var
- let
- const

## Note: 
- Now we don't use var in JavaScript. We use let and const. Var is a function scope variable. Let and const are block scope variable. So we use let and const instead of var.
- We use let when we want to change the value of variable. We use const when we want to declare a constant. We can't change the value of constant. If we try to change the value of constant, it will throw an error.

## Example:
```js
var accountName = "Shivam Attri";
let accountEmail = "shivamattri@gmail.com";
const accountId = 144553;
```