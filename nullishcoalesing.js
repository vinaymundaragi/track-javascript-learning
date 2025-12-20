//a variable - defined or not defined - meaning undefined or is null
//nullish coalesing - assign vlaue of userinput when entered else,
// if it is not defined or null - assign a different value

// let message
// message = a ?? b; //if(a != null && a != undefined) ? a: b;
//message will hold the value of a if it is defined
//else will hold the value of b

// let user = 211;
// user = user ?? "Please enter a username";
// console.log(user)

let firstName = undefined;
let lastName = null;
let nickName = "Vinnu";

console.log(firstName ?? lastName ?? nickName ?? "user is not identifiable");